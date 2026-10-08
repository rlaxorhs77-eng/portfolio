"use client";

import { useEffect } from "react";

// Server HTML is the readable final state. This controller adds only transient
// classes, never React state on scroll. P4 explicitly permits passive scroll + rAF.
export function Reveal() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const added: HTMLElement[] = [];
    const delayed: HTMLElement[] = [];
    let disposed = false;
    let printing = false;
    let scrollFrame = 0;
    const countDuration = 900;
    const safetyMargin = 300;
    const countFrames = new Map<HTMLElement, number>();
    const countTimers = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
    const revealTimers = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
    const deferred = new Set<HTMLElement>();
    const counted = new Set<HTMLElement>();
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const canObserve = "IntersectionObserver" in window;

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      const step = Number(group.dataset.stagger) || 60;
      Array.from(group.children).filter((child): child is HTMLElement => child instanceof HTMLElement && child.tagName !== "DIALOG").forEach((child, index) => {
        if (!child.hasAttribute("data-reveal")) { child.setAttribute("data-reveal", ""); added.push(child); }
        child.style.setProperty("--reveal-delay", `${Math.min(index, 5) * step}ms`);
        delayed.push(child);
      });
    });
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motionAllowed = () => !preference.matches && !printing;

    const finishCount = (counter: HTMLElement) => {
      const frame = countFrames.get(counter);
      if (frame !== undefined) cancelAnimationFrame(frame);
      countFrames.delete(counter);
      const timer = countTimers.get(counter);
      if (timer !== undefined) clearTimeout(timer);
      countTimers.delete(counter);
      counter.textContent = counter.dataset.count ?? "";
      counted.add(counter);
    };
    const finishCounts = () => counters.forEach(finishCount);
    const count = (counter: HTMLElement, delay = 0) => {
      if (counted.has(counter)) return;
      // A background tab keeps the server's final value, without consuming its
      // one entrance. visibilitychange re-observes it; only the IO starts it.
      if (document.visibilityState !== "visible") return;
      counted.add(counter);
      const final = counter.dataset.count ?? "";
      const parts = /^(\d[\d,]*)(.*)$/.exec(final);
      if (!parts || !motionAllowed()) { counter.textContent = final; return; }
      const target = Number(parts[1].replaceAll(",", ""));
      // Decimal / unit / denominator are untouched; 0.971 therefore stays 0.971.
      if (target === 0) return;
      const start = performance.now() + delay;
      // Independent of rAF: even a suspended frame clock cannot leave 0 behind.
      countTimers.set(counter, setTimeout(() => finishCount(counter), delay + countDuration + safetyMargin));
      counter.textContent = `0${parts[2]}`;
      const tick = (now: number) => {
        if (!countFrames.has(counter)) return;
        if (!motionAllowed() || disposed || document.visibilityState !== "visible") { finishCount(counter); return; }
        const progress = Math.min(1, Math.max(0, (now - start) / countDuration));
        const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
        counter.textContent = `${parts[1].includes(",") ? value.toLocaleString("en-US") : value}${parts[2]}`;
        if (progress < 1) countFrames.set(counter, requestAnimationFrame(tick));
        else finishCount(counter);
      };
      countFrames.set(counter, requestAnimationFrame(tick));
    };
    let observer: IntersectionObserver | undefined;
    const settleReveal = (element: HTMLElement) => {
      const timer = revealTimers.get(element);
      if (timer !== undefined) clearTimeout(timer);
      revealTimers.delete(element);
      element.classList.add("reveal-instant");
    };
    const show = (element: HTMLElement, immediate = false) => {
      if (!immediate && document.visibilityState !== "visible") { deferred.add(element); return; }
      deferred.delete(element);
      element.classList.remove("reveal-pending");
      element.classList.add("reveal-shown");
      if (immediate) settleReveal(element);
      observer?.unobserve(element);
      const delay = immediate ? 0 : parseFloat(element.style.getPropertyValue("--reveal-delay")) || 0;
      // Longest CSS sequence: draw 600ms + border 300ms. Waiting elements are
      // readable; only an intersecting element receives an entrance animation.
      if (!immediate && !element.classList.contains("reveal-instant") && !revealTimers.has(element)) {
        revealTimers.set(element, setTimeout(() => settleReveal(element), delay + 900 + safetyMargin));
      }
      element.querySelectorAll<HTMLElement>("[data-count]").forEach((counter) => {
        if (immediate) finishCount(counter);
        else if (!counter.closest(".reveal-pending")) count(counter, delay);
      });
    };
    const showAll = () => {
      observer?.disconnect();
      deferred.clear();
      root.classList.remove("motion-enabled");
      elements.forEach((element) => show(element, true));
      finishCounts();
    };
    if (motionAllowed() && canObserve) {
      root.classList.add("motion-enabled");
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) show(entry.target as HTMLElement); });
      }, { threshold: 0, rootMargin: "0px 0px -16px 0px" });
      elements.forEach((element) => {
        // Back/forward scroll restoration must not hide already-passed content.
        if (element.getBoundingClientRect().bottom <= 0) show(element, true);
        else { element.classList.add("reveal-pending"); observer?.observe(element); }
      });
    } else showAll();

    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        Array.from(countFrames.keys()).forEach(finishCount);
        Array.from(revealTimers.keys()).forEach(settleReveal);
        return;
      }
      // Re-observation requests a fresh intersection result, so an element that
      // left the viewport while hidden never starts a count on visibility alone.
      deferred.forEach((element) => { observer?.unobserve(element); observer?.observe(element); });
      deferred.clear();
    };

    const nav = document.querySelector<HTMLElement>("[data-section-nav]");
    const links = Array.from(nav?.querySelectorAll<HTMLAnchorElement>("a[href^='#']") ?? []);
    const dotLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-section-dots] a[href^='#']"));
    const sections = links.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))));
    const indicator = nav?.querySelector<HTMLElement>(".nav-indicator");
    const progressBar = document.querySelector<HTMLElement>(".scroll-progress");
    const header = document.querySelector<HTMLElement>(".site-header");
    let active = 0;
    const markActive = (index: number) => {
      active = index;
      links.forEach((link, i) => { if (i === index) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current"); });
      dotLinks.forEach((link) => {
        if (link.hash === links[index]?.hash) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      if (!nav || !indicator || !links[index]) return;
      const bounds = nav.getBoundingClientRect();
      const item = links[index].getBoundingClientRect();
      indicator.style.transform = `translate(${item.left - bounds.left}px, ${item.bottom - bounds.top - 2}px) scaleX(${item.width})`;
      indicator.style.opacity = "1";
    };
    const readActive = () => {
      const line = (header?.getBoundingClientRect().bottom ?? 0) + window.innerHeight * 0.2;
      let current = 0;
      sections.forEach((section, i) => { if (section && section.getBoundingClientRect().top <= line) current = i; });
      markActive(current);
    };
    let navObserver: IntersectionObserver | undefined;
    const observeNavigation = () => {
      navObserver?.disconnect();
      if (canObserve) {
        const top = Math.min(window.innerHeight - 1, Math.round((header?.getBoundingClientRect().height ?? 0) + window.innerHeight * 0.2));
        const bottom = Math.max(0, window.innerHeight - top - 1);
        navObserver = new IntersectionObserver(readActive, { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 });
        sections.forEach((section) => { if (section) navObserver?.observe(section); });
      }
      readActive();
    };
    const updateProgress = () => {
      scrollFrame = 0;
      const height = Math.max(0, root.scrollHeight - window.innerHeight);
      const progress = height ? Math.min(1, Math.max(0, window.scrollY / height)) : 1;
      if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
      if (progress === 1 && links.length) markActive(links.length - 1);
      else if (!canObserve) readActive();
    };
    const onScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress); };
    const onResize = () => { observeNavigation(); updateProgress(); };
    const onPreferenceChange = () => {
      if (preference.matches) showAll();
      // Completed entrance effects are not replayed when the preference changes.
      else if (!printing) root.classList.add("motion-enabled");
      markActive(active);
      updateProgress();
    };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      let element = event.target.closest<HTMLElement>("[data-reveal]");
      while (element) { show(element, true); element = element.parentElement?.closest<HTMLElement>("[data-reveal]") ?? null; }
    };
    let printExpanded: HTMLDetailsElement[] = [];
    const beforePrint = () => {
      printing = true;
      showAll();
      printExpanded = [...document.querySelectorAll<HTMLDetailsElement>(".troubleshooting-case:not([open])")];
      printExpanded.forEach((entry) => { entry.open = true; });
    };
    const afterPrint = () => {
      printExpanded.forEach((entry) => { entry.open = false; });
      printExpanded = [];
      printing = false;
      if (!preference.matches) root.classList.add("motion-enabled");
    };
    const onHashChange = () => {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) {
        let parent: HTMLElement | null = target.closest<HTMLElement>("[data-reveal]");
        while (parent) { show(parent, true); parent = parent.parentElement?.closest<HTMLElement>("[data-reveal]") ?? null; }
      }
      readActive();
    };
    observeNavigation();
    updateProgress();
    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(onResize) : undefined;
    if (header) resizeObserver?.observe(header);
    resizeObserver?.observe(document.body);
    void document.fonts?.ready.then(() => { if (!disposed) onResize(); });
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      disposed = true;
      showAll();
      navObserver?.disconnect();
      resizeObserver?.disconnect();
      cancelAnimationFrame(scrollFrame);
      elements.forEach((element) => element.classList.remove("reveal-pending", "reveal-shown", "reveal-instant"));
      added.forEach((element) => element.removeAttribute("data-reveal"));
      delayed.forEach((element) => element.style.removeProperty("--reveal-delay"));
      links.forEach((link) => link.removeAttribute("aria-current"));
      dotLinks.forEach((link) => link.removeAttribute("aria-current"));
      indicator?.removeAttribute("style");
      progressBar?.removeAttribute("style");
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);
  return null;
}
