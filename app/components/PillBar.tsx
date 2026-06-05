import type { ReactNode } from "react";

type Item = {
  ic: ReactNode;
  k: string;
  v: string;
  highlight?: boolean;
};

export default function PillBar({ items }: { items: Item[] }) {
  return (
    <div
      className="pill-card overflow-x-auto no-scrollbar"
      style={{ padding: 0 }}
    >
      <div className="flex items-stretch divide-x divide-[--line-cream] min-w-max md:min-w-0 md:w-full">
        {items.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 md:px-6 py-4 md:py-5 flex-1"
          >
            <span
              className="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full flex-shrink-0"
              style={{
                background: s.highlight ? "var(--accent)" : "var(--paper-2)",
                color: "var(--ink)",
              }}
            >
              {s.ic}
            </span>
            <div className="leading-tight">
              <div className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--ink)" }}>
                {s.k}
              </div>
              <div className="text-xs mt-0.5 whitespace-nowrap" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                {s.v}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
