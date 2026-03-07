import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Github, ExternalLink, Award } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    links: {
      github?: string | null;
      live?: string | null;
    };
    details: string;
    tech: string[];
    images: string[];
    featured: boolean;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col bg-muted/20 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full">
      {project.title.includes("Green Haven") && (
        <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-lg">
          <Award className="w-3 h-3" />
          THESIS OF THE YEAR
        </div>
      )}

      <div className="relative aspect-video overflow-hidden border-b border-border/50">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors italic">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono bg-background px-2 py-0.5 rounded border border-border"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] text-muted-foreground">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          <ProjectModal project={project} />
        </div>
      </div>
    </div>
  );
}
