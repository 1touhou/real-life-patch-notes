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

// Defensive gate: the competition requires the entry to be 1-160 chars.
// Fail loudly instead of silently submitting an out-of-range line.
if (LINE.length === 0 || LINE.length > 160) {
  console.error(`entry line must be 1-160 chars, got ${LINE.length}`);
  process.exit(1);
}

const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir =
  rawOutDir !== undefined && rawOutDir.trim() !== "" ? rawOutDir : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
