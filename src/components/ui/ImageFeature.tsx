import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function ImageFeature({
  imageSrc,
  imageAlt,
  children,
  reverse = false,
  className = "",
}: {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${className}`}>
      <Reveal className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-navy-900/5 shadow-soft sm:aspect-video lg:aspect-[4/3] ${reverse ? 'order-1 lg:order-2' : 'order-1'}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy-900/10" />
      </Reveal>
      <div className={reverse ? 'order-2 lg:order-1' : 'order-2'}>
        {children}
      </div>
    </div>
  );
}
