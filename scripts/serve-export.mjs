import { createServer } from "node:http";
import { readFile, realpath, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const exportDirectory = path.resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const port = Number(process.env.PORT ?? 3000);
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon", ".woff2": "font/woff2" };

let root;
try { root = await realpath(exportDirectory); } catch {
  console.error("out/이 없습니다. pnpm build를 먼저 실행해 주세요.");
  process.exit(1);
}

createServer(async (req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname);
    let target = path.resolve(root, `.${pathname}`);
    if (target !== root && !target.startsWith(`${root}${path.sep}`)) throw new Error("Invalid path");
    if ((await stat(target)).isDirectory()) target = path.join(target, "index.html");
    target = await realpath(target);
    if (!target.startsWith(`${root}${path.sep}`)) throw new Error("Invalid path");
    const body = await readFile(target);
    res.writeHead(200, { "Content-Type": mime[path.extname(target)] ?? "application/octet-stream", "Content-Length": body.length, "X-Content-Type-Options": "nosniff" });
    res.end(req.method === "HEAD" ? undefined : body);
  } catch {
    const body = await readFile(path.join(root, "404.html")).catch(() => Buffer.from("찾을 수 없는 페이지입니다."));
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8", "Content-Length": body.length });
    res.end(req.method === "HEAD" ? undefined : body);
  }
}).listen(port, "localhost", () => console.log(`정적 사이트: http://localhost:${port}`));
