import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import MagneticButton from "./components/MagneticButton";
import ContactForm from "./components/ContactForm";

const learn = [
  "Decode the exam blueprint — every domain, every weighting, every question type.",
  "Coach the Big 4 lifts to platform-grade technique under fatigue.",
  "Periodize a full season for a team sport with realistic constraints.",
  "Read and apply the latest NSCA position stands.",
  "Build force-velocity profiles from field tests you can actually run.",
  "Design return-to-play protocols you can defend in a sports-med meeting.",
  "Pass the practical section the first time — with a coach watching reps.",
  "Walk into the test with a study plan you actually finished.",
];

const modules = [
  {
    no: "01",
    title: "Exercise Science Foundations",
    weeks: "Weeks 1–2",
    lessons: [
      { t: "Bioenergetics for coaches", d: "42m", type: "video" },
      { t: "Endocrine response under load", d: "38m", type: "video" },
      { t: "Cardiopulmonary system review", d: "29m", type: "video" },
      { t: "Lab: Energy system audit of your sport", d: "60m", type: "lab" },
      { t: "Module quiz", d: "20 q", type: "quiz" },
    ],
  },
  {
    no: "02",
    title: "Biomechanics & Anatomy",
    weeks: "Weeks 2–3",
    lessons: [
      { t: "Lever systems in the weight room", d: "36m", type: "video" },
      { t: "Force-velocity, in practice", d: "44m", type: "video" },
      { t: "Joint mechanics by lift", d: "51m", type: "video" },
      { t: "Lab: Video breakdown of three lifts", d: "75m", type: "lab" },
    ],
  },
  {
    no: "03",
    title: "Exercise Technique",
    weeks: "Weeks 3–5",
    lessons: [
      { t: "Coaching cues that actually work", d: "48m", type: "video" },
      { t: "Spotting & loading platform safety", d: "33m", type: "video" },
      { t: "Practical: Coach the squat", d: "90m", type: "lab" },
      { t: "Practical: Coach the clean", d: "90m", type: "lab" },
      { t: "Module quiz", d: "25 q", type: "quiz" },
    ],
  },
  {
    no: "04",
    title: "Program Design",
    weeks: "Weeks 5–7",
    lessons: [
      { t: "Periodization models, compared", d: "55m", type: "video" },
      { t: "Loading parameters for adaptation", d: "41m", type: "video" },
      { t: "Sport-specific block templates", d: "47m", type: "video" },
      { t: "Lab: Build a full off-season block", d: "120m", type: "lab" },
    ],
  },
];

const instructors = [
  {
    name: "Arjun Iyer",
    title: "Lead Instructor · Director of Performance",
    creds: "MS · CSCS, RSCC*D · 14 yrs national-team S&C",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Priya Anand",
    title: "Curriculum Lead · Sports Scientist",
    creds: "PhD Biomechanics · CSCS · SAI consultant",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rohan Mehta",
    title: "Practical Lab Coach",
    creds: "MS · CSCS · 9 yrs IPL & ISL franchise S&C",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
  },
];

const reviews = [
  {
    quote:
      "I'd failed the CSCS twice studying alone. The Tuesday labs were the first time someone actually coached me through the practical sections, rep by rep.",
    name: "Aanya Kapoor",
    role: "Asst. S&C, Pro Kabaddi franchise",
    stars: 5,
  },
  {
    quote:
      "Best continuing education I've paid for. Twelve weeks, a real coach, a real cohort. I'd send every assistant on my staff through it.",
    name: "Karthik Menon",
    role: "Head S&C, ISL academy",
    stars: 5,
  },
  {
    quote:
      "The program design module alone was worth the price. Walked away with a template I still use with my U-19 cricket squad.",
    name: "Kavya Reddy",
    role: "Strength Coach, state cricket assoc.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Who is this program for?",
    a: "Strength and conditioning coaches who plan to sit for the NSCA CSCS exam within 6 months. Assistants, head coaches, sport-specific coaches, and physios returning to programming all do well here.",
  },
  {
    q: "How is this different from buying a study guide?",
    a: "You get live coaching twice a week, a 60-person cohort moving with you, and a lead coach who reviews your practical work and gives notes. It's the difference between watching film and being coached.",
  },
  {
    q: "What is the time commitment?",
    a: "Plan on 6–8 hours per week. Two 90-minute live labs, a recorded lecture or two, weekly readings, and one applied assignment. Sessions are recorded if you miss them.",
  },
  {
    q: "What's the refund policy?",
    a: "Full refund within the first 14 days, no questions. After that, prorated through week 6. We've never had to use it past that.",
  },
  {
    q: "Does this guarantee I'll pass?",
    a: "No serious program does. What we guarantee: 94% of our last four cohorts passed on first attempt versus a 56% national average. If you don't pass, you get the next cohort free.",
  },
];

