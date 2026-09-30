"use client";

import { useEffect } from "react";

/**
 * Port of the design's motion layer. Elements opt in with data attributes:
 *  - data-reveal="up|right|scale" (+ data-delay ms): fade/blur in when scrolled into view
 *  - data-grow: bars inside a revealed element grow from the bottom
 *  - data-float="durationMs" (+ data-amp px): gentle infinite vertical float
 *  - data-dash: animated dashed SVG line
 * A MutationObserver picks up elements added later (route changes, tab switches).
 */
export function MotionProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobile = window.innerWidth < 760;
    const from: Record<string, string> = {
      up: "translateY(28px)",
      right: mobile ? "translateY(28px)" : "translateX(70px)",
      scale: "scale(0.94)",
    };
    const seen = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.dataset.shown = "";
          el.animate(
            [
              { opacity: 0, transform: from[el.dataset.reveal ?? "up"] ?? from.up, filter: "blur(6px)" },
              { opacity: 1, transform: "none", filter: "blur(0)" },
            ],
            {
              duration: mobile ? 600 : 900,
              delay: Number(el.dataset.delay ?? 0),
              easing: "cubic-bezier(.2,.7,.2,1)",
              fill: "backwards",
            },
          );
          el.querySelectorAll("[data-grow]").forEach((bar, i) =>
            bar.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], {
              duration: 900,
              delay: 200 + i * 70,
              easing: "cubic-bezier(.2,.7,.2,1)",
              fill: "backwards",
            }),
          );
          io.unobserve(el);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const once = (selector: string, run: (el: HTMLElement) => void) =>
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        run(el);
      });

    const scan = () => {
      once("[data-reveal]", (el) => io.observe(el));
      once("[data-float]", (el) => {
        const amp = Number(el.dataset.amp || 8) * (mobile ? 0.5 : 1);
        el.animate([{ transform: "translateY(0)" }, { transform: `translateY(${-amp}px)` }], {
          duration: Number(el.dataset.float) || 6000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        });
      });
      once("[data-dash]", (el) => {
        el.animate([{ strokeDashoffset: 24 }, { strokeDashoffset: 0 }], { duration: 900, iterations: Infinity });
      });
    };

    scan();
    let pending = 0;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = 0;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(pending);
    };
  }, []);

  return null;
}
