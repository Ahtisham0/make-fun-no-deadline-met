// One Line, No Deadline Met — writes a single original excuse line.
//
// The entry is one line and nothing else: a single-sentence joke that
// excuses a missed deadline, capped at 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I missed the deadline because I spent all week writing the perfect excuse for missing the deadline.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
// Write exactly the line and nothing else: no trailing newline, so the
// file holds one line of 1-200 characters and nothing after it.
writeFileSync(outPath, LINE, "utf8");
console.log(LINE);
