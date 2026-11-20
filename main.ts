// news-image-20261120 entry: copies the front-page image that sits beside
// this file into the grader's output directory, byte for byte.
// Node 22, standard library only; no network access.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The image lives next to this program; the grader reads it from the
// directory named by MAKEFUN_OUTPUT_DIR ("/output" inside its container).
const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

if (!existsSync(sourceImage)) {
  throw new Error(`missing entry image: ${sourceImage}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(sourceImage, join(outDir, "entry.png"));
