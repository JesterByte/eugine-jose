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
  highlights: string[];
  tags?: string[];
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
    highlights: [
      "Implemented email notifications for document requests and other transactions, and managed baptism, marriage, and death records.",
      "The platform later expanded beyond the original diocese, with additional parishes and dioceses adopting it.",
    ],
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
    highlights: ["Earned a Bachelor of Science in Computer Science."],
    kind: "education",
  },
  {
    type: "Professional experience · Remote from the Philippines",
    title: "Backend Developer · Saabsoft Technology",
    date: "July 2025 – January 2026",
    dateTime: "2025-07",
    startYear: 2025,
    startMonth: 7,
    highlights: [
      "Handled Bitrix24 client requests and implemented requested changes with a fast turnaround.",
      "Built a Vue.js property-management reporting app with CSV and PDF export, then integrated it with Bitrix24 CRM to support property-record analysis for REMAX UAE and other clients.",
      "Took on additional CRM client-handling responsibilities during my fourth month.",
    ],
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
    highlights: [
      "Rebuilt Cebu Agua Lab's Flutter application with Riverpod, Drift/SQLite local storage, offline water-testing requests, and queued uploads to the Laravel API. The client praised the rewrite's look and performance.",
      "Reworked PMVIC's Cordova inspection frontend in Flutter, adding QR scanning, inspection-state cues, and OTA updates that streamline distribution.",
      "Modernized Campus Secure school-management and attendance workflows, added CSV/PDF reports and OTA installer delivery, and improved navigation and maintainability for a different turnstile-provider integration.",
    ],
    tags: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Drift",
      "Laravel",
      "Vue.js",
      "C#",
      "WinUI 3",
      "Firebase Remote Config",
      "AWS EC2",
    ],
    href: "#projects",
    kind: "employment",
  },
];

const reverseChronologicalItems = items
  .map((item, originalIndex) => ({ item, originalIndex }))
  .sort(
    (a, b) =>
      b.item.startYear - a.item.startYear ||
      (b.item.startMonth ?? 0) - (a.item.startMonth ?? 0) ||
      a.originalIndex - b.originalIndex,
  )
  .map(({ item }) => item);

export default function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ol className="relative space-y-5 border-l border-border pl-6 md:ml-3">
      {reverseChronologicalItems.map((item, index) => (
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
          <ul className="mt-3 max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          {item.tags && item.tags.length > 0 && (
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Relevant skills"
            >
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
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
