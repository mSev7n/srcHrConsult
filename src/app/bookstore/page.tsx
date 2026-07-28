import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Tablet,
  GraduationCap,
  FlaskConical,
  Globe,
  Briefcase,
  Plane,
  Check,
  ArrowRight,
  Users,
  Building2,
  Star,
  Quote,
  AlertCircle,
  Lightbulb,
  Target,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Store & Publications",
  description:
    "Explore SRC publications — practical books, e-books, and educational guides designed to help you pursue funded PhD opportunities, scholarships, and international careers.",
};


const learningOutcomes = [
  "Understanding funded PhD opportunities",
  "Finding PhD positions in the Netherlands",
  "Identifying suitable universities and research groups",
  "Understanding the role of potential supervisors",
  "Preparing for the PhD application process",
  "Developing a strong academic CV",
  "Preparing research proposals",
  "Writing effective motivation letters",
  "Presenting academic and professional achievements",
  "Understanding common application mistakes",
  "Preparing for interviews",
  "Building a meaningful academic career",
];


const readerProfiles = [
  {
    emoji: "🎓",
    title: "Master's Graduates",
    description: "Individuals considering doctoral education after completing a Master's degree.",
    color: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    emoji: "🔬",
    title: "Aspiring PhD Candidates",
    description: "Individuals seeking to understand how to identify and pursue funded PhD opportunities.",
    color: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    emoji: "👩‍🔬",
    title: "Early-Career Researchers",
    description: "Researchers seeking to develop their academic careers.",
    color: "bg-teal-50 text-teal-700 border-teal-100",
  },
  {
    emoji: "🌍",
    title: "International Applicants",
    description: "Individuals exploring doctoral opportunities outside their home countries.",
    color: "bg-green-50 text-green-700 border-green-100",
  },
  {
    emoji: "📚",
    title: "Academic Professionals",
    description: "Lecturers and professionals interested in advancing their research and academic careers.",
    color: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    emoji: "🎯",
    title: "Future Researchers",
    description: "Individuals who want to understand what it takes to build a meaningful academic pathway.",
    color: "bg-rose-50 text-rose-700 border-rose-100",
  },
];


const categories = [
  {
    icon: GraduationCap,
    label: "Education",
    description: "Practical resources for students and individuals exploring international education.",
    color: "bg-blue-950",
  },
  {
    icon: FlaskConical,
    label: "Research & Academia",
    description: "Resources for researchers, Master's graduates, PhD candidates, and academics.",
    color: "bg-purple-950",
  },
  {
    icon: Globe,
    label: "Global Opportunities",
    description: "Guides covering international education, careers, and global mobility.",
    color: "bg-teal-950",
  },
  {
    icon: Briefcase,
    label: "Careers & Professional Development",
    description: "Resources designed to support professional growth and career advancement.",
    color: "bg-navy-900",
  },
  {
    icon: Plane,
    label: "Visa & Immigration",
    description: "Educational resources designed to help readers understand selected visa and immigration topics.",
    color: "bg-slate-800",
  },
];


const buyReasons = [
  {
    icon: BookOpen,
    title: "Direct Access to SRC Publications",
    description: "Discover books and resources created to address real educational and professional questions.",
  },
  {
    icon: Lightbulb,
    title: "Practical Knowledge",
    description: "Our publications focus on useful information and actionable guidance — not theory for its own sake.",
  },
  {
    icon: Target,
    title: "Knowledge-Driven Mission",
    description: "Our publications align with SRC's commitment to making knowledge accessible to everyone.",
  },
  {
    icon: TrendingUp,
    title: "Growing Collection",
    description: "The SRC Book Store will continue to expand with new publications and resources over time.",
  },
];


const philosophyLines = [
  "Knowledge creates awareness.",
  "Awareness creates confidence.",
  "Confidence creates action.",
  "And purposeful action can create impact.",
];


const futureTopics = [
  "Scholarships",
  "PhD opportunities",
  "Study Abroad",
  "International education",
  "Global careers",
  "Immigration",
  "Professional development",
  "International recruitment",
  "Career mobility",
];


const institutionTypes = [
  "Universities & educational institutions",
  "Professional & research organizations",
  "Publishers",
  "Corporate organizations",
  "International partners",
];

const collaborationTypes = [
  "Educational publications",
  "Knowledge-sharing initiatives",
  "Academic resources",
  "Professional development",
  "Research and education events",
];


const disclaimerItems = [
  "Scholarship awards",
  "University admission",
  "PhD admission",
  "Employment",
  "Visa approval",
  "Immigration approval",
];

