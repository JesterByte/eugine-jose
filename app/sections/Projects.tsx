import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import type { ProjectArchitecture } from "@/components/ArchitectureDiagram";
import type { Project } from "@/lib/project-content";

const ceBuFlutterArchitecture: ProjectArchitecture = {
  title: "Cebu Agua Lab Flutter application",
  caption:
    "Rebuilt with local persistence for offline use and two-way synchronization with a remote API.",
  accessibleDescription:
    "Cebu Agua Lab Flutter case study showing the legacy View performing database operations and Models acting as helpers, the rebuilt Flutter application using Riverpod and Drift SQLite, two-way synchronization between local persistence and a remote API, and an OTA update workflow involving Firebase Remote Config and AWS EC2.",
  views: [
    {
      title: "Rebuilt application and offline data",
      status: "Implemented",
      description:
        "The rebuilt app uses Flutter/Dart, Riverpod, and Drift/SQLite. Local persistence supports offline operation.",
      flows: [
        {
          label: "Application components · exact call path not specified",
          direction: "related",
          nodes: [
            {
              label: "Flutter UI",
              detail: "Flutter / Dart application",
              kind: "application",
            },
            {
              label: "Riverpod",
              detail: "State management",
              kind: "logic",
            },
            {
              label: "Drift / SQLite",
              detail: "Local persistence for offline use",
              kind: "storage",
            },
          ],
        },
        {
          label: "Two-way synchronization with remote API",
          direction: "bidirectional",
          nodes: [
            {
              label: "Local data",
              detail: "Drift / SQLite",
              kind: "storage",
            },
            {
              label: "Remote API",
              detail: "API implementation details not specified",
              kind: "remote",
            },
          ],
        },
      ],
    },
    {
      title: "Legacy architecture",
      status: "Documented starting point",
      description:
        "The original View performed database work, Models were used as helpers, and a proper ViewModel layer was absent.",
      flows: [
        {
          label: "Observed separation-of-concerns issues",
          direction: "related",
          nodes: [
            {
              label: "View",
              detail: "Performed database operations",
              kind: "legacy",
            },
            {
              label: "Models",
              detail: "Used as helpers",
              kind: "legacy",
            },
            {
              label: "ViewModel layer",
              detail: "No proper layer",
              kind: "legacy",
            },
          ],
        },
      ],
    },
    {
      title: "Over-the-air updates",
      status: "Workflow implemented",
      description:
        "The application update mechanism involved Firebase Remote Config and an AWS EC2-based workaround.",
      flows: [
        {
          label: "Related components · implementation sequence not documented",
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
        "Download, hosting, version-checking, and installation details are not specified.",
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

const projects: Project[] = [
  {
    title: "Cebu Agua Lab · Flutter application",
    category: "Offline-first mobile modernization",
    description:
      "Rebuilt a Flutter mobile application with Riverpod state management, Drift/SQLite local persistence, offline operation, two-way API synchronization, and an OTA update mechanism.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Drift / SQLite",
      "Remote API",
      "Firebase Remote Config",
      "AWS EC2",
    ],
    links: {},
    caseStudy: {
      role: "Junior Developer · Vox Dei Protocol Systems, Inc.",
      status: "Rebuilt application · client feedback received",
      sections: [
        {
          heading: "Context & challenge",
          paragraphs: [
            "The client application needed to work offline and synchronize local data with a remote API.",
            "In the legacy app, the View performed database operations, Models were used as helpers, and there was no proper ViewModel layer. These concerns were coupled in the UI.",
          ],
        },
        {
          heading: "My contribution",
          paragraphs: [
            "Rebuilt the Flutter application using Dart, Riverpod for state management, and Drift/SQLite for local persistence.",
            "Implemented offline operation and two-way synchronization with the remote API.",
          ],
        },
        {
          heading: "Technical approach",
          paragraphs: [
            "Used Riverpod and Drift/SQLite in the rebuilt application. The specific provider/controller pattern and additional repository or service layers are not described here.",
            "Implemented an OTA update mechanism involving Firebase Remote Config and AWS EC2. The detailed download and installation sequence is not specified.",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "The rebuilt app supports offline use, local persistence, and two-way API synchronization. The client praised the new version in a meeting attended by the IT manager and a senior colleague.",
          ],
        },
      ],
    },
    images: [],
    architecture: ceBuFlutterArchitecture,
  },
  {
    title: "PMVIC · Cordova application",
    category: "Legacy application modernization",
    description:
      "Rewrote a procedural Cordova frontend into an MVVM-oriented implementation, improved UI/UX, and implemented an OTA update mechanism.",
    tech: ["Cordova", "MVVM", "Firebase Remote Config", "AWS EC2"],
    links: {},
    caseStudy: {
      role: "Junior Developer · Vox Dei Protocol Systems, Inc.",
      status: "Frontend rewrite and OTA workflow implemented",
      sections: [
        {
          heading: "Context & challenge",
          paragraphs: [
            "The PMVIC application frontend used a procedural Cordova structure. Updating through the Google Play Store was a constraint for the update workflow.",
          ],
        },
        {
          heading: "My contribution",
          paragraphs: [
            "Rewrote the frontend toward an MVVM-oriented implementation and improved the UI/UX.",
          ],
        },
        {
          heading: "Technical approach",
          paragraphs: [
            "Implemented an OTA update mechanism involving Firebase Remote Config and an AWS EC2-based workaround.",
            "The exact version-check, hosting, download, and installation sequence is not documented here.",
          ],
        },
        {
          heading: "Outcome",
          paragraphs: [
            "The update workflow avoided requiring Google Play Store distribution for that workflow. No broader deployment or usage claims are made.",
          ],
        },
      ],
    },
    images: [],
    architecture: pmvicArchitecture,
  },
  {
    title: "Campus Secure · WinForms to WinUI 3",
    category: "Desktop application modernization",
    description:
      "Modernization in progress on a legacy C# WinForms application, moving toward WinUI 3 and MVVM with work across device integration and desktop workflows.",
    tech: ["C#", ".NET", "WinUI 3", "WinForms", "MVVM"],
    links: {},
    caseStudy: {
      role: "Junior Developer · Vox Dei Protocol Systems, Inc.",
      status: "Modernization in progress",
      sections: [
        {
          heading: "Context & challenge",
          paragraphs: [
            "Campus Secure is a legacy C# WinForms application being modernized toward WinUI 3 and an MVVM-oriented structure.",
          ],
        },
        {
          heading: "My contribution",
          paragraphs: [
            "Worked on functionality involving RFID/Hikvision integration, reports, printing, filtering, and sorting.",
          ],
        },
        {
          heading: "Technical approach",
          paragraphs: [
            "The target direction is WinUI 3 and MVVM. No additional model, service, or data-access layers are claimed here.",
            "Device protocols and SDK details are not included.",
          ],
        },
        {
          heading: "Status & outcome",
          paragraphs: [
            "Work is ongoing. This case study does not imply a completed migration, production deployment, or release.",
          ],
        },
      ],
    },
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
    caseStudy: {
      role: "Academic thesis · Team lead and software developer",
      status: "Academic project · not represented as production",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "Our academic team developed a memorial-lot and payment management system intended to improve tracking previously handled in spreadsheets.",
          ],
        },
        {
          heading: "My contribution",
          paragraphs: [
            "Led a three-member team and handled software development across customer-facing, kiosk, administrative, and mapping-related functionality.",
          ],
        },
        {
          heading: "Technical approach",
          paragraphs: [
            "Explored OpenStreetMap integration and PayMongo payments.",
          ],
        },
        {
          heading: "Outcome & scope",
          paragraphs: [
            "The thesis received Thesis of the Year recognition. This remains an academic project; no claim is made that the system is currently used in production.",
          ],
        },
      ],
    },
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
      "Worked with a legacy Laravel/Vuexy web application whose controller, model, and schema practices had unclear separation of concerns.",
    tech: ["Laravel", "PHP", "Vue.js", "Query Builder"],
    links: {},
    caseStudy: {
      role: "Junior Developer · Vox Dei Protocol Systems, Inc.",
      status: "Legacy application work · scope of refactor not documented",
      sections: [
        {
          heading: "Context & challenge",
          paragraphs: [
            "This was a separate Laravel/Vuexy web application associated with Cebu Agua Lab.",
            "The legacy code used models as helper classes, performed database operations through Query Builder in controllers, and lacked database migrations.",
          ],
        },
        {
          heading: "My contribution",
          paragraphs: [
            "Worked with the existing application and its legacy structure.",
          ],
        },
        {
          heading: "Technical approach",
          paragraphs: [
            "Worked in the existing Laravel/PHP and Vue.js codebase. Specific refactoring changes are not documented in enough detail to claim these concerns were fully resolved.",
          ],
        },
        {
          heading: "Outcome & scope",
          paragraphs: [
            "This case study records experience with the legacy system; it does not claim a complete rewrite or a specific migration outcome.",
          ],
        },
      ],
    },
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
