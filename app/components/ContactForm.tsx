"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pill-card p-12 md:p-16 text-center">
        <div className="display text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>
          Thanks — we&rsquo;ll be in touch.
        </div>
        <p className="max-w-md mx-auto" style={{ color: "color-mix(in srgb, var(--ink) 65%, var(--paper))" }}>
          A coach from the admissions team will reach out within two business
          days with next steps and a cohort syllabus.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="pill-card p-8 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
        <div>
          <label className="eyebrow on-cream block">First name</label>
          <input className="field" type="text" placeholder="Aanya" required />
        </div>
        <div>
          <label className="eyebrow on-cream block">Last name</label>
          <input className="field" type="text" placeholder="Kapoor" required />
        </div>
        <div className="md:col-span-2">
          <label className="eyebrow on-cream block">Email</label>
          <input className="field" type="email" placeholder="you@academy.in" required />
        </div>
        <div className="md:col-span-2">
          <label className="eyebrow on-cream block">Current role</label>
          <input className="field" type="text" placeholder="Asst. Strength Coach, ISL academy" />
        </div>
        <div className="md:col-span-2">
          <label className="eyebrow on-cream block">
            What do you want to get out of VG?
          </label>
          <textarea
            className="field resize-none"
            rows={3}
            placeholder="Sitting for the CSCS in October. Want a study cadence I can keep with a full coaching load."
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-xs max-w-xs leading-relaxed" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
          We read every application. Cohort 07 caps at 60 — applications close
          when seats are filled.
        </p>
        <button type="submit" className="btn-pill-dark">
          Submit application
          <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
