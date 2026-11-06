/**
 * Genera las imágenes optimizadas de public/ a partir de ecp-assets/.
 *
 * 1. Texturas: recorta las franjas de hormigón SIN escudo de social/ecp-hero-hormigon.jpg
 *    (la imagen original tiene el escudo incrustado en el centro) y la imagen completa para la 404.
 * 2. Escudo: variantes AVIF/WebP a 340 y 680 px de ancho (máx. 340 px CSS en pantalla).
 * 3. Fotos reales: todo lo que haya en ecp-assets/fotos/*.{jpg,jpeg,png} → AVIF/WebP en varios anchos,
 *    y un manifiesto src/config/images.json con dimensiones para <ResponsiveImage>.
 *
 * Uso: npm run images
 */
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { join, parse } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'ecp-assets');
const OUT = join(ROOT, 'public');
const WIDTHS = [480, 800, 1200, 1600];

async function both(pipeline, base, { quality = 62 } = {}) {
  await pipeline
    .clone()
    .avif({ quality: quality - 12, effort: 6 })
    .toFile(`${base}.avif`);
  await pipeline.clone().webp({ quality }).toFile(`${base}.webp`);
}

async function textures() {
  await mkdir(join(OUT, 'textures'), { recursive: true });
  const concrete = join(SRC, 'social', 'ecp-hero-hormigon.jpg');
  // Franjas sin escudo ni halo (medidas sobre el original de 1300×730).
  const left = sharp(concrete).extract({ left: 0, top: 0, width: 310, height: 730 });
  const right = sharp(concrete).extract({ left: 1050, top: 0, width: 250, height: 730 });
  await both(left, join(OUT, 'textures', 'hormigon-izq'), { quality: 55 });
  await both(right, join(OUT, 'textures', 'hormigon-der'), { quality: 55 });
  // Imagen completa con escudo: solo para la 404.
  await both(sharp(concrete), join(OUT, 'textures', 'hormigon-escudo'), { quality: 60 });
}

async function shield() {
  await mkdir(join(OUT, 'brand'), { recursive: true });
  const logo = join(SRC, 'logo', 'ecp-logo.png');
  for (const w of [340, 680]) {
    const p = sharp(logo).resize({ width: Math.min(w, 668) });
    await p
      .clone()
      .avif({ quality: 60, effort: 6 })
      .toFile(join(OUT, 'brand', `ecp-escudo-${w}.avif`));
    await p
      .clone()
      .webp({ quality: 82, alphaQuality: 90 })
      .toFile(join(OUT, 'brand', `ecp-escudo-${w}.webp`));
  }
}

async function photos() {
  const dir = join(SRC, 'fotos');
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
  } catch {
    /* sin carpeta de fotos */
  }
  const manifest = {};
  await mkdir(join(OUT, 'images'), { recursive: true });
  for (const f of files) {
    const { name } = parse(f);
    const input = sharp(join(dir, f)).rotate();
    const meta = await input.metadata();
    const widths = WIDTHS.filter((w) => w <= meta.width);
    if (!widths.length) widths.push(meta.width);
    for (const w of widths)
      await both(input.clone().resize({ width: w }), join(OUT, 'images', `${name}-${w}`));
    manifest[name] = { width: meta.width, height: meta.height, widths };
  }
  await writeFile(join(ROOT, 'src', 'config', 'images.json'), JSON.stringify(manifest, null, 2) + '\n');
  return files.length;
}

await textures();
await shield();
const n = await photos();
console.log(`Imágenes generadas. Fotos procesadas: ${n}`);
