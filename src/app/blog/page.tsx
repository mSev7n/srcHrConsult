import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Microscope,
  Briefcase,
  Globe2,
  Plane,
  ShieldCheck,
  Mail,
  Bell,
  Newspaper,
  Download,
  HelpCircle,
  Lightbulb,
  Clock,
  Eye,
  BookOpen,
  ArrowUpRight,
  Facebook,
} from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { RevealDiv, RevealSpan } from "@/components/ui/RevealItem";
import { InfoNote } from "@/components/ui/InfoNote";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { SITE, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog & Resources — SRC Knowledge Centre",
  description:
    "The SRC Knowledge Centre — practical information on study abroad, scholarships, PhD funding, teaching jobs, HR & recruitment, global careers, visas and immigration.",
};

const heroHighlights = [
  { value: SITE.founded, label: "Established" },
  { value: <AnimatedCounter to={8} />, label: "Knowledge Topics" },
  { icon: <ShieldCheck className="size-4" strokeWidth={1.75} />, label: "Verified Sources" },
  { icon: <Mail className="size-4" strokeWidth={1.75} />, label: "Free to Subscribe" },
];

const topics = [
  {
    icon: <GraduationCap className="size-5" strokeWidth={1.75} />,
    title: "Study Abroad",
    description: "Choosing a destination, university and course — plus tuition, cost of living and pre-departure prep.",
    tags: "Destinations · Admissions · Student Visas",
    href: "/study-abroad",
  },
  {
    icon: <Award className="size-5" strokeWidth={1.75} />,
    title: "Scholarships",
    description: "Fully funded awards, application tips, deadlines, and how to spot a scholarship scam.",
    tags: "Fully Funded · Application Tips · Myths & Facts",
    href: "/scholarships",
  },
  {
    icon: <Microscope className="size-5" strokeWidth={1.75} />,
    title: "PhD & Academic Research",
    description: "Finding funded PhD opportunities, identifying supervisors, and preparing research proposals.",
    tags: "Funded PhDs · Research Proposals · Academic CVs",
    href: "/scholarships",
  },
  {
    icon: <span className="text-xl leading-none">👨‍🏫</span>,
    title: "Canada Teaching Jobs",
    description: "Certification, provincial requirements, and how international teacher recruitment actually works.",
    tags: "Certification · Provinces · Recruitment",
    href: "/canada-teaching-jobs",
  },
  {
    icon: <Briefcase className="size-5" strokeWidth={1.75} />,
    title: "HR & Recruitment",
    description: "Talent sourcing, candidate preparation, and workforce trends for employers and job seekers.",
    tags: "Talent Sourcing · Interview Prep · Workforce Trends",
    href: "/canada-teaching-jobs",
  },
  {
    icon: <Globe2 className="size-5" strokeWidth={1.75} />,
    title: "Global Careers",
    description: "Planning an international career move — CVs, interviews, and long-term talent mobility.",
    tags: "CV Preparation · Interviews · Talent Mobility",
    href: "/canada-teaching-jobs",
  },
  {
    icon: <Plane className="size-5" strokeWidth={1.75} />,
    title: "Visa Information",
    description: "Visitor, student and business visas — plus common refusal reasons and interview prep.",
    tags: "Student · Visitor · Business",
    href: "/visa-services",
  },
  {
    icon: <Newspaper className="size-5" strokeWidth={1.75} />,
    title: "Immigration Updates",
    description: "Canada PR, Express Entry, EB-2 NIW, and the policy changes that actually matter.",
    tags: "Canada PR · Express Entry · EB-2 NIW",
    href: "/immigration-services",
  },
];

const upcomingFeatures = [
  {
    icon: <Award className="size-5" strokeWidth={1.75} />,
    title: "Scholarship of the Week",
    description: "One selected opportunity, spotlighted every week — country, funding, eligibility and deadline.",
  },
  {
    icon: <Bell className="size-5" strokeWidth={1.75} />,
    title: "Opportunity Alerts",
    description: "Scholarships, PhD positions, teaching roles, fellowships and professional openings, as they surface.",
  },
  {
    icon: <Newspaper className="size-5" strokeWidth={1.75} />,
    title: "Visa & Immigration Updates",
    description: "Plain-language explainers when a government or embassy changes something that affects applicants.",
  },
  {
    icon: <Download className="size-5" strokeWidth={1.75} />,
    title: "Downloadable Checklists",
    description: "Printable checklists for scholarships, visas, PhD applications, CVs and interview prep.",
  },
];

const factCheckQuestions = [
  {
    title: "Fact vs. Rumour",
    question: "Can you find this on an official website — not just a social media post or forwarded message?",
  },
  {
    title: "Official Update vs. Social Media Claim",
    question: "Was it published by the embassy, university, government body or scholarship provider itself?",
  },
  {
    title: "Legitimate Opportunity vs. Potential Scam",
    question: "Does it ask for payment before an offer, or promise a guaranteed result? That's a red flag.",
  },
];

const principles = [
  { icon: <ShieldCheck className="size-5" strokeWidth={1.75} />, title: "Accurate", description: "We seek to share information from reliable sources." },
  { icon: <Lightbulb className="size-5" strokeWidth={1.75} />, title: "Practical", description: "We focus on information that people can understand and use." },
  { icon: <Clock className="size-5" strokeWidth={1.75} />, title: "Timely", description: "We aim to highlight relevant updates and opportunities." },
  { icon: <ShieldCheck className="size-5" strokeWidth={1.75} />, title: "Responsible", description: "We avoid promoting false promises or misleading claims." },
  { icon: <Eye className="size-5" strokeWidth={1.75} />, title: "Transparent", description: "We encourage readers to verify important information through official sources." },
  { icon: <BookOpen className="size-5" strokeWidth={1.75} />, title: "Educational", description: "Our objective is to increase knowledge and awareness." },
];

