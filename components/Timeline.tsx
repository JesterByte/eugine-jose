"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  {
    type: "Professional experience",
    title: "Backend Developer · Saabsoft Technology",
    description:
      "Worked with Bitrix24 CRM, PHP scripting, technical support, and third-party integrations. Implemented CRM automation, assisted with client-specific integrations, and contributed to a Vue.js reporting application connected to a property management module.",
    tags: ["Bitrix24", "PHP", "Integrations", "Vue.js"],
  },
  {
    type: "Part-time development",
    title: "Catholic Records · catholicrecords.ph",
    description:
      "Developed and maintained features in an existing application using PHP, HTML, Bootstrap, and jQuery. Fixed bugs, tested functionality, updated database records, and deployed updates to Hostinger shared hosting.",
    tags: ["PHP", "HTML", "Bootstrap", "jQuery"],
    href: "https://www.catholicrecords.ph/",
  },
  {
    type: "Application modernization",
    title: "Client and project work",
    description:
      "Worked on modernization across mobile and desktop applications, including Flutter and Cordova restructuring, offline data workflows, and a WinForms-to-WinUI 3 migration. See the selected case studies for details.",
    tags: ["Flutter", "Cordova", "C#", "MVVM", "Offline sync"],
    href: "#projects",
  },
  {
    type: "Education",
    title: "B.S. Computer Science · ACLC College of Santa Maria",
    description:
      "Graduated in 2025. Recognized with Thesis of the Year and Web Developer of the Year; also received silver in a regional web development competition and gold in a local competition.",
    tags: ["Graduated 2025", "Thesis of the Year", "Web Developer of the Year"],
  },
];

export default function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ol className="relative space-y-5 border-l border-border pl-6 md:ml-3">
      {items.map((item, index) => (
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
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            {item.type}
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
            {item.title}
          </h3>
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
