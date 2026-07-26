import type { Metadata } from "next";
import { GraduationCap, Plane, Briefcase, Users, FileSearch } from "lucide-react";
import { SplitHero } from "@/components/ui/SplitHero";
import { ProcessDotsVisual } from "@/components/ui/visuals/ProcessDotsVisual";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FlagGrid } from "@/components/ui/FlagGrid";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { InfoNote } from "@/components/ui/InfoNote";
import { FAQSection } from "@/components/ui/FAQSection";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";

const heroVisualSteps = [
  { label: "Consult", description: "We review your travel purpose and eligibility." },
  { label: "Prepare", description: "Guidance on documentation and forms." },
  { label: "Review", description: "We check for accuracy and completeness." },
  { label: "Submit", description: "You apply with confidence." },
];

export const metadata: Metadata = {
  title: "Visa Services",
  description:
    "Professional visa advisory from Success Resource Consult — student, visitor, business and family visit visa guidance, document review and interview preparation.",
};

const iconProps = { className: "size-5", strokeWidth: 1.75 } as const;

const services = [
  {
    icon: <GraduationCap {...iconProps} />,
    title: "Student Visas",
    description:
      "Guidance for eligible applicants pursuing academic opportunities in Canada, the US, UK, Netherlands, Germany, Ireland and Australia.",
  },
  {
    icon: <Plane {...iconProps} />,
    title: "Visitor Visas",
    description:
      "Guidance to help applicants prepare complete visitor visa applications for tourism, family visits, or short-term personal reasons.",
  },
  {
    icon: <Briefcase {...iconProps} />,
    title: "Business Visas",
    description:
      "Support for business travellers on required documentation, invitation letters, and application preparation.",
  },
  {
    icon: <Users {...iconProps} />,
    title: "Family Visit Visas",
    description:
      "Helping applicants understand documentation requirements and prepare applications in accordance with official immigration guidelines.",
  },
  {
    icon: <FileSearch {...iconProps} />,
    title: "Visa Document Review",
    description:
      "Many visa refusals result from incomplete or inconsistent documentation — we help identify potential gaps before submission.",
  },
];

const studentVisaSupport = [
  "Understanding visa requirements.",
  "Document preparation guidance.",
  "Financial documentation guidance.",
  "Application review.",
  "Visa interview preparation (where applicable).",
  "Pre-departure information.",
];

const destinations = [
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇦🇺", name: "Australia" },
];

const whyChoose = [
  "Honest and transparent advice.",
  "Professional document review.",
  "Personalized consultation.",
  "Clear explanations of visa requirements.",
  "Respect for official immigration procedures.",
  "Ethical and responsible service.",
];

const steps = [
  {
    title: "Initial Consultation",
    description: "Understanding your travel purpose and eligibility.",
  },
  {
    title: "Document Assessment",
    description:
      "Reviewing available documents and identifying additional requirements.",
  },
  {
    title: "Application Guidance",
    description:
      "Providing professional guidance on completing application forms and supporting documentation.",
  },
  {
    title: "Application Review",
    description: "Checking documents for accuracy, consistency, and completeness.",
  },
  {
    title: "Submission Guidance",
    description:
      "Explaining next steps, including biometrics, interviews (where required), and official submission procedures.",
  },
];

const faqs = [
  {
    question: "Can SRC guarantee my visa?",
    answer:
      "No. No consultant or agency can guarantee a visa. Only the relevant embassy or immigration authority has the legal authority to approve or refuse a visa application.",
  },
  {
    question: "What can SRC do?",
    answer:
      "We help you understand visa requirements, prepare complete documentation, review your application, identify common errors, prepare for interviews where applicable, and navigate the application process with confidence.",
  },
  {
    question: "Which countries does SRC support?",
    answer:
      "Depending on the service required, SRC provides visa advisory guidance for Canada, United States, United Kingdom, Netherlands, Germany, Ireland, Australia, and other destinations where appropriate.",
  },
];

export default function VisaServicesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Visa Services"
        title="Professional Visa Advisory Services"
        description="Applying for a visa can be one of the most important steps in achieving your travel, study, business, or family goals. We help you understand official requirements, prepare complete documentation, and submit well-organized applications."
        visual={<ProcessDotsVisual steps={heroVisualSteps} />}
      >
        <Button href="/book-consultation?service=Visa%20Services" size="lg">
          Book a Visa Consultation
        </Button>
        <Button href="/contact" variant="outline-light" size="lg">
          Ask a Question
        </Button>
      </SplitHero>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Visa Advisory Services"
            title="Guidance across every visa category"
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={services} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Student Visas"
                title="Support tailored to academic travel"
                description="Our support for student visa applicants includes:"
              />
              <Reveal delay={0.12} className="mt-8">
                <CheckList items={studentVisaSupport} columns={1} />
              </Reveal>
            </div>
            <div>
              <SectionHeader
                align="left"
                eyebrow="Destinations Covered"
                title="Guidance for these study destinations"
              />
              <Reveal delay={0.12} className="mt-8">
                <FlagGrid items={destinations} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Why Choose SRC"
            title="Guidance you can trust"
          />
          <Reveal delay={0.15} className="mt-12">
            <CheckList items={whyChoose} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Process"
            title="Our Visa Preparation Process"
            description="A structured, five-step approach to preparing every application."
          />
          <div className="mt-14 lg:mt-16">
            <NumberedSteps steps={steps} />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-3xl">
          <InfoNote title="Important Information">
            SRC provides professional visa advisory and preparation
            services. However, visa decisions are made solely by the
            relevant embassy, consulate, or immigration authority — we do
            not guarantee visa approval. Every application is assessed
            independently according to the laws and policies of the
            destination country. We believe that honest guidance and proper
            preparation are essential to every successful application.
          </InfoNote>
        </Container>
      </section>

      <FAQSection
        items={faqs}
        description="Answers to common questions about the visa application process."
      />

      <CtaBand
        title="Start Your Visa Journey"
        description="Every successful visa application begins with proper preparation. Speak with our team and receive personalized guidance based on your travel goals and current requirements."
        primaryLabel="Book a Visa Consultation Today"
        primaryHref="/book-consultation?service=Visa%20Services"
      />
    </>
  );
}
