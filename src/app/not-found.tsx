import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-paper py-24">
      <Container className="max-w-lg text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-navy-950/[0.04]">
          <Compass className="size-7 text-navy-800" strokeWidth={1.5} />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-navy-500">
          404 Error
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-navy-950 sm:text-4xl">
          This page took a different flight path
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved. Let&rsquo;s get you back on course.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
