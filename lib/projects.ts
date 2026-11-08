import type { Project } from "@/lib/project-content";
import type { ProjectArchitecture } from "@/components/ArchitectureDiagram";

const aguaLabFlutterArchitecture: ProjectArchitecture = {
  title: "Cebu Agua Lab application architecture",
  caption:
    "A layered MVVM-oriented structure and an in-app APK update flow with user-confirmed Android installation.",
  accessibleDescription:
    "Diagram of the Cebu Agua Lab layered MVVM-oriented application architecture and APK update flow from Firebase Remote Config through AWS EC2 to Android's package installer.",
  views: [
    {
      title: "Layered MVVM-oriented architecture",
      status: "Implemented",
      description:
        "Presentation, application logic, data access, and entities are organized by responsibility without claiming strict adherence to every MVVM convention.",
      flows: [
        {
          label: "UI and business-logic flow",
          direction: "forward",
          nodes: [
            {
              label: "View",
              detail: "Presents UI and handles interactions",
              kind: "application",
            },
            {
              label: "ViewModel",
              detail: "Coordinates view-triggered operations",
              kind: "logic",
            },
            {
              label: "Service",
              detail: "Application and business operations",
              kind: "logic",
            },
            {
              label: "Repository",
              detail: "Abstracts Drift database access",
              kind: "storage",
            },
          ],
        },
        {
          label: "Application entities",
          nodes: [
            {
              label: "Model",
              detail: "Defines Request, Client, and Test entities",
              kind: "application",
            },
          ],
        },
      ],
    },
    {
      title: "Offline request capture and API sync",
      status: "Implemented",
      description:
        "Staff can record water-testing requests locally; pending requests are queued for upload to the Laravel API.",
      flows: [
        {
          label: "Request capture and queued upload",
          direction: "forward",
          nodes: [
            {
              label: "Flutter application",
              detail: "Staff request entry",
              kind: "application",
            },
            {
              label: "Drift / SQLite",
              detail: "Local requests and upload queue",
              kind: "storage",
            },
            {
              label: "Laravel API",
              detail: "Request synchronization",
              kind: "remote",
            },
          ],
        },
      ],
    },
    {
      title: "In-app APK update delivery",
      status: "Implemented",
      description:
        "Firebase Remote Config provides release information; AWS EC2 hosts the APK. Android's system installer requires staff confirmation.",
      flows: [
        {
          label: "Release check, download, and install handoff",
          direction: "forward",
          nodes: [
            {
              label: "Firebase Remote Config",
              detail: "Release version and APK download information",
              kind: "remote",
            },
            {
              label: "Flutter application",
              detail: "Checks release and offers optional or mandatory update",
              kind: "application",
            },
            {
              label: "AWS EC2",
              detail: "Hosts downloadable APK assets",
              kind: "remote",
            },
            {
              label: "Android package installer",
              detail: "Staff reviews and confirms installation",
              kind: "logic",
            },
          ],
        },
      ],
    },
  ],
};

const pmvicArchitecture: ProjectArchitecture = {
  title: "PMVIC Cordova to Flutter modernization",
  caption:
    "Procedural Cordova starting point, Flutter rewrite, and OTA update components.",
  accessibleDescription:
    "PMVIC architecture showing the procedural Cordova application, its Flutter rewrite, and OTA version checks with Firebase Remote Config.",
  views: [
    {
      title: "Original application",
      status: "Legacy",
      description:
        "The inspection frontend used a procedural Cordova structure.",
      flows: [
        {
          label: "Previous implementation",
          nodes: [
            {
              label: "Procedural Cordova application",
              kind: "legacy",
            },
          ],
        },
      ],
    },
    {
      title: "Modernized application",
      status: "Implemented",
      description:
        "The frontend was rewritten in Flutter with a practical structure chosen to deliver requirements.",
      flows: [
        {
          label: "Mobile frontend",
          nodes: [
            {
              label: "Flutter application",
              detail: "Practical implementation",
              kind: "application",
            },
          ],
        },
      ],
    },
    {
      title: "Over-the-air updates",
      status: "Implemented",
      description:
        "Firebase provides the latest version, download URL, and file size; an outdated app prompts for an update without release notes.",
      flows: [
        {
          label: "Version check and update prompt",
          direction: "forward",
          nodes: [
            { label: "Firebase Remote Config", kind: "remote" },
            { label: "Flutter version check", kind: "logic" },
            { label: "Download prompt", kind: "application" },
          ],
        },
      ],
    },
  ],
};

