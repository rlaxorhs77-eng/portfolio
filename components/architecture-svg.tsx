import type { CSSProperties } from "react";

// Archify 3 SVG converted once to static JSX, not loaded or parsed at runtime.
// Node/label coordinates and all relationship paths are preserved.
// Archify / Cocoon AI MIT: public/diagrams/ARCHIFY-LICENSE.txt.
export function ArchitectureSvg() {
  return (
      <svg viewBox="0 0 1390 740" role="img" lang="ko" data-preset="classic" data-quality-profile="showcase" width="1390" height="740" data-theme="light" preserveAspectRatio="xMidYMid meet" className="architecture-svg" aria-label="조달 데이터와 현장 장치·앱이 검증 엔진을 거쳐 관제·DB·주간 보고서로 이어지는 VitAlGuard 시스템 구조" aria-describedby="architecture-legend architecture-scope">
        <title id="archify-diagram-title">{"VitAlGuard 시스템 구조 — 조달이 기준을 세우고, 현장 실측이 그 기준을 확인한다"}</title>
        <desc id="archify-diagram-description">{"앰버 실선은 내 담당, 회색 점선은 팀원 담당, 중립 실선은 팀 공동 산출물입니다. 관제의 회색 점선은 화면·API 담당을 뜻하며 신 DB 연동·판정 SQL·크론·테스트는 내 담당입니다."}</desc>
        <rect x="0" y="0" width="1390" height="740" className="archify-static-background" aria-hidden="true" />
        <defs>
          <marker id="vg-archify-arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" className="m-default" />
          </marker>
          <pattern id="vg-archify-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" className="c-grid" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vg-archify-grid)" />
        <rect data-graph-role="structural-frame" data-composition-frame-kind="region" data-composition-frame-id="0" data-composition-frame-label="축① ERP·조달 모듈 — 기준을 세운다" x="2" y="40" width="751" height="160" rx="12" className="c-region" strokeWidth="1" />
        <rect data-graph-role="structural-frame" data-composition-frame-kind="region" data-composition-frame-id="1" data-composition-frame-label="축② 산업안전 플랫폼 — 현장 물증을 만든다" x="2" y="242" width="751" height="496" rx="12" className="c-region" strokeWidth="1" />
        <path data-edge-from="vg-procurement-contracts" data-edge-to="vg-crosscheck-engine" data-edge-key="0" data-edge-id="vg-contracts-to-verification" data-composition-points="245,124;255,124;255,220;770,220;770,420;800,420" d="M 245 124 L 250 124 Q 255 124 255 129 L 255 212 Q 255 220 263 220 L 762 220 Q 770 220 770 228 L 770 412 Q 770 420 778 420 L 800 420" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-procurement-prices" data-edge-to="vg-crosscheck-engine" data-edge-key="1" data-edge-id="vg-prices-to-verification" data-composition-points="485,124;495,124;495,208;784,208;784,420;800,420" d="M 485 124 L 490 124 Q 495 124 495 129 L 495 200 Q 495 208 503 208 L 776 208 Q 784 208 784 216 L 784 412 Q 784 420 792 420 L 800 420" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-public-rules" data-edge-to="vg-crosscheck-engine" data-edge-key="2" data-edge-id="vg-rules-to-verification" data-composition-points="725,124;762.5,124;762.5,385;800,385" d="M 725 124 L 754.5 124 Q 762.5 124 762.5 132 L 762.5 377 Q 762.5 385 770.5 385 L 800 385" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-watch-fall" data-edge-to="vg-crosscheck-engine" data-edge-key="3" data-edge-id="vg-watch-to-verification" data-composition-points="330,314;565,314;565,399;800,399" d="M 330 314 L 557 314 Q 565 314 565 322 L 565 391 Q 565 399 573 399 L 800 399" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-cctv-ppe" data-edge-to="vg-crosscheck-engine" data-edge-key="4" data-edge-id="vg-cctv-to-verification" data-composition-points="525,413;800,413" d="M 525 413 L 800 413" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-gaspod-readings" data-edge-to="vg-crosscheck-engine" data-edge-key="5" data-edge-id="vg-gas-to-verification" data-composition-points="725,534;762.5,534;762.5,427;800,427" d="M 725 534 L 754.5 534 Q 762.5 534 762.5 526 L 762.5 435 Q 762.5 427 770.5 427 L 800 427" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-aed-readiness" data-edge-to="vg-crosscheck-engine" data-edge-key="6" data-edge-id="vg-aed-to-verification" data-composition-points="315,614;776,614;776,441;800,441" d="M 315 614 L 768 614 Q 776 614 776 606 L 776 449 Q 776 441 784 441 L 800 441" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-officer-tablet" data-edge-to="vg-crosscheck-engine" data-edge-key="7" data-edge-id="vg-tablet-to-verification" data-composition-points="725,674;762.5,674;762.5,455;800,455" d="M 725 674 L 754.5 674 Q 762.5 674 762.5 666 L 762.5 463 Q 762.5 455 770.5 455 L 800 455" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-crosscheck-engine" data-edge-to="vg-control-dashboard" data-edge-label="검증 결과" data-edge-key="8" data-edge-id="vg-verification-to-dashboard" data-composition-points="1030,413;1065,413;1065,220;1100,220" d="M 1030 413 L 1057 413 Q 1065 413 1065 405 L 1065 228 Q 1065 220 1073 220 L 1100 220" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-crosscheck-engine" data-edge-to="vg-evidence-database" data-edge-label="검증 기록" data-edge-key="9" data-edge-id="vg-verification-to-database" data-composition-points="1030,427;1065,427;1065,490;1100,490" d="M 1030 427 L 1057 427 Q 1065 427 1065 435 L 1065 482 Q 1065 490 1073 490 L 1100 490" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-control-dashboard" data-edge-to="vg-weekly-actions" data-edge-key="10" data-edge-id="vg-dashboard-to-actions" data-composition-points="1360,220;1384,220;1384,640;1360,640" d="M 1360 220 L 1376 220 Q 1384 220 1384 228 L 1384 632 Q 1384 640 1376 640 L 1360 640" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <path data-edge-from="vg-evidence-database" data-edge-to="vg-weekly-actions" data-edge-key="11" data-edge-id="vg-database-to-actions" data-composition-points="1230,540;1230,590" d="M 1230 540 L 1230 590" className="a-default" strokeWidth="1.5" markerEnd="url(#vg-archify-arrowhead)" pathLength="1" />
        <g id="node-vg-procurement-contracts" data-node-id="vg-procurement-contracts" data-node-label="나라장터 · 팀원 담당" data-node-kind="external" data-node-sublabel="입찰 · 계약 · 낙찰" data-node-context="축① ERP·조달 모듈 — 기준을 세운다" data-owner="teammate" className="archify-node" style={{ "--node-delay": "0ms" } as CSSProperties}>
          <title>{"나라장터 · 팀원 담당 · 입찰 · 계약 · 낙찰 · 축① ERP·조달 모듈 — 기준을 세운다"}</title>
          <rect x="30" y="68" width="215" height="112" rx="6" className="c-mask" />
          <rect x="30" y="68" width="215" height="112" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(36 74) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="137.5" y="122" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"나라장터 · 팀원 담당"}</text>
          <text data-detail="context" x="137.5" y="138" className="t-muted" fontSize="12" textAnchor="middle">{"입찰 · 계약 · 낙찰"}</text>
        </g>
        <g id="node-vg-procurement-prices" data-node-id="vg-procurement-prices" data-node-label="종합쇼핑몰 · 팀원 담당" data-node-kind="external" data-node-sublabel="품목 단가" data-node-context="축① ERP·조달 모듈 — 기준을 세운다" data-owner="teammate" className="archify-node" style={{ "--node-delay": "60ms" } as CSSProperties}>
          <title>{"종합쇼핑몰 · 팀원 담당 · 품목 단가 · 축① ERP·조달 모듈 — 기준을 세운다"}</title>
          <rect x="270" y="68" width="215" height="112" rx="6" className="c-mask" />
          <rect x="270" y="68" width="215" height="112" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(276 74) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="377.5" y="122" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"종합쇼핑몰 · 팀원 담당"}</text>
          <text data-detail="context" x="377.5" y="138" className="t-muted" fontSize="12" textAnchor="middle">{"품목 단가"}</text>
        </g>
        <g id="node-vg-public-rules" data-node-id="vg-public-rules" data-node-label="국세청 · 법제처 · 팀원 담당" data-node-kind="external" data-node-sublabel="사업자 진위 · 요율 고시" data-node-context="축① ERP·조달 모듈 — 기준을 세운다" data-owner="teammate" className="archify-node" style={{ "--node-delay": "120ms" } as CSSProperties}>
          <title>{"국세청 · 법제처 · 팀원 담당 · 사업자 진위 · 요율 고시 · 축① ERP·조달 모듈 — 기준을 세운다"}</title>
          <rect x="510" y="68" width="215" height="112" rx="6" className="c-mask" />
          <rect x="510" y="68" width="215" height="112" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(516 74) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="617.5" y="122" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"국세청 · 법제처 · 팀원 담당"}</text>
          <text data-detail="context" x="617.5" y="138" className="t-muted" fontSize="12" textAnchor="middle">{"사업자 진위 · 요율 고시"}</text>
        </g>
        <g id="node-vg-watch-fall" data-node-id="vg-watch-fall" data-node-label="Apple Watch 생체·낙상 (ML 모델링: 내 담당)" data-node-kind="external" data-node-sublabel="온디바이스 ML 3종 · 앱: 팀원 담당" data-node-context="축② 산업안전 플랫폼 — 현장 물증을 만든다" data-owner="self" className="archify-node" style={{ "--node-delay": "180ms" } as CSSProperties}>
          <title>{"Apple Watch 생체·낙상 (ML 모델링: 내 담당) · 온디바이스 ML 3종 · 앱: 팀원 담당 · 축② 산업안전 플랫폼 — 현장 물증을 만든다"}</title>
          <rect x="30" y="270" width="300" height="88" rx="6" className="c-mask" />
          <rect x="30" y="270" width="300" height="88" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(36 276) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="180" y="312" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"Apple Watch 생체·낙상 (ML 모델링: 내 담당)"}</text>
          <text data-detail="context" x="180" y="328" className="t-muted" fontSize="12" textAnchor="middle">{"온디바이스 ML 3종 · 앱: 팀원 담당"}</text>
        </g>
        <g id="node-vg-cctv-ppe" data-node-id="vg-cctv-ppe" data-node-label="CCTV + AI · 팀원 담당" data-node-kind="external" data-node-sublabel="안전모 착용 판정 · 엣지" data-node-context="축② 산업안전 플랫폼 — 현장 물증을 만든다" data-owner="teammate" className="archify-node" style={{ "--node-delay": "240ms" } as CSSProperties}>
          <title>{"CCTV + AI · 팀원 담당 · 안전모 착용 판정 · 엣지 · 축② 산업안전 플랫폼 — 현장 물증을 만든다"}</title>
          <rect x="355" y="370" width="170" height="88" rx="6" className="c-mask" />
          <rect x="355" y="370" width="170" height="88" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(361 376) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="440" y="412" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"CCTV + AI · 팀원 담당"}</text>
          <text data-detail="context" x="440" y="428" className="t-muted" fontSize="12" textAnchor="middle">{"안전모 착용 판정 · 엣지"}</text>
        </g>
        <g id="node-vg-gaspod-readings" data-node-id="vg-gaspod-readings" data-node-label="GasPod · 내 담당" data-node-kind="external" data-node-sublabel="O₂ · CO · H₂S · 온습도" data-node-context="축② 산업안전 플랫폼 — 현장 물증을 만든다" data-owner="self" className="archify-node" style={{ "--node-delay": "300ms" } as CSSProperties}>
          <title>{"GasPod · 내 담당 · O₂ · CO · H₂S · 온습도 · 축② 산업안전 플랫폼 — 현장 물증을 만든다"}</title>
          <rect x="550" y="490" width="175" height="88" rx="6" className="c-mask" />
          <rect x="550" y="490" width="175" height="88" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(556 496) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="637.5" y="532" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"GasPod · 내 담당"}</text>
          <text data-detail="context" x="637.5" y="548" className="t-muted" fontSize="12" textAnchor="middle">{"O₂ · CO · H₂S · 온습도"}</text>
        </g>
        <g id="node-vg-aed-readiness" data-node-id="vg-aed-readiness" data-node-label="AED-alert · 내 담당" data-node-kind="external" data-node-sublabel="구급장비 준비상태" data-node-context="축② 산업안전 플랫폼 — 현장 물증을 만든다" data-owner="self" className="archify-node" style={{ "--node-delay": "300ms" } as CSSProperties}>
          <title>{"AED-alert · 내 담당 · 구급장비 준비상태 · 축② 산업안전 플랫폼 — 현장 물증을 만든다"}</title>
          <rect x="100" y="558" width="215" height="112" rx="6" className="c-mask" />
          <rect x="100" y="558" width="215" height="112" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(106 564) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="207.5" y="612" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"AED-alert · 내 담당"}</text>
          <text data-detail="context" x="207.5" y="628" className="t-muted" fontSize="12" textAnchor="middle">{"구급장비 준비상태"}</text>
        </g>
        <g id="node-vg-officer-tablet" data-node-id="vg-officer-tablet" data-node-label="담당관 태블릿 앱 · 내 담당" data-node-kind="frontend" data-node-sublabel="현장 사진·판서 기록 전송 · 요구정의·UI/UX 계획·검수·실기기 검증" data-node-context="축② 산업안전 플랫폼 — 현장 물증을 만든다" data-owner="self" className="archify-node" style={{ "--node-delay": "300ms" } as CSSProperties}>
          <title>{"담당관 태블릿 앱 · 내 담당 · 현장 사진·판서 기록 전송 · 요구정의·UI/UX 계획·검수·실기기 검증 · 축② 산업안전 플랫폼 — 현장 물증을 만든다"}</title>
          <rect x="355" y="630" width="370" height="88" rx="6" className="c-mask" />
          <rect x="355" y="630" width="370" height="88" rx="6" className="c-frontend archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="frontend" className="semantic-sigil s-frontend" transform="translate(361 636) scale(0.6875)">
            <rect x="2" y="3" width="12" height="10" rx="2" />
            <path d="M2 6.5h12" />
            <circle cx="4.1" cy="4.8" r=".7" className="sigil-fill" />
            <circle cx="6.3" cy="4.8" r=".7" className="sigil-fill" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="540" y="672" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"담당관 태블릿 앱 · 내 담당"}</text>
          <text data-detail="context" x="540" y="688" className="t-muted" fontSize="12" textAnchor="middle">{"현장 사진·판서 기록 전송 · 요구정의·UI/UX 계획·검수·실기기 검증"}</text>
        </g>
        <g id="node-vg-crosscheck-engine" data-node-id="vg-crosscheck-engine" data-node-label="VitAlGuard 검증 엔진 · 팀 공동" data-node-kind="backend" data-node-sublabel="4축 교차대조 · 기준액 룰엔진" data-node-context="시스템 구성요소" data-owner="team" className="archify-node" style={{ "--node-delay": "300ms" } as CSSProperties}>
          <title>{"VitAlGuard 검증 엔진 · 팀 공동 · 4축 교차대조 · 기준액 룰엔진 · 시스템 구성요소"}</title>
          <rect x="800" y="335" width="230" height="170" rx="6" className="c-mask" />
          <rect x="800" y="335" width="230" height="170" rx="6" className="c-backend archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="backend" className="semantic-sigil s-backend" transform="translate(806 341) scale(0.6875)">
            <path d="M6 3 3 8l3 5M10 3l3 5-3 5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="915" y="418" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"VitAlGuard 검증 엔진 · 팀 공동"}</text>
          <text data-detail="context" x="915" y="434" className="t-muted" fontSize="12" textAnchor="middle">{"4축 교차대조 · 기준액 룰엔진"}</text>
        </g>
        <g id="node-vg-control-dashboard" data-node-id="vg-control-dashboard" data-node-label="관제 대시보드 · 팀원 담당(화면·API) · 내 담당(DB 연동)" data-node-kind="frontend" data-node-sublabel="Next.js · Cloud Run" data-node-context="시스템 구성요소" data-owner="teammate" className="archify-node" style={{ "--node-delay": "300ms" } as CSSProperties}>
          <title>{"관제 대시보드 · 팀원 담당(화면·API) · 내 담당(DB 연동·판정 SQL·크론·테스트) · Next.js · Cloud Run · 시스템 구성요소"}</title>
          <rect x="1100" y="170" width="260" height="100" rx="6" className="c-mask" />
          <rect x="1100" y="170" width="260" height="100" rx="6" className="c-frontend archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="frontend" className="semantic-sigil s-frontend" transform="translate(1106 176) scale(0.6875)">
            <rect x="2" y="3" width="12" height="10" rx="2" />
            <path d="M2 6.5h12" />
            <circle cx="4.1" cy="4.8" r=".7" className="sigil-fill" />
            <circle cx="6.3" cy="4.8" r=".7" className="sigil-fill" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="1230" y="218" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"관제 대시보드"}</text>
          <text data-detail="context" x="1230" y="234" className="t-muted" fontSize="12" textAnchor="middle"><tspan x="1230">{"팀원 담당(화면·API)"}</tspan><tspan x="1230" dy="16">{"내 담당(DB 연동)"}</tspan></text>
        </g>
        <g id="node-vg-evidence-database" data-node-id="vg-evidence-database" data-node-label="PostgreSQL VITALGUARD2 · 내 담당" data-node-kind="database" data-node-sublabel="표 74 · RLS 149 · 트리거 146" data-node-context="시스템 구성요소" data-owner="self" className="archify-node" style={{ "--node-delay": "300ms" } as CSSProperties}>
          <title>{"PostgreSQL VITALGUARD2 · 내 담당 · 표 74 · RLS 149 · 트리거 146 · 시스템 구성요소"}</title>
          <rect x="1100" y="440" width="260" height="100" rx="6" className="c-mask" />
          <rect x="1100" y="440" width="260" height="100" rx="6" className="c-database archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="database" className="semantic-sigil s-database" transform="translate(1106 446) scale(0.6875)">
            <ellipse cx="8" cy="4" rx="5" ry="2" />
            <path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4M3 8c0 1.1 2.2 2 5 2s5-.9 5-2" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="1230" y="488" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"PostgreSQL VITALGUARD2 · 내 담당"}</text>
          <text data-detail="context" x="1230" y="504" className="t-muted" fontSize="12" textAnchor="middle">{"표 74 · RLS 149 · 트리거 146"}</text>
        </g>
        <g id="node-vg-weekly-actions" data-node-id="vg-weekly-actions" data-node-label="주간 검증 보고서 · 팀 공동" data-node-kind="external" data-node-sublabel="알림 · 조치" data-node-context="시스템 구성요소" data-owner="team" className="archify-node" style={{ "--node-delay": "300ms" } as CSSProperties}>
          <title>{"주간 검증 보고서 · 팀 공동 · 알림 · 조치 · 시스템 구성요소"}</title>
          <rect x="1100" y="590" width="260" height="100" rx="6" className="c-mask" />
          <rect x="1100" y="590" width="260" height="100" rx="6" className="c-external archify-node-shape" strokeWidth="1.5" />
          <g aria-hidden="true" data-semantic-sigil="external" className="semantic-sigil s-external" transform="translate(1106 596) scale(0.6875)">
            <rect x="2.5" y="5" width="8.5" height="8" rx="1.5" />
            <path d="M8 2.5h5.5V8M13.5 2.5 7.5 8.5" />
          </g>
          <text data-node-label="" data-detail-anchor="" x="1230" y="638" className="t-primary" fontSize="12" fontWeight="600" textAnchor="middle">{"주간 검증 보고서 · 팀 공동"}</text>
          <text data-detail="context" x="1230" y="654" className="t-muted" fontSize="12" textAnchor="middle">{"알림 · 조치"}</text>
        </g>
        <g data-detail="context" data-edge-from="vg-crosscheck-engine" data-edge-to="vg-control-dashboard" data-edge-label="검증 결과" data-edge-key="8" data-edge-id="vg-verification-to-dashboard">
          <rect x="1038.4" y="296.5" width="53.199999999999996" height="14" rx="3" className="c-mask" />
          <text x="1065" y="306.5" className="t-muted" fontSize="12" textAnchor="middle">{"검증 결과"}</text>
        </g>
        <g data-detail="context" data-edge-from="vg-crosscheck-engine" data-edge-to="vg-evidence-database" data-edge-label="검증 기록" data-edge-key="9" data-edge-id="vg-verification-to-database">
          <rect x="1038.4" y="438.5" width="53.199999999999996" height="14" rx="3" className="c-mask" />
          <text x="1065" y="448.5" className="t-muted" fontSize="12" textAnchor="middle">{"검증 기록"}</text>
        </g>
        <g data-graph-role="structural-frame-label" data-composition-frame-id="0" data-composition-frame-kind="region" data-composition-frame-label="축① ERP·조달 모듈 — 기준을 세운다">
          <rect data-graph-role="structural-frame-label-mask" x="6" y="48" width="188.2" height="16" rx="3" className="c-mask" />
          <text data-boundary-label="" x="10" y="61" className="t-cloud" fontSize="12" fontWeight="600">{"축① ERP·조달 모듈 — 기준을 세운다"}</text>
        </g>
        <g data-graph-role="structural-frame-label" data-composition-frame-id="1" data-composition-frame-kind="region" data-composition-frame-label="축② 산업안전 플랫폼 — 현장 물증을 만든다">
          <rect data-graph-role="structural-frame-label-mask" x="6" y="250" width="226" height="16" rx="3" className="c-mask" />
          <text data-boundary-label="" x="10" y="263" className="t-cloud" fontSize="12" fontWeight="600">{"축② 산업안전 플랫폼 — 현장 물증을 만든다"}</text>
        </g>
      </svg>
  );
}
