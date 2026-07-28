import type { Metadata } from "next";
import { GraduationCap, Award, Briefcase, Plane, Globe2 } from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { SITE } from "@/lib/constants";

const heroVisualItems = [
  { icon: <GraduationCap className="size-4" strokeWidth={1.75} />, label: "Study Abroad" },
  { icon: <Award className="size-4" strokeWidth={1.75} />, label: "Scholarships" },
  { icon: <Briefcase className="size-4" strokeWidth={1.75} />, label: "Careers" },
  { icon: <Plane className="size-4" strokeWidth={1.75} />, label: "Visas" },
  { icon: <Globe2 className="size-4" strokeWidth={1.75} />, label: "Immigration" },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Success Resource Consult's study abroad, scholarship, career, visa and immigration advisory services.",
};

const categories = [
  {
    title: "General",
    items: [
      {
        question: "What services does Success Resource Consult offer?",
        answer:
          "SRC provides advisory services across six areas: Study Abroad, Scholarships, Global Careers, Visa Services, Immigration Consulting and HR Consulting — supporting students, professionals, educators and organizations pursuing international opportunities.",
      },
      {
        question: "How long has SRC been operating?",
        answer: `SRC was established on ${SITE.foundedDate} and has since provided ethical, professional and personalized advisory services to clients pursuing global opportunities.`,
      },
      {
        question: "How do I get started with SRC?",
        answer:
          "The best first step is to book a consultation or complete our free eligibility assessment. Our team will review your goals and circumstances and recommend a tailored path forward.",
      },
    ],
  },
  {
    title: "Study Abroad",
    items: [
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
    ],
  },
  {
    title: "Scholarships",
    items: [
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
        question: "Can mature students apply?",
        answer:
          "Yes. Many scholarship programmes welcome applicants at different stages of their academic or professional careers. Eligibility depends on the individual scholarship.",
      },
    ],
  },
  {
    title: "Global Careers",
    items: [
      {
        question: "Can SRC guarantee employment?",
        answer:
          "No. Employment decisions are made solely by employers based on their recruitment processes, organizational needs, and applicable regulations. Our role is to provide professional guidance and support candidates throughout the application process.",
      },
      {
        question: "Who can apply for career opportunities through SRC?",
        answer:
          "Eligibility depends on the specific opportunity. Programmes may be available for qualified professionals such as teachers, healthcare professionals, engineers, IT specialists, skilled tradespeople, and other occupations, depending on employer needs and applicable regulations.",
      },
    ],
  },
  {
    title: "Visa Services",
    items: [
      {
        question: "Can SRC guarantee my visa?",
        answer:
          "No. No consultant or agency can guarantee a visa. Only the relevant embassy or immigration authority has the legal authority to approve or refuse a visa application.",
      },
      {
        question: "Which countries does SRC support for visa advisory?",
        answer:
          "Depending on the service required, SRC provides visa advisory guidance for Canada, United States, United Kingdom, Netherlands, Germany, Ireland, Australia, and other destinations where appropriate.",
      },
    ],
  },
  {
    title: "Immigration",
    items: [
      {
        question: "Can SRC guarantee permanent residence or immigration approval?",
        answer:
          "No. Immigration decisions are made solely by the relevant immigration authority. SRC provides information and advisory services to help you understand your options — we do not guarantee any outcome.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <CinematicHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most often. Can't find what you're looking for? Reach out and our team will be glad to help."
        highlights={heroVisualItems.map(item => ({ icon: item.icon, label: item.label }))}
        backgroundImage="https://images.unsplash.com/photo-1507537297725-24a1242029?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-3xl space-y-16">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.05}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-500">
                {category.title}
              </h2>
              <div className="mt-5">
                <FAQAccordion items={category.items} />
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Still Have Questions?"
        description="Reach out directly and a member of our team will get back to you personally."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Book a Consultation"
        secondaryHref="/book-consultation"
      />
    </>
  );
}
