// Real-Life Patch Notes: The Comedy Changelog — entry program.
// Writes one patch-note line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt),
// no trailing newline, deterministic, Node 22 stdlib only.
//
// Draft v1:
//   "v2.1.3: fixed a bug where the brain replayed your most embarrassing memory at 3 a.m. with no skip button."
// Revision (final line below):
//   "your most embarrassing memory" was generic, so it was replaced with the concrete
//   "that thing you said in 2019", and "every night" was added so the bug reads as a
//   recurring nightly regression — the joke lands harder and more specifically on first read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v2.1.3: fixed a bug where the brain replayed that thing you said in 2019 every night at 3 a.m. with no skip button.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
