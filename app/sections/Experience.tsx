"use client";

import Timeline from "@/components/Timeline";
import ScrollReveal from "@/components/ScrollReveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 max-w-4xl mx-auto px-6 scroll-mt-20"
    >
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          Journey
        </h2>
        <p className="text-muted-foreground mt-4">
          A quick look at my growth as a Software Developer.
        </p>
      </ScrollReveal>

      <div className="max-w-2xl mx-auto">
        <Timeline />
      </div>
    </section>
  );
}
