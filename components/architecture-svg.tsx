// Re-laid out from the Archify source: inputs share a collector, then flow left to right.
// A junction is a shared connection, never a crossing of unrelated relationships.
const inputs = [
  { id: "contracts", y: 88, title: "나라장터", detail: "입찰 · 계약 · 낙찰", owner: "teammate", scope: "팀원 담당" },
  { id: "prices", y: 166, title: "종합쇼핑몰", detail: "품목 단가", owner: "teammate", scope: "팀원 담당" },
  { id: "rules", y: 244, title: "국세청 · 법제처", detail: "사업자 진위 · 요율 고시", owner: "teammate", scope: "팀원 담당" },
  { id: "watch", y: 386, title: "워치 생체·낙상", detail: "ML 3종: 내 담당 / 앱: 팀원 담당", owner: "self", scope: "ML 모델링" },
  { id: "cctv", y: 464, title: "CCTV PPE", detail: "안전모 착용 상태", owner: "teammate", scope: "팀원 담당" },
  { id: "gas", y: 542, title: "GasPod", detail: "산소 · CO · H₂S · 온습도", owner: "self", scope: "내 담당" },
  { id: "aed", y: 620, title: "AED-alert", detail: "제세동기 위치 · 배터리·패드 상태", owner: "self", scope: "내 담당" },
  { id: "tablet", y: 698, title: "담당관 태블릿", detail: "사진·판서 기록 / 요구정의·검수", owner: "self", scope: "내 담당" },
];
const styles = `
.arch-bg{fill:#fbfcfa}.arch-group{fill:#f0f4f1;stroke:#d4ddd6;stroke-width:1}
.arch-heading{font:600 18px 'Pretendard GOV Variable',system-ui,sans-serif;fill:#53635a}
.arch-node{fill:#fff;stroke:#aebcb2;stroke-width:1.5}.arch-self{fill:#edf5ef;stroke:#397055;stroke-width:1.6}
.arch-teammate{stroke-dasharray:5 4}.arch-title{font:650 19px 'Pretendard GOV Variable',system-ui,sans-serif;fill:#21312b}
.arch-detail{font:400 16px 'Pretendard GOV Variable',system-ui,sans-serif;fill:#56675d}
.arch-scope{font:500 15px 'Pretendard GOV Variable',system-ui,sans-serif;fill:#397055}
.arch-wire{fill:none;stroke:#718579;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.arch-junction,.arch-arrow{fill:#718579}.arch-engine{fill:#e0ece3;stroke:#397055;stroke-width:1.8}
`;

export function ArchitectureSvg() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1360 820" width="1360" height="820" className="architecture-svg" role="img" aria-labelledby="architecture-title architecture-desc">
    <title id="architecture-title">VitAlGuard 데이터 흐름과 담당 범위</title>
    <desc id="architecture-desc">왼쪽의 조달 기준 세 가지와 현장 증빙 다섯 가지가 공통 입력선으로 검증 엔진에 모입니다. 검증 결과는 관제 대시보드와 신규 PostgreSQL에 각각 전달되고 두 결과는 주간 보고서로 이어집니다. 신규 DB는 설계·검증 단계이며 라이브 전환은 대기 중입니다. 초록 테두리는 내 담당을 포함하고 회색 점선은 팀원 담당입니다.</desc>
    <style>{styles}</style>
    <defs><marker id="clean-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" className="arch-arrow" /></marker></defs>
    <rect width="1360" height="820" rx="16" className="arch-bg" />
    <text x="36" y="34" className="arch-heading">입력</text><text x="474" y="34" className="arch-heading">교차 검증</text><text x="820" y="34" className="arch-heading">운영과 기록</text><text x="1130" y="34" className="arch-heading">후속 조치</text>
    <rect x="20" y="56" width="348" height="268" rx="12" className="arch-group" />
    <text x="36" y="79" className="arch-detail">조달 데이터가 기준을 세웁니다</text>
    <rect x="20" y="354" width="348" height="422" rx="12" className="arch-group" />
    <text x="36" y="377" className="arch-detail">현장 장치·앱이 증빙을 만듭니다</text>
    {/* Collect before the engine, so no connection passes through another node. */}
    <path d="M402 120 V730 M402 430 H474" className="arch-wire" markerEnd="url(#clean-arrow)" />
    {inputs.map(node => <g key={node.id}>
      <path d={`M350 ${node.y + 32} H402`} className="arch-wire" data-source={node.id} data-target="verification" />
      <circle cx="402" cy={node.y + 32} r="3" className="arch-junction" />
      <rect x="36" y={node.y} width="314" height="64" rx="8" className={`arch-node ${node.owner === "self" ? "arch-self" : "arch-teammate"}`} />
      <text x="51" y={node.y + 25} className="arch-title">{node.title}</text>
      <text x="335" y={node.y + 23} textAnchor="end" className="arch-scope">{node.scope}</text>
      <text x="51" y={node.y + 47} className="arch-detail">{node.detail}</text>
    </g>)}
    <rect x="474" y="341" width="252" height="178" rx="12" className="arch-engine" />
    <text x="600" y="389" textAnchor="middle" className="arch-title">VitAlGuard 검증 엔진</text>
    <text x="600" y="425" textAnchor="middle" className="arch-detail">4축 교차 대조</text>
    <text x="600" y="449" textAnchor="middle" className="arch-detail">기준액 룰 엔진</text>
    <text x="600" y="486" textAnchor="middle" className="arch-scope">팀 공동</text>
    <path d="M726 387 H768 V291 H820" className="arch-wire" markerEnd="url(#clean-arrow)" data-source="verification" data-target="dashboard" />
    <path d="M726 473 H768 V573 H820" className="arch-wire" markerEnd="url(#clean-arrow)" data-source="verification" data-target="database" />
    <text x="760" y="267" className="arch-detail">검증 결과</text><text x="760" y="610" className="arch-detail">검증 기록</text>
    <rect x="820" y="228" width="230" height="126" rx="10" className="arch-node" />
    <text x="935" y="259" textAnchor="middle" className="arch-title">관제 대시보드</text>
    <text x="935" y="287" textAnchor="middle" className="arch-detail">화면·API: 팀원 담당</text>
    <text x="935" y="311" textAnchor="middle" className="arch-scope">DB 연동·판정 SQL: 내 담당</text>
    <text x="935" y="334" textAnchor="middle" className="arch-detail">Next.js · Cloud Run</text>
    <rect x="820" y="510" width="230" height="126" rx="10" className="arch-self" />
    <text x="935" y="541" textAnchor="middle" className="arch-title">PostgreSQL</text>
    <text x="935" y="568" textAnchor="middle" className="arch-detail">테이블 74 / RLS 정책 149</text>
    <text x="935" y="592" textAnchor="middle" className="arch-scope">신규 설계·검증: 내 담당</text>
    <text x="935" y="616" textAnchor="middle" className="arch-detail">라이브 전환 대기</text>
    <path d="M1050 291 H1085 V573 H1050 M1085 430 H1130" className="arch-wire" markerEnd="url(#clean-arrow)" />
    <circle cx="1085" cy="430" r="3" className="arch-junction" />
    <rect x="1130" y="372" width="210" height="116" rx="10" className="arch-node" />
    <text x="1235" y="409" textAnchor="middle" className="arch-title">주간 검증 보고서</text>
    <text x="1235" y="438" textAnchor="middle" className="arch-detail">알림과 조치</text>
    <text x="1235" y="465" textAnchor="middle" className="arch-scope">팀 공동</text>
  </svg>;
}
