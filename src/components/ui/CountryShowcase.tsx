"use client";

import { motion } from "framer-motion";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";

export type CountryDetail = {
  flag: string;
  name: string;
  description: string;
};

export function CountryShowcase({ countries }: { countries: CountryDetail[] }) {
  return (
    <RevealGroup className="flex flex-wrap justify-center gap-5">
      {countries.map((country) => (
        <motion.div
          key={country.name}
          variants={revealItem}
          className="card-pop group w-full rounded-3xl border border-navy-900/[0.07] bg-white p-7 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70 sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]"
        >
          <span className="inline-block text-3xl leading-none transition-transform duration-500 ease-premium group-hover:scale-110">
            {country.flag}
          </span>
          <h3 className="mt-4 text-base font-semibold text-navy-950 transition-colors duration-500 ease-premium group-hover:text-navy-700">
            {country.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-600">
            {country.description}
          </p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
