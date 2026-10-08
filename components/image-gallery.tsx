"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { ImageAsset } from "@/content/types";
import { attributionLabels, ui } from "@/content/site";
import { ExpandIcon } from "./icons";
import { AttributionTag } from "./attribution-tag";

export function ImageGallery({ images, compact = false, className = "" }: { images: readonly ImageAsset[]; compact?: boolean; className?: string }) {
  const [selected, setSelected] = useState<ImageAsset | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const captionId = useId();

  const finishClose = useCallback(() => {
    if (closeTimer.current !== null) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    dialogRef.current?.close();
  }, []);
  const close = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closeTimer.current !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { finishClose(); return; }
    dialog.classList.add("dialog-closing");
    // Keep the native modal / focus trap alive throughout its exit fade.
    closeTimer.current = setTimeout(finishClose, 200);
  }, [finishClose]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => { if (preference.matches && closeTimer.current !== null) finishClose(); };
    preference.addEventListener("change", onPreference);
    return () => {
      preference.removeEventListener("change", onPreference);
      if (closeTimer.current !== null) clearTimeout(closeTimer.current);
    };
  }, [finishClose]);

  useEffect(() => {
    const images = Array.from(galleryRef.current?.querySelectorAll<HTMLImageElement>("img") ?? []);
    const loaded = (event: Event) => (event.currentTarget as HTMLImageElement).classList.remove("image-loading");
    images.forEach((image) => {
      // Cached images and no-JS pages remain visible. Errors also clear opacity
      // so the browser's Korean alt text is never hidden by a loading class.
      if (!image.complete) image.classList.add("image-loading");
      image.addEventListener("load", loaded);
      image.addEventListener("error", loaded);
    });
    return () => images.forEach((image) => {
      image.classList.remove("image-loading");
      image.removeEventListener("load", loaded);
      image.removeEventListener("error", loaded);
    });
  }, []);

  useEffect(() => {
    if (!selected || !dialogRef.current) return;
    const dialog = dialogRef.current;
    dialog.classList.remove("dialog-closing");
    if (!dialog.open) dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [selected]);

  return (
    <>
      <div ref={galleryRef} className={`image-grid ${compact ? "image-grid-compact" : ""} ${className}`}>
        {images.map((item) => (
          <figure key={item.src} className="image-figure" data-owner={item.attribution} data-device={item.src.includes("/tablet/") ? "tablet" : item.src.includes("/watch/") ? "watch" : undefined}>
            <a href={item.src} aria-label={`${attributionLabels[item.attribution]} · ${item.caption} · ${ui.enlarge}`} onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialogRef.current?.showModal !== "function") return;
              event.preventDefault();
              triggerRef.current = event.currentTarget;
              setSelected(item);
            }}>
              <img src={item.src} width={item.width} height={item.height} alt={item.alt} loading="lazy" decoding="async" />
            </a>
            <figcaption><span className="image-caption"><AttributionTag owner={item.attribution} /><span>{item.caption}</span></span><ExpandIcon /></figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialogRef} className="image-dialog" aria-label={ui.galleryDialog} aria-describedby={selected ? captionId : undefined}
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onClose={() => {
          if (closeTimer.current !== null) clearTimeout(closeTimer.current);
          closeTimer.current = null;
          dialogRef.current?.classList.remove("dialog-closing");
          setSelected(null);
          triggerRef.current?.focus();
        }}>
        {selected && <div className="dialog-content" data-owner={selected.attribution}>
          <div className="dialog-header"><p id={captionId}><AttributionTag owner={selected.attribution} /> {selected.caption}</p><button type="button" autoFocus onClick={close}>{ui.close}</button></div>
          <img src={selected.src} width={selected.width} height={selected.height} alt={selected.alt} />
        </div>}
      </dialog>
    </>
  );
}
