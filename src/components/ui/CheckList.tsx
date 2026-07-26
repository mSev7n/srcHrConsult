import { CheckCircle2 } from "lucide-react";

export function CheckList({
  items,
  columns = 2,
  tone = "light",
  className = "",
}: {
  items: string[];
  columns?: 1 | 2;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-4 ${className}`}
    >
      {items.map((item) => (
        <div
          key={item}
          className={`flex items-start gap-3 ${
            columns === 2 ? "w-full sm:w-[calc(50%-8px)]" : "w-full"
          }`}
        >
          <CheckCircle2
            className={`mt-0.5 size-5 shrink-0 ${
              tone === "dark" ? "text-white" : "text-navy-700"
            }`}
            strokeWidth={1.75}
          />
          <span
            className={`text-sm leading-relaxed sm:text-[15px] ${
              tone === "dark" ? "text-white/80" : "text-navy-700"
            }`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
