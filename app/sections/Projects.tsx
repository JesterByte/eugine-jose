import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import type { ProjectArchitecture } from "@/components/ArchitectureDiagram";

const ceBuFlutterArchitecture: ProjectArchitecture = {
  title: "Offline-first mobile application",
  caption:
    "Local application work remains available offline; synchronization uses the remote API when connectivity is available.",
  accessibleDescription:
    "Cebu Agua Lab Flutter architecture showing Flutter UI flowing through Riverpod to local Drift and SQLite persistence, two-way synchronization between the local store and a remote API, and a separate OTA update context involving Firebase Remote Config and AWS EC2.",
  views: [
    {
      title: "Application data and synchronization",
      status: "Documented approach",
      description:
        "Local persistence supports offline use. The application also implements two-way synchronization with a remote API.",
      flows: [
        {
          label: "Local application flow · offline-capable",
          nodes: [
            {
              label: "Flutter UI",
              detail: "Presentation components",
              kind: "application",
            },
            {
              label: "Riverpod",
              detail: "State management",
              kind: "logic",
            },
            {
              label: "Drift / SQLite",
              detail: "Local persistence",
              kind: "storage",
            },
          ],
        },
        {
          label: "When network synchronization is available",
          direction: "bidirectional",
          nodes: [
            {
              label: "Local data",
              detail: "Drift / SQLite",
              kind: "storage",
            },
            {
              label: "Remote API",
              detail: "API technology and endpoints not specified",
              kind: "remote",
            },
          ],
        },
      ],
      notes: [
        "The specific sync algorithm, conflict policy, retry behavior, and queue design are not documented here.",
      ],
    },
    {
      title: "Over-the-air updates",
      status: "Components documented",
      description:
        "Firebase Remote Config and an AWS EC2-based workaround were used as part of the OTA update workflow.",
      flows: [
        {
          label: "Related components · sequence not documented",
          direction: "related",
          nodes: [
            {
              label: "Firebase Remote Config",
              kind: "remote",
            },
            {
              label: "AWS EC2-based workaround",
              kind: "remote",
            },
            {
              label: "OTA update workflow",
              kind: "application",
            },
          ],
        },
      ],
      notes: [
        "Connector indicates a relationship, not an implementation order; download, hosting, version-checking, and installation details are unspecified.",
      ],
    },
  ],
};

const pmvicArchitecture: ProjectArchitecture = {
  title: "Cordova application modernization",
  caption:
    "Before-and-after overview of the move from a procedural implementation toward an MVVM-oriented structure.",
  accessibleDescription:
    "PMVIC Cordova modernization showing a legacy procedural application and a conceptual MVVM-oriented view, view model, and model structure. A separate OTA context relates Firebase Remote Config and an AWS EC2-based workaround without claiming a specific update sequence.",
  views: [
    {
      title: "Legacy application",
      status: "Documented starting point",
      description:
        "The existing Cordova application was structured procedurally.",
      flows: [
        {
          label: "Original implementation",
          nodes: [
            {
              label: "Procedural Cordova application",
              detail: "Original structure",
              kind: "legacy",
            },
          ],
        },
      ],
    },
    {
      title: "Modernization direction",
      status: "MVVM-oriented",
      description:
        "The implementation was reworked toward MVVM with UI/UX improvements. This is a conceptual pattern-level view, not a verified class diagram.",
      flows: [
        {
          label: "Conceptual MVVM component relationships",
          direction: "related",
          nodes: [
            {
              label: "View",
              detail: "Presentation",
              kind: "application",
            },
            {
              label: "ViewModel",
              detail: "Presentation logic",
              kind: "logic",
            },
            {
              label: "Model",
              detail: "Application data and behavior",
              kind: "storage",
            },
          ],
        },
      ],
      notes: [
        "Detailed data-access boundaries and implementation-specific components are not documented.",
      ],
    },
    {
      title: "Over-the-air updates",
      status: "Sequence unspecified",
      description:
        "The OTA workflow avoided reliance on Play Store releases for that update path.",
      flows: [
        {
          label: "Related components · exact sequence not documented",
          direction: "related",
          nodes: [
            {
              label: "Firebase Remote Config",
              kind: "remote",
            },
            {
              label: "AWS EC2-based workaround",
              kind: "remote",
            },
            {
              label: "OTA update workflow",
              kind: "application",
            },
          ],
        },
      ],
      notes: [
        "The specific hosting, download, version-checking, and installation steps are not inferred.",
      ],
    },
  ],
};

