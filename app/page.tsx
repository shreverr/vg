import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import ContactForm from "./components/ContactForm";
import Tilt from "./components/Tilt";
import ReviewsCarousel from "./components/ReviewsCarousel";
import LogoMarquee from "./components/LogoMarquee";
import Parallax from "./components/Parallax";
import TextMarquee from "./components/TextMarquee";
import HorizontalPin from "./components/HorizontalPin";
import ScheduleCard from "./components/ScheduleCard";
import PillBar from "./components/PillBar";

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
  { no: "01", title: "Exercise Science Foundations", weeks: "Weeks 1–2", lessons: [
    { t: "Bioenergetics for coaches", d: "42m", type: "video" },
    { t: "Endocrine response under load", d: "38m", type: "video" },
    { t: "Cardiopulmonary system review", d: "29m", type: "video" },
    { t: "Lab: Energy system audit of your sport", d: "60m", type: "lab" },
    { t: "Module quiz", d: "20 q", type: "quiz" },
  ]},
  { no: "02", title: "Biomechanics & Anatomy", weeks: "Weeks 2–3", lessons: [
    { t: "Lever systems in the weight room", d: "36m", type: "video" },
    { t: "Force-velocity, in practice", d: "44m", type: "video" },
    { t: "Joint mechanics by lift", d: "51m", type: "video" },
    { t: "Lab: Video breakdown of three lifts", d: "75m", type: "lab" },
  ]},
  { no: "03", title: "Exercise Technique", weeks: "Weeks 3–5", lessons: [
    { t: "Coaching cues that actually work", d: "48m", type: "video" },
    { t: "Spotting & loading platform safety", d: "33m", type: "video" },
    { t: "Practical: Coach the squat", d: "90m", type: "lab" },
    { t: "Practical: Coach the clean", d: "90m", type: "lab" },
    { t: "Module quiz", d: "25 q", type: "quiz" },
  ]},
  { no: "04", title: "Program Design", weeks: "Weeks 5–7", lessons: [
    { t: "Periodization models, compared", d: "55m", type: "video" },
    { t: "Loading parameters for adaptation", d: "41m", type: "video" },
    { t: "Sport-specific block templates", d: "47m", type: "video" },
    { t: "Lab: Build a full off-season block", d: "120m", type: "lab" },
  ]},
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
    quote: "I'd failed the CSCS twice studying alone. The Tuesday labs were the first time someone actually coached me through the practical sections, rep by rep.",
    name: "Aanya Kapoor",
    role: "Asst. S&C, Pro Kabaddi franchise",
    stars: 5,
  },
  {
    quote: "Best continuing education I've paid for. Twelve weeks, a real coach, a real cohort. I'd send every assistant on my staff through it.",
    name: "Karthik Menon",
    role: "Head S&C, ISL academy",
    stars: 5,
  },
  {
    quote: "The program design module alone was worth the price. Walked away with a template I still use with my U-19 cricket squad.",
    name: "Kavya Reddy",
    role: "Strength Coach, state cricket assoc.",
    stars: 5,
  },
];

const faqs = [
  { q: "Who is this program for?", a: "Strength and conditioning coaches who plan to sit for the NSCA CSCS exam within 6 months. Assistants, head coaches, sport-specific coaches, and physios returning to programming all do well here." },
  { q: "How is this different from buying a study guide?", a: "You get live coaching twice a week, a 60-person cohort moving with you, and a lead coach who reviews your practical work and gives notes. It's the difference between watching film and being coached." },
  { q: "What is the time commitment?", a: "Plan on 6–8 hours per week. Two 90-minute live labs, a recorded lecture or two, weekly readings, and one applied assignment. Sessions are recorded if you miss them." },
  { q: "What's the refund policy?", a: "Full refund within the first 14 days, no questions. After that, prorated through week 6. We've never had to use it past that." },
  { q: "Does this guarantee I'll pass?", a: "No serious program does. What we guarantee: 94% of our last four cohorts passed on first attempt versus a 56% national average. If you don't pass, you get the next cohort free." },
];

const IMG = {
  hero: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1900&q=85",
  weightroom: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  squat: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1400&q=80",
  group: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
  mobility: "https://www.verywellfit.com/thmb/Wna-afek1wjS1HbHe65nXZH0Asg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3976890-GettyImages-1056286622-d16e8c2910344d7aa81f07508234373f.jpg",
};

