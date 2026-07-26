import type { Metadata } from "next";
import {
  Compass,
  Landmark,
  ClipboardCheck,
  FileText,
  PenLine,
  Award,
  Plane,
  Luggage,
} from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { CountryShowcase } from "@/components/ui/CountryShowcase";
import { FAQSection } from "@/components/ui/FAQSection";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const heroHighlights = [
  { value: SITE.founded, label: "Established" },
  { value: <AnimatedCounter to={7} />, label: "Study Destinations" },
  { value: <AnimatedCounter to={8} />, label: "Support Services" },
  { label: "Ethical & Transparent Advisory" },
];

export const metadata: Metadata = {
  title: "Study Abroad",
  description:
    "Professional study abroad guidance from Success Resource Consult — university selection, admission guidance, application support, scholarships and student visa advisory for Canada, US, UK, Netherlands, Germany, Ireland and Australia.",
};

const whyStudyAbroad = [
  "Earn internationally recognized qualifications.",
  "Learn from leading academics and researchers.",
  "Develop valuable global skills.",
  "Experience new cultures and perspectives.",
  "Build international professional networks.",
  "Improve career prospects.",
  "Access advanced research and innovation environments.",
  "Enhance personal growth and independence.",
];

const countries = [
  {
    flag: "🇨🇦",
    name: "Canada",
    description:
      "Renowned for its high-quality education system, welcoming multicultural communities, strong research institutions, and excellent post-study opportunities available under applicable Canadian policies.",
  },
  {
    flag: "🇺🇸",
    name: "United States",
    description:
      "Home to many of the world's leading universities, offering diverse academic programmes, cutting-edge research, and a wide range of educational opportunities.",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    description:
      "Recognized for its historic universities, globally respected qualifications, and one-year master's programmes in many disciplines.",
  },
  {
    flag: "🇳🇱",
    name: "Netherlands",
    description:
      "Offers innovative teaching methods, numerous English-taught programmes, and excellent opportunities for research and postgraduate education.",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    description:
      "Known for academic excellence, engineering innovation, and many affordable or low-tuition public university programmes, subject to institutional policies.",
  },
  {
    flag: "🇮🇪",
    name: "Ireland",
    description:
      "Combines high-quality education with a vibrant economy, making it an attractive destination for international students.",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    description:
      "Offers internationally recognized qualifications, diverse learning environments, and strong student support services.",
  },
];

const iconProps = { className: "size-5", strokeWidth: 1.75 } as const;

const services = [
  {
    icon: <Compass {...iconProps} />,
    title: "Course & Career Guidance",
    description:
      "Helping you select programmes that align with your academic background, interests, and career aspirations.",
  },
  {
    icon: <Landmark {...iconProps} />,
    title: "University Selection",
    description:
      "Identifying institutions that match your academic profile, budget, and long-term goals.",
  },
  {
    icon: <ClipboardCheck {...iconProps} />,
    title: "Admission Guidance",
    description:
      "Supporting you throughout the application process to help ensure your documents meet institutional requirements.",
  },
  {
    icon: <FileText {...iconProps} />,
    title: "Application Support",
    description:
      "Providing guidance on preparing and submitting complete applications within deadlines.",
  },
  {
    icon: <PenLine {...iconProps} />,
    title: "Personal Statement & SOP Guidance",
    description:
      "Helping applicants prepare clear, well-structured statements that reflect their academic and professional aspirations.",
  },
  {
    icon: <Award {...iconProps} />,
    title: "Scholarship Guidance",
    description:
      "Identifying suitable scholarship opportunities and advising on competitive applications.",
  },
  {
    icon: <Plane {...iconProps} />,
    title: "Student Visa Advisory",
    description:
      "Providing guidance on student visa requirements, documentation, and interview preparation where applicable.",
  },
  {
    icon: <Luggage {...iconProps} />,
    title: "Pre-Departure Information",
    description:
      "Preparing students for life abroad with practical information about travel, accommodation, health insurance, budgeting, and cultural adjustment.",
  },
];

const whoCanApply = [
  "Secondary school graduates.",
  "Diploma holders.",
  "Undergraduate students.",
  "University graduates.",
  "Master's degree holders.",
  "Professionals seeking further education.",
  "Researchers pursuing postgraduate opportunities.",
  "Mature students considering career advancement.",
];

const whyChoose = [
  "Personalized guidance.",
  "Professional and ethical advisory services.",
  "Clear communication throughout the process.",
  "Helping clients make informed decisions.",
  "Supporting clients from consultation to departure.",
];

const faqs = [
  {
    question: "Can SRC guarantee admission?",
    answer:
      "No. Admission decisions are made solely by the respective educational institutions. Our role is to help applicants prepare accurate, complete, and competitive applications.",
  },
  {
    question: "Can SRC guarantee a student visa?",
    answer:
      "No. Visa decisions are made by the relevant embassy or immigration authority. We provide professional guidance to help applicants prepare complete applications in line with official requirements.",
  },
  {
    question: "Can I apply for scholarships?",
    answer:
      "Many institutions and organizations offer scholarships based on academic merit, financial need, leadership, research potential, or other criteria. Eligibility varies by programme and institution — SRC provides guidance on identifying suitable opportunities and preparing applications.",
  },
];

export default function StudyAbroadPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Study Abroad"
        title="Study Abroad with Confidence"
        description="Choosing to study abroad is one of the most important investments you can make in your future. Our experienced team supports your journey from first enquiry to departure — with professional, ethical guidance throughout."
        highlights={heroHighlights}
      >
        <Button href="/book-consultation?service=Study%20Abroad" size="lg">
          Book a Consultation
        </Button>
        <Button href="/eligibility-assessment" variant="outline-light" size="lg">
          Free Eligibility Assessment
        </Button>
      </CinematicHero>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Why Study Abroad?"
            title="More than a qualification — a life-changing experience"
            description="Studying abroad offers much more than academic credentials. For many students, it's an experience that shapes both their professional and personal futures."
          />
          <Reveal delay={0.15} className="mt-12">
            <CheckList items={whyStudyAbroad} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Study Destinations"
            title="Leading international education destinations"
            description="SRC provides guidance on educational opportunities across seven premier study destinations."
          />
          <div className="mt-14 lg:mt-16">
            <CountryShowcase countries={countries} />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive support, start to finish"
            description="SRC provides comprehensive support throughout your entire study abroad journey."
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={services} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Who Can Apply?"
            title="Guidance for every stage of your academic journey"
          />
          <Reveal delay={0.15} className="mt-12">
            <CheckList items={whoCanApply} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Why Choose SRC"
            title="Simplifying complex processes"
            description="Our role is to simplify complex processes while helping clients understand official requirements and make confident choices."
          />
          <Reveal delay={0.15} className="mt-12">
            <CheckList items={whyChoose} columns={1} />
          </Reveal>
        </Container>
      </section>

      <FAQSection
        items={faqs}
        description="Answers to common questions about studying abroad with SRC."
      />

      <CtaBand
        title="Begin Your Global Education Journey"
        description="Every successful academic journey begins with informed planning. Speak with our experienced team to discuss your study goals, preferred destinations, and available opportunities."
        primaryHref="/book-consultation?service=Study%20Abroad"
      />
    </>
  );
}
