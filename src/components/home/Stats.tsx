import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

const currentYear = new Date().getFullYear();
const yearsActive = currentYear - SITE.founded;

const stats: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  isYear?: boolean;
}[] = [
  { value: SITE.founded, prefix: "", suffix: "", label: "Established", isYear: true },
  { value: yearsActive, prefix: "", suffix: "+", label: "Years of Trusted Guidance" },
  { value: 7, prefix: "", suffix: "", label: "Global Destinations Covered" },
  { value: 6, prefix: "", suffix: "", label: "Core Advisory Services" },
];

export function Stats() {
  return (
    <section className="relative border-y border-navy-900/[0.06] bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
              <div className="flex items-baseline justify-center gap-1 lg:justify-start">
                {stat.isYear ? (
                  <span className="text-4xl font-semibold text-navy-950 sm:text-5xl">
                    {stat.value}
                  </span>
                ) : (
                  <AnimatedCounter
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-4xl font-semibold text-navy-950 sm:text-5xl"
                  />
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-navy-600 sm:text-base">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
