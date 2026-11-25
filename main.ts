// One Emoji, One Dream Vacation — make.fun entry
// The task: send exactly one emoji, the one most likely to make a
// stranger want to book the trip. This program writes that single
// emoji to /output/entry.txt and nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The pick: the diving mask. One specific dream, not any holiday —
// a slow dive in clear blue water somewhere far away, the kind of
// trip you picture for years before you book it. It reads at a
// glance as a tropical escape, feels chosen rather than the default
// beach postcard, and is instantly readable on any screen, even
// small: mask, strap and snorkel in a single glyph.
const EMOJI = "🤿";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  // The gate requires UTF-8 text of 1 to 8 characters, not only
  // whitespace, and exactly one emoji with nothing else.
  const chars = [...EMOJI];
  if (chars.length !== 1) {
    throw new Error(`expected exactly one emoji, got ${chars.length}`);
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, EMOJI, "utf8");
  // Read it back and confirm the file holds exactly the one emoji —
  // no trailing newline, no extra words — before reporting success.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== EMOJI) {
    throw new Error(`entry file mismatch: ${JSON.stringify(written)}`);
  }
  console.log(`wrote ${EMOJI} to ${OUT_PATH}`);
}

main();
