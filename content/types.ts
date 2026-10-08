export type Attribution = "self" | "teammate" | "team";

export type ImageAsset = Readonly<{
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  attribution: Attribution;
  attributionLabel?: string;
}>;

export type Metric = Readonly<{
  value: string;
  label: string;
}>;

export type Role = Readonly<{
  id: string;
  title: string;
  summary: string;
  scope: string;
  commitEvidence: string;
  owned: string;
  period: string;
  tags: readonly string[];
  sections: readonly Readonly<{
    title: string;
    paragraphs: readonly string[];
    result: string;
  }>[];
  paths: readonly string[];
  images: readonly ImageAsset[];
}>;

export type GalleryGroup = Readonly<{
  id: string;
  title: string;
  attribution: Attribution;
  scope: string;
  description: string;
  images: readonly ImageAsset[];
  compact?: boolean;
}>;
