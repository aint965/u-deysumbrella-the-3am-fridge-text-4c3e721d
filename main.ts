import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — the one line a smart fridge texts its owner at 3am.
// Fixed string: the program is fully deterministic, every run writes
// byte-identical output.
const LINE =
  "It's 3am. You ate the last slice of cake standing in the dark like it doesn't count if no one sees it. I keep the receipts. Cold.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
