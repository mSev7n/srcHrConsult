import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Briefcase,
  Plane,
  Globe2,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";

const heroVisualItems = [
  { icon: <GraduationCap className="size-4" strokeWidth={1.75} />, label: "Study Abroad" },
  { icon: <Award className="size-4" strokeWidth={1.75} />, label: "Scholarships" },
  { icon: <Briefcase className="size-4" strokeWidth={1.75} />, label: "Global Careers" },
  { icon: <Plane className="size-4" strokeWidth={1.75} />, label: "Visa Services" },
  { icon: <Globe2 className="size-4" strokeWidth={1.75} />, label: "Immigration" },
  { icon: <Users className="size-4" strokeWidth={1.75} />, label: "HR Consulting" },
];

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Success Resource Consult's six core advisory services — study abroad, scholarships, global careers, visa services, immigration consulting, and HR consulting.",
};

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description:
      "Admission guidance for reputable institutions across Canada, the US, UK, Netherlands, Germany, Ireland and Australia.",
    href: "/study-abroad",
  },
  {
    icon: Award,
    title: "Scholarships",
    description:
      "Guidance on undergraduate, master's, PhD and fully-funded scholarship opportunities, from search to application.",
    href: "/scholarships",
  },
  {
    icon: Briefcase,
    title: "Global Careers",
    description:
      "Ethical guidance for Canada teaching opportunities, international recruitment and career mobility advisory.",
    href: "/canada-teaching-jobs",
  },
  {
    icon: Plane,
    title: "Visa Services",
    description:
      "Support preparing accurate, complete student, visitor, business and family visit visa applications.",
    href: "/visa-services",
  },
  {
    icon: Globe2,
    title: "Immigration Consulting",
    description:
      "Professional guidance on selected immigration pathways, skilled migration and documentation advisory.",
    href: "/immigration-services",
  },
  {
    icon: Users,
    title: "HR Consulting",
    description:
      "Recruitment support, talent sourcing and organizational development for employers and professionals.",
    href: "/canada-teaching-jobs",
  },
];

export default function ServicesPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Our Services"
        title="One consultancy, six pathways to a global future"
        description="From your first application to your final departure, SRC provides ethical, professional guidance at every stage of your international journey."
        highlights={heroVisualItems.map(item => ({ icon: item.icon, label: item.label }))}
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
      >
        <Button href="/book-consultation">Book a Consultation</Button>
      </CinematicHero>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-pop group flex flex-col items-center text-center rounded-3xl border border-navy-900/[0.07] bg-white p-8 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-navy-950 text-white transition-transform duration-500 ease-premium group-hover:scale-110">
                  <service.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 flex items-center justify-center gap-2 text-lg font-semibold text-navy-950">
                  {service.title}
                  <ArrowUpRight className="size-4 text-navy-300 transition-all duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-900" />
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Not sure where to start?" description="Book a free consultation and our team will help you identify the right path for your goals." />
    </>
  );
}