const IMG = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  preview: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=1600&q=80",
  classroom: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
};

// ─── icons ───
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);
const IconPlay = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6 4l14 8-14 8V4z" />
  </svg>
);
const IconBook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4h11a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z" /><path d="M4 16h15" />
  </svg>
);
const IconCert = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 21l5-2 5 2-1.5-7.5" />
  </svg>
);
const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="9" cy="8" r="3.5" /><path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6" /><circle cx="17" cy="8" r="3" /><path d="M16 14.5c3.5.3 6 2.6 6 6.5" />
  </svg>
);
const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 12l5 5L20 6" />
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14 2 9l7-1L12 2z" />
  </svg>
);
const IconLab = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3" /><path d="M9 3h6" />
  </svg>
);
const IconQuiz = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1.4-1.5 2.5" /><circle cx="12" cy="17.5" r="0.6" fill="currentColor" />
  </svg>
);

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="stars" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ opacity: i < n ? 1 : 0.2 }}>
          <IconStar />
        </span>
      ))}
    </span>
  );
}

const lessonIcon: Record<string, React.ReactNode> = {
  video: <IconPlay />,
  lab: <IconLab />,
  quiz: <IconQuiz />,
};

export default function Home() {
  const totalLessons = modules.reduce((n, m) => n + m.lessons.length, 0);

  return (
    <div id="top" className="relative bg-bg text-fg overflow-hidden">
      <Nav />

      {/* ───────────────────────────── HERO ───────────────────────────── */}
      <section className="relative pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="grain" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* LEFT: course meta + headline + CTA */}
            <div className="md:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="chip">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    New cohort · July 2026
                  </span>
                  <span className="chip">NSCA-aligned</span>
                  <span className="chip">Cohort-based</span>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="display mt-7 text-[clamp(2.5rem,7vw,6rem)] tracking-tight">
                  The CSCS Prep
                  <br />
                  <em>Program.</em>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 text-lg text-fg-muted max-w-xl leading-relaxed">
                  A 12-week, coach-led program that prepares strength
                  professionals for the NSCA Certified Strength and
                  Conditioning Specialist exam — through live labs, applied
                  cases, and a 60-person cohort.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex items-center gap-4 flex-wrap text-sm">
                  <div className="flex items-center gap-2">
                    <Stars n={5} />
                    <span className="font-medium">4.9</span>
                    <span className="text-fg-muted">(1,247 reviews)</span>
                  </div>
                  <span className="text-fg-faint">·</span>
                  <span className="text-fg-muted">
                    <strong className="text-fg">1,247</strong> coaches enrolled
                  </span>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <MagneticButton href="#pricing">
                    Enroll in Cohort 07
                    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </MagneticButton>
                  <a href="#curriculum" className="btn-ghost">
                    See the curriculum
                    <span aria-hidden>↓</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={500}>
                <div className="mt-10 flex items-center gap-3 text-xs text-fg-muted">
                  <span className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80",
                      "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=80&q=80",
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="w-7 h-7 rounded-full border-2 border-bg object-cover"
                      />
                    ))}
                  </span>
                  47 coaches enrolled in the last 7 days
                </div>
              </Reveal>
            </div>

            {/* RIGHT: course preview card */}
            <Reveal delay={250} className="md:col-span-5">
              <div className="card-paper p-3 bg-paper">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden zoom">
                  <img
                    src={IMG.preview}
                    alt="Course preview"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button className="play-overlay" aria-label="Play course preview">
                    <span className="play-btn">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z" /></svg>
                    </span>
                  </button>
                  <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-accent text-paper px-2 py-1 rounded-full">
                    Course preview · 2:14
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-fg-muted">
                    <span className="uppercase tracking-widest">Featured Program</span>
                    <span>Cohort 07</span>
                  </div>
                  <h3 className="display text-2xl mt-3">
                    Train for the test the way you <em>train for the field.</em>
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="border border-[--line] rounded-lg p-3">
                      <div className="display text-xl">12</div>
                      <div className="text-[10px] uppercase tracking-widest text-fg-muted mt-1">weeks</div>
                    </div>
                    <div className="border border-[--line] rounded-lg p-3">
                      <div className="display text-xl">{totalLessons}+</div>
                      <div className="text-[10px] uppercase tracking-widest text-fg-muted mt-1">lessons</div>
                    </div>
                    <div className="border border-[--line] rounded-lg p-3">
                      <div className="display text-xl">60</div>
                      <div className="text-[10px] uppercase tracking-widest text-fg-muted mt-1">seats</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────── AT-A-GLANCE BAR ───────────────────────────── */}
      <section className="border-y border-[--line] py-8 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex flex-wrap items-center justify-between gap-5">
          {[
            { ic: <IconClock />, k: "12 weeks", v: "Live + on-demand" },
            { ic: <IconBook />, k: `${totalLessons}+ lessons`, v: "Video, lab, quiz" },
            { ic: <IconUsers />, k: "60 seats", v: "Cohort capped" },
            { ic: <IconCert />, k: "Certificate", v: "On completion" },
            { ic: <Stars n={5} />, k: "4.9 rating", v: "1,247 reviews" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-center gap-3">
                <span className="text-accent">{s.ic}</span>
                <div className="leading-tight">
                  <div className="text-sm font-medium">{s.k}</div>
                  <div className="text-xs text-fg-muted">{s.v}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── WHAT YOU'LL LEARN ───────────────────────────── */}
      <section id="overview" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">
              <span className="dot" />
              What you&rsquo;ll learn
            </p>
            <h2 className="display mt-6 text-4xl md:text-5xl tracking-tight">
              Built around the
              <br />
              <em>real exam.</em>
            </h2>
            <p className="mt-5 text-fg-muted leading-relaxed max-w-sm">
              Eight skills, mapped one-to-one to NSCA exam domains and the
              practical situations you&rsquo;ll face on a real platform.
            </p>
          </Reveal>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {learn.map((l, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4">
                  <span className="check mt-1">
                    <IconCheck />
                  </span>
                  <span className="text-fg-muted leading-relaxed">{l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── CURRICULUM ───────────────────────────── */}
      <section id="curriculum" className="py-24 md:py-32 border-t border-[--line] bg-bg-elev/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal>
              <p className="eyebrow">
                <span className="dot" />
                Curriculum
              </p>
              <h2 className="display mt-6 text-4xl md:text-6xl tracking-tight max-w-3xl">
                {modules.length}+ modules. {totalLessons}+ lessons.
                <br />
                <em>One program.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex items-center gap-2 text-sm text-fg-muted">
                <IconClock /> ~{totalLessons * 45} minutes of content
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5">
            {modules.map((m, mi) => (
              <Reveal key={m.no} delay={mi * 80}>
                <article className="module">
                  <div className="module-header">
                    <div className="flex items-center gap-5">
                      <span className="badge-num text-2xl tabular">{m.no}</span>
                      <div>
                        <h3 className="display text-2xl md:text-3xl">{m.title}</h3>
                        <p className="text-xs uppercase tracking-widest text-fg-muted mt-1">
                          {m.weeks} · {m.lessons.length} lessons
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm text-fg-muted">
                      <IconClock /> {m.lessons.reduce((acc, l) => acc + (parseInt(l.d) || 0), 0)}m
                    </div>
                  </div>
                  <div>
                    {m.lessons.map((l, li) => (
                      <div key={li} className="lesson group">
                        <span className="lesson-num tabular">
                          {m.no}.{String(li + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="font-medium">{l.t}</div>
                          <div className="text-xs text-fg-muted mt-0.5 uppercase tracking-widest">
                            {l.type}
                          </div>
                        </div>
                        <span className="text-xs text-fg-muted tabular">{l.d}</span>
                        <span className="lesson-icon">
                          {lessonIcon[l.type]}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 text-center text-sm text-fg-muted">
              + 4 more modules covering testing, nutrition, administration, and a
              full practical exam lab.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── INSTRUCTORS ───────────────────────────── */}
      <section id="instructors" className="py-24 md:py-32 border-t border-[--line]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Reveal>
            <p className="eyebrow">
              <span className="dot" />
              Your instructors
            </p>
            <h2 className="display mt-6 text-4xl md:text-6xl tracking-tight max-w-3xl">
              Taught by coaches still
              <br />
              <em>in the weight room.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {instructors.map((inst, i) => (
              <Reveal key={inst.name} delay={i * 120}>
                <article className="card-paper bg-paper overflow-hidden group">
                  <div className="relative aspect-[4/5] overflow-hidden zoom">
                    <img
                      src={inst.img}
                      alt={inst.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--paper)]" style={{ background: "linear-gradient(to top, rgba(12,23,51,0.78), rgba(12,23,51,0))" }}>
                      <div className="font-display text-2xl italic">{inst.name}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium">{inst.title}</div>
                    <div className="text-xs text-fg-muted mt-1.5 uppercase tracking-widest">
                      {inst.creds}
                    </div>
                    <div className="mt-5 pt-4 border-t border-[--line] flex items-center justify-between text-xs text-fg-muted">
                      <span>3 modules</span>
                      <span className="group-hover:text-accent group-hover:translate-x-1 transition-all duration-500">
                        View bio →
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── REVIEWS ───────────────────────────── */}
      <section id="reviews" className="py-24 md:py-32 border-t border-[--line] bg-bg-elev/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal>
              <p className="eyebrow">
                <span className="dot" />
                Student reviews
              </p>
              <h2 className="display mt-6 text-4xl md:text-6xl tracking-tight">
                <span className="text-accent">4.9</span> out of 5
                <span className="text-fg-muted text-2xl md:text-3xl ml-3">
                  · 1,247 reviews
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex items-center gap-2 text-sm">
                <Stars n={5} />
                <span className="text-fg-muted">
                  <Counter to={94} suffix="%" /> first-attempt pass rate
                </span>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 120}>
                <article className="card-paper bg-paper p-7 h-full flex flex-col">
                  <Stars n={r.stars} />
                  <blockquote className="display text-xl leading-snug mt-5 flex-1">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-5 border-t border-[--line]">
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-xs text-fg-muted mt-1">{r.role}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── PRICING ───────────────────────────── */}
      <section id="pricing" className="py-24 md:py-32 border-t border-[--line]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">
              <span className="dot" />
              Enrollment
            </p>
            <h2 className="display mt-6 text-4xl md:text-6xl tracking-tight">
              One cohort.
              <br />
              <em>One price.</em>
            </h2>
            <p className="mt-6 text-fg-muted leading-relaxed max-w-md">
              No upsells, no tiers, no premium tracks. Everyone in Cohort 07
              gets the same coaches, the same labs, the same outcome.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="stat-tile">
                <span className="ic"><IconUsers /></span>
                <div className="text-sm">
                  <div className="font-medium">60 seats</div>
                  <div className="text-xs text-fg-muted">29 remaining</div>
                </div>
              </div>
              <div className="stat-tile">
                <span className="ic"><IconClock /></span>
                <div className="text-sm">
                  <div className="font-medium">Starts</div>
                  <div className="text-xs text-fg-muted">July 14, 2026</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-7">
            <div className="pricing">
              <div className="relative z-10">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-70">
                      Cohort 07 · 12-week program
                    </div>
                    <div className="display text-6xl md:text-7xl mt-3">
                      ₹89,000
                    </div>
                    <div className="text-sm opacity-70 mt-2">
                      or 3 monthly payments of ₹31,000
                    </div>
                  </div>
                  <span className="chip" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)" }}>
                    Save ₹14,000
                  </span>
                </div>

                <div className="rule mt-8" style={{ background: "rgba(255,255,255,0.15)" }} />

                <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    "12 weeks of live, coach-led labs",
                    `${totalLessons}+ on-demand video lessons`,
                    "Weekly office hours with your lead coach",
                    "60-person cohort, private community",
                    "Full-length CSCS mock exams",
                    "Personalized practical feedback",
                    "Lifetime access to all materials",
                    "Pass guarantee — retake free",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.92)" }}>
                      <span className="mt-0.5 inline-flex w-5 h-5 rounded-full items-center justify-center" style={{ background: "var(--accent)", color: "var(--paper)" }}>
                        <IconCheck />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-full font-medium transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--accent)", color: "var(--paper)" }}
                  >
                    Enroll in Cohort 07
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full border text-sm hover:bg-white/5 transition-colors"
                    style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.92)" }}
                  >
                    Talk to admissions
                  </a>
                </div>

                <div className="mt-5 text-xs opacity-60">
                  14-day full refund · no fee to apply · cohort starts July 14
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── FAQ ───────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-[--line] bg-bg-elev/40">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">
              <span className="dot" />
              FAQ
            </p>
            <h2 className="display mt-6 text-4xl md:text-5xl tracking-tight">
              Questions
              <br />
              <em>we get a lot.</em>
            </h2>
            <p className="mt-5 text-fg-muted leading-relaxed max-w-sm">
              Still wondering? The admissions team replies to every email
              within a day.
            </p>
          </Reveal>

          <div className="md:col-span-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <details className="acc">
                  <summary>
                    <span>{f.q}</span>
                    <span className="chev">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── CONTACT ───────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 border-t border-[--line]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">
              <span className="dot" />
              Apply
            </p>
            <h2 className="display mt-6 text-4xl md:text-6xl tracking-tight">
              Talk to
              <br />
              <em>admissions.</em>
            </h2>
            <p className="mt-6 text-fg-muted leading-relaxed max-w-md text-lg">
              Tell us a little about where you&rsquo;re at and the lead coach
              will personally reply — usually within two business days.
            </p>
            <div className="mt-12 space-y-5 max-w-md">
              {[
                ["01", "Apply via the form — no fee, no commitment."],
                ["02", "Fifteen-minute call with your prospective lead coach."],
                ["03", "Offer with syllabus and cohort start date within the week."],
              ].map(([n, t]) => (
                <div key={n} className="flex items-start gap-5 border-t border-[--line-strong] pt-4">
                  <span className="badge-num text-lg w-8 tabular">{n}</span>
                  <span className="text-fg-muted leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── FOOTER ───────────────────────────── */}
      <footer className="border-t border-[--fg] py-12 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="font-display text-7xl md:text-9xl tracking-tighter leading-none">
              <span className="italic text-accent">VG</span>
              <span className="text-fg">.</span>
            </div>
            <div className="text-right text-xs text-fg-muted leading-relaxed">
              <div>VG Conditioning</div>
              <div>Indiranagar 100 ft Rd, Bengaluru 560038</div>
              <div>hello@vgconditioning.in</div>
            </div>
          </div>
          <div className="rule mt-10" />
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-fg-muted">
            <div>
              © {new Date().getFullYear()} VG Conditioning. Independent — not
              affiliated with the NSCA.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="link hover:text-fg transition-colors">Instagram</a>
              <a href="#" className="link hover:text-fg transition-colors">LinkedIn</a>
              <a href="#" className="link hover:text-fg transition-colors">Substack</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
