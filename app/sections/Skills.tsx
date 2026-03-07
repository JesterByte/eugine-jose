"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SkillsOrbit from "@/components/SkillsOrbit";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Backend & Databases", // Placed first as it's your professional core
    skills: [
      {
        name: "Laravel",
        icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
      },
      {
        name: "PHP",
        icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
      },
      {
        name: "MySQL",
        icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
      },
      {
        name: "Supabase",
        icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
      },
    ],
  },
  {
    title: "Frontend & Mobile", // Your versatile "other half"
    skills: [
      {
        name: "Flutter",
        icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
      {
        name: "React",
        icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      },
      {
        name: "TypeScript",
        icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      {
        name: "Tailwind",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Livewire",
        icon: "https://raw.githubusercontent.com/livewire/livewire/main/art/logo.svg",
      },
    ],
  },
  {
    title: "Tools & Intelligence", // Highlighting your modern workflow
    skills: [
      {
        name: "Docker",
        icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
      },
      {
        name: "Git",
        icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        name: "Vercel",
        icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
      },
      {
        name: "OpenAI",
        icon: "https://www.svgrepo.com/show/306500/openai.svg",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 max-w-6xl mx-auto px-6 scroll-mt-20 overflow-hidden"
    >
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight italic">
          Technical Arsenal<span className="text-primary">.</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal
          delay={0.2}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            <SkillsOrbit />
          </div>
        </ScrollReveal>

        <div className="space-y-10 order-1 lg:order-2">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.title} delay={0.1 * idx}>
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-primary/70">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="pl-2 pr-4 py-1.5 rounded-full bg-muted/30 border-border/50 hover:border-primary/50 transition-all group/badge"
                    >
                      <div className="w-5 h-5 mr-2 rounded-full overflow-hidden flex items-center justify-center bg-white/10 p-1">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain grayscale group-hover/badge:grayscale-0 transition-all"
                        />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.5}>
            <p className="text-sm text-muted-foreground pt-6 border-t border-border/40 italic">
              Currently deep-diving into: Advanced Riverpod Architectures &
              Automated Backend Testing.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
