import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
              light
                ? "border-white/20 text-white/80"
                : "border-navy-900/10 text-navy-600"
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 text-3xl font-semibold leading-[1.15] text-balance sm:text-4xl lg:text-[2.75rem] ${
            light ? "text-white" : "text-navy-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={`mt-4 text-balance text-base leading-relaxed sm:text-lg ${
              light ? "text-white/70" : "text-navy-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
