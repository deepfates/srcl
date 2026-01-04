import { rm, readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const rootDir = path.resolve(new URL('..', import.meta.url).pathname);
const distDir = path.join(rootDir, 'dist');
const packNames = [
  'monaspace',
  'geist-mono',
  'commit-mono',
  'departure-mono',
  'fira-code',
  'fragment-mono',
  'iosevka-term',
  'jetbrains-mono',
  'server-mono',
  'sfmono-square',
  'tx02mono',
  'atkinson-hyperlegible-mono',
  'julia-mono',
  'tt2020',
  'latin-modern-mono',
  'serious-shanns',
  'google-mono',
];

function run(command, args) {
  const result = spawnSync(command, args, { cwd: rootDir, stdio: 'inherit' });
  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(' ')}`);
  }
}

async function assertFileExists(target, message) {
  try {
    await access(target);
  } catch {
    throw new Error(message ?? `Missing expected file: ${target}`);
  }
}

async function assertFileContains(target, matcher, message) {
  const content = await readFile(target, 'utf8');
  const found = typeof matcher === 'string' ? content.includes(matcher) : matcher.test(content);
  if (!found) {
    throw new Error(message ?? `Expected ${target} to match ${matcher}`);
  }
}

async function assertFileNotContains(target, matcher, message) {
  const content = await readFile(target, 'utf8');
  const found = typeof matcher === 'string' ? content.includes(matcher) : matcher.test(content);
  if (found) {
    throw new Error(message ?? `Unexpected match ${matcher} in ${target}`);
  }
}

async function findFileByName(startDir, targetName) {
  let entries = [];

  try {
    entries = await readdir(startDir, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }

  for (const entry of entries) {
    const entryPath = path.join(startDir, entry.name);
    if (entry.isFile() && entry.name === targetName) {
      return entryPath;
    }

    if (entry.isDirectory()) {
      const found = await findFileByName(entryPath, targetName);
      if (found) {
        return found;
      }
    }
  }

  return null;
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  run('npm', ['run', 'build:lib', '--', '--emptyOutDir']);

  const baseCss = await findFileByName(distDir, 'global.css');
  if (!baseCss) {
    throw new Error('Base global.css should be emitted.');
  }
  await assertFileNotContains(baseCss, /@font-face/i, 'Base global.css must stay font-free.');

  const globalFontsCss = await findFileByName(distDir, 'global-fonts.css');
  if (!globalFontsCss) {
    throw new Error('global-fonts.css should be emitted.');
  }
  await assertFileContains(
    globalFontsCss,
    /@font-face|@import\s+"?\.\/fonts\/packs\//i,
    'global-fonts.css should reference bundled font rules.'
  );

  let fontUrlCount = 0;
  for (const pack of packNames) {
    const packPath = await findFileByName(distDir, `${pack}.css`);
    if (!packPath) {
      throw new Error(`Pack CSS missing: ${pack}`);
    }
    await assertFileContains(
      packPath,
      /@font-face|@import/i,
      `Pack CSS should declare or import font faces: ${packPath}`
    );
    const contents = await readFile(packPath, 'utf8');
    if (/url\(/i.test(contents)) {
      fontUrlCount += 1;
    }
  }

  if (fontUrlCount === 0) {
    throw new Error('Expected at least one font url within emitted packs.');
  }

  console.log(`[font-test] Verified font packs (${fontUrlCount}/${packNames.length}) emit font URLs.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
