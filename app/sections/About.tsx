import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <ScrollReveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          About
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Practical engineering, from legacy code to better tools.
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-center md:gap-16">
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-sm">
            <Image
              src="/profile.png"
              width={800}
              height={800}
              alt="Portrait of Eugine Jose"
              className="aspect-square rounded-2xl border border-border object-cover"
              sizes="(max-width: 640px) 80vw, 384px"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I&apos;m a software engineer from the Philippines specializing in
              modernizing legacy applications, improving software architecture,
              and building reliable solutions across mobile, web, and desktop
              platforms.
            </p>
            <p>
              My work includes Flutter, PHP/Laravel, C#/.NET, TypeScript, and
              Vue.js. I focus on separation of concerns and practical,
              requirement-driven structure, alongside offline storage, API
              synchronization, and client-specific CRM integrations.
            </p>
            <p>
              I earned a Bachelor of Science in Computer Science from ACLC
              College of Santa Maria in 2025, where I received Thesis of the
              Year and Web Developer of the Year awards.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
