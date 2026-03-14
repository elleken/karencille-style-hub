import { resolve, dirname, basename, extname } from "node:path";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const root = process.cwd();
const assetsDir = resolve(root, "src", "assets");

const targets = [
  { file: "hero-salon.jpg", widths: [768, 1280, 1800], quality: 78 },
  { file: "cille-portrait.jpg", widths: [480, 720, 900], quality: 80 },
  { file: "product-shampoo.jpg", widths: [320, 580], quality: 78 },
  { file: "product-styling.jpg", widths: [320, 580], quality: 78 },
];

for (const target of targets) {
  const inputPath = resolve(assetsDir, target.file);
  const baseName = basename(target.file, extname(target.file));

  for (const width of target.widths) {
    const outPath = resolve(assetsDir, `${baseName}-${width}.webp`);

    await mkdir(dirname(outPath), { recursive: true });

    await sharp(inputPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: target.quality, effort: 6 })
      .toFile(outPath);

    const meta = await sharp(outPath).metadata();
    console.log(
      `optimized ${target.file} -> ${basename(outPath)} (${meta.width}x${meta.height})`,
    );
  }
}
