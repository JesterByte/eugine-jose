import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Cebu Agua Lab · Flutter application",
    category: "Offline-first mobile modernization",
    description:
      "Reworked a legacy Flutter app around clearer state management, local persistence, and two-way API synchronization.",
    tech: ["Flutter", "Riverpod", "Drift / SQLite", "Firebase", "AWS EC2"],
    links: {},
    details: `Context — A legacy Flutter application needed stronger separation of concerns and reliable operation when connectivity was unavailable.

My contribution — Reworked the application using Riverpod for state management and Drift/SQLite for local persistence. Implemented offline functionality and two-way synchronization with a remote API.

Technical approach — Added an over-the-air update workflow using Firebase and AWS EC2.

Outcome — The client gave positive feedback during a review attended by IT management and a senior colleague. No performance figures are available.`,
    images: [],
  },
  {
    title: "PMVIC · Cordova application",
    category: "Legacy application modernization",
    description:
      "Restructured a procedural Cordova application toward MVVM and implemented an over-the-air update workflow.",
    tech: ["Cordova", "MVVM", "Firebase Remote Config", "AWS EC2"],
    links: {},
    details: `Context — The application was originally structured procedurally.

My contribution — Reworked it toward an MVVM-oriented implementation and improved the interface and user experience.

Technical approach — Implemented an over-the-air update workflow using Firebase Remote Config and an AWS EC2-based workaround, avoiding dependence on Play Store releases for that workflow.

Outcome — The work addressed both application structure and the practical constraints of distributing updates.`,
    images: [],
  },
  {
    title: "Campus Secure · WinUI 3",
    category: "Desktop application modernization",
    description:
      "Modernization work on a legacy WinForms application, targeting WinUI 3 and MVVM, with work across device integration and day-to-day workflows.",
    tech: ["C#", ".NET", "WinUI 3", "WinForms", "MVVM"],
    links: {},
    details: `Context — Campus Secure is a legacy C# WinForms application. The modernization work targets WinUI 3 and an MVVM-based architecture.

My contribution — Worked on application functionality involving RFID/Hikvision integration, reporting, printing, filtering, and sorting.

Status — This case study describes work performed; it does not imply the application is complete, deployed, or in production.`,
    images: [],
  },
  {
    title: "Green Haven Memorial Park",
    category: "Academic thesis · Multi-part system",
    description:
      "A thesis project exploring digital alternatives to spreadsheet-based lot and payment tracking across customer, kiosk, administrative, and mapping experiences.",
    tech: ["OpenStreetMap exploration", "PayMongo exploration", "Web", "Kiosk"],
    links: { github: "https://github.com/JesterByte/ghmp" },
    repositories: [
      { label: "Admin system", href: "https://github.com/JesterByte/ghmp" },
      {
        label: "Customer application",
        href: "https://github.com/JesterByte/ghmp-customer",
      },
      {
        label: "Kiosk application",
        href: "https://github.com/JesterByte/ghmp-kiosk",
      },
      {
        label: "Map maker",
        href: "https://github.com/JesterByte/ghmp_map_maker",
      },
    ],
    details: `Context — Our academic team developed a memorial-lot and payment management system intended to replace spreadsheet-based tracking.

My contribution — Led a three-member team and handled the software development work across customer-facing, kiosk, administrative, and mapping-related functionality.

Technical approach — Explored OpenStreetMap integration and PayMongo payments.

Outcome — The project received Thesis of the Year recognition. This is an academic thesis project; no claim is made that it is currently used in production.`,
    images: [
      "/projects/ghmp-dashboard.png",
      "/projects/ghmp-landing-page.png",
      "/projects/ghmp-kiosk.png",
    ],
  },
  {
    title: "Cebu Agua Lab · Laravel/Vue application",
    category: "Legacy web application",
    description:
      "Worked with an existing Laravel and Vue.js codebase and identified architectural weaknesses that made ongoing maintenance harder.",
    tech: ["Laravel", "PHP", "Vue.js"],
    links: {},
    details: `Context — The existing Laravel and Vue.js application had architectural weaknesses.

My contribution — Worked within the existing codebase and its constraints.

Technical observations — Models were being used as helper classes, database queries were written directly in controllers, and the project lacked proper database migrations.

Scope — This describes experience understanding and working with the legacy architecture; it does not claim a complete rewrite.`,
    images: [],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <ScrollReveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          Selected work
        </p>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Engineering for applications that need to work in the real world.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A selection of modernization, mobile, desktop, and academic work.
            Open each case study for my contribution and technical approach.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.05}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
