type Row = {
  day: string;
  slots: { time: string; tone: "lime" | "gold" | "coral" }[];
};

const defaultRows: Row[] = [
  {
    day: "Tuesdays",
    slots: [
      { time: "7:00 PM", tone: "lime" },
      { time: "8:30 PM", tone: "gold" },
    ],
  },
  {
    day: "Thursdays",
    slots: [
      { time: "7:00 PM", tone: "lime" },
      { time: "8:30 PM", tone: "gold" },
    ],
  },
  {
    day: "Sundays",
    slots: [
      { time: "10:00 AM", tone: "coral" },
      { time: "—", tone: "lime" },
    ],
  },
];

export default function ScheduleCard({
  rows = defaultRows,
  title = "Live Labs · Weekly",
}: {
  rows?: Row[];
  title?: string;
}) {
  return (
    <div className="schedule-pill">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-[10px] tracking-[0.18em] uppercase font-medium" style={{ color: "color-mix(in srgb, var(--ink) 60%, var(--paper))" }}>
          {title}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px]" style={{ color: "var(--ink)" }}>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--heat)", boxShadow: "0 0 0 3px rgba(255,107,58,0.22)" }}
          />
          Live
        </span>
      </div>
      <div>
        {rows.map((r) => (
          <div key={r.day} className="schedule-row">
            <span className="day pr-2">{r.day}</span>
            {r.slots.map((s, i) => (
              <span
                key={i}
                className={`schedule-slot ${
                  s.tone === "lime" ? "slot-lime" : s.tone === "gold" ? "slot-gold" : "slot-coral"
                }`}
              >
                {s.time}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 px-1 text-[11px]" style={{ color: "color-mix(in srgb, var(--ink) 60%, var(--paper))", borderTop: "1px solid var(--line-cream)" }}>
        IST · recorded if you miss
      </div>
    </div>
  );
}
