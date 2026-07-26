import type { Metadata } from "next";
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Sparkles,
  FlaskConical,
  Landmark,
  Building2,
  Search,
  ClipboardCheck,
  FileText,
  PenLine,
  FileSearch,
  UserCheck,
  Mic,
} from "lucide-react";
import { SplitHero } from "@/components/ui/SplitHero";
import { FloatingStackVisual } from "@/components/ui/visuals/FloatingStackVisual";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FlagGrid } from "@/components/ui/FlagGrid";
import { FAQSection } from "@/components/ui/FAQSection";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";

const heroVisualItems = [
  {
    icon: <Sparkles className="size-5" strokeWidth={1.75} />,
    title: "Fully Funded",
    subtitle: "Tuition, living costs & more",
  },
  {
    icon: <Microscope className="size-5" strokeWidth={1.75} />,
    title: "PhD & Research",
    subtitle: "Fellowships worldwide",
  },
  {
    icon: <GraduationCap className="size-5" strokeWidth={1.75} />,
    title: "Undergrad to Postgrad",
    subtitle: "Every stage covered",
  },
];

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Scholarship advisory from Success Resource Consult — undergraduate, master's, PhD and fully funded scholarship guidance, application support and interview preparation.",
};

const whyScholarshipsMatter = [
  "World-class universities",
  "International research opportunities",
  "Global professional networks",
  "Leadership development programmes",
  "Career advancement",
  "Cross-cultural experiences",
  "Academic recognition",
];

const iconProps = { className: "size-5", strokeWidth: 1.75 } as const;

const opportunities = [
  {
    icon: <GraduationCap {...iconProps} />,
    title: "Undergraduate Scholarships",
    description: "For students beginning their higher education journey.",
  },
  {
    icon: <BookOpen {...iconProps} />,
    title: "Master's Scholarships",
    description:
      "Funding for graduates seeking advanced professional or academic qualifications.",
  },
  {
    icon: <Microscope {...iconProps} />,
    title: "PhD Scholarships",
    description:
      "Research-focused opportunities offered by universities, governments, and research institutions worldwide.",
  },
  {
    icon: <Sparkles {...iconProps} />,
    title: "Fully Funded Scholarships",
    description:
      "Programmes that may cover tuition, living expenses, health insurance, travel, or other approved costs, depending on the scholarship.",
  },
  {
    icon: <FlaskConical {...iconProps} />,
    title: "Research Fellowships",
    description:
      "Funding for researchers and academics seeking international collaboration and professional development.",
  },
  {
    icon: <Landmark {...iconProps} />,
    title: "Government Scholarships",
    description:
      "Programmes sponsored by national governments to promote education, research, and international cooperation.",
  },
  {
    icon: <Building2 {...iconProps} />,
    title: "University Scholarships",
    description:
      "Merit-based, need-based, and programme-specific scholarships offered directly by universities.",
  },
];

const destinations = [
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇮🇪", name: "Ireland" },
];

const advisoryServices = [
  {
    icon: <Search {...iconProps} />,
    title: "Scholarship Search Guidance",
    description:
      "Helping applicants identify opportunities that match their academic profile and career goals.",
  },
  {
    icon: <ClipboardCheck {...iconProps} />,
    title: "Eligibility Assessment",
    description: "Reviewing qualifications and advising on suitable scholarship programmes.",
  },
  {
    icon: <FileText {...iconProps} />,
    title: "Application Guidance",
    description: "Providing support throughout the scholarship application process.",
  },
  {
    icon: <PenLine {...iconProps} />,
    title: "Personal Statement & Motivation Letter Guidance",
    description:
      "Helping applicants prepare clear, authentic, and compelling application documents.",
  },
  {
    icon: <FileSearch {...iconProps} />,
    title: "Research Proposal Guidance",
    description:
      "Supporting postgraduate and doctoral applicants in developing well-structured research proposals.",
  },
  {
    icon: <UserCheck {...iconProps} />,
    title: "CV & Academic Profile Review",
    description:
      "Helping applicants present their academic achievements, research experience, leadership, and professional accomplishments effectively.",
  },
  {
    icon: <Mic {...iconProps} />,
    title: "Interview Preparation",
    description: "Providing guidance for scholarship interviews where applicable.",
  },
];

