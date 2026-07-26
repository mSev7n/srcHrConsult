import { RevealGroup } from "@/components/ui/Reveal";
import { StepCard, type Step } from "@/components/ui/StepCard";

export type { Step };

const WIDTH_CLASSES: Record<4 | 5, string> = {
  4: "lg:w-[calc((100%-60px)/4)]",
  5: "lg:w-[calc((100%-80px)/5)]",
};

export function NumberedSteps({
  steps,
  columns = 5,
}: {
  steps: Step[];
  columns?: 4 | 5;
}) {
  return (
    <RevealGroup className="flex flex-wrap justify-center gap-5">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className={`w-full sm:w-[calc(50%-10px)] ${WIDTH_CLASSES[columns]}`}
        >
          <StepCard index={i + 1} step={step} />
        </div>
      ))}
    </RevealGroup>
  );
}
