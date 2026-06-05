"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  quote: string;
  name: string;
  role: string;
  stars: number;
};

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="stars" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ opacity: i < n ? 1 : 0.2 }}
          aria-hidden
        >
          <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14 2 9l7-1L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const drag = useRef<{
    down: boolean;
    startX: number;
    startScroll: number;
    dragged: boolean;
  }>({ down: false, startX: 0, startScroll: 0, dragged: false });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let last = performance.now();
    const speed = 28;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused && !drag.current.down) {
        track.scrollLeft += speed * dt;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cardW = track.scrollWidth / (reviews.length * 2);
      const idx = Math.round(track.scrollLeft / cardW) % reviews.length;
      setActive(idx);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [reviews.length]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: track.scrollLeft,
      dragged: false,
    };
    track.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.dragged = true;
    track.scrollLeft = drag.current.startScroll - dx;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.down = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
  };

  const items = [...reviews, ...reviews];

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = track.scrollWidth / items.length;
    track.scrollTo({ left: cardW * i, behavior: "smooth" });
  };

  const accents = ["var(--accent)", "var(--gold)", "var(--heat)"];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex gap-6 overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ scrollBehavior: "auto" }}
      >
        {items.map((r, i) => (
          <article
            key={i}
            className="pill-card p-8 md:p-10 flex flex-col w-[88vw] sm:w-[440px] md:w-[480px] shrink-0 snap-start relative overflow-hidden"
          >
            <span
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full"
              style={{ background: accents[i % accents.length], opacity: 0.18 }}
            />
            <Stars n={r.stars} />
            <blockquote className="display text-2xl md:text-3xl leading-snug mt-6 flex-1 relative z-10" style={{ color: "var(--ink)" }}>
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <div
              className="mt-8 pt-6 flex items-center justify-between relative z-10"
              style={{ borderTop: "1px solid var(--line-cream)" }}
            >
              <div>
                <div className="text-sm font-medium" style={{ color: "var(--ink)" }}>{r.name}</div>
                <div className="text-xs mt-1" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>{r.role}</div>
              </div>
              <span className="tag tag-cream text-[10px]">Verified</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2.5">
        {reviews.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: active === i ? "40px" : "10px",
              background: active === i ? "var(--accent)" : "var(--line-strong)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