const myths = [
  {
    myth: "Scholarships are only for students with perfect grades.",
    fact: "Many scholarship providers consider leadership, community service, research potential, professional experience, financial need, or other factors in addition to academic performance.",
  },
  {
    myth: "Only undergraduate students receive scholarships.",
    fact: "Scholarships are available at undergraduate, master's, PhD, postdoctoral, research fellowship, and professional development levels.",
  },
  {
    myth: "Fully funded scholarships are impossible to win.",
    fact: "They are highly competitive but awarded every year to qualified applicants who meet the published requirements.",
  },
];

const faqs = [
  {
    question: "Can SRC guarantee a scholarship?",
    answer:
      "No. Scholarship decisions are made solely by the sponsoring institution or organization. Our role is to provide professional guidance and help applicants prepare competitive applications.",
  },
  {
    question: "Can I apply for more than one scholarship?",
    answer:
      "Yes. Many applicants submit applications to multiple scholarship programmes, provided they meet the eligibility requirements for each one.",
  },
  {
    question: "Do I need work experience?",
    answer:
      "Some scholarships require professional experience, while others are open to recent graduates. Requirements vary depending on the programme.",
  },
  {
    question: "Can mature students apply?",
    answer:
      "Yes. Many scholarship programmes welcome applicants at different stages of their academic or professional careers. Eligibility depends on the individual scholarship.",
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <SplitHero
        eyebrow="Scholarships"
        title="Scholarships That Turn Academic Dreams into Global Opportunities"
        description="At SRC, we believe financial limitations should not prevent talented and ambitious individuals from pursuing quality education. We help you identify suitable opportunities, understand requirements, and prepare competitive applications."
        visual={<FloatingStackVisual items={heroVisualItems} />}
      >
        <Button href="/book-consultation?service=Scholarships" size="lg">
          Book a Scholarship Consultation
        </Button>
        <Button href="/eligibility-assessment" variant="outline-light" size="lg">
          Free Eligibility Assessment
        </Button>
      </SplitHero>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Why Scholarships Matter"
            title="More than reduced tuition"
            description="Scholarships do more than reduce the cost of education. For many students, a scholarship is the opportunity that makes studying abroad possible."
          />
          <Reveal delay={0.15} className="mt-12">
            <CheckList items={whyScholarshipsMatter} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Opportunities We Help You Explore"
            title="Scholarships for every stage of academic life"
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={opportunities} />
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Countries We Cover"
            title="Scholarship guidance across leading destinations"
            light
          />
          <div className="mt-14 lg:mt-16">
            <FlagGrid items={destinations} />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Advisory Services"
            title="Strengthening every part of your application"
            description="We understand that scholarship applications are highly competitive. Success often depends on careful preparation, strong documentation, and meeting the scholarship provider's requirements."
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={advisoryServices} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Common Scholarship Myths"
            title="Separating myth from fact"
          />
          <div className="mt-12 space-y-5">
            {myths.map((item, i) => (
              <Reveal
                key={item.myth}
                delay={i * 0.08}
                className="rounded-2xl border border-navy-900/[0.07] bg-paper p-6 sm:p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-navy-500">
                  Myth
                </p>
                <p className="mt-1.5 text-base font-medium text-navy-950">
                  &ldquo;{item.myth}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-navy-500">
                  Fact
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600 sm:text-[15px]">
                  {item.fact}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection
        items={faqs}
        description="Answers to common questions about scholarship applications through SRC."
      />

      <CtaBand
        title="Start Your Scholarship Journey"
        description="Every successful scholarship application begins with careful planning. Speak with our team to discuss your academic goals, eligibility, and available scholarship opportunities."
        primaryLabel="Book a Scholarship Consultation Today"
        primaryHref="/book-consultation?service=Scholarships"
      />
    </>
  );
}
