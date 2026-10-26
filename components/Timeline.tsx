"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

type TimelineItem = {
  type: string;
  title: string;
  date: string;
  dateTime: string;
  startYear: number;
  startMonth?: number;
  description: string;
  tags: string[];
  href?: string;
  kind: "employment" | "education";
};

const items: TimelineItem[] = [
  {
    type: "Part-time employment · First paid development role",
    title: "Programmer · Catholic Records / Diocese of Malolos",
    date: "March 2024 – August 2024",
    dateTime: "2024-03",
    startYear: 2024,
    startMonth: 3,
    description:
      "Began paid software development work during my third year of college. Contributed features, fixed bugs, tested changes, updated database records, and deployed updates to Hostinger shared hosting.",
    tags: ["PHP", "HTML", "Bootstrap", "jQuery", "XAMPP"],
    href: "https://www.catholicrecords.ph/",
    kind: "employment",
  },
  {
    type: "Education",
    title: "B.S. Computer Science · ACLC College of Santa Maria",
    date: "Graduated June 2025",
    dateTime: "2025-06",
    startYear: 2025,
    startMonth: 6,
    description:
      "Earned my Bachelor of Science in Computer Science. Recognitions included Thesis of the Year and Web Developer of the Year, with gold and silver placements in local and regional web development competitions.",
    tags: [
      "Thesis of the Year",
      "Web Developer of the Year",
      "Regional competition · Silver",
      "Local competition · Gold",
    ],
    kind: "education",
  },
  {
    type: "Professional experience · Remote from the Philippines",
    title: "Backend Developer · Saabsoft Technology",
    date: "July 2025 – January 2026",
    dateTime: "2025-07",
    startYear: 2025,
    startMonth: 7,
    description:
      "Worked remotely from the Philippines for a Dubai-based company. Responsibilities combined Bitrix24 technical support, PHP scripting, CRM automation, and third-party integrations. Also contributed to web application integrations, including a Vue.js reporting application connected to a property management module. During my fourth month, I took on additional client-handling responsibilities alongside technical work.",
    tags: ["Bitrix24", "PHP", "CRM automation", "Integrations", "Vue.js"],
    kind: "employment",
  },
  {
    type: "Professional experience",
    title: "Junior Developer · Vox Dei Protocol Systems, Inc.",
    date: "March 2026 onward",
    dateTime: "2026-03",
    startYear: 2026,
    startMonth: 3,
    description:
      "Worked on legacy application modernization across mobile, web, and desktop applications, including PMVIC, Cebu Agua Lab, and Campus Secure. The work spans Flutter, Riverpod, Drift, Laravel, Vue.js, C#, WinUI 3, MVVM, Firebase Remote Config, and AWS EC2.",
    tags: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Drift",
      "Laravel",
      "Vue.js",
      "C#",
      "WinUI 3",
      "MVVM",
      "Firebase Remote Config",
      "AWS EC2",
    ],
    href: "#projects",
    kind: "employment",
  },
];

const chronologicalItems = items
  .map((item, originalIndex) => ({ item, originalIndex }))
  .sort(
    (a, b) =>
      a.item.startYear - b.item.startYear ||
      (a.item.startMonth ?? 0) - (b.item.startMonth ?? 0) ||
      a.originalIndex - b.originalIndex,
  )
  .map(({ item }) => item);

export default function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ol className="relative space-y-5 border-l border-border pl-6 md:ml-3">
      {chronologicalItems.map((item, index) => (
        <motion.li
          key={item.title}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { delay: index * 0.06, duration: 0.35 }
          }
          className="relative rounded-2xl border border-border bg-muted/20 p-5 md:p-7"
        >
          <span
            aria-hidden="true"
            className="absolute -left-[1.96rem] top-7 size-3 rounded-full border-2 border-primary bg-background"
          />
          <div className="flex flex-wrap items-center gap-2">
            {item.kind === "education" ? (
              <GraduationCap
                aria-hidden="true"
                className="size-4 text-primary"
              />
            ) : (
              <BriefcaseBusiness
                aria-hidden="true"
                className="size-4 text-primary"
              />
            )}
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              {item.type}
            </p>
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
            {item.title}
          </h3>
          <time
            dateTime={item.dateTime}
            className="mt-1 block text-sm font-medium text-foreground/80"
          >
            {item.date}
          </time>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {item.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Relevant skills">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
          {item.href && (
            <a
              href={item.href}
              className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.href === "#projects"
                ? "Explore the case studies"
                : "Visit Catholic Records"}
            </a>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
