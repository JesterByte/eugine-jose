import ProjectCard from "@/components/ProjectCard";
import SideProjectSlot from "@/components/SideProjectSlot";
import ScrollReveal from "@/components/ScrollReveal";
import projects from "@/lib/projects";

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
            Each case study outlines the problem, my implementation choices,
            the outcome, and available proof.
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
      <SideProjectSlot />
    </section>
  );
}
