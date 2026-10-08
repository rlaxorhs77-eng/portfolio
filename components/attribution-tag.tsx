import { attributionLabels } from "@/content/site";
import type { Attribution } from "@/content/types";

export function AttributionTag({ owner, label }: { owner: Attribution; label?: string }) {
  return <span className="attribution-tag" data-owner={owner}>{label ?? attributionLabels[owner]}</span>;
}
