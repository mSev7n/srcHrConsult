import type { Metadata } from "next";
import {
  MessagesSquare,
  BookOpen,
  UserCheck,
  Eye,
  ShieldCheck,
  ClipboardCheck,
  ChevronRight,
  XCircle,
} from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { RevealSpan, RevealDiv } from "@/components/ui/RevealItem";
import { CheckList } from "@/components/ui/CheckList";
import { ImageFeature } from "@/components/ui/ImageFeature";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { InfoNote } from "@/components/ui/InfoNote";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Immigration Services",
  description:
    "Explore your pathway to a new future with Success Resource Consult — Canada immigration, Canada permanent residence, U.S. immigration, EB-2 NIW, and immigration profile assessments.",
};

const heroHighlights = [
  { value: SITE.founded, label: "Established" },
  { value: "🇨🇦", label: "Canada Pathways" },
  { value: "🇺🇸", label: "US Pathways" },
  { label: "Honest, No-Guarantee Advice" },
];

const quickLinks = [
  { label: "Canada Immigration", href: "#canada-immigration" },
  { label: "Canada PR", href: "#canada-pr" },
  { label: "U.S. Immigration", href: "#us-immigration" },
  { label: "EB-2 NIW", href: "#eb2-niw" },
  { label: "Profile Assessment", href: "#assessment" },
];

const pathways = [
  {
    id: "canada-immigration",
    flag: "🇨🇦",
    title: "Canada Immigration",
    description:
      "Canada offers several immigration pathways for eligible individuals and families. Depending on individual circumstances, pathways may include:",
    items: [
      "Economic immigration.",
      "Provincial or territorial nomination pathways.",
      "Express Entry-related programmes.",
      "Family sponsorship.",
      "Business and entrepreneur pathways.",
      "Selected work-to-residence pathways.",
      "Other applicable immigration programmes.",
    ],
    note: "Eligibility depends on the specific programme and the applicant's circumstances.",
    ctaLabel: "Explore Canada Immigration",
  },
  {
    id: "canada-pr",
    flag: "🇨🇦",
    title: "Canada Permanent Residence",
    description:
      "Permanent residence in Canada may provide eligible individuals with the opportunity to live and work in Canada on a long-term basis. Potential pathways may include:",
    items: [
      "Express Entry.",
      "Provincial Nominee Programmes.",
      "Family sponsorship.",
      "Other eligible economic immigration pathways.",
    ],
    note: "SRC can provide general information and guidance relating to selected pathways.",
    ctaLabel: "Explore Canada PR Options",
  },
  {
    id: "us-immigration",
    flag: "🇺🇸",
    title: "U.S. Immigration Opportunities",
    description:
      "The United States offers various immigration and employment-based pathways for eligible individuals. Depending on circumstances, opportunities may include:",
    items: [
      "Employment-based immigration.",
      "Family-based immigration.",
      "Extraordinary ability pathways.",
      "National interest-based pathways.",
      "Other applicable categories.",
    ],
    note: "Immigration policies and programme availability may change.",
    ctaLabel: "Explore U.S. Immigration",
  },
];

const niwProfiles = [
  "Researchers",
  "Scientists",
  "Engineers",
  "Healthcare professionals",
  "Academics",
  "Lecturers",
  "Entrepreneurs",
  "Technology professionals",
  "Business professionals",
  "Other qualified individuals",
];

const assessmentFactors = [
  "Age.",
  "Education.",
  "Professional background.",
  "Work experience.",
  "Language ability.",
  "Research experience.",
  "Professional achievements.",
  "Business experience.",
  "Family circumstances.",
  "Financial considerations.",
  "Intended destination.",
];

const processSteps = [
  { title: "Initial Consultation", description: "We begin by understanding your goals and circumstances." },
  {
    title: "Profile Assessment",
    description:
      "We review relevant information about your education, work experience, professional background, and other applicable factors.",
  },
  {
    title: "Pathway Exploration",
    description: "We help you understand potential immigration pathways that may be relevant to your circumstances.",
  },
  {
    title: "Document Preparation",
    description: "Where applicable, we provide guidance on preparing the required documentation.",
  },
  {
    title: "Application Support",
    description:
      "Depending on the agreed scope of service, we may assist with organizing and preparing application materials.",
  },
  { title: "Submission", description: "Applications are submitted through the appropriate official channels." },
  { title: "Government Assessment", description: "The relevant immigration authority assesses the application." },
  { title: "Decision", description: "The final decision is made by the relevant government authority." },
];

const iconProps = { className: "size-5", strokeWidth: 1.75 } as const;

const whyChoose = [
  {
    icon: <MessagesSquare {...iconProps} />,
    title: "Professional Guidance",
    description: "We help clients understand complex international mobility processes.",
  },
  {
    icon: <BookOpen {...iconProps} />,
    title: "Knowledge First",
    description: "We believe informed applicants make better decisions.",
  },
  {
    icon: <UserCheck {...iconProps} />,
    title: "Profile-Based Approach",
    description: "We recognize that every applicant's circumstances are different.",
  },
  {
    icon: <ClipboardCheck {...iconProps} />,
    title: "Structured Process",
    description: "We guide clients through a clear process.",
  },
  {
    icon: <Eye {...iconProps} />,
    title: "Transparent Communication",
    description: "We believe clients should understand the process and requirements.",
  },
  {
    icon: <ShieldCheck {...iconProps} />,
    title: "Ethical Practice",
    description: "We do not support fraudulent documentation, misrepresentation, or false claims.",
  },
];

const pathwayGroups = [
  {
    flag: "🇨🇦",
    title: "Canada",
    items: [
      "Express Entry.",
      "Provincial Nominee Programmes.",
      "Family sponsorship.",
      "Selected economic immigration pathways.",
      "Other eligible programmes.",
    ],
  },
  {
    flag: "🇺🇸",
    title: "United States",
    items: ["EB-2 NIW.", "Employment-based pathways.", "Other selected immigration categories."],
  },
  {
    flag: "🌍",
    title: "Other Destinations",
    items: ["Information may be available on selected immigration and mobility pathways in other countries."],
  },
];

const whoBenefits = [
  {
    icon: <span className="text-xl">👩‍💼</span>,
    title: "Professionals",
    description: "Individuals seeking international career and immigration opportunities.",
  },
  {
    icon: <span className="text-xl">🎓</span>,
    title: "Graduates",
    description: "Individuals exploring immigration options based on their academic and professional backgrounds.",
  },
  {
    icon: <span className="text-xl">🔬</span>,
    title: "Researchers & Academics",
    description: "Individuals with research, academic, or professional achievements exploring international opportunities.",
  },
  {
    icon: <span className="text-xl">👨‍💻</span>,
    title: "Technology Professionals",
    description: "Qualified professionals exploring international career and immigration pathways.",
  },
  {
    icon: <span className="text-xl">🏢</span>,
    title: "Entrepreneurs & Business Owners",
    description: "Individuals exploring eligible business and investment-related pathways.",
  },
  {
    icon: <span className="text-xl">👨‍👩‍👧</span>,
    title: "Families",
    description: "Individuals exploring family-related immigration pathways.",
  },
];

const committedTo = [
  "Providing accurate information.",
  "Encouraging truthful applications.",
  "Respecting client confidentiality.",
  "Promoting legitimate pathways.",
  "Avoiding false promises.",
  "Communicating transparently.",
  "Respecting applicable laws and regulations.",
];

const doNotSupport = [
  "Fake documents.",
  "False claims.",
  "Misrepresentation.",
  "Fraudulent applications.",
  "Attempts to circumvent immigration requirements.",
];

