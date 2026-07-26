import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Plane,
  Briefcase,
  MessageSquareHeart,
  Users,
  Globe2,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { RevealSpan, RevealDiv } from "@/components/ui/RevealItem";
import { CheckList } from "@/components/ui/CheckList";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Success Stories & Testimonials",
  description:
    "Real journeys, real experiences, meaningful results — client stories, testimonials, and milestones from Success Resource Consult.",
};

const heroHighlights = [
  { value: SITE.founded, label: "Established" },
  { icon: <MessageSquareHeart className="size-4" strokeWidth={1.75} />, label: "Real Client Voices" },
  { icon: <Users className="size-4" strokeWidth={1.75} />, label: "International Partnerships" },
  { icon: <Globe2 className="size-4" strokeWidth={1.75} />, label: "Nigeria & Beyond" },
];

const storyCategories = [
  {
    icon: <GraduationCap className="size-5" strokeWidth={1.75} />,
    title: "Education & Study Abroad",
    description:
      "Experiences from individuals who have worked with SRC in exploring educational opportunities and navigating their study-abroad journey.",
    href: "/study-abroad",
    cta: "Explore Study Abroad",
  },
  {
    icon: <Award className="size-5" strokeWidth={1.75} />,
    title: "Scholarship Journeys",
    description:
      "Stories from students, graduates, and researchers who explored scholarship and funding opportunities with SRC.",
    href: "/scholarships",
    cta: "Explore Scholarships",
  },
  {
    icon: <Plane className="size-5" strokeWidth={1.75} />,
    title: "Visa & Travel Experiences",
    description:
      "Experiences from clients who received professional guidance and support during their visa application journeys.",
    href: "/visa-services",
    cta: "Explore Visa Services",
  },
  {
    icon: <Briefcase className="size-5" strokeWidth={1.75} />,
    title: "Career & Recruitment Journeys",
    description:
      "Stories from professionals and candidates who have engaged with SRC regarding career and recruitment opportunities.",
    href: "/canada-teaching-jobs",
    cta: "Explore Global Careers",
  },
];

const testimonials = [
  {
    title: "Professional Guidance That Made a Difference",
    quote:
      "SRC provided me with useful information and guidance throughout my process. The support helped me understand what I needed to do and approach the process with greater confidence.",
    attribution: "Client",
  },
  {
    title: "A Valuable Source of Information",
    quote:
      "I discovered SRC through their educational content. The information they share has helped me understand scholarship and study-abroad opportunities better.",
    attribution: "SRC Community Member",
  },
  {
    title: "Professional and Supportive",
    quote:
      "My experience with SRC was professional and informative. I appreciated the communication and the attention given to my questions.",
    attribution: "Client",
  },
  {
    title: "Knowledge That Creates Awareness",
    quote:
      "SRC's educational content helped me discover opportunities I did not know existed. I am grateful for the information and guidance.",
    attribution: "SRC Community Member",
  },
];

const partnerTypes = [
  "International employers.",
  "Recruitment agencies.",
  "Educational institutions.",
  "Schools and school boards.",
  "Workforce organizations.",
  "Universities.",
  "Professional institutions.",
];

const milestones = [
  { icon: "🎓", title: "Education", description: "Supporting individuals exploring international education opportunities." },
  { icon: "🏅", title: "Scholarships", description: "Sharing information and guidance on scholarship opportunities." },
  { icon: "✈️", title: "Visa Services", description: "Providing information and application support for selected visa categories." },
  { icon: "🌍", title: "Immigration", description: "Helping individuals understand selected international mobility pathways." },
  { icon: "💼", title: "HR & Recruitment", description: "Developing professional recruitment and talent solutions." },
  { icon: "👨‍🏫", title: "International Teacher Recruitment", description: "Building recruitment initiatives connecting qualified educators with international opportunities." },
  { icon: "📚", title: "Publications", description: "Developing educational publications and resources." },
  { icon: "🤝", title: "International Partnerships", description: "Building relationships with organizations beyond Nigeria." },
].map((m) => ({ ...m, icon: <span className="text-xl">{m.icon}</span> }));

