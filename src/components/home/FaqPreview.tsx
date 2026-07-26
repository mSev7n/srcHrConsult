import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const faqs = [
  {
    question: "What services does Success Resource Consult offer?",
    answer:
      "SRC provides advisory services across six areas: Study Abroad, Scholarships, Global Careers, Visa Services, Immigration Consulting and HR Consulting — supporting students, professionals, educators and organizations pursuing international opportunities.",
  },
  {
    question: "How long has SRC been operating?",
    answer:
      `SRC was established on ${SITE.foundedDate} and has since provided ethical, professional and personalized advisory services to clients pursuing global opportunities.`,
  },
  {
    question: "Can SRC guarantee my visa or admission will be approved?",
    answer:
      "No consultancy can guarantee an outcome. Visa decisions are made solely by the relevant embassy or immigration authority, and admissions are decided by the institution. SRC's role is to help you prepare the strongest, most accurate application possible.",
  },
  {
    question: "How do I get started with SRC?",
    answer:
      "The best first step is to book a consultation or complete our free eligibility assessment. Our team will review your goals and circumstances and recommend a tailored path forward.",
  },
  {
    question: "Does SRC assist with fully funded scholarships?",
    answer:
      "Yes. We guide applicants through undergraduate, master's, PhD and fully funded scholarship opportunities, including fellowship programmes and application support.",
  },
];

export function FaqPreview() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Can't find what you're looking for? Reach out and our team will be glad to help."
        />

        <div className="mt-12 lg:mt-14">
          <FAQAccordion items={faqs} />
        </div>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button href="/faq" variant="secondary">
            View All FAQs
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
