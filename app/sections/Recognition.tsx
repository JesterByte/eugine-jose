import ScrollReveal from "@/components/ScrollReveal";

const recognitions = [
  {
    title: "Thesis of the Year",
    event: "ACLC College of Santa Maria · June 2025",
  },
  {
    title: "Web Developer of the Year",
    event: "ACLC College of Santa Maria · June 2025",
  },
  {
    title: "Silver Award",
    event: "Inter-ACLC Web Development Competition · April 2025",
  },
  {
    title: "Gold Award",
    event: "Inter-ACLC Web Development Competition · May 2024",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16"
    >
      <ScrollReveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          Awards & Recognition
        </p>

        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Recognition for academic and technical work.
        </h2>

        <ul
          className="mt-6 grid gap-3 sm:grid-cols-2"
          aria-label="Awards and recognition"
        >
          {recognitions.map((recognition) => (
            <li
              key={recognition.title}
              className="rounded-xl border border-border bg-muted/20 p-4"
            >
              <p className="font-semibold text-foreground">
                {recognition.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {recognition.event}
              </p>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