const partnerCommitments = [
  "Professionalism.",
  "Transparency.",
  "Ethical practices.",
  "Quality.",
  "Long-term collaboration.",
];

const testimonialWelcome = [
  "Students.",
  "Scholarship applicants.",
  "PhD candidates.",
  "Visa clients.",
  "Immigration clients.",
  "Professionals.",
  "Recruitment candidates.",
  "Employers.",
  "International partners.",
];

const exploreAreas = [
  "🎓 Study Abroad",
  "🎓 Scholarships",
  "🔬 PhD Opportunities",
  "👨‍🏫 International Teaching",
  "💼 Global Careers",
  "✈️ Visa Services",
  "🌍 Immigration Opportunities",
  "🤝 International Recruitment",
  "📚 Educational Resources",
];

export default function SuccessStoriesPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Success Stories & Testimonials"
        title="Real Journeys. Real Experiences. Meaningful Results."
        description="At Success Resource Consult (SRC), every client, candidate, student, professional, and partner represents a unique journey. Whatever the path — study abroad, scholarships, careers, visas, or immigration — our goal is to provide professional guidance, useful information, and responsible support."
        highlights={heroHighlights}
      >
        <Button href="/book-consultation">Book a Consultation</Button>
        <Button href="/contact?subject=Share%20a%20Testimonial" variant="outline-light">
          Share Your Story
        </Button>
      </CinematicHero>

      {/* Tagline banner */}
      <section className="border-y border-navy-900/[0.06] bg-white py-10">
        <Container>
          <Reveal>
            <p className="text-balance text-center text-lg font-semibold text-navy-950 sm:text-xl">
              Behind every success story is a person who decided to take the
              first step.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Client story categories */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Client Stories"
            title="The people we serve are at the heart of what we do"
            description="This page shares experiences from members of the SRC community and highlights selected milestones from our journey."
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16">
            {storyCategories.map((category) => (
              <RevealDiv key={category.title}>
                <Link
                  href={category.href}
                  className="card-pop group flex h-full flex-col rounded-3xl border border-navy-900/[0.07] bg-white p-8 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white transition-transform duration-500 ease-premium group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-navy-950">
                    {category.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {category.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-800">
                    {category.cta}
                    <ArrowUpRight className="size-4 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </RevealDiv>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="What Our Clients Say"
            title="Voices from the SRC community"
            light
          />
          <RevealGroup
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16"
            stagger={0.08}
          >
            {testimonials.map((t) => (
              <RevealDiv
                key={t.title}
                className="card-pop card-pop-dark rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8"
              >
                <Quote className="size-6 text-white/30" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
                  — {t.attribution}
                </p>
              </RevealDiv>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* International recruitment journey */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Our International Recruitment Journey"
            title="Building relationships beyond borders"
          />
          <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl space-y-4 text-center">
            <p className="text-sm leading-relaxed text-navy-600 sm:text-base">
              SRC is committed to developing international partnerships that
              connect people, organizations, education, and talent. One of
              the experiences that has contributed to our organizational
              journey was an engagement in which an international
              organization visited our office in Nigeria to conduct a
              recruitment exercise.
            </p>
            <p className="text-sm leading-relaxed text-navy-600 sm:text-base">
              The experience reinforced our belief in the importance of
              professional international partnerships and strengthened our
              interest in building a broader platform for international
              recruitment and talent mobility.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-10">
            <p className="text-center text-sm font-semibold text-navy-950">
              Today, SRC continues to explore opportunities to work with:
            </p>
            <div className="mx-auto mt-6 max-w-xl">
              <CheckList items={partnerTypes} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Milestones */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Our Milestones"
            title="A journey of growth and purpose"
            description="SRC continues to evolve. Our journey has included experiences across:"
          />
          <div className="mt-14 lg:mt-16">
            <FeatureGrid features={milestones} />
          </div>
        </Container>
      </section>

      {/* For international partners */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(30,53,112,0.35)_0%,rgba(5,10,28,0)_60%)]" />
        <Container className="relative max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              For Our International Partners
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance text-2xl font-semibold text-white sm:text-3xl">
              Our experience is part of our story
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              We understand that international organizations need partners
              they can trust. Our growing experience in education,
              recruitment, HR, international opportunities, and client
              services continues to shape the way we approach partnerships.
              We welcome opportunities to build relationships with
              organizations that share our commitment to:
            </p>
          </Reveal>
          <RevealGroup className="mt-7 flex flex-wrap items-center justify-center gap-2.5" stagger={0.05}>
            {partnerCommitments.map((item) => (
              <RevealSpan
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/85"
              >
                {item}
              </RevealSpan>
            ))}
          </RevealGroup>
          <Reveal delay={0.24} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact?subject=Partnership%20%2F%20Employer%20Enquiry" variant="secondary">
              Partner With SRC
            </Button>
            <Button href="/contact?subject=Partnership%20%2F%20Employer%20Enquiry" variant="outline-light">
              Request Our Capability Statement
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Share your experience */}
      <section className="bg-paper py-20 sm:py-28">
        <Container className="max-w-2xl">
          <Reveal className="rounded-3xl border border-navy-900/[0.07] bg-white p-10 text-center shadow-soft sm:p-14">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-navy-950/[0.05] text-navy-900">
              <MessageSquareHeart className="size-7" strokeWidth={1.5} />
            </span>
            <h2 className="mt-6 text-balance text-2xl font-semibold text-navy-950 sm:text-3xl">
              Share Your SRC Experience
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-navy-600 sm:text-base">
              If SRC has supported you in your educational, professional,
              visa, recruitment, or international journey, we would love to
              hear about your experience. Your story may help another
              person make the decision to take their first step.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.1em] text-navy-500">
              We welcome testimonials from
            </p>
            <div className="mx-auto mt-4 flex max-w-md flex-wrap items-center justify-center gap-2">
              {testimonialWelcome.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-navy-900/10 bg-paper px-3.5 py-1.5 text-xs font-medium text-navy-700"
                >
                  {item.replace(".", "")}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-navy-500">
              With your permission, selected testimonials may be published
              on the SRC website and official social media platforms.
            </p>

            <Button href="/contact?subject=Share%20a%20Testimonial" className="mt-8">
              Submit Your Story
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Our commitment */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Trust is earned"
            description="We are grateful to every individual and organization that has trusted SRC. We understand that trust is earned through consistency, professionalism, integrity, communication, and results. As we grow, we remain committed to improving our services and building meaningful relationships with the people and organizations we serve."
          />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_100%,rgba(30,53,112,0.4)_0%,rgba(5,10,28,0)_60%)]" />
        <Container className="relative max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Your Journey. Our Commitment. Your Success Story.
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.15] text-white sm:text-4xl">
              Your Journey Could Be Our Next Success Story
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-sm font-medium text-white/60">
              Whether you are exploring:
            </p>
          </Reveal>
          <RevealGroup className="mt-5 flex flex-wrap items-center justify-center gap-2.5" stagger={0.04}>
            {exploreAreas.map((area) => (
              <RevealSpan
                key={area}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/85"
              >
                {area}
              </RevealSpan>
            ))}
          </RevealGroup>
          <Reveal delay={0.22}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              SRC is ready to help you explore your next step.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book-consultation" variant="secondary">
              Book a Consultation
            </Button>
            <Button href="/services" variant="outline-light">
              Explore Our Services
            </Button>
            <Button href="/contact" variant="outline-light">
              Contact SRC
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
