import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Braces, Github } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import type { Project } from "@/lib/project-content";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-muted/20 transition-colors hover:border-primary/50">
      {project.architecture ? (
        <ArchitectureDiagram
          architecture={project.architecture}
          compact
        />
      ) : project.images.length > 0 ? (
        <div className="relative aspect-video overflow-hidden border-b border-border">
          <Image
            src={project.images[0]}
            alt={`${project.title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-[2.2/1] items-center justify-between border-b border-border bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_55%)] px-6"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Case study
          </span>
          <Braces className="size-8 text-primary/70" />
        </div>
      )}

      <div className="flex grow flex-col p-6 md:p-7">
        <p className="mb-3 font-mono text-xs uppercase tracking-wide text-primary">
          {project.category}
        </p>
        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-5 mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mb-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Github aria-hidden="true" className="size-4" />
              Source code <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
          <ProjectModal project={project} />
        </div>
      </div>
    </article>
  );
}
