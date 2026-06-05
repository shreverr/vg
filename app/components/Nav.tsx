"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[--bg]/85 border-b border-[--line]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight italic text-accent">
            VG
          </span>
          <span className="font-display text-xl tracking-tight text-fg">
            Conditioning
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-fg-muted">
          <a href="#overview" className="link hover:text-fg transition-colors">
            Overview
          </a>
          <a href="#curriculum" className="link hover:text-fg transition-colors">
            Curriculum
          </a>
          <a href="#instructors" className="link hover:text-fg transition-colors">
            Instructors
          </a>
          <a href="#reviews" className="link hover:text-fg transition-colors">
            Reviews
          </a>
          <a href="#pricing" className="link hover:text-fg transition-colors">
            Pricing
          </a>
        </nav>
        <a
          href="#pricing"
          className="text-sm inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fg text-paper hover:bg-accent transition-colors"
        >
          Enroll
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
