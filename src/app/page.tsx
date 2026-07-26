import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WelcomeIntro } from "@/components/home/WelcomeIntro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Destinations } from "@/components/home/Destinations";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SuccessStories } from "@/components/home/SuccessStories";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WelcomeIntro />
      <ServicesOverview />
      <WhyChooseUs />
      <Destinations />
      <SuccessStories />
      <BlogPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
