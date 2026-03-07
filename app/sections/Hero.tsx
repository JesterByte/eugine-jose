"use client";

import Parallax from "@/components/Parallax";
import ScrollReveal from "@/components/ScrollReveal";
import TypingText from "@/components/TypingText";
import ResumeCTA from "@/components/ResumeCTA"; // Import your new component
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/graph-paper.svg')] bg-center opacity-20" 
             style={{ maskImage: 'radial-gradient(white, transparent 85%)', WebkitMaskImage: 'radial-gradient(white, transparent 85%)' }} 
        />
      </div>

      <div className="max-w-4xl flex flex-col items-center gap-6">
        <ScrollReveal>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Projects
          </div>

          <Parallax strength={10}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/60">
                Eugine
              </span>
              <span className="text-primary">.</span>
            </h1>
          </Parallax>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-xl md:text-2xl font-mono text-muted-foreground/80 h-8 flex items-center justify-center gap-2">
            <span className="text-primary opacity-50">&gt;</span>
            <TypingText />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-base md:text-lg max-w-xl text-muted-foreground leading-relaxed">
            Software Engineer focused on{" "}
            <span className="text-foreground border-b border-primary/30 font-medium">
              Backend Reliability
            </span>{" "}
            and{" "}
            <span className="text-foreground border-b border-primary/30 font-medium">
              Business Automation
            </span>
            . Specializing in enterprise-level integrations with
            <span className="italic"> Laravel</span>,{" "}
            <span className="italic">Flutter</span>, and <span className="italic">Next.js</span>.
          </p>
        </ScrollReveal>

        {/* Action Buttons Group */}
        <ScrollReveal delay={0.6} className="flex flex-col items-center gap-8 mt-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group rounded-full px-8 h-14 font-bold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore My Work
              <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 border-border/50 hover:bg-muted/50 font-semibold"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Separator / Resume Section */}
          <div className="w-full flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/40">Credential</span>
            <div className="h-px flex-1 bg-border/40" />
          </div>

          <ResumeCTA />
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <ScrollReveal delay={1} className="absolute bottom-8">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </ScrollReveal>
    </section>
  );
}