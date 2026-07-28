import type { Metadata } from "next";
import { Briefcase, Building2, Users } from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { ImageFeature } from "@/components/ui/ImageFeature";
import { FAQSection } from "@/components/ui/FAQSection";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";

const heroHighlights = [
  { value: <span className="text-2xl sm:text-3xl">🍁</span>, label: "Canada" },
  { value: <span className="text-2xl sm:text-3xl">🇺🇸</span>, label: "United States" },
  { value: <AnimatedCounter to={8} />, label: "HR Service Areas" },
  { label: "Ethical Recruitment" },
];

export const metadata: Metadata = {
  title: "Canada Teaching Jobs & Global Careers",
  description:
    "Ethical guidance for Canada teaching opportunities, international recruitment, HR consulting and employer partnerships from Success Resource Consult.",
};

const canadaGuidance = [
  "Eligibility requirements.",
  "Teacher certification and registration processes.",
  "Required documentation.",
  "Employment application preparation.",
  "Interview preparation.",
  "Professional expectations within Canadian schools.",
  "Immigration information related to employment pathways where applicable.",
];

const usGuidance = [
  "Programme eligibility.",
  "Required qualifications.",
  "Documentation preparation.",
  "Interview readiness.",
  "Professional expectations and workplace standards.",
];

const recruitmentGuidance = [
  "Employment readiness.",
  "Professional documentation.",
  "CV and résumé review.",
  "Interview preparation.",
  "Understanding employer expectations and requirements.",
];

const hrServices = [
  "Recruitment support.",
  "Talent acquisition.",
  "Candidate pre-screening.",
  "HR advisory services.",
  "Organizational development.",
  "Performance management guidance.",
  "HR documentation support.",
  "Employer branding support.",
];

const employerPartners = [
  "Educational institutions.",
  "School boards.",
  "Colleges and universities.",
  "Recruitment agencies.",
  "Corporate organizations.",
  "Government-approved employers.",
  "Professional associations.",
];

const whyProfessionals = [
  "Honest and transparent guidance.",
  "Personalized career advisory.",
  "Professional document preparation support.",
  "Ethical recruitment practices.",
  "Continuous communication throughout the process.",
  "Respect for official employer and regulatory requirements.",
];

const whyEmployers = [
  "Understanding employer requirements.",
  "Promoting ethical recruitment practices.",
  "Providing professional communication.",
  "Supporting candidate preparation.",
  "Building long-term partnerships.",
  "Respecting confidentiality and professional standards.",
];

const faqs = [
  {
    question: "Can SRC guarantee employment?",
    answer:
      "No. Employment decisions are made solely by employers based on their recruitment processes, organizational needs, and applicable regulations. Our role is to provide professional guidance and support candidates throughout the application process.",
  },
  {
    question: "Can SRC guarantee a work visa or work permit?",
    answer:
      "No. Visa and work permit decisions are made by the relevant immigration authorities. SRC assists clients by providing guidance on documentation and application preparation in accordance with official requirements.",
  },
  {
    question: "Who can apply?",
    answer:
      "Eligibility depends on the specific opportunity. Programmes may be available for qualified professionals such as teachers, healthcare professionals, engineers, IT specialists, skilled tradespeople, and other occupations, depending on employer needs and applicable regulations.",
  },
];

export default function CanadaTeachingJobsPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Global Careers"
        title="Canada Teaching Jobs & Global Career Opportunities"
        description="SRC works to connect qualified professionals with ethical international employment opportunities through partnerships with employers and recruitment organizations."
        highlights={heroHighlights}
        backgroundImage="/images/canada-teaching.png"
      >
        <Button href="/book-consultation?service=Global%20Careers" size="lg">
          Book a Career Consultation
        </Button>
        <Button href="/contact" variant="outline-light" size="lg">
          Partner With SRC
        </Button>
      </CinematicHero>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <ImageFeature imageSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200" imageAlt="Professional teacher in a modern classroom">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍁</span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
                Canada Teaching Opportunities
              </span>
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.15] text-navy-950 sm:text-4xl">
              Rewarding opportunities for qualified educators
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg">
              Canada continues to offer rewarding career opportunities for
              qualified educators in many provinces, depending on labour
              market needs and provincial requirements. Our objective is to
              help educators prepare competitive applications while
              understanding that employment decisions are made by individual
              employers and regulatory requirements vary by province.
            </p>
            <Reveal delay={0.15} className="mt-10">
              <CheckList items={canadaGuidance} columns={1} />
            </Reveal>
          </ImageFeature>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇺🇸</span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
              United States Teaching Opportunities
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.15] text-navy-950 sm:text-4xl">
            Guidance where programmes are available
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg">
            The United States offers a range of teaching opportunities
            through various programmes and employer recruitment
            initiatives. Programme availability and immigration requirements
            are subject to applicable U.S. laws and policies at the time of
            application.
          </p>
          <Reveal delay={0.15} className="mt-10">
            <CheckList items={usGuidance} columns={1} className="max-w-sm mx-auto" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="International Recruitment"
            title="Connecting qualified professionals with ethical opportunities"
            description="We also support employers by assisting with candidate sourcing and pre-screening where appropriate."
          />
          <Reveal delay={0.15} className="mx-auto mt-12 max-w-3xl">
            <CheckList items={recruitmentGuidance} columns={1} className="max-w-sm mx-auto" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Users className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Human Resource Consulting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                Our HR consulting services are designed to support
                organizations in developing effective workforce solutions.
              </p>
              <Reveal delay={0.12} className="mt-7 w-full">
                <CheckList items={hrServices} columns={1} tone="dark" />
              </Reveal>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Building2 className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Employer Partnerships
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                We believe that strong partnerships create meaningful
                opportunities for individuals while helping organizations
                access qualified and motivated talent. SRC welcomes
                collaboration with:
              </p>
              <Reveal delay={0.12} className="mt-7 w-full">
                <CheckList items={employerPartners} columns={1} tone="dark" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white">
                <Briefcase className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy-950 sm:text-2xl">
                Why Professionals Choose SRC
              </h3>
              <Reveal delay={0.12} className="mt-7 w-full">
                <CheckList items={whyProfessionals} columns={1} />
              </Reveal>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white">
                <Building2 className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy-950 sm:text-2xl">
                Why Employers Partner With SRC
              </h3>
              <Reveal delay={0.12} className="mt-7 w-full">
                <CheckList items={whyEmployers} columns={1} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <FAQSection
        items={faqs}
        description="Answers to common questions about global career opportunities through SRC."
      />

      <CtaBand
        title="Start Your Global Career Journey"
        description="Whether you are pursuing your first international opportunity or expanding your organization's talent network, Success Resource Consult is ready to support your goals with professionalism and integrity."
        primaryLabel="Book a Career Consultation"
        primaryHref="/book-consultation?service=Global%20Careers"
        secondaryLabel="Partner With SRC"
        secondaryHref="/contact"
      />
    </>
  );
}
