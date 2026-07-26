import { Info } from "lucide-react";
import type { ReactNode } from "react";

export function InfoNote({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-navy-900/10 bg-navy-950/[0.03] p-6">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
        <Info className="size-4" strokeWidth={2} />
      </span>
      <div>
        {title && (
          <p className="text-sm font-semibold text-navy-950">{title}</p>
        )}
        <div className="mt-1 text-sm leading-relaxed text-navy-600">
          {children}
        </div>
      </div>
    </div>
  );
}
