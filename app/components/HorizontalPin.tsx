"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  panels: ReactNode[];
  heading?: ReactNode;
  eyebrow?: ReactNode;
};

export default function HorizontalPin({ panels, heading, eyebrow }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!wrap || !track) return;

    let raf = 0;

    const tick = () => {
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      // 0 when wrap top hits viewport top, 1 when wrap bottom hits viewport bottom
      const raw = -rect.top / total;
      const pct = Math.max(0, Math.min(1, raw));
      const maxX = track.scrollWidth - window.innerWidth;
      if (maxX > 0) {
        track.style.transform = `translate3d(${(-pct * maxX).toFixed(
          2
        )}px, 0, 0)`;
      }
      if (progress) progress.style.transform = `scaleX(${pct.toFixed(3)})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [panels.length]);

  return (
    <section
      ref={wrapRef}
      className="hpin-wrap relative"
      style={{ height: `${panels.length * 90}vh` }}
    >
      <div className="hpin-sticky sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 pt-24 pb-6 flex items-end justify-between gap-6">
          <div>
            {eyebrow ? <div className="mb-4">{eyebrow}</div> : null}
            {heading}
          </div>
          <div className="hidden md:block w-48">
            <div className="h-[2px] bg-[--line-strong] relative overflow-hidden rounded-full">
              <span
                ref={progressRef}
                className="absolute inset-0 origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent-soft))",
                  transform: "scaleX(0)",
                }}
              />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-widest text-fg-muted">
              Scroll to advance
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 px-6 md:px-12 will-change-transform"
          >
            {panels.map((p, i) => (
              <div
                key={i}
                className="hpin-panel shrink-0 w-[92vw] md:w-[78vw] lg:w-[72vw] h-[66vh]"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
