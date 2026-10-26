import ScrollReveal from "@/components/ScrollReveal";

const skillCategories = [
  {
    title: "Languages & frameworks",
    skills: ["PHP", "Laravel", "Dart", "Flutter", "C#", ".NET", "Vue.js", "TypeScript", "Next.js"],
  },
  {
    title: "Mobile & desktop",
    skills: ["Flutter", "WinUI 3", "WinForms", "Cordova"],
  },
  {
    title: "Architecture & application design",
    skills: ["MVVM", "Riverpod", "Repository pattern", "Service layer", "Offline-first design"],
  },
  {
    title: "Data & integrations",
    skills: ["PostgreSQL", "MySQL", "SQLite / Drift", "REST APIs", "JSON integrations", "Bitrix24 CRM"],
  },
  {
    title: "Delivery & synchronization",
    skills: ["API synchronization", "Firebase Remote Config", "AWS EC2", "Git"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <ScrollReveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          Technical toolkit
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Tools I use to solve practical engineering problems.
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <ScrollReveal key={category.title} delay={index * 0.05}>
            <div className="border-t border-border pt-5">
              <h3 className="mb-4 text-sm font-semibold">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
