import fs from 'fs/promises';
import path from 'path';

const distFontsDir = path.resolve('dist/assets/fonts');
const FONT_LIMIT_BYTES = 150 * 1024 * 1024; // 150 MB

async function getDirectorySize(target) {
  let total = 0;
  let entries = [];

  try {
    entries = await fs.readdir(target, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return 0;
    }
    throw error;
  }

  for (const entry of entries) {
    const entryPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      total += await getDirectorySize(entryPath);
    } else if (entry.isFile()) {
      const stat = await fs.stat(entryPath);
      total += stat.size;
    }
  }

  return total;
}

async function main() {
  const size = await getDirectorySize(distFontsDir);

  if (size === 0) {
    console.warn(`[font-check] No fonts found under ${distFontsDir}; skipping size check.`);
    return;
  }

  if (size > FONT_LIMIT_BYTES) {
    const mb = (size / (1024 * 1024)).toFixed(2);
    throw new Error(`dist/assets font payload is ${mb} MB, which exceeds the ${FONT_LIMIT_BYTES / (1024 * 1024)} MB limit.`);
  }

  const mb = (size / (1024 * 1024)).toFixed(2);
  console.log(`[font-check] dist/assets font payload: ${mb} MB (limit: ${FONT_LIMIT_BYTES / (1024 * 1024)} MB).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
