import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const recognitions = [
  "Thesis of the Year",
  "Web Developer of the Year",
  "Regional competition · Silver",
  "Local competition · Gold",
];

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
              width={540}
              height={540}
              alt="Portrait of Eugine Jose"
              className="aspect-square rounded-2xl border border-border object-cover"
              sizes="(max-width: 768px) 80vw, 30vw"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I&apos;m a backend-minded full-stack software engineer from the
              Philippines. I enjoy taking applications with difficult
              constraints—legacy architecture, unreliable connectivity, or
              complex integrations—and making them easier to maintain and use.
            </p>
            <p>
              My hands-on work spans Flutter, PHP and Laravel, Vue.js, and C#
              desktop applications. I&apos;ve restructured applications toward
              MVVM, added offline storage and API synchronization, and worked
              with client-specific CRM integrations.
            </p>
            <p>
              I earned a Bachelor of Science in Computer Science from ACLC
              College of Santa Maria in 2025. My academic work received
              recognition for both its thesis and web development, alongside
              awards in regional and local competitions.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Recognition">
            {recognitions.map((recognition) => (
              <li
                key={recognition}
                className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {recognition}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
