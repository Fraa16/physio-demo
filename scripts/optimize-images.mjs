import sharp from "sharp";
import { existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = process.env.PHOTO_SRC ||
  "/tmp/claude-0/-home-user-physio-demo/c546d35b-d74b-5bd6-8713-3eeebcab8b0d/scratchpad/src-photos";
const OUT = join(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

// Team portraits: consistent 3:4 crop, face-biased.
const portraits = [
  { file: "Matteo Brandt.jpg", slug: "matteo-brandt" },
  { file: "Sophia Lindner.jpg", slug: "sophia-lindner" },
  { file: "Julia Ahrens.jpg", slug: "julia-ahrens" },
  { file: "Tom Winkler.jpg", slug: "tom-winkler" },
  { file: "Elena Rossi.jpg", slug: "elena-rossi" },
];

// Editorial photos: keep natural ratio, CSS boxes crop at use site.
const editorial = [
  { file: "nightingale-home-nurse-4e017fuMeXE-unsplash.jpg", slug: "clinic-room" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860578.jpg", slug: "therapy-neck" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860582.jpg", slug: "mobility-leg-raise" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860585.jpg", slug: "assessment-standing" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860588.jpg", slug: "mobility-hamstring" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860593.jpg", slug: "posture-back" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860594.jpg", slug: "athletic-swing" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860597.jpg", slug: "therapy-knee" },
  { file: "pexels-funkcines-terapijos-centras-927573878-20860624.jpg", slug: "training-core" },
  { file: "pexels-karola-g-4506071.jpg", slug: "therapy-foot" },
  { file: "pexels-karola-g-4506074.jpg", slug: "mobility-overhead" },
  { file: "pexels-karola-g-4506167.jpg", slug: "therapy-shoulder" },
  { file: "pexels-karola-g-4506216.jpg", slug: "osteo-neck" },
  { file: "pexels-karola-g-5206919.jpg", slug: "hands-care" },
  { file: "sincerely-media-CexT3n-04iw-unsplash.jpg", slug: "wrist-assessment" },
  { file: "sincerely-media-mvHuY-t4QII-unsplash.jpg", slug: "resistance-band" },
  { file: "sincerely-media-wGFibXDQlBI-unsplash.jpg", slug: "shoulder-close" },
  { file: "yury-kirillov-pbUWW-CBoqY-unsplash.jpg", slug: "knee-treatment" },
];

async function run() {
  for (const p of portraits) {
    const input = join(SRC, p.file);
    if (!existsSync(input)) { console.warn("missing", p.file); continue; }
    await sharp(input)
      .resize(900, 1200, { fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: 78 })
      .toFile(join(OUT, `${p.slug}-900.webp`));
    await sharp(input)
      .resize(450, 600, { fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: 74 })
      .toFile(join(OUT, `${p.slug}-450.webp`));
    console.log("portrait", p.slug);
  }

  for (const e of editorial) {
    const input = join(SRC, e.file);
    if (!existsSync(input)) { console.warn("missing", e.file); continue; }
    const meta = await sharp(input).metadata();
    const landscape = meta.width >= meta.height;
    const bigW = landscape ? 1600 : 1100;
    const smW = landscape ? 800 : 560;
    await sharp(input).resize(bigW, null, { withoutEnlargement: true }).webp({ quality: 76 }).toFile(join(OUT, `${e.slug}-lg.webp`));
    await sharp(input).resize(smW, null, { withoutEnlargement: true }).webp({ quality: 72 }).toFile(join(OUT, `${e.slug}-sm.webp`));
    console.log("editorial", e.slug, `${meta.width}x${meta.height}`);
  }
}

run().then(() => console.log("done"));