const WHATSAPP_BUY = WHATSAPP_LINK(
  "Hello SRC, I'm interested in purchasing 'From Aspiration to Impact'. Please share purchase details."
);
const WHATSAPP_EBOOK = WHATSAPP_LINK(
  "Hello SRC, I'm interested in the e-book version of 'From Aspiration to Impact'. Please share details."
);
const WHATSAPP_BULK = WHATSAPP_LINK(
  "Hello SRC, I'd like to enquire about bulk / institutional orders for your publications."
);

export default function BookstorePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-36 sm:pb-32 sm:pt-44">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,53,112,0.55)_0%,rgba(5,10,28,0)_70%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 size-[480px] rounded-full bg-navy-700/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-[480px] rounded-full bg-navy-600/15 blur-3xl" />

        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_420px]">
            {/* Left — text content */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  SRC Book Store &amp; Publications
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
                  Knowledge That Inspires.{" "}
                  <span className="text-white/60">Books That Empower.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/65">
                  At SRC, we believe knowledge is one of the most powerful tools for personal, academic, and professional transformation. Our publications bring practical guidance within reach.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-3 text-base italic text-white/40">
                  Read. Learn. Grow. Make an Impact.
                </p>
              </Reveal>

              <Reveal
                delay={0.26}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Button href="#featured-book" variant="secondary" size="lg" icon={false}>
                  View Featured Book
                </Button>
                <Button href="#all-publications" variant="outline-light" size="lg" icon={false}>
                  All Publications
                </Button>
              </Reveal>
            </div>

            {/* Right — decorative book stack visual */}
            <Reveal delay={0.18} className="flex justify-center lg:justify-end">
              <div className="relative h-[380px] w-[260px]">
                {/* Shadow book (back) */}
                <div
                  className="absolute bottom-4 left-6 right-0 top-0 rounded-2xl bg-navy-700/40"
                  style={{ transform: "rotate(4deg)" }}
                />
                {/* Main book cover */}
                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 p-8 shadow-[0_32px_64px_-20px_rgba(5,10,28,0.8)]">
                  {/* Subtle texture lines */}
                  <div className="pointer-events-none absolute inset-0 opacity-10">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 h-px bg-white"
                        style={{ top: `${12 + i * 12}%` }}
                      />
                    ))}
                  </div>
                  {/* Top badge */}
                  <div>
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                      SRC Publications
                    </span>
                  </div>
                  {/* Title area */}
                  <div>
                    <div className="mb-3 h-px w-12 bg-white/30" />
                    <p className="text-xl font-semibold leading-snug text-white">
                      From Aspiration to Impact
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      A Practical Guide to Securing Fully Funded PhD Scholarships in the Netherlands
                    </p>
                    <p className="mt-4 text-xs font-medium text-white/40">
                      Adebola Alayande
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── FEATURED PUBLICATION ─────────────────────────────────── */}
      <section id="featured-book" className="scroll-mt-20 bg-paper py-20 sm:py-28">
        <Container>
          <Reveal className="mb-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-600">
              ★ Featured Publication
            </span>
          </Reveal>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            {/* Left — book description */}
            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                From Aspiration to Impact
              </h2>
              <p className="mt-2 text-base font-medium text-navy-500">
                By Adebola Alayande
              </p>
              <p className="mt-1 text-sm text-navy-400">
                A Practical Guide to Securing Fully Funded PhD Scholarships in the Netherlands and Building a Meaningful Academic Career
              </p>

              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-navy-600">
                <p>
                  Pursuing a fully funded PhD can be a life-changing academic and professional journey. Yet for many aspiring researchers and Master&apos;s graduates, the process can appear confusing and overwhelming.
                </p>
                <p>
                  <em>From Aspiration to Impact</em> was created to provide practical guidance to aspiring PhD candidates and researchers seeking to understand the journey from ambition to academic opportunity — with a particular focus on the Netherlands.
                </p>
                <p>
                  It is designed for readers who want to move beyond aspiration and take informed, strategic steps toward their academic goals.
                </p>
              </div>

              {/* Questions the book answers */}
              <div className="mt-8 space-y-2.5">
                {[
                  "Where do you find funded PhD opportunities?",
                  "How do you identify suitable universities and research groups?",
                  "How do you approach potential supervisors?",
                  "What makes a competitive academic CV?",
                  "How do you develop a strong research proposal?",
                  "How do you prepare a compelling motivation letter?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 text-sm text-navy-600">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-700">
                      <ArrowRight className="size-3" strokeWidth={2.5} />
                    </span>
                    {q}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  href={WHATSAPP_BUY}
                  variant="primary"
                  size="lg"
                  icon={false}
                >
                  <ShoppingCart className="size-4" strokeWidth={1.75} />
                  Buy the Book
                </Button>
                <Button
                  href={WHATSAPP_EBOOK}
                  variant="secondary"
                  size="lg"
                  icon={false}
                >
                  <Tablet className="size-4" strokeWidth={1.75} />
                  Get the E-Book
                </Button>
              </div>
            </Reveal>

            {/* Right — what you'll learn */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-soft sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
                  What You Will Learn
                </p>
                <h3 className="mt-3 text-xl font-semibold text-navy-950">
                  Practical topics covered in this guide
                </h3>
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {learningOutcomes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm leading-snug text-navy-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── WHO IS THIS BOOK FOR? ────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Who Is This Book For?"
            title="Written with you in mind"
            description="This publication may be particularly valuable for the following readers."
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {readerProfiles.map((profile, i) => (
              <Reveal key={profile.title} delay={i * 0.06}>
                <div
                  className={`card-pop h-full rounded-2xl border p-6 ${profile.color}`}
                >
                  <span className="text-3xl">{profile.emoji}</span>
                  <p className="mt-4 font-semibold">{profile.title}</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">
                    {profile.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY THIS BOOK? — dark pull-quote section ─────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(21,40,88,0.35)_0%,transparent_70%)]" />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left — philosophy quotes */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Why This Book?
              </span>
              <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                A PhD is more than a qualification.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                It can be a journey of discovery, research, knowledge creation, professional development, and impact. This book encourages aspiring researchers to approach the journey with preparation, strategy, persistence, and purpose.
              </p>

              <div className="mt-10 flex flex-col gap-3">
                {philosophyLines.map((line, i) => (
                  <Reveal key={line} delay={i * 0.1}>
                    <div className="flex items-center gap-4">
                      <span className="size-1.5 shrink-0 rounded-full bg-white/30" />
                      <span
                        className="text-base font-medium text-white"
                        style={{ opacity: 0.55 + i * 0.15 }}
                      >
                        {line}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* Right — reader questions CTA box */}
            <Reveal delay={0.12}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                <Quote className="size-8 text-white/20" strokeWidth={1.5} />
                <div className="mt-5 space-y-3">
                  {[
                    '"Can I secure a fully funded PhD?"',
                    '"How do I find PhD opportunities in the Netherlands?"',
                    '"How do I approach a potential supervisor?"',
                    '"What should my academic CV look like?"',
                    '"How can I prepare a competitive PhD application?"',
                  ].map((q) => (
                    <p key={q} className="text-base font-medium text-white/80">
                      {q}
                    </p>
                  ))}
                </div>
                <div className="mt-8 h-px w-full bg-white/10" />
                <p className="mt-6 text-sm text-white/50">
                  This book was written with you in mind.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={WHATSAPP_BUY} variant="secondary" size="md" icon={false}>
                    Buy the Book
                  </Button>
                  <Button href={WHATSAPP_EBOOK} variant="outline-light" size="md" icon={false}>
                    Get the E-Book
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── ABOUT THE AUTHOR ─────────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-soft sm:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                {/* Avatar placeholder */}
                <div className="shrink-0">
                  <div className="flex size-20 items-center justify-center rounded-2xl bg-navy-950 text-xl font-bold text-white sm:size-24">
                    AA
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
                    About the Author
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-navy-950 sm:text-3xl">
                    Adebola Alayande
                  </h2>
                  <p className="mt-1 text-sm text-navy-500">
                    Founder, Success Resource Consult (SRC)
                  </p>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy-600 sm:text-[15px]">
                    <p>
                      Adebola Alayande is the founder of Success Resource Consult, an organization focused on education, scholarships, international opportunities, careers, recruitment, HR, visas, and immigration guidance.
                    </p>
                    <p>
                      Through SRC and his professional work, he has developed a strong interest in helping individuals access knowledge and explore opportunities that can contribute to their educational and professional development.
                    </p>
                  </div>

                  {/* Philosophy lines */}
                  <div className="mt-7 space-y-1.5">
                    {philosophyLines.map((line) => (
                      <p key={line} className="text-sm italic text-navy-400">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── ALL PUBLICATIONS & CATEGORIES ────────────────────────── */}
      <section id="all-publications" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="SRC Publications"
            title="Building a Culture of Knowledge"
            description="SRC is committed to developing publications and educational resources that address important questions facing students, graduates, researchers, professionals, and individuals exploring international opportunities."
          />

          {/* Current book card */}
          <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-navy-900/10 bg-paper p-8 shadow-soft sm:p-10">
              <div className="absolute right-6 top-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  <Star className="size-3 fill-white" strokeWidth={0} />
                  Available Now
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
                Paperback &amp; E-Book
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-navy-950">
                From Aspiration to Impact
              </h3>
              <p className="mt-1 text-sm text-navy-500">By Adebola Alayande</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                A Practical Guide to Securing Fully Funded PhD Scholarships in the Netherlands and Building a Meaningful Academic Career.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={WHATSAPP_BUY} variant="primary" size="md" icon={false}>
                  <ShoppingCart className="size-4" strokeWidth={1.75} />
                  Buy Printed Book
                </Button>
                <Button href={WHATSAPP_EBOOK} variant="secondary" size="md" icon={false}>
                  <Tablet className="size-4" strokeWidth={1.75} />
                  Get E-Book
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Future topics */}
          <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl">
            <div className="rounded-2xl border border-navy-900/8 bg-paper px-8 py-7">
              <p className="text-sm font-semibold text-navy-800">
                Future publications may cover topics including:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {futureTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-navy-900/10 bg-white px-3.5 py-1 text-xs font-medium text-navy-600"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Category grid */}
          <div className="mt-16">
            <SectionHeader
              eyebrow="Publication Categories"
              title="Our areas of focus"
              align="left"
            />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => (
                <Reveal key={cat.label} delay={i * 0.07}>
                  <div
                    className={`card-pop card-pop-dark flex h-full flex-col gap-4 rounded-2xl p-7 text-white ${cat.color}`}
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white/10">
                      <cat.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-semibold">{cat.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── SRC DIGITAL RESOURCES ────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Digital resources panel */}
            <Reveal>
              <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-soft sm:p-10">
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy-950 text-white">
                  <Tablet className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy-950">
                  SRC Digital Resources
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  In addition to books, SRC may provide digital educational resources designed to complement the learning experience.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["E-books", "Guides", "Checklists", "Application templates", "Educational workbooks", "Research resources", "Career resources"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-navy-900/10 bg-paper px-3.5 py-1 text-xs font-medium text-navy-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs text-navy-400">
                  Availability varies by publication and resource.
                </p>
                <div className="mt-7">
                  <Button href={WHATSAPP_EBOOK} variant="primary" size="md" icon={false}>
                    Explore Digital Resources
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Institutions panel */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-soft sm:p-10">
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy-950 text-white">
                  <Building2 className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy-950">
                  For Institutions &amp; Organizations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  SRC is open to exploring collaboration opportunities with the right partners.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-400">
                      We work with
                    </p>
                    {institutionTypes.map((t) => (
                      <p key={t} className="flex items-center gap-2 py-0.5 text-sm text-navy-600">
                        <span className="size-1.5 shrink-0 rounded-full bg-navy-300" />
                        {t}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-400">
                      Collaboration areas
                    </p>
                    {collaborationTypes.map((t) => (
                      <p key={t} className="flex items-center gap-2 py-0.5 text-sm text-navy-600">
                        <span className="size-1.5 shrink-0 rounded-full bg-navy-300" />
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-7">
                  <Button
                    href="/contact?subject=International+Partnership"
                    variant="primary"
                    size="md"
                  >
                    Partner With SRC
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── CORPORATE & BULK ORDERS ──────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-8 rounded-3xl border border-navy-900/10 bg-paper p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-start gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
                  <Users className="size-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-950">
                    Corporate &amp; Bulk Orders
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-navy-600">
                    Organizations, institutions, universities, professional associations, and groups interested in bulk purchases may contact SRC to discuss available options.
                  </p>
                </div>
              </div>
              <Button
                href={WHATSAPP_BULK}
                variant="primary"
                size="md"
                className="shrink-0"
              >
                Request Bulk Order Information
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── WHY BUY FROM SRC ─────────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Why Buy From the SRC Book Store?"
            title="More than a book — a step forward"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {buyReasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="card-pop flex h-full gap-5 rounded-2xl border border-navy-900/10 bg-white p-7 shadow-soft">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white">
                    <r.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-950">{r.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{r.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── IMPORTANT NOTICE ─────────────────────────────────────── */}
      <section className="bg-white py-14">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <AlertCircle className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold text-amber-900">Important Notice</p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-800">
                    SRC publications are educational resources and are intended for informational purposes. The purchase of a publication does not guarantee:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {disclaimerItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-amber-200 bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-amber-700">
                    Readers should always verify current requirements and official information from the relevant institutions and authorities.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────── */}
      <CtaBand
        eyebrow="Start Your Journey Today"
        title="Your journey may begin with a question. It may continue with knowledge. And it may ultimately lead to impact."
        description="From Aspiration to Impact — available now as a printed book and e-book."
        primaryLabel="Buy the Book"
        primaryHref={WHATSAPP_BUY}
        secondaryLabel="Contact SRC"
        secondaryHref="/contact"
      />
    </>
  );
}
