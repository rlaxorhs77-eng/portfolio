"use client";

import { useEffect, useState } from "react";
import { UiIcon } from "./ui-icon";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    let preference: string | null = null;
    try { preference = localStorage.getItem("portfolio-theme"); } catch { /* storage can be disabled */ }
    const apply = (value: boolean) => { document.documentElement.dataset.theme = value ? "dark" : "light"; setDark(value); };
    apply(preference ? preference === "dark" : media.matches);
    const followSystem = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-theme"); } catch {}
      if (!saved) apply(media.matches);
    };
    media.addEventListener("change", followSystem);
    return () => media.removeEventListener("change", followSystem);
  }, []);
  return <button className="theme-toggle" type="button" aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"} aria-pressed={dark} onClick={() => {
    const value = !dark;
    document.documentElement.dataset.theme = value ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", value ? "dark" : "light"); } catch { /* theme still works for this visit */ }
    setDark(value);
  }}><UiIcon name={dark ? "sun" : "moon"} /></button>;
}
