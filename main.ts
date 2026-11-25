// The Funniest Office Joke, Judged Head to Head
// Writes one short line about office life to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I replied-all asking everyone to stop replying all — 400 people agreed, one email at a time.";

// Runtime gate validation: the sealed scorer requires UTF-8 text of
// 1 to 200 characters, not only white space. Fail loudly instead of
// writing an entry that can never be judged.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry fails gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
