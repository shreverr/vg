"use client";

import { useEffect, useRef } from "react";

type Props = {
  text: string;
  scrollBoost?: number;
  className?: string;
  separator?: string;
};

export default function TextMarquee({
  text,
  scrollBoost = 0.15,
  className = "",
  separator = "✦",
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    let lastY = window.scrollY;
    let offset = 0;
    let inView = true;

    const io = new IntersectionObserver(
      (entries) => { inView = entries[0]?.isIntersecting ?? false; },
      { rootMargin: "100px 0px" }
    );
    io.observe(wrap);

    const tick = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (inView) {
        offset -= 0.6 + dy * scrollBoost;
        const half = track.scrollWidth / 2;
        if (half > 0) {
          if (offset <= -half) offset += half;
          if (offset > 0) offset -= half;
          track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [scrollBoost]);

  const tokens = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="inline-flex items-center gap-10 pr-10">
      <span>{text}</span>
      <span className="accent-tok">{separator}</span>
    </span>
  ));

  return (
    <div ref={wrapRef} className={`text-marquee ${className}`}>
      <div ref={trackRef} className="text-marquee-track">
        {tokens}
        {tokens}
      </div>
    </div>
  );
}
