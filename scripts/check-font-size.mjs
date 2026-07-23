import fs from 'fs/promises';
import path from 'path';

const distDir = path.resolve('dist');
const PACKAGE_LIMIT_BYTES = 75 * 1024 * 1024;

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
  const size = await getDirectorySize(distDir);

  if (size === 0) {
    throw new Error(`No package build found under ${distDir}; run npm run build:lib first.`);
  }

  if (size > PACKAGE_LIMIT_BYTES) {
    const mb = (size / (1024 * 1024)).toFixed(2);
    throw new Error(`Built package is ${mb} MB, which exceeds the ${PACKAGE_LIMIT_BYTES / (1024 * 1024)} MB limit.`);
  }

  const mb = (size / (1024 * 1024)).toFixed(2);
  console.log(`[package-size] dist: ${mb} MB (limit: ${PACKAGE_LIMIT_BYTES / (1024 * 1024)} MB).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
