"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#program", label: "Program" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#coaches", label: "Coaches" },
    { href: "#reviews", label: "Reviews" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <div className="pill-nav flex items-center justify-between h-14 md:h-16 pl-2 pr-2 md:pl-4 md:pr-2">
            {/* Logo */}
            <a href="#top" className="flex items-baseline gap-1.5 group pl-2 md:pl-3">
              <span className="font-display text-2xl tracking-tight italic" style={{ color: "var(--accent-deep)" }}>
                VG
              </span>
              <span className="font-display text-lg tracking-tight" style={{ color: "var(--ink)" }}>
                Conditioning
              </span>
            </a>

            {/* Center nav — desktop only */}
            <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--ink)" }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} className="link hover:opacity-70 transition-opacity">{l.label}</a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1.5 pr-1">
              <button
                aria-label="Search"
                className="hidden md:inline-flex w-10 h-10 rounded-full items-center justify-center transition-colors"
                style={{ color: "var(--ink)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
              </button>
              <button
                aria-label="Chat"
                className="hidden md:inline-flex w-10 h-10 rounded-full items-center justify-center transition-colors"
                style={{ color: "var(--ink)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-12.2 6.8L3 21l1.6-4.8A8 8 0 1 1 21 12z"/></svg>
              </button>

              {/* Desktop CTA */}
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Contact Us
                <span aria-hidden>→</span>
              </a>

              {/* Mobile: CTA + hamburger */}
              <a
                href="#contact"
                className="md:hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Apply
              </a>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "var(--paper-2)", color: "var(--ink)" }}
              >
                {open ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 2l10 10M12 2L2 12"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 3.5h12M1 7h12M1 10.5h12"/></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(11,17,13,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-20 left-4 right-4 rounded-3xl p-6"
            style={{ background: "var(--paper)", border: "1px solid var(--line-cream)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 rounded-xl text-base font-medium transition-colors hover:bg-[--paper-2]"
                  style={{ color: "var(--ink)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--line-cream)" }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-medium"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Apply to Cohort 07
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