const campusSecureArchitecture: ProjectArchitecture = {
  title: "Campus Secure WinForms to WinUI 3",
  caption:
    "WinUI 3 modernization, school data services, reporting, and installer delivery.",
  accessibleDescription:
    "Campus Secure architecture showing the legacy WinForms application, WinUI 3 school entities and services, Entity Framework Core with PostgreSQL, Hikvision RFID integration, reporting, and installer delivery.",
  views: [
    {
      title: "Original application",
      status: "Legacy",
      description:
        "Campus Secure began as a C# WinForms attendance monitoring system.",
      flows: [
        {
          label: "Desktop application",
          nodes: [{ label: "C# WinForms", kind: "legacy" }],
        },
      ],
    },
    {
      title: "Modernization work",
      status: "In progress",
      description:
        "The WinUI 3 application organizes school entities and services, with Entity Framework Core and PostgreSQL for data access.",
      flows: [
        {
          label: "School data access",
          direction: "related",
          nodes: [
            { label: "WinUI 3", kind: "application" },
            { label: "School entities and services", kind: "logic" },
            { label: "EF Core / PostgreSQL", kind: "storage" },
          ],
        },
        {
          label: "School and hardware workflows",
          direction: "related",
          nodes: [
            {
              label: "Hikvision RFID integration",
              kind: "remote",
            },
            {
              label: "Management · attendance · CSV/PDF reports",
              kind: "application",
            },
          ],
        },
      ],
    },
    {
      title: "Installer and OTA delivery",
      status: "Implemented",
      description:
        "Technical requirements called for an unpackaged app; installer authentication and hosting use a Laravel API and AWS EC2.",
      flows: [
        {
          label: "Installer delivery",
          direction: "forward",
          nodes: [
            { label: "Inno Setup installer", kind: "application" },
            { label: "Laravel API authentication", kind: "logic" },
            { label: "AWS EC2 installer hosting", kind: "remote" },
          ],
        },
      ],
    },
  ],
};

