import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion, type FaqItem } from "@/components/ui/FAQAccordion";

export function FAQSection({
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  description,
  items,
  tone = "light",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FaqItem[];
  tone?: "light" | "muted";
}) {
  return (
    <section
      className={`py-20 sm:py-28 ${tone === "muted" ? "bg-white" : "bg-paper"}`}
    >
      <Container className="max-w-3xl">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 lg:mt-14">
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
