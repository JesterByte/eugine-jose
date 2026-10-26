import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[min(850px,90svh)] scroll-mt-20 items-center overflow-hidden px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_25%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_45%)]"
      />
      <div className="mx-auto w-full max-w-6xl">
        <ScrollReveal className="max-w-4xl">
          <p className="mb-6 font-mono text-sm tracking-wide text-primary">
            EUGINE JOSE <span className="text-muted-foreground">/</span>{" "}
            SOFTWARE ENGINEER
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Modernizing legacy applications.
            <span className="mt-2 block text-primary">
              Building reliable software.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I work across mobile, web, and desktop—improving existing
            applications with maintainable architecture, offline capabilities,
            and practical integrations.
          </p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">
            Flutter <span className="px-2 text-primary">/</span> Laravel{" "}
            <span className="px-2 text-primary">/</span> .NET{" "}
            <span className="px-2 text-primary">/</span> TypeScript
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Explore selected work <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="/Eugine_Jose_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              View résumé <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Get in touch <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
