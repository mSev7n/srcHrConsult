import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Sparkles,
  HeartHandshake,
  Lightbulb,
  ClipboardCheck,
  GraduationCap,
  Briefcase,
  Plane,
  Globe2,
  Users,
  CalendarCheck,
} from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { ImageFeature } from "@/components/ui/ImageFeature";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FlagGrid } from "@/components/ui/FlagGrid";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const heroVisualItems = [
  {
    icon: <CalendarCheck className="size-5" strokeWidth={1.75} />,
    title: `Est. ${SITE.founded}`,
    subtitle: "Over a decade of trusted advisory",
  },
  {
    icon: <ShieldCheck className="size-5" strokeWidth={1.75} />,
    title: "Ethical & Transparent",
    subtitle: "Honest guidance, always",
  },
  {
    icon: <HeartHandshake className="size-5" strokeWidth={1.75} />,
    title: "Client-Centred",
    subtitle: "Tailored to your goals",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Success Resource Consult (SRC) — established 24 August 2011. Learn our story, vision, mission and core values as an international education, career, visa and immigration consultancy.",
};

const iconProps = { className: "size-5", strokeWidth: 1.75 } as const;

const values = [
  {
    icon: <ShieldCheck {...iconProps} />,
    title: "Integrity",
    description:
      "We uphold honesty, transparency, and ethical conduct in every interaction.",
  },
  {
    icon: <Award {...iconProps} />,
    title: "Professionalism",
    description:
      "We are committed to delivering high-quality services guided by competence, respect, and continuous improvement.",
  },
  {
    icon: <Sparkles {...iconProps} />,
    title: "Excellence",
    description:
      "We strive for excellence in every consultation, recommendation, and client experience.",
  },
  {
    icon: <HeartHandshake {...iconProps} />,
    title: "Client-Centred Service",
    description:
      "Every client is unique. We listen carefully, understand individual goals, and provide guidance tailored to their needs.",
  },
  {
    icon: <Lightbulb {...iconProps} />,
    title: "Innovation",
    description:
      "We embrace new ideas, technology, and evolving global trends to continually improve our services.",
  },
  {
    icon: <ClipboardCheck {...iconProps} />,
    title: "Accountability",
    description:
      "We take responsibility for the quality of our work while communicating clearly about processes, timelines, and responsibilities.",
  },
];

const whatWeDo = [
  {
    icon: <GraduationCap {...iconProps} />,
    title: "International Education",
    description:
      "Helping students identify suitable institutions and programmes while providing guidance throughout the admission process.",
  },
  {
    icon: <Award {...iconProps} />,
    title: "Scholarships",
    description:
      "Supporting qualified applicants in identifying scholarship opportunities and preparing competitive applications.",
  },
  {
    icon: <Briefcase {...iconProps} />,
    title: "Global Careers",
    description:
      "Connecting professionals with international career opportunities and providing guidance on career mobility programmes.",
  },
  {
    icon: <Plane {...iconProps} />,
    title: "Visa Advisory",
    description:
      "Helping applicants prepare complete and accurate visa applications while ensuring they understand applicable requirements.",
  },
  {
    icon: <Globe2 {...iconProps} />,
    title: "Immigration Consulting",
    description:
      "Providing information and advisory services on selected immigration pathways and international mobility options.",
  },
  {
    icon: <Users {...iconProps} />,
    title: "Human Resource Consulting",
    description:
      "Supporting organizations through recruitment advisory, talent development, employer partnerships, and HR consulting services.",
  },
];

const whyChoose = [
  "Personalized consultation and advisory services.",
  "Ethical and transparent communication.",
  "Professional guidance tailored to individual goals.",
  "Support throughout the application journey.",
  "Commitment to continuous learning and global best practices.",
  "Respect for every client's aspirations and circumstances.",
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

export default function AboutPage() {
  return (
    <>
      <CinematicHero
        eyebrow="About SRC"
        title="Empowering Global Dreams Through Education, Careers & Immigration"
        description={`Success Resource Consult (SRC) is an international education, career mobility, visa, immigration, and human resource consultancy committed to helping individuals and organizations access global opportunities through professional guidance, ethical practices, and personalized support. Established on ${SITE.foundedDate}, SRC was founded to bridge the gap between ambition and opportunity.`}
        highlights={heroVisualItems.map(item => ({ icon: item.icon, value: item.title, label: item.subtitle }))}
        backgroundImage="/images/why-src.png"
      >
        <Button href="/book-consultation">Book a Consultation</Button>
        <Button href="/contact" variant="outline-light">
          Contact Us
        </Button>
      </CinematicHero>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="card-pop flex flex-col items-center text-center rounded-3xl border border-navy-900/[0.07] bg-white p-8 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
                Our Vision
              </span>
              <p className="mt-4 text-lg leading-relaxed text-navy-900 sm:text-xl">
                To be a globally respected consultancy recognized for
                connecting people and organizations with international
                education, career, and immigration opportunities through
                integrity, professionalism, and innovation.
              </p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="card-pop card-pop-dark flex flex-col items-center text-center rounded-3xl border border-navy-900/[0.07] bg-navy-950 p-8 shadow-soft sm:p-10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Our Mission
              </span>
              <p className="mt-4 text-lg leading-relaxed text-white sm:text-xl">
                To empower individuals and organizations by providing
                ethical, accurate, and client-focused advisory services in
                international education, scholarships, career mobility, visa
                guidance, immigration consulting, and human resource
                solutions.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            description="The principles that guide every consultation, recommendation, and client relationship at SRC."
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={values} />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="What We Do"
            title="Professional advisory across six key areas"
            description="SRC provides professional advisory and support services across several key areas of international mobility."
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={whatWeDo} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <ImageFeature imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" imageAlt="Business professionals collaborating">
            <SectionHeader
              eyebrow="Why Choose SRC"
              title="Success measured in informed decisions"
              description="We believe that success is not measured simply by applications submitted, but by the quality of guidance provided and the confidence clients gain throughout their journey."
              align="left"
            />
            <Reveal delay={0.15} className="mt-10">
              <CheckList items={whyChoose} columns={1} />
            </Reveal>
          </ImageFeature>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Accurate information. Practical guidance. Honest advice."
            description="At SRC, we recognize that studying abroad, pursuing international employment, or relocating to another country are life-changing decisions. Our commitment is to provide information that is accurate to the best of our knowledge, practical guidance, and professional support — while encouraging clients to make informed decisions based on official requirements and current regulations. Where decisions are made by universities, employers, embassies, immigration authorities, or government agencies, we communicate this clearly and support our clients in preparing the strongest applications possible."
          />
        </Container>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Global Focus"
            title="Supporting opportunities across seven destinations"
            description="As global opportunities continue to evolve, we remain committed to expanding our knowledge, partnerships, and services to meet the changing needs of our clients."
            light
          />
          <div className="mt-14 lg:mt-16">
            <FlagGrid items={destinations} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Let's Build Your Global Future Together"
        description="Whether you are a student planning your academic future, a teacher exploring international opportunities, or an employer looking for qualified talent — SRC is here to guide you with professionalism and integrity."
      />
    </>
  );
}
