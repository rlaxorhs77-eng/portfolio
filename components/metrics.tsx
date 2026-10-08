import type { Metric } from "@/content/types";

export function Metrics({ items, prominent = false }: { items: readonly Metric[]; prominent?: boolean }) {
  return <dl className={`metrics ${prominent ? "metrics-prominent" : ""}`}>
    {items.map((metric) => <div key={metric.label}>
      <dt>{metric.label}</dt>
      <dd><strong className={prominent ? "count-value" : undefined}>
        {prominent ? <><span className="sr-only">{metric.value}</span><span className="count-reserve" aria-hidden="true">{metric.value}</span><span className="count-display" data-count={metric.value} aria-hidden="true">{metric.value}</span></> : metric.value}
      </strong></dd>
    </div>)}
  </dl>;
}
