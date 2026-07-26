import type { ReactNode } from "react";

export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-navy-950 sm:text-xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-600 sm:text-[15px] [&_a]:text-navy-900 [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-navy-800">
        {children}
      </div>
    </div>
  );
}
