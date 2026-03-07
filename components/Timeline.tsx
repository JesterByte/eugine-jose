"use client";

import { motion } from "framer-motion";

const items = [
  {
    year: "2025 - 2026",
    title: "Backend Developer • Saabsoft Technologies",
    description:
      "Engineering PHP webhooks and architecting complex integrations using the Bitrix24 REST API and JSON to automate enterprise-level business workflows.",
    tags: ["PHP", "Bitrix24", "REST API", "JSON", "Webhooks"],
  },
  {
    year: "2024 - 2025",
    title: "BS Computer Science Graduate • Awardee",
    description:
      "Graduated as 'Thesis of the Year' and 'Web Developer of the Year.' Mastered MVC architecture and collaborative version control through major academic milestones.",
    tags: ["CodeIgniter", "Git", "MVC", "MySQL"],
  },
  {
    year: "2023 - 2024",
    title: "Part-time Developer • Church Records System",
    description:
      "Co-developed the 'Digitized Church Records Management System' (DCRMS). Won Gold in the 2024 Inter-ACLC Web Development Competition.",
    tags: ["PHP", "IoT", "Arduino", "C++"],
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Fundamentals",
    description:
      "Built the core foundations of software engineering through rigorous projects, mastering relational databases and server-side logic.",
    tags: ["Java", "SQL", "XAMPP", "Software Design"],
  },
  {
    year: "2021 - 2022",
    title: "Data Analytics • Project SPARTA (DOST)",
    description:
      "Completed specialized training under the Department of Science and Technology, mastering Excel for advanced data analysis and the art of data storytelling.",
    tags: ["Data Analysis", "Excel", "Data Storytelling", "Logic"],
  },
  {
    year: "2020 - 2021",
    title: "Initial Foray into Engineering",
    description:
      "Started my technical journey building console-based applications in C#, establishing a deep understanding of Object-Oriented Programming (OOP).",
    tags: ["C#", "OOP", "Visual Studio", "CLI"],
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 py-4 space-y-12">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative pl-8 group"
        >
          <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]" />

          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
              {item.year}
            </span>

            <div className="p-5 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all backdrop-blur-sm group-hover:translate-x-1">
              <h3 className="text-xl font-bold tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 uppercase tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
