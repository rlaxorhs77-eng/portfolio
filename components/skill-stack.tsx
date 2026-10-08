"use client";

import { useState } from "react";
import { UiIcon, type IconName } from "./ui-icon";

const groups: readonly { id: string; name: string; description: string; items: readonly { icon: IconName; name: string; detail: string }[] }[] = [
  { id: "data", name: "데이터베이스", description: "신규 스키마부터 접근 권한과 검증까지", items: [
    { icon: "postgresql", name: "PostgreSQL", detail: "스키마 · 마이그레이션" },
    { icon: "database", name: "SQL / RLS", detail: "판정 로직 · 접근 제어" },
  ] },
  { id: "hardware", name: "임베디드 · IoT", description: "센서 수집, 펌웨어와 현장 장치 제작", items: [
    { icon: "espressif", name: "ESP32", detail: "펌웨어 · OTA" },
    { icon: "raspberrypi", name: "Raspberry Pi", detail: "GPIO · 경광등 제어" },
  ] },
  { id: "ml", name: "온디바이스 ML", description: "학습과 검증, 추론 모듈 전달", items: [
    { icon: "python", name: "Python", detail: "모델 학습 · 검증" },
    { icon: "swift", name: "Swift / Core ML", detail: "모델 변환 · 판정 모듈" },
    { icon: "onnx", name: "ONNX", detail: "추론 모듈 · 통합 계약" },
  ] },
  { id: "app", name: "앱 요구정의 · 검수", description: "태블릿의 사용 흐름과 실기기 동작 확인", items: [
    { icon: "kotlin", name: "Kotlin / Compose", detail: "UI·UX 계획 · 검수" },
    { icon: "android", name: "Android", detail: "실기기 검증" },
  ] },
];

export function SkillStack() {
  const [filter, setFilter] = useState("all");
  return <div className="skill-stack">
    <div className="skill-filters" role="group" aria-label="기술 분야 필터">
      {[{ id: "all", name: "전체" }, ...groups].map(group => <button type="button" key={group.id} aria-pressed={filter === group.id} onClick={() => setFilter(group.id)}>{group.name}</button>)}
    </div>
    <div className="skill-groups">
      {groups.filter(group => filter === "all" || filter === group.id).map(group => <div className="skill-group" key={group.id}>
        <div className="skill-group-heading"><h3>{group.name}</h3><p>{group.description}</p></div>
        <ul className="skill-items">{group.items.map(item => <li key={item.name}>
          <span className="skill-logo"><UiIcon name={item.icon} /></span>
          <span><strong>{item.name}</strong><small>{item.detail}</small></span>
        </li>)}</ul>
      </div>)}
    </div>
  </div>;
}