// icons
const IconClock = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
const IconPlay = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6 4l14 8-14 8V4z"/></svg>);
const IconBook = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 4h11a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z"/><path d="M4 16h15"/></svg>);
const IconCert = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2 5 2-1.5-7.5"/></svg>);
const IconUsers = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="8" r="3"/><path d="M16 14.5c3.5.3 6 2.6 6 6.5"/></svg>);
const IconCheck = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 12l5 5L20 6"/></svg>);
const IconStar = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14 2 9l7-1L12 2z"/></svg>);
const IconLab = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3"/><path d="M9 3h6"/></svg>);
const IconQuiz = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1.4-1.5 2.5"/><circle cx="12" cy="17.5" r="0.6" fill="currentColor"/></svg>);

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="stars" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ opacity: i < n ? 1 : 0.2 }}><IconStar /></span>
      ))}
    </span>
  );
}

const lessonIcon: Record<string, React.ReactNode> = {
  video: <IconPlay />, lab: <IconLab />, quiz: <IconQuiz />,
};

export default function Home() {
  const totalLessons = modules.reduce((n, m) => n + m.lessons.length, 0);

  return (
    <div id="top" className="relative bg-bg text-fg">
      <Nav />

      {/* ───────────────────────────── HERO ───────────────────────────── */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        {/* Photo bg */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.hero}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Color tint */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(29,46,34,0.92) 0%, rgba(29,46,34,0.72) 45%, rgba(29,46,34,0.4) 100%)",
            }}
          />
          <div className="hero-mesh" aria-hidden>
            <span className="blob b1" />
            <span className="blob b2" />
            <span className="blob b3" />
            <span className="blob b4" />
          </div>
          <div className="grain" aria-hidden />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1320px] px-4 md:px-6 pt-6 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* LEFT — wordmark + CTAs */}
            <div className="md:col-span-8">
              <Reveal>
                <p className="eyebrow" style={{ color: "var(--accent)" }}>
                  <span className="dot" />
                  Rise to the top with VG Conditioning
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="display-mega mt-7" style={{ color: "var(--paper)" }}>
                  Your Strength
                  <br />
                  <em>Journey Awaits.</em>
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <p className="mt-7 text-lg md:text-xl max-w-xl leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  India&rsquo;s first cohort-based prep program for the NSCA CSCS exam.
                  Taught live by working strength coaches. Built for the assistant
                  juggling two-a-days, the head coach finally writing the test,
                  the physio going back to programming.
                </p>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a href="#contact" className="btn-pill-dark text-base">
                    Get In Touch
                    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#program" className="btn-pill-cream text-base">
                    Read More
                  </a>
                </div>
              </Reveal>

              {/* Bottom info row inside hero */}
              <Reveal delay={500}>
                <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6 max-w-3xl">
                  {[
                    { k: "14+", v: "Years of experience by lead coaches" },
                    { k: "60", v: "Coaches per cohort, no more" },
                    { k: "94%", v: "First-attempt pass rate" },
                    { k: "12", v: "Weeks of live + on-demand" },
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="display-mega"
                        style={{
                          color: i === 0 ? "var(--accent)" : i === 1 ? "var(--gold)" : i === 2 ? "var(--heat)" : "var(--paper)",
                          fontSize: "clamp(2.4rem, 4.4vw, 3.5rem)",
                          lineHeight: "0.9",
                        }}
                      >
                        {b.k}
                      </span>
                      <span className="text-xs leading-tight pt-1" style={{ color: "var(--fg-muted)" }}>
                        {b.v}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT — schedule card */}
            <Reveal delay={300} className="hidden md:block md:col-span-4 md:pt-2">
              <Parallax speed={-0.06} className="relative flex justify-center md:justify-end">
                <ScheduleCard />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────── AT-A-GLANCE PILL BAR ───────────────────────────── */}
      <section className="relative -mt-10 md:-mt-14 z-[3]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <Reveal>
            <PillBar
              items={[
                { ic: <IconClock />, k: "12 weeks", v: "Live + on-demand", highlight: true },
                { ic: <IconBook />, k: `${totalLessons}+ lessons`, v: "Video, lab, quiz" },
                { ic: <IconUsers />, k: "60 seats", v: "Cohort capped" },
                { ic: <IconCert />, k: "Certificate", v: "On completion" },
                { ic: <Stars n={5} />, k: "4.9 rating", v: "1,247 reviews" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── LOGO MARQUEE ───────────────────────────── */}
      <div className="mt-16 md:mt-24">
        <LogoMarquee />
      </div>

      {/* ───────────────────────────── WHAT YOU'LL LEARN ───────────────────────────── */}
      <section id="overview" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal variant="left" className="md:col-span-4">
            <p className="eyebrow">
              <span className="dot" />
              What you&rsquo;ll learn
            </p>
            <h2 className="display mt-6 text-5xl md:text-6xl tracking-tight">
              Built around
              <br />
              the <em>real exam.</em>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Eight skills, mapped one-to-one to NSCA exam domains and the
              practical situations you&rsquo;ll face on a real platform.
            </p>
          </Reveal>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {learn.map((l, i) => (
              <Reveal key={i} delay={i * 50}>
                <div
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-500 hover:translate-x-1"
                  style={{
                    background: "var(--bg-soft)",
                    border: "1px solid var(--line-strong)",
                  }}
                >
                  <span className="check mt-0.5"><IconCheck /></span>
                  <span className="leading-relaxed" style={{ color: "var(--fg)" }}>{l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── GIANT TEXT MARQUEE ───────────────────────────── */}
      <TextMarquee text="Coach the test. Train the field. Coach the test. Train the field." />

      {/* ───────────────────────────── CURRICULUM ───────────────────────────── */}
      <section id="curriculum" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal>
              <p className="eyebrow">
                <span className="dot" />
                Curriculum
              </p>
              <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight max-w-3xl">
                {modules.length}+ modules.
                <br />
                {totalLessons}+ lessons. <em>One program.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="tag tag-cream">
                <IconClock /> ~{totalLessons * 45} minutes of content
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6">
            {modules.map((m, mi) => (
              <Reveal key={m.no} delay={mi * 80}>
                <article className="module">
                  <div className="module-header">
                    <div className="flex items-center gap-5">
                      <span className="badge-num text-3xl tabular">{m.no}</span>
                      <div>
                        <h3 className="display text-2xl md:text-3xl">{m.title}</h3>
                        <p className="text-xs uppercase tracking-widest mt-1.5" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                          {m.weeks} · {m.lessons.length} lessons
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                      <span className="tag tag-gold">{m.weeks}</span>
                      <span className="hidden lg:inline-flex tag tag-cream">
                        <IconClock /> {m.lessons.reduce((acc, l) => acc + (parseInt(l.d) || 0), 0)}m
                      </span>
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
                          <div className="text-xs mt-0.5 uppercase tracking-widest" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                            {l.type}
                          </div>
                        </div>
                        <span className="text-xs tabular" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>{l.d}</span>
                        <span className="lesson-icon">{lessonIcon[l.type]}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 text-center text-sm" style={{ color: "var(--fg-muted)" }}>
              + 4 more modules covering testing, nutrition, administration, and a
              full practical exam lab.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── HORIZONTAL PIN — How it works ───────────────────────────── */}
      <HorizontalPin
        eyebrow={
          <p className="eyebrow">
            <span className="dot" />
            How the program works
          </p>
        }
        heading={
          <h2 className="display text-4xl md:text-6xl tracking-tight max-w-3xl">
            Four things <em>most prep skips.</em>
          </h2>
        }
        panels={[
          <div key="p1" className="flex flex-col md:flex-row h-full w-full">
            <div className="h-40 md:h-full md:w-1/2 relative overflow-hidden flex-shrink-0">
              <img src={IMG.weightroom} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex-1 md:w-1/2 p-5 md:p-10 flex flex-col justify-between" style={{ background: "var(--paper)", color: "var(--ink)" }}>
              <div>
                <span className="tag tag-lime">— 01</span>
                <h3 className="display text-2xl md:text-5xl tracking-tight mt-3 md:mt-6">
                  Live, coach-led labs.
                </h3>
                <p className="mt-2 md:mt-5 text-sm md:text-lg max-w-md leading-relaxed" style={{ color: "color-mix(in srgb, var(--ink) 65%, var(--paper))" }}>
                  Two 90-minute labs a week with your lead coach and your
                  cohort. You ask questions, you coach reps on camera, you get
                  notes. Not a recorded lecture you watch alone at 11 pm.
                </p>
              </div>
              <div className="flex items-end justify-between mt-auto pt-4">
                <div className="text-xs uppercase tracking-widest" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                  Tue + Thu · 7pm IST
                </div>
                <div className="display text-5xl md:text-8xl tracking-tighter">
                  <span style={{ color: "var(--accent-deep)" }}>24</span>
                  <span className="text-2xl ml-2 align-top" style={{ color: "color-mix(in srgb, var(--ink) 45%, var(--paper))" }}>labs</span>
                </div>
              </div>
            </div>
          </div>,
          <div key="p2" className="flex flex-col md:flex-row h-full w-full">
            <div className="h-40 md:h-full md:w-1/2 relative overflow-hidden flex-shrink-0">
              <img src={IMG.group} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex-1 md:w-1/2 p-5 md:p-10 flex flex-col justify-between" style={{ background: "var(--paper)", color: "var(--ink)" }}>
              <div>
                <span className="tag tag-gold">— 02</span>
                <h3 className="display text-2xl md:text-5xl tracking-tight mt-3 md:mt-6">
                  A cohort of 60. <em>No more.</em>
                </h3>
                <p className="mt-2 md:mt-5 text-sm md:text-lg max-w-md leading-relaxed" style={{ color: "color-mix(in srgb, var(--ink) 65%, var(--paper))" }}>
                  Sixty strength professionals sitting for the same exam on the
                  same day. You leave with a network you&rsquo;ll text from the
                  weight room for the next decade.
                </p>
              </div>
              <div className="flex items-end justify-between mt-auto pt-4">
                <div className="text-xs uppercase tracking-widest" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                  Private community · forever access
                </div>
                <div className="display text-5xl md:text-8xl tracking-tighter">
                  <span style={{ color: "var(--gold)" }}>60</span>
                  <span className="text-2xl ml-2 align-top" style={{ color: "color-mix(in srgb, var(--ink) 45%, var(--paper))" }}>coaches</span>
                </div>
              </div>
            </div>
          </div>,
          <div key="p3" className="flex flex-col md:flex-row h-full w-full">
            <div className="h-40 md:h-full md:w-1/2 relative overflow-hidden flex-shrink-0">
              <img src={IMG.squat} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex-1 md:w-1/2 p-5 md:p-10 flex flex-col justify-between" style={{ background: "var(--paper)", color: "var(--ink)" }}>
              <div>
                <span className="tag tag-coral">— 03</span>
                <h3 className="display text-2xl md:text-5xl tracking-tight mt-3 md:mt-6">
                  A real practical exam lab.
                </h3>
                <p className="mt-2 md:mt-5 text-sm md:text-lg max-w-md leading-relaxed" style={{ color: "color-mix(in srgb, var(--ink) 65%, var(--paper))" }}>
                  Weeks 11 and 12 are full-length mocks under exam conditions —
                  including the practical sections. A lead coach reviews your
                  film and tells you exactly where you&rsquo;d lose points.
                </p>
              </div>
              <div className="flex items-end justify-between mt-auto pt-4">
                <div className="text-xs uppercase tracking-widest" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                  Weeks 11–12 · 2 mock exams
                </div>
                <div className="display text-5xl md:text-8xl tracking-tighter">
                  <span style={{ color: "var(--heat)" }}>94<span className="text-2xl align-top">%</span></span>
                  <span className="text-2xl ml-2 align-top" style={{ color: "color-mix(in srgb, var(--ink) 45%, var(--paper))" }}>pass</span>
                </div>
              </div>
            </div>
          </div>,
          <div key="p4" className="flex flex-col md:flex-row h-full w-full">
            <div className="h-40 md:h-full md:w-1/2 relative overflow-hidden flex-shrink-0">
              <img src={IMG.mobility} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex-1 md:w-1/2 p-5 md:p-10 flex flex-col justify-between" style={{ background: "var(--paper)", color: "var(--ink)" }}>
              <div>
                <span className="tag tag-lime">— 04</span>
                <h3 className="display text-2xl md:text-5xl tracking-tight mt-3 md:mt-6">
                  Movement screening, done right.
                </h3>
                <p className="mt-2 md:mt-5 text-sm md:text-lg max-w-md leading-relaxed" style={{ color: "color-mix(in srgb, var(--ink) 65%, var(--paper))" }}>
                  Most candidates memorise muscles. We train you to read a body
                  — identify asymmetries, correct under fatigue, and write a
                  program that holds up over a full season. That&rsquo;s what the
                  practical portion actually tests.
                </p>
              </div>
              <div className="flex items-end justify-between mt-auto pt-4">
                <div className="text-xs uppercase tracking-widest" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                  Applied biomechanics · weeks 7–10
                </div>
                <div className="display text-5xl md:text-8xl tracking-tighter">
                  <span style={{ color: "var(--accent-deep)" }}>8</span>
                  <span className="text-2xl ml-2 align-top" style={{ color: "color-mix(in srgb, var(--ink) 45%, var(--paper))" }}>screens</span>
                </div>
              </div>
            </div>
          </div>,
        ]}
      />

      {/* ───────────────────────────── INSTRUCTORS ───────────────────────────── */}
      <section id="coaches" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <Reveal>
            <p className="eyebrow">
              <span className="dot" />
              Your instructors
            </p>
            <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight max-w-4xl">
              Taught by coaches still
              <br />
              <em>in the weight room.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {instructors.map((inst, i) => (
              <Reveal key={inst.name} delay={i * 120}>
                <Tilt>
                  <article className="pill-card overflow-hidden group">
                    <div className="relative aspect-[4/5] overflow-hidden zoom">
                      <img src={inst.img} alt={inst.name} className="absolute inset-0 w-full h-full object-cover" />
                      {/* floating gold name pill */}
                      <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-3">
                        <div
                          className="rounded-2xl p-3 pl-4"
                          style={{ background: "var(--paper)", border: "1px solid var(--line-cream)", boxShadow: "0 20px 60px -20px rgba(0,0,0,0.55)" }}
                        >
                          <div className="font-display text-xl italic" style={{ color: "var(--ink)" }}>{inst.name}</div>
                          <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                            Lead coach
                          </div>
                        </div>
                        <span
                          className="rounded-full w-12 h-12 flex items-center justify-center"
                          style={{ background: i === 0 ? "var(--accent)" : i === 1 ? "var(--gold)" : "var(--heat)", color: "var(--ink)" }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M9 7h8v8"/></svg>
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm font-medium" style={{ color: "var(--ink)" }}>{inst.title}</div>
                      <div className="text-xs mt-2 uppercase tracking-widest" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                        {inst.creds}
                      </div>
                      <div className="mt-5 pt-4 flex items-center justify-between text-xs" style={{ borderTop: "1px solid var(--line-cream)", color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                        <span>3 modules</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-500" style={{ color: "var(--accent-deep)" }}>
                          View bio →
                        </span>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── LIME BAND ───────────────────────────── */}
      <TextMarquee
        text="Cohort 07 · July 14, 2026 · 29 seats left · Cohort 07 · July 14, 2026 · 29 seats left"
        scrollBoost={-0.18}
        separator="●"
        className="lime"
      />

      {/* ───────────────────────────── REVIEWS ───────────────────────────── */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal>
              <p className="eyebrow">
                <span className="dot" />
                Student reviews
              </p>
              <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight">
                <span style={{ color: "var(--gold)" }}>4.9</span>
                <span> out of 5</span>
                <span className="text-2xl md:text-3xl ml-3" style={{ color: "var(--fg-muted)" }}>
                  · 1,247 reviews
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex items-center gap-2 text-sm">
                <Stars n={5} />
                <span style={{ color: "var(--fg-muted)" }}>
                  <Counter to={94} suffix="%" /> first-attempt pass rate
                </span>
              </div>
            </Reveal>
          </div>

          <div className="mt-14">
            <Reveal>
              <ReviewsCarousel reviews={reviews} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────── PRICING ───────────────────────────── */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">
              <span className="dot" />
              Enrollment
            </p>
            <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight">
              One cohort.
              <br />
              <em>One price.</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-lg" style={{ color: "var(--fg-muted)" }}>
              No upsells, no tiers, no premium tracks. Everyone in Cohort 07
              gets the same coaches, the same labs, the same outcome.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-3 max-w-sm">
              <div className="stat-tile">
                <span className="ic"><IconUsers /></span>
                <div className="text-sm">
                  <div className="font-medium">60 seats</div>
                  <div className="text-xs" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>29 remaining</div>
                </div>
              </div>
              <div className="stat-tile">
                <span className="ic"><IconClock /></span>
                <div className="text-sm">
                  <div className="font-medium">Starts</div>
                  <div className="text-xs" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>July 14, 2026</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-7">
            <div className="pricing">
              <div className="relative z-10">
                <div className="flex items-baseline justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                      Cohort 07 · 12-week program
                    </div>
                    <div className="display-mega mt-3" style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}>
                      ₹89,000
                    </div>
                    <div className="text-sm mt-2" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                      or 3 monthly payments of ₹31,000
                    </div>
                  </div>
                  <span className="tag tag-lime">Save ₹14,000</span>
                </div>

                <div className="rule-cream mt-8" />

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
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)" }}>
                      <span
                        className="mt-0.5 inline-flex w-5 h-5 rounded-full items-center justify-center flex-shrink-0"
                        style={{ background: "var(--ink)", color: "var(--accent)" }}
                      >
                        <IconCheck />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a href="#contact" className="btn-pill-dark flex-1 justify-center">
                    Enroll in Cohort 07
                    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#contact" className="btn-pill-cream justify-center">
                    Talk to admissions
                  </a>
                </div>

                <div className="mt-5 text-xs" style={{ color: "color-mix(in srgb, var(--ink) 55%, var(--paper))" }}>
                  14-day full refund · no fee to apply · cohort starts July 14
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── FAQ (on cream surface) ───────────────────────────── */}
      <section className="py-24 md:py-32 surface-cream" style={{ borderTop: "1px solid var(--line-cream)" }}>
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow on-cream">
              <span className="dot" />
              FAQ
            </p>
            <h2 className="display mt-6 text-5xl md:text-6xl tracking-tight">
              Questions
              <br />
              <em>we get a lot.</em>
            </h2>
            <p className="mt-5 leading-relaxed max-w-sm" style={{ color: "color-mix(in srgb, var(--ink) 65%, var(--paper))" }}>
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
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">
              <span className="dot" />
              Apply
            </p>
            <h2 className="display mt-6 text-5xl md:text-7xl tracking-tight">
              Talk to
              <br />
              <em>admissions.</em>
            </h2>
            <p className="mt-6 leading-relaxed max-w-md text-lg" style={{ color: "var(--fg-muted)" }}>
              Tell us a little about where you&rsquo;re at and the lead coach
              will personally reply — usually within two business days.
            </p>
            <div className="mt-12 space-y-4 max-w-md">
              {[
                ["01", "Apply via the form — no fee, no commitment."],
                ["02", "Fifteen-minute call with your prospective lead coach."],
                ["03", "Offer with syllabus and cohort start date within the week."],
              ].map(([n, t]) => (
                <div
                  key={n}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{ background: "var(--bg-soft)", border: "1px solid var(--line-strong)" }}
                >
                  <span
                    className="badge-num text-lg flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "var(--accent)", color: "var(--ink)", fontStyle: "italic" }}
                  >
                    {n}
                  </span>
                  <span className="leading-relaxed pt-0.5" style={{ color: "var(--fg)" }}>{t}</span>
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
      <footer className="surface-forest-elev" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 py-14">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div className="font-display leading-none tracking-tighter" style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
              <span className="italic" style={{ color: "var(--accent)" }}>V</span>
              <span style={{ color: "var(--paper)" }}>G</span>
              <span style={{ color: "var(--gold)" }}>.</span>
            </div>
            <div className="text-right text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              <div className="text-base font-medium" style={{ color: "var(--paper)" }}>VG Conditioning</div>
              <div className="mt-1">Indiranagar 100 ft Rd, Bengaluru 560038</div>
              <div>hello@vgconditioning.in</div>
            </div>
          </div>
          <div className="rule mt-12" />
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs" style={{ color: "var(--fg-muted)" }}>
            <div>
              © {new Date().getFullYear()} VG Conditioning. Independent — not
              affiliated with the NSCA.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="link hover:opacity-80 transition-opacity">Instagram</a>
              <a href="#" className="link hover:opacity-80 transition-opacity">LinkedIn</a>
              <a href="#" className="link hover:opacity-80 transition-opacity">Substack</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