const alertCategories = [
  "🎓 Scholarships",
  "🔬 PhD Positions",
  "👨‍🏫 Teaching Opportunities",
  "💼 International Careers",
  "🌍 Fellowships",
  "📚 Research Opportunities",
  "🤝 Professional Opportunities",
];

export default function BlogPage() {
  return (
    <>
      <CinematicHero
        eyebrow="SRC Knowledge Centre"
        title="Learn. Discover. Prepare. Make Informed Decisions."
        description="A growing library of practical information, educational resources, global opportunity updates and professional insights from Success Resource Consult — built so every visitor leaves knowing something they didn't know before."
        highlights={heroHighlights}
      >
        <Button href="#topics">Explore the Knowledge Centre</Button>
        <Button href="#subscribe" variant="outline-light">
          Subscribe for Updates
        </Button>
      </CinematicHero>

      <section className="border-y border-navy-900/[0.06] bg-white py-10">
        <Container>
          <Reveal>
            <p className="text-balance text-center text-lg font-semibold text-navy-950 sm:text-xl">
              Every visitor should leave our platform knowing something they
              did not know before.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Topics */}
      <section id="topics" className="scroll-mt-24 bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Explore the Knowledge Centre"
            title="Eight areas. One goal — helping you decide with confidence."
            description="Our content is created to inform, educate, and encourage responsible decision-making for students, graduates, researchers, professionals, and families."
          />
          <RevealGroup className="mt-14 flex flex-wrap justify-center gap-5 lg:mt-16">
            {topics.map((topic) => (
              <RevealDiv
                key={topic.title}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]"
              >
                <Link
                  href={topic.href}
                  className="card-pop group flex h-full flex-col rounded-3xl border border-navy-900/[0.07] bg-white p-7 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-navy-600">
                    {topic.icon}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-navy-950 transition-colors duration-500 ease-premium group-hover:text-navy-700">
                    {topic.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {topic.description}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-navy-400">
                    {topic.tags}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-800">
                    Explore
                    <ArrowUpRight className="size-4 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </RevealDiv>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Coming to the Knowledge Centre */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(30,53,112,0.35)_0%,rgba(5,10,28,0)_60%)]" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Coming to the Knowledge Centre"
            title="Built for people who don't want to miss an opportunity"
            description="We're rolling these out as the Knowledge Centre grows. Subscribe below and they'll land in your inbox the moment they're live."
            light
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid
              features={upcomingFeatures}
              columns={2}
              tone="dark"
            />
          </div>
        </Container>
      </section>

      {/* Fact check — real, usable today */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="SRC Fact Check"
            title="Three questions before you trust — or share — anything"
            description="The internet is full of information, and misinformation. Before acting on an opportunity or an update, ask yourself:"
          />
          <div className="mt-12 space-y-5">
            {factCheckQuestions.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="flex items-start gap-5 rounded-2xl border border-navy-900/[0.07] bg-paper p-6 sm:p-7"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-950">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                    {item.question}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-8">
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-800 hover:text-navy-950"
            >
              See Scholarship Myths &amp; Facts
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-800 hover:text-navy-950"
            >
              <HelpCircle className="size-4" />
              Browse Frequently Asked Questions
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Opportunity alert categories */}
      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeader
            eyebrow="SRC Opportunity Alert"
            title="Stay ahead of the opportunity"
            description="When alerts go live, they'll cover opportunities that may be relevant to our community — always verified through the official source before we share them."
          />
          <RevealGroup className="mt-8 flex flex-wrap items-center justify-center gap-2.5" stagger={0.05}>
            {alertCategories.map((item) => (
              <RevealSpan
                key={item}
                className="rounded-full border border-navy-900/10 bg-white px-4 py-2 text-xs font-medium text-navy-700"
              >
                {item}
              </RevealSpan>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Content principles */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Content Principles"
            title="What we aim for in everything we publish"
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={principles} />
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-3xl">
          <InfoNote title="Important Information">
            SRC Knowledge Centre content is provided for general
            informational and educational purposes. Information relating to
            scholarships, visas, immigration, employment, and international
            opportunities may change — readers should always verify current
            information through the relevant official government,
            university, employer, scholarship provider, or regulatory
            authority. SRC does not guarantee scholarship awards, university
            admission, employment, job placement, visa approval, or
            immigration approval. Where professional legal or regulated
            immigration advice is required, readers should seek advice from
            an appropriately authorized professional.
          </InfoNote>
        </Container>
      </section>

      {/* Newsletter */}
      <section id="subscribe" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <Container className="max-w-2xl">
          <Reveal className="overflow-hidden rounded-3xl bg-navy-950 px-8 py-12 text-center shadow-glow-navy sm:px-14 sm:py-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Never Miss an Opportunity
            </span>
            <h2 className="mt-6 text-balance text-2xl font-semibold text-white sm:text-3xl">
              Join the SRC Community
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Stay connected and receive updates on scholarships, PhD
              opportunities, study abroad, teaching jobs, global careers,
              visas, immigration news and educational resources.
            </p>
            <div className="mt-7 flex justify-center">
              <NewsletterForm />
            </div>
            {SOCIALS.facebook && (
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/60 hover:text-white"
              >
                <Facebook className="size-3.5" strokeWidth={1.75} />
                Follow SRC on Facebook
              </a>
            )}
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Knowledge First. Opportunity Always."
        title="Have a Question We Haven't Covered Yet?"
        description="Book a consultation and get guidance tailored specifically to your situation."
        secondaryLabel="Ask Us Directly"
        secondaryHref="/contact"
      />
    </>
  );
}
