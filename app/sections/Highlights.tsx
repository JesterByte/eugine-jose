import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  {
    label: "Flutter modernization",
    value: "See the Cebu Agua Lab and PMVIC case studies.",
    href: "#projects",
  },
  {
    label: "Desktop modernization",
    value: "Explore the Campus Secure implementation.",
    href: "#projects",
  },
  {
    label: "Offline workflows",
    value: "See local capture and queued uploads in context.",
    href: "#projects",
  },
  {
    label: "Professional timeline",
    value: "View roles, education, and project context.",
    href: "#experience",
  },
];

export default function Highlights() {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="mx-auto max-w-6xl px-6 pb-16 md:pb-20"
    >
      <ScrollReveal>
        <h2
          id="highlights-heading"
          className="mb-5 text-xl font-semibold tracking-tight"
        >
          Areas of Focus
        </h2>

        <dl className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-xl border border-border bg-muted/20 p-5"
            >
              <dt className="text-base font-semibold">
                <a
                  href={highlight.href}
                  className="rounded-sm underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {highlight.label}
                </a>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {highlight.value}
              </dd>
            </div>
          ))}
        </dl>
      </ScrollReveal>
    </section>
  );
}
