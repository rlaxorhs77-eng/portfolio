import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../out/", import.meta.url));
async function walk(dir) {
  const results = await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry =>
    entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]));
  return results.flat();
}

// Static Next.js needs inline bootstrap scripts. Authorize exact build contents
// with hashes instead of allowing arbitrary inline JavaScript or eval.
const checked = [];
for (const file of (await walk(root)).filter(file => file.endsWith(".html"))) {
  let html = await readFile(file, "utf8");
  html = html.replace(/<meta data-export-csp="true"[^>]*>/g, "");
  const hashes = new Set();
  for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/i.test(script[1]) || !script[2].trim()) continue;
    hashes.add(`'sha256-${createHash("sha256").update(script[2]).digest("base64")}'`);
  }
  const policy = [
    "default-src 'self'",
    `script-src 'self' ${[...hashes].join(" ")}`.trim(),
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
    "font-src 'self' https://cdn.jsdelivr.net",
    "img-src 'self' data:",
    "connect-src 'self'",
    "frame-src https://www.youtube-nocookie.com https://www.youtube.com",
    "base-uri 'self'",
    "object-src 'none'",
    "form-action 'none'",
  ].join("; ");
  if (!/<head(?:\s[^>]*)?>/i.test(html)) throw new Error(`Missing head: ${file}`);
  html = html.replace(/<head(?:\s[^>]*)?>/i, match => `${match}<meta data-export-csp="true" http-equiv="Content-Security-Policy" content="${policy.replaceAll('"', '&quot;')}">`);
  await writeFile(file, html);
  checked.push({ page: path.relative(root, file), scriptHashes: hashes.size });
}
console.log(JSON.stringify({ contentSecurityPolicy: checked }));
