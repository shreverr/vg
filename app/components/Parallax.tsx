"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: number; // -1..1 — negative = moves up faster than scroll, positive = lags
  className?: string;
};

export default function Parallax({ children, speed = -0.15, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    let inView = false;

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
    io.observe(node);

    const update = () => {
      if (!inView) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // 0 when element center is at viewport center, ±1 when far above/below
      const center = rect.top + rect.height / 2;
      const pct = (center - viewport / 2) / viewport;
      const dy = pct * speed * viewport;
      node.style.transform = `translate3d(0, ${dy.toFixed(2)}px, 0)`;
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
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
