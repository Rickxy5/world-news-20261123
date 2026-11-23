// Entry for make.fun news-image-20261123: writes the 23 November 2026 world news front-page image to /output/entry.png.
import { chmodSync, copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
chmodSync(dest, 0o644);
if (statSync(dest).size === 0) throw new Error('empty output image');

