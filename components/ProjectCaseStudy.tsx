import ProjectMedia from "./ProjectMedia";
import type { Project } from "@/lib/project-content";

export default function ProjectCaseStudy({
  project,
}: {
  project: Project;
}) {
  const { caseStudy, tech, media, repositories, links } = project;
  const proofLinks =
    repositories && repositories.length > 0
      ? repositories
      : links.github
        ? [{ label: "Source repository", href: links.github }]
        : [];
  const mediaSlots = media.filter((item) => !item.src);

  return (
    <section aria-label="Project case study" className="space-y-5">
      <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold tracking-tight">
            My role and ownership
          </h3>
          <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
            {caseStudy.status}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {caseStudy.role}
        </p>
      </section>

      <div className="grid gap-5 sm:grid-cols-2">
        <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
          <h3 className="text-sm font-semibold tracking-tight">The problem</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {caseStudy.problem}
          </p>
        </section>

        <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
          <h3 className="text-sm font-semibold tracking-tight">
            Approach and key decisions
          </h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {caseStudy.approach.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
          <h4 className="mt-4 text-sm font-semibold tracking-tight">
            Tradeoff
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {caseStudy.tradeoff}
          </p>
        </section>

        {caseStudy.offlineSync && (
          <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5 sm:col-span-2">
            <h3 className="text-sm font-semibold tracking-tight">
              Offline-first synchronization
            </h3>
            <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
              {[
                ["Local store", caseStudy.offlineSync.localStore],
                ["Synchronization", caseStudy.offlineSync.synchronization],
                ["Conflict handling", caseStudy.offlineSync.conflicts],
                ["Retries", caseStudy.offlineSync.retries],
                ["Sync queue", caseStudy.offlineSync.queue],
                ["Over-the-air updates", caseStudy.offlineSync.updateDelivery],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-border/70 p-3">
                  <dt className="font-medium text-foreground">{label}</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
          <h3 className="text-sm font-semibold tracking-tight">Result</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {caseStudy.result}
          </p>
        </section>

        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5 sm:col-span-2">
            <h3 className="text-sm font-semibold tracking-tight">
              Measured outcomes
            </h3>
            <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border/70 p-3"
                >
                  <dt className="font-medium text-foreground">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 text-muted-foreground">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
          <h3 className="text-sm font-semibold tracking-tight">Tech stack</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5 sm:col-span-2">
          <h3 className="text-sm font-semibold tracking-tight">Proof</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {caseStudy.proof}
          </p>
          {proofLinks.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {proofLinks.map((proofLink) => (
                <li key={proofLink.href}>
                  <a
                    href={proofLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {proofLink.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {mediaSlots.length > 0 && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {mediaSlots.map((item) => (
                <ProjectMedia
                  key={item.caption}
                  media={item}
                  aspectClass="aspect-[2/1]"
                  showCaption
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