const campusSecureArchitecture: ProjectArchitecture = {
  title: "WinForms to WinUI 3 modernization",
  caption:
    "Separates the legacy application from the target MVVM-oriented direction and documents the feature areas without assuming their internal implementation.",
  accessibleDescription:
    "Campus Secure diagram showing the legacy WinForms application separately from modernization work toward WinUI 3 and MVVM, with RFID and Hikvision integration and reporting, printing, filtering, and sorting shown as related areas of work.",
  views: [
    {
      title: "Legacy application",
      status: "Starting point",
      description:
        "Campus Secure began as a C# WinForms application.",
      flows: [
        {
          label: "Original application",
          nodes: [
            {
              label: "C# WinForms",
              detail: "Legacy desktop application",
              kind: "legacy",
            },
          ],
        },
      ],
    },
    {
      title: "Modernization work",
      status: "Ongoing direction",
      description:
        "Work targets WinUI 3 and MVVM. The diagram does not imply a completed migration.",
      flows: [
        {
          label: "MVVM-oriented component relationship",
          direction: "related",
          nodes: [
            {
              label: "WinUI 3",
              detail: "Modernized presentation",
              kind: "application",
            },
            {
              label: "ViewModel",
              detail: "MVVM-oriented application layer",
              kind: "logic",
            },
          ],
        },
        {
          label: "Related implementation areas · internal flow unspecified",
          direction: "related",
          nodes: [
            {
              label: "RFID / Hikvision integration",
              detail: "Device protocols and SDK details unspecified",
              kind: "remote",
            },
            {
              label: "Reports · printing · filtering · sorting",
              detail: "Application functionality",
              kind: "application",
            },
          ],
        },
      ],
      notes: [
        "Existing model, service, and data-access layers are not verified and are not shown.",
      ],
    },
  ],
};

const cebuLaravelArchitecture: ProjectArchitecture = {
  title: "Legacy Laravel / Vue architecture",
  caption:
    "The legacy structure is based on documented observations; the second view is a conceptual improvement direction, not a completed refactor.",
  accessibleDescription:
    "Cebu Agua Lab Laravel and Vue diagram showing Vue requests reaching controllers with direct database queries, models used as helpers, and missing proper migrations. A separate conceptual view shows a potential separation between controllers, application logic, data models, and schema migrations.",
  views: [
    {
      title: "Observed legacy structure",
      status: "Documented observations",
      description:
        "Queries in controllers and models used as helper classes blurred separation of concerns.",
      flows: [
        {
          label: "Request and query path",
          nodes: [
            {
              label: "Vue.js interface",
              kind: "application",
            },
            {
              label: "Laravel controllers",
              detail: "Database queries written directly in controllers",
              kind: "legacy",
            },
            {
              label: "Database",
              detail: "Proper migrations were lacking",
              kind: "storage",
            },
          ],
        },
        {
          label: "Additional documented pattern",
          direction: "related",
          nodes: [
            {
              label: "Models",
              detail: "Used as helper classes",
              kind: "legacy",
            },
            {
              label: "Controller logic",
              detail: "Responsibilities overlap",
              kind: "legacy",
            },
          ],
        },
      ],
    },
    {
      title: "Possible separation of concerns",
      status: "Conceptual only",
      description:
        "Illustrates one possible direction for clearer responsibilities. No completed rewrite or refactor is claimed.",
      flows: [
        {
          label: "Conceptual request path",
          nodes: [
            {
              label: "Vue.js interface",
              kind: "application",
            },
            {
              label: "Controller",
              detail: "Request handling",
              kind: "conceptual",
            },
            {
              label: "Application logic",
              detail: "Dedicated service or use-case boundary",
              kind: "conceptual",
            },
            {
              label: "Data model",
              detail: "Persistence responsibilities",
              kind: "conceptual",
            },
          ],
        },
        {
          label: "Conceptual schema management",
          nodes: [
            {
              label: "Database migrations",
              detail: "Versioned schema changes",
              kind: "conceptual",
            },
            {
              label: "Database schema",
              kind: "storage",
            },
          ],
        },
      ],
    },
  ],
};

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
    architecture: ceBuFlutterArchitecture,
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
    architecture: pmvicArchitecture,
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
    architecture: campusSecureArchitecture,
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
    architecture: cebuLaravelArchitecture,
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
