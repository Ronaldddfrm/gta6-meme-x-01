// gta6-meme-x-01 entry. The program's only job is to hand POST.json to the
// grader: the post itself is the entry (the house reads it from X), so this
// file copies POST.json from the repository root into the output directory.
// It parses the file first, so a malformed POST.json fails loudly here
// instead of silently shipping a broken copy.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const raw = readFileSync(source, 'utf8');
const post: unknown = JSON.parse(raw);
if (
  typeof post !== 'object' ||
  post === null ||
  typeof (post as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}
const url = (post as { url: string }).url;
// The gate only accepts an X post address: x.com or twitter.com, /status/<digits>.
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([^/]+\/status\/\d+|i\/web\/status\/\d+)$/.test(url)) {
  console.error(`POST.json url is not an X post address: ${url}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'POST.json'));
