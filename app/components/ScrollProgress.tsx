"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;

    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
      node.style.transform = `scaleX(${pct})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 inset-x-0 h-[3px] z-[60] pointer-events-none origin-left"
    >
      <div
        ref={ref}
        className="h-full w-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, var(--accent), var(--gold), var(--heat))",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}
