import type { ProjectCaseStudy as ProjectCaseStudyContent } from "@/lib/project-content";

export default function ProjectCaseStudy({
  caseStudy,
}: {
  caseStudy: ProjectCaseStudyContent;
}) {
  return (
    <section aria-label="Project case study" className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
          {caseStudy.role}
        </span>
        <span className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
          {caseStudy.status}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {caseStudy.sections.map((section) => (
          <section
            key={section.heading}
            aria-label={section.heading}
            className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5"
          >
            <h4 className="text-sm font-semibold tracking-tight">
              {section.heading}
            </h4>
            <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
