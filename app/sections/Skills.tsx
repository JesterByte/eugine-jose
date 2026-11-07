import ScrollReveal from "@/components/ScrollReveal";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    description: "Technologies I've used to build applications.",
    skills: [
      "PHP",
      "Laravel",
      "Dart",
      "Flutter",
      "C#",
      ".NET",
      "WinUI 3",
      "Vue.js",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    title: "Architecture & Design",
    description: "Patterns and approaches used to structure applications.",
    skills: [
      "Riverpod",
      "Separation of Concerns",
      "Requirement-Driven Structure",
      "Offline-First Architecture",
    ],
  },
  {
    title: "Databases & Integration",
    description: "Data persistence and communication between systems.",
    skills: [
      "PostgreSQL",
      "SQLite",
      "Drift",
      "MySQL",
      "REST APIs",
      "JSON Integrations",
      "API Synchronization",
      "Bitrix24 CRM",
    ],
  },
  {
    title: "Infrastructure & Tools",
    description: "Tools used for development, deployment, and updates.",
    skills: ["Git", "GitHub Actions", "Firebase Remote Config", "AWS EC2"],
  },
];

const primarySkills = new Set(["Flutter", "Laravel", ".NET", "TypeScript"]);

const practices = [
  {
    title: "Testing",
    detail:
      "Unit testing at the logic layer, including Mocktail for Flutter tests.",
  },
  {
    title: "Deployment",
    detail:
      "Application deployment and update delivery using GitHub Actions, AWS EC2, and Firebase Remote Config.",
  },
  {
    title: "Documentation",
    detail:
      "Creating technical documentation in DOCX format to support future maintenance and development.",
  },
  {
    title: "Continuous Learning",
    detail:
      "Currently expanding my knowledge of Docker and containerized application development.",
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
          Technical Toolkit
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Technologies and practices behind my work.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A collection of technologies, architectural patterns, and engineering
          tools I&apos;ve worked with across mobile, web, and desktop
          applications.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Highlighted = daily-use stack
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <ScrollReveal key={group.title} delay={index * 0.05}>
            <div className="border-t border-border pt-5">
              <h3 className="font-semibold tracking-tight">{group.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {group.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-sm ${
                      primarySkills.has(skill)
                        ? "border-primary/50 bg-primary/5 text-foreground"
                        : "border-border bg-muted/40 text-foreground"
                    }`}
                  >
                    {skill}
                    {primarySkills.has(skill) && (
                      <span className="sr-only"> (primary)</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-16 border-t border-border pt-8">
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
            Engineering Practices
          </p>
          <h3 className="text-2xl font-semibold tracking-tight">
            Beyond writing code.
          </h3>

          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {practices.map((practice) => (
              <div key={practice.title}>
                <dt className="font-semibold">{practice.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {practice.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </ScrollReveal>
    </section>
  );
}
