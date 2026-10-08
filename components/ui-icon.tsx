import type { CSSProperties } from "react";

// Tabler (MIT) and Simple Icons (CC0); original paths are vendored in public.
const paths = {
  mail: "/img/icons/mail.svg", github: "/img/icons/brand-github.svg",
  arrow: "/img/icons/arrow-right.svg", external: "/img/icons/arrow-up-right.svg",
  chevron: "/img/icons/chevron-down.svg", school: "/img/icons/school.svg",
  briefcase: "/img/icons/briefcase.svg", trophy: "/img/icons/trophy.svg",
  microphone: "/img/icons/microphone.svg", database: "/img/icons/database.svg",
  cpu: "/img/icons/cpu.svg", tablet: "/img/icons/device-tablet.svg",
  activity: "/img/icons/activity.svg", check: "/img/icons/check.svg",
  link: "/img/icons/external-link.svg", youtube: "/img/icons/youtube.svg",
  postgresql: "/img/icons/postgresql.svg", python: "/img/icons/python.svg",
  espressif: "/img/icons/espressif.svg", raspberrypi: "/img/icons/raspberrypi.svg",
  onnx: "/img/icons/onnx.svg", kotlin: "/img/icons/kotlin.svg",
  android: "/img/icons/android.svg", swift: "/img/icons/swift.svg",
} as const;
export type IconName = keyof typeof paths;

export function UiIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return <span className={`ui-icon icon-${name} ${className}`} style={{ "--icon-url": `url("${paths[name]}")` } as CSSProperties} aria-hidden="true" />;
}