const projects: Project[] = [
  {
    title: "Cebu Agua Lab — Flutter Application Modernization",
    category: "Business application modernization",
    description:
      "Modernized a legacy business application into a more responsive, maintainable Flutter app with an improved staff experience, offline request capture, layered MVVM-oriented architecture, and in-app APK update delivery.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Drift",
      "SQLite",
      "Laravel API",
      "Firebase Remote Config",
      "AWS EC2",
    ],
    links: {},
    media: [
      {
        src: "/projects/cali-app.jpg",
        alt: "Cebu Agua Lab Flutter application displayed on a handheld mobile device, showing its operations dashboard and service records.",
        caption: "Cebu Agua Lab mobile application",
      },
    ],
    caseStudy: {
      role: "I modernized the staff-facing Flutter application, improved its UI and navigation, introduced a layered MVVM-oriented structure, and implemented an in-app APK update flow. The application also supports offline water-testing request capture with queued uploads to the Laravel API.",
      status: "Used by staff; qualitative feedback received",
      problem:
        "The legacy business application was slow to respond during loading and navigation, had an outdated interface, and relied on staff to download and install updates from Google Drive. Its implementation also needed clearer separation between presentation, business logic, and data access.",
      approach: [
        "Redesigned staff workflows with more intuitive screens and clearer form-field instructions.",
        "Used Riverpod for reactive state updates and GoRouter to improve navigation structure.",
        "Organized the application around View, ViewModel, Service, Repository, and Model responsibilities.",
        "Moved update discovery into the application, using Firebase Remote Config for release information and AWS EC2 for APK downloads.",
      ],
      tradeoff:
        "The structure is MVVM-oriented rather than a claim of strict, textbook MVVM. It provides clearer responsibility boundaries while staying practical for the application.",
      result:
        "The modernized application gives staff a more intuitive interface and a smoother-feeling day-to-day experience, while replacing the previous manual Google Drive update handoff with an in-app, user-confirmed installation flow.",
      proof:
        "The application is client-owned. The project image is illustrative; no before-and-after screenshots or formal performance measurements are available.",
      modernization: {
        objectives: [
          "Make common staff workflows easier to understand and complete.",
          "Improve perceived responsiveness across loading and navigation.",
          "Reduce maintenance friction and replace manual update distribution.",
        ],
        legacyChallenges: [
          "Slow loading and navigation made the application feel less fluid.",
          "The outdated interface made common staff workflows less intuitive.",
          "Google Drive updates required staff to download and install each APK manually.",
          "UI responsibilities, data access, and business logic needed clearer separation.",
        ],
        experienceImprovements: [
          "Introduced a more intuitive, modern interface for staff workflows.",
          "Added clearer form-field instructions to guide staff through operations.",
          "Used Riverpod for more reactive UI updates and GoRouter for clearer navigation.",
        ],
        responsivenessNote:
          "Staff experience the redesigned application as smoother than the previous version. No formal performance benchmarks were collected, so this is an observed user-experience improvement rather than a measured speed claim.",
        architectureLayers: [
          {
            name: "View",
            responsibility:
              "Presents the UI and handles user interactions, keeping presentation concerns separate from business logic.",
          },
          {
            name: "ViewModel",
            responsibility:
              "Coordinates operations triggered by the view and communicates with the Service layer.",
          },
          {
            name: "Service",
            responsibility:
              "Handles application and business logic required by the ViewModel.",
          },
          {
            name: "Repository",
            responsibility:
              "Abstracts data access and communicates with the Drift database.",
          },
          {
            name: "Model",
            responsibility:
              "Defines application entities, including Request, Client, and Test.",
          },
        ],
        architectureBenefits: [
          "Separates responsibilities so application logic is easier to follow.",
          "Makes debugging and maintenance more straightforward.",
          "Allows UI changes without unnecessarily coupling them to data access or business logic.",
        ],
        previousUpdateWorkflow: [
          "Updates were uploaded to Google Drive.",
          "Staff manually downloaded the APK.",
          "Staff manually installed the update.",
        ],
        modernizedUpdateWorkflow: [
          "Firebase Remote Config stores the release version and APK download information.",
          "The app checks the configured release and presents an update dialog when appropriate.",
          "The app downloads the APK from an AWS EC2-hosted distribution endpoint.",
          "The app launches Android's package installer; staff confirms installation there.",
        ],
        updateSafeguards: [
          "Supports both mandatory and optional updates.",
          "Allows a download to be retried after interruption.",
          "Preserves the existing installation if an installation attempt fails.",
          "Maintains backward compatibility between consecutive releases.",
        ],
        staffFeedback: [
          "Staff praised the redesigned interface.",
          "The manager appreciated the application's modernization.",
        ],
      },
    },
    architecture: aguaLabFlutterArchitecture,
  },
  {
    title: "PMVIC · Cordova application",
    category: "Mobile application modernization",
    description:
      "Flutter rewrite of the PMVIC inspection frontend, replacing a procedural Cordova implementation with QR scanning, inspection-state cues, and OTA update prompts.",
    tech: [
      "Cordova",
      "Flutter",
      "Dart",
      "QR code scanning",
      "Firebase Remote Config",
      "AWS EC2",
    ],
    links: {},
    media: [
      {
        src: "/projects/pmvic-app.jpg",
        alt: "PMVIC Flutter inspection application displayed on a mobile phone, with inspection status and vehicle checks.",
        caption: "PMVIC inspection application",
      },
    ],
    caseStudy: {
      role: "I rewrote the frontend in Flutter, added QR code scanning and inspection-state indicators, and implemented the OTA update workflow.",
      status: "Frontend rewrite and OTA workflow implemented",
      problem:
        "The inspection frontend used a procedural Cordova structure, and the update path needed to avoid relying on Google Play Store releases.",
      approach: [
        "Rewrote the frontend in Flutter with a practical structure to make requirement implementation more direct.",
        "Added QR code scanning and visual indicators for inspection state.",
        "Used Firebase Remote Config to return the latest version, download URL, and file size; outdated versions prompt for download.",
      ],
      tradeoff:
        "I did not enforce strict MVVM; a practical structure made it easier to implement the project requirements.",
      result:
        "The rewrite improved the app's look and performance. Inspection-state cues make it easier to see inspection progress, and OTA updates streamline distribution.",
      // TODO(eugine): add one real metric (startup time, sync success rate, screens migrated, active users)
      proof:
        "Client-owned codebase; the screenshot above is shown for illustration.",
    },
    architecture: pmvicArchitecture,
  },
  {
    title: "Campus Secure · WinForms to WinUI 3",
    category: "Desktop application modernization",
    description:
      "WinForms-to-WinUI 3 modernization spanning school management, attendance, reporting, and Hikvision RFID workflows.",
    tech: [
      "C#",
      ".NET",
      "WinUI 3",
      "WinForms",
      "EF Core",
      "PostgreSQL",
      "Hikvision RFID",
      "Inno Setup",
      "Laravel API",
      "AWS EC2",
    ],
    links: {},
    media: [
      {
        src: "/projects/campus-secure.jpg",
        alt: "Campus Secure attendance monitoring dashboard displayed on a desktop screen, with attendance records and reporting controls.",
        caption: "Campus Secure desktop application",
      },
    ],
    caseStudy: {
      role: "I modernized the WinForms application in WinUI 3, implemented school-management and attendance features, added CSV/PDF reports, and worked on the Hikvision RFID integration and installer update flow.",
      status: "Modernization in progress",
      problem:
        "Campus Secure's legacy WinForms application needed clearer navigation, school-data management, reporting, RFID integration, and a maintainable way to distribute updates.",
      approach: [
        "Built WinUI 3 functionality for managing students, staff, visitors, guardians, fetchers, back-office users, user groups, master lists, attendance reports, school details, and action logs.",
        "Organized the implementation around school entities and entity services, with EF Core and PostgreSQL for data access; integrated Hikvision RFID and CSV/PDF report generation.",
        "Added an Inno Setup installer, Laravel API authentication, and AWS EC2 installer hosting for OTA delivery.",
      ],
      tradeoff:
        "The app was intended to be packaged, but technical requirements required an unpackaged app, which complicated OTA updates. Installer delivery uses Inno Setup, Laravel API authentication, and AWS EC2 installer hosting.",
      result:
        "The modernization improves navigation and data management, supports CSV/PDF reports, and streamlines installer and OTA delivery. The structure also makes integrations for a different turnstile provider more maintainable.",
      // TODO(eugine): add one real metric (startup time, sync success rate, screens migrated, active users)
      proof:
        "Client-owned codebase; the screenshot above is shown for illustration.",
    },
    architecture: campusSecureArchitecture,
  },
  {
    title: "Green Haven Memorial Park",
    category: "Academic thesis · Multi-part system",
    description:
      "Academic memorial-park system with customer, kiosk, administrative, and mapping experiences, including digitized lot locations and payment records.",
    tech: [
      "CodeIgniter",
      "XAMPP",
      "Bootstrap CSS",
      "jQuery",
      "Kiosk",
      "OpenStreetMap",
      "PayMongo",
    ],
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
    media: [
      {
        src: "/projects/ghmp-dashboard.png",
        alt: "Green Haven Memorial Park admin dashboard showing lot inventory, revenue, pending services, and interment totals.",
        caption: "Administrative dashboard",
      },
      {
        src: "/projects/ghmp-landing-page.png",
        alt: "Green Haven Memorial Park landing page with navigation, inquiry and sign-in actions, and memorial service cards.",
        caption: "Customer-facing landing page",
      },
      {
        src: "/projects/ghmp-kiosk.png",
        alt: "Green Haven Memorial Park map interface showing a route between two marked locations.",
        caption: "Map and directions interface",
      },
    ],
    caseStudy: {
      role: "I led a three-member academic team and developed customer-facing, kiosk, administrative, and mapping-related functionality.",
      status: "Academic thesis project · Thesis of the Year",
      problem:
        "Lot and payment tracking relied on spreadsheets, creating a need for a multi-part system for customers, kiosk users, and administrators.",
      approach: [
        "Built customer-facing, kiosk, administrative, and mapping-related functionality.",
        "Used OpenStreetMap to digitize lot locations and their occupied, available, or reserved status.",
        "Implemented PayMongo payments, then returned to uploaded receipt records after the client rejected the transaction fees.",
      ],
      tradeoff:
        "The client rejected PayMongo's transaction fees, so payment recording returned to uploaded receipts instead of online payment processing.",
      result:
        "The system digitized lot locations and availability status for the map and recorded payments through uploaded receipts. The thesis received Thesis of the Year recognition.",
      proof:
        "Application screenshots and source repositories are available below.",
    },
  },
  {
    title: "DCRMS · Church Records Management System",
    category: "Church records management",
    description:
      "A web-based church records management system designed to digitize ecclesiastical records and simplify document requests through online applications, payment receipt uploads, and delivery or pickup options.",
    tech: ["PHP", "HTML", "Bootstrap", "jQuery", "XAMPP"],
    links: { live: "https://www.catholicrecords.ph/" },
    media: [
      {
        src: "/projects/church-records.png",
        alt: "Church records management system interface.",
        caption: "DCRMS church records interface",
      },
    ],
    caseStudy: {
      role: "Programmer at Catholic Records / Diocese of Malolos.",
      status: "Implemented during a part-time development role",
      problem:
        "Requesting baptismal, marriage, or death certificates traditionally required people to visit their respective churches in person. This made the process inconvenient, particularly for those living far from the church or unable to visit during office hours. Churches also needed a more organized way to manage records and document requests.",
      approach: [
        "Developed an online document request form where users could request baptismal, marriage, and death certificates without initially visiting the church.",
        "Implemented GCash payment receipt uploading so applicants could submit proof of payment online.",
        "Provided delivery and in-person pickup options for requested documents.",
        "Created management accounts for church personnel, including chancellors, priests, and encoders, with workflows for approving or declining requests and managing church records.",
        "Built a responsive interface to allow people to access the platform and submit requests using their smartphones, even without a desktop computer.",
        "Established the foundation for a larger initiative to digitize church records across the Philippines.",
      ],
      tradeoff:
        "The system did not yet have direct GCash payment integration, relying instead on uploaded payment receipts. There was also no dedicated Android or iOS application, meaning users had to find and access DCRMS through their mobile web browsers.",
      result:
        "Streamlined church record management, established digital backups of ecclesiastical records, and made document requests more accessible through online applications with delivery or pickup options. The platform helped reduce the need for applicants to personally visit churches just to initiate document requests.",
      proof: "The project interface is shown above.",
    },
  },
];

export default projects;
