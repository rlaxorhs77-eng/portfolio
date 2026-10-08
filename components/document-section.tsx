import type { ReactNode } from "react";
import type { Attribution } from "@/content/types";
import { AttributionTag } from "./attribution-tag";

type Props = {
  label: { readonly english: string; readonly korean: string };
  children: ReactNode;
  hero?: boolean;
  owner?: Attribution;
  attributionLabel?: string;
};

export function DocumentSection({ label, children, hero = false, owner, attributionLabel }: Props) {
  const titleId = hero ? "hero-title" : `${label.korean}-title`;
  return <section id={label.korean} className={`document-section${hero ? " hero" : ""}`} aria-labelledby={titleId} data-owner={owner}>
    <div className="container document-grid">
      <header className="section-label" data-reveal>
        <p className="eyebrow" aria-hidden="true">{label.english}</p>
        {hero ? <p className="label-title">{label.korean}</p> : <h2 id={titleId}>{label.korean}</h2>}
        {owner && <AttributionTag owner={owner} label={attributionLabel} />}
      </header>
      <div className="section-content" data-stagger={hero ? "80" : "60"}>{children}</div>
    </div>
  </section>;
}
