import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
async function walk(folder) {
  const entries = await readdir(folder, { withFileTypes: true });
  const lists = await Promise.all(entries.map((entry) => entry.isDirectory() ? walk(path.join(folder, entry.name)) : [path.join(folder, entry.name)]));
  return lists.flat();
}

const sources = (await Promise.all(["app", "components", "content"].map((dir) => walk(path.join(root, dir))))).flat();
const references = new Set();
for (const source of sources) {
  if (!/\.(tsx?|css)$/.test(source)) continue;
  for (const match of (await readFile(source, "utf8")).matchAll(/["'](\/img\/[^"']+)["']/g)) references.add(match[1]);
}
const files = new Set((await walk(path.join(root, "public/img"))).map((file) => `/${path.relative(path.join(root, "public"), file).split(path.sep).join("/")}`));
const missing = [...references].filter((ref) => !files.has(ref));
const unused = [...files].filter((file) => !references.has(file));
const publicFiles = await walk(path.join(root, "public"));
const bytes = (await Promise.all(publicFiles.map(async (file) => (await stat(file)).size))).reduce((total, size) => total + size, 0);
console.log(JSON.stringify({ referencedImages: references.size, actualImages: files.size, missing, unused, publicBytes: bytes, limitBytes: 10_000_000 }, null, 2));
if (missing.length || unused.length || bytes > 10_000_000) process.exitCode = 1;
