const logos = [
  "Sports Authority of India",
  "Indian Olympic Association",
  "JSW Sports",
  "Reliance Foundation Athletics",
  "Inspire Institute of Sport",
  "Padukone–Dravid CoE",
  "Bengaluru FC",
  "Royal Challengers Bangalore",
  "Tata Memorial Sports Med",
  "GoSports Foundation",
];

export default function LogoMarquee() {
  return (
    <section
      className="marquee overflow-hidden relative py-8"
      style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="mx-auto max-w-[1320px] px-4 md:px-6 mb-4 flex items-end justify-between gap-6">
        <p className="eyebrow">Trusted by performance staff at</p>
        <p className="eyebrow hidden md:block">10+ partner institutions</p>
      </div>
      <div className="relative overflow-hidden no-scrollbar">
        <div className="flex gap-12 md:gap-16 w-max marquee-track whitespace-nowrap items-center">
          {[...logos, ...logos].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-12 md:gap-16">
              <span
                className="font-display text-3xl md:text-4xl italic transition-colors"
                style={{ color: "var(--fg-muted)" }}
              >
                {item}
              </span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--heat)" }}
                aria-hidden
              />
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          style={{ background: "linear-gradient(to right, var(--bg-elev), rgba(36,58,43,0))" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{ background: "linear-gradient(to left, var(--bg-elev), rgba(36,58,43,0))" }}
        />
      </div>
    </section>
  );
}
