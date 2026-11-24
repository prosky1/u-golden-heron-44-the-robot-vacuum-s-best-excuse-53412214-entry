// The Robot Vacuum's Best Excuse — make.fun entry program.
//
// A robot vacuum explains, in one straight-faced line, why it left a
// corner untouched: the dust bunny living there is a paying tenant,
// and a good machine respects a lease. The program's only job is to
// put that line, exactly as written, into /output/entry.txt so the
// house judge can read it.
//
// The line is fixed at build time on purpose. Nothing is generated,
// fetched, or read from outside this file at run time: the entry is
// the text below, nothing more.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse, verbatim. 84 characters, one sentence, one line.
const EXCUSE =
  "I skipped the corner because the dust bunny there pays rent and I respect the lease.";

// The competition gate: /output/entry.txt must hold UTF-8 text of
// 1 to 140 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 140;

function checkLine(line: string): void {
  if (line.length < MIN_CHARS || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  checkLine(EXCUSE);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, EXCUSE + "\n", "utf8");

  // Runtime guard: read the file back and confirm the bytes on disk
  // are exactly the line we validated — a trailing newline is the
  // only thing the file may add. If the round-trip differs, fail
  // loudly instead of shipping a line the judge never saw.
  const onDisk = readFileSync(outPath, "utf8").replace(/\n$/, "");
  if (onDisk !== EXCUSE) {
    throw new Error(
      "round-trip mismatch: entry.txt does not match the validated line",
    );
  }
  checkLine(onDisk);

  console.log(`wrote ${EXCUSE.length} characters to ${outPath}`);
}

main();