export default function ImmigrationServicesPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Immigration Services"
        title="Explore Your Pathway to a New Future"
        description="Immigration decisions can be among the most important decisions an individual or family makes. At SRC, we provide professional information, guidance, and support relating to selected immigration and international mobility pathways — helping you understand your options and prepare with confidence."
        highlights={heroHighlights}
        backgroundImage="/images/immigration.png"
      >
        <Button href="/book-consultation?service=Immigration%20Services" size="lg">
          Book an Immigration Consultation
        </Button>
        <Button href="/eligibility-assessment" variant="outline-light" size="lg">
          Complete Immigration Assessment
        </Button>
      </CinematicHero>

      <section className="border-y border-navy-900/[0.06] bg-white py-10">
        <Container>
          <Reveal>
            <p className="text-balance text-center text-lg font-semibold text-navy-950 sm:text-xl">
              Understand Your Options. Prepare Properly. Move Forward with
              Confidence.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-6">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full border border-navy-900/10 bg-white px-4 py-2 text-xs font-medium text-navy-700 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-navy-900/25 hover:text-navy-950 hover:shadow-soft"
              >
                {link.label}
                <ChevronRight className="size-3.5" />
              </a>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Pathway cards */}
      <section className="bg-paper py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Our Immigration Services"
            title="Information and guidance across selected pathways"
            description="SRC provides information and guidance relating to selected immigration pathways and international mobility opportunities."
          />

          <div className="mt-14 space-y-6 lg:mt-16">
            {pathways.map((pathway, i) => (
              <Reveal
                key={pathway.id}
                id={pathway.id}
                delay={i * 0.05}
                className="card-pop scroll-mt-28 rounded-3xl border border-navy-900/[0.07] bg-white p-8 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/60 sm:p-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
                  <div>
                    <span className="text-3xl leading-none">{pathway.flag}</span>
                    <h3 className="mt-3 text-xl font-semibold text-navy-950 sm:text-2xl">
                      {pathway.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-600 sm:text-base">
                      {pathway.description}
                    </p>
                    <p className="mt-4 text-xs italic leading-relaxed text-navy-500">
                      {pathway.note}
                    </p>
                    <Button
                      href={`/book-consultation?service=Immigration%20Services`}
                      className="mt-6"
                    >
                      {pathway.ctaLabel}
                    </Button>
                  </div>
                  <CheckList items={pathway.items} columns={1} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* EB-2 NIW spotlight */}
      <section
        id="eb2-niw"
        className="relative scroll-mt-28 overflow-hidden bg-navy-950 py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(30,53,112,0.35)_0%,rgba(5,10,28,0)_60%)]" />
        <Container className="relative max-w-4xl">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              EB-2 NIW — National Interest Waiver
            </span>
            <h2 className="mt-6 text-balance text-2xl font-semibold text-white sm:text-3xl">
              For Professionals, Researchers, Entrepreneurs &amp; Qualified
              Individuals
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-6 max-w-2xl space-y-4 text-center">
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              The EB-2 National Interest Waiver (NIW) is a U.S. immigration
              pathway that may allow certain eligible individuals to seek a
              waiver of the job offer and labor certification requirements
              associated with certain EB-2 immigrant visa classifications.
            </p>
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              The pathway may be relevant to individuals with advanced
              degrees or exceptional ability whose proposed work may have
              substantial merit and national importance to the United
              States.
            </p>
          </Reveal>

          <RevealGroup
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
            stagger={0.04}
          >
            {niwProfiles.map((profile) => (
              <RevealSpan
                key={profile}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/85"
              >
                {profile}
              </RevealSpan>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-xs italic leading-relaxed text-white/50">
              Eligibility depends on the specific facts and evidence of each
              case. SRC can provide information and support in understanding
              the pathway and preparing relevant materials, subject to the
              scope of services agreed with the client.
            </p>
          </Reveal>

          <Reveal
            delay={0.28}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/book-consultation?service=Immigration%20Services" variant="secondary">
              Explore EB-2 NIW
            </Button>
            <Button href="/eligibility-assessment" variant="outline-light">
              Request an NIW Assessment
            </Button>
          </Reveal>
        </Container>
      </section>

      <section id="assessment" className="scroll-mt-28 bg-white py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Immigration Profile Assessment"
            title="Is there an immigration pathway that may fit your profile?"
            description="Before beginning an immigration process, it is important to understand your circumstances. A profile assessment may consider factors such as:"
          />
          <Reveal delay={0.15} className="mt-12">
            <CheckList items={assessmentFactors} columns={1} className="max-w-sm mx-auto" />
          </Reveal>
          <Reveal delay={0.22} className="mt-8 text-center">
            <p className="text-xs italic leading-relaxed text-navy-500">
              The specific factors considered depend on the immigration
              pathway.
            </p>
            <Button href="/eligibility-assessment" className="mt-6">
              Complete Immigration Assessment
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Process"
            title="Our Immigration Process"
            description="A clear, step-by-step approach from first consultation to final decision."
          />
          <div className="mt-14 lg:mt-16">
            <NumberedSteps steps={processSteps} columns={4} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="Why Choose SRC" title="Guidance you can trust" />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={whyChoose} />
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Pathways We May Discuss"
            title="Depending on current programme availability and eligibility"
            light
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-16">
            {pathwayGroups.map((group) => (
              <RevealDiv
                key={group.title}
                className="card-pop card-pop-dark flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <span className="text-2xl leading-none">{group.flag}</span>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 w-full">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start justify-center gap-2 text-sm text-white/70">
                      <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-white/40" />
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealDiv>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="mt-8 text-center">
            <p className="text-xs italic text-white/45">
              Requirements and programme availability may change.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Who may benefit */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Who May Benefit"
            title="Our services may be relevant to"
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={whoBenefits} />
          </div>
        </Container>
      </section>

      {/* Immigration vs Visa */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <ImageFeature imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" imageAlt="Professional consultants discussing immigration options">
            <SectionHeader
              eyebrow="Immigration vs. Visa Services"
              title="Understanding the difference"
              align="left"
            />
            <div className="mt-10 space-y-5">
              <Reveal className="rounded-3xl border border-navy-900/[0.07] bg-paper p-7 sm:p-8 flex flex-col items-center text-center">
                <h3 className="text-base font-semibold text-navy-950">Visa Services</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Visa services generally relate to permission to enter or
                  temporarily remain in a country for a specific purpose.
                </p>
              </Reveal>
              <Reveal delay={0.08} className="rounded-3xl border border-navy-900/[0.07] bg-paper p-7 sm:p-8 flex flex-col items-center text-center">
                <h3 className="text-base font-semibold text-navy-950">Immigration Services</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Immigration services generally involve pathways that may
                  lead to longer-term residence or permanent immigration
                  status.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.16} className="mt-8 text-left">
              <p className="text-sm leading-relaxed text-navy-600">
                The requirements and processes are different. SRC provides
                information and guidance across selected areas while helping
                clients understand the distinction between temporary travel
                and long-term immigration pathways.
              </p>
            </Reveal>
          </ImageFeature>
        </Container>
      </section>

      {/* Ethical commitment */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Commitment"
            title="Our Commitment to Ethical Immigration Guidance"
            description="SRC believes immigration services must be delivered responsibly."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2">
            <Reveal className="flex flex-col items-center text-center rounded-3xl border border-navy-900/[0.07] bg-white p-7 shadow-soft sm:p-8">
              <h3 className="text-base font-semibold text-navy-950">
                We are committed to:
              </h3>
              <div className="mt-5 w-full">
                <CheckList items={committedTo} columns={1} />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col items-start text-left rounded-3xl border border-navy-900/[0.07] bg-navy-950/[0.02] p-7 sm:p-8">
              <h3 className="text-base font-semibold text-navy-950">
                We do not support:
              </h3>
              <div className="mt-5 w-full space-y-3">
                {doNotSupport.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 size-5 shrink-0 text-navy-400" strokeWidth={1.75} />
                    <span className="text-sm leading-relaxed text-navy-500 text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Disclaimers */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6">
          <InfoNote title="Important: No Guarantee of Outcome">
            Immigration decisions are made by the relevant government
            authority. SRC does not guarantee immigration approval,
            permanent residence, visa approval, work authorization,
            citizenship, processing time, or any specific immigration
            outcome. Eligibility and approval depend on the relevant
            programme requirements and the assessment of the competent
            authority.
          </InfoNote>
          <InfoNote title="Regulated Immigration Services">
            Immigration laws vary between countries. Where a matter requires
            legal representation or advice that must legally be provided by
            a licensed or regulated immigration professional, SRC may
            recommend that clients seek assistance from an appropriately
            authorized professional. Where SRC works with regulated
            immigration professionals or legal practitioners, the scope of
            each professional&rsquo;s role will be clearly defined.
          </InfoNote>
        </Container>
      </section>

      <CtaBand
        eyebrow="Knowledge. Guidance. Global Mobility."
        title="Ready to Explore Your Immigration Options?"
        description="Your immigration journey begins with understanding your options."
        primaryLabel="Book an Immigration Consultation"
        primaryHref="/book-consultation?service=Immigration%20Services"
        secondaryLabel="Complete Immigration Assessment"
        secondaryHref="/eligibility-assessment"
      />
    </>
  );
}
