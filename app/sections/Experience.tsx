import Timeline from "@/components/Timeline";
import ScrollReveal from "@/components/ScrollReveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <ScrollReveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          Experience & education
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          A background in building, supporting, and improving software.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Dates are omitted where they have not been verified. Project case
          studies describe specific modernization work.
        </p>
      </ScrollReveal>

      <div className="mt-12">
        <Timeline />
      </div>
    </section>
  );
}
