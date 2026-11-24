// This entry writes the answer for Funniest Autocorrect Fail to the output directory.
// It resolves the target directory from MAKEFUN_OUTPUT_DIR, falling back to /output,
// then creates that directory if needed and writes the punchline as plain text.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Autocorrect changed 'final build' to 'funeral build'. The CI pipeline now sends its condolences.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
