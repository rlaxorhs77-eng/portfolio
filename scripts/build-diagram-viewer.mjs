import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const html = await readFile(path.join(root, "out/index.html"), "utf8");
const svg = html.match(/<svg\b[^>]*class="architecture-svg"[^>]*>[\s\S]*?<\/svg>/)?.[0];
if (!svg) throw new Error("Exported architecture SVG not found");
const viewer = `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>VitAlGuard 시스템 구조</title><style>
*{box-sizing:border-box}body{margin:0;background:#eef2ee;color:#21312b;font:16px/1.65 system-ui,sans-serif}header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;padding:22px 28px;background:#fff;border-bottom:1px solid #d4ddd6}h1{font-size:22px;margin:0}p{margin:6px 0;font-size:14px;color:#56675d}a{color:#30684f}nav{display:flex;gap:8px;align-items:center}button,a.download{font:inherit;padding:8px 14px;border:1px solid #c8d4cb;background:white;border-radius:8px;color:#21312b;text-decoration:none;cursor:pointer}button:hover{background:#edf5ef}:focus-visible{outline:2px solid #30684f;outline-offset:3px}main{padding:24px;overflow:auto;max-height:calc(100dvh - 145px)}#diagram{width:100%;min-width:320px;max-width:none;display:block;margin:auto}svg{display:block;width:100%;height:auto;border-radius:16px}footer{font-size:12px;padding:10px 28px;color:#56675d}@media(max-width:600px){header{padding:16px}nav{width:100%;flex-wrap:wrap}main{padding:12px;max-height:none}}
</style></head><body><header><div><h1>VitAlGuard 시스템 구조</h1><p>입력 → 교차 검증 → 운영·기록 → 후속 조치</p><a href="/#프로젝트">포트폴리오로 돌아가기</a></div><nav aria-label="구조도 크기 조절"><button id="less" aria-label="축소">−</button><output id="size" aria-live="polite">100%</output><button id="more" aria-label="확대">+</button><button id="fit">화면에 맞춤</button><a class="download" href="vitalguard-architecture.svg" download>SVG 저장</a></nav></header><main><div id="diagram">${svg}</div></main><footer>초록 테두리: 내 담당 포함 / 회색 점선: 팀원 담당 / 입력선의 점: 연결 지점. 신규 DB의 라이브 전환은 대기 중입니다.</footer><script>
let scale=1;const diagram=document.getElementById('diagram');const label=document.getElementById('size');function setScale(next){scale=Math.max(.5,Math.min(3,next));diagram.style.width=(scale*100)+'%';label.value=Math.round(scale*100)+'%'}document.getElementById('more').addEventListener('click',()=>setScale(scale+.25));document.getElementById('less').addEventListener('click',()=>setScale(scale-.25));document.getElementById('fit').addEventListener('click',()=>setScale(1));
</script></body></html>`;
for (const dir of ["public/diagrams", "out/diagrams"]) {
  await mkdir(path.join(root, dir), { recursive: true });
  await writeFile(path.join(root, dir, "vitalguard-architecture.svg"), svg);
  await writeFile(path.join(root, dir, "vitalguard-architecture.html"), viewer);
}
console.log("Inline SVG and standalone viewer are synchronized.");
