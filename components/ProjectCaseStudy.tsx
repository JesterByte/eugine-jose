import ArchitectureDiagram from "./ArchitectureDiagram";
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
      {caseStudy.modernization ? (
        <div className="space-y-5">
          <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold tracking-tight">
                Project overview
              </h3>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                {caseStudy.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {caseStudy.role}
            </p>
            <h4 className="mt-4 text-sm font-semibold tracking-tight">
              Modernization objectives
            </h4>
            <ul className="mt-2 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
              {caseStudy.modernization.objectives.map((objective) => (
                <li
                  key={objective}
                  className="rounded-lg border border-border/70 bg-background/60 p-3"
                >
                  {objective}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
            <h3 className="text-sm font-semibold tracking-tight">
              The legacy application
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {caseStudy.problem}
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
              {caseStudy.modernization.legacyChallenges.map((challenge) => (
                <li
                  key={challenge}
                  className="rounded-lg border border-border/70 bg-background/60 p-3"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
            <h3 className="text-sm font-semibold tracking-tight">
              UI/UX and application responsiveness
            </h3>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
              {caseStudy.modernization.experienceImprovements.map(
                (improvement) => (
                  <li
                    key={improvement}
                    className="rounded-lg border border-border/70 bg-background/60 p-3"
                  >
                    {improvement}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {caseStudy.modernization.responsivenessNote}
            </p>
          </section>

          <section className="space-y-4 rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
            <div>
              <h3 className="text-sm font-semibold tracking-tight">
                Layered MVVM-oriented architecture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The application separates presentation, coordination, business
                operations, data access, and entities. This is a practical
                MVVM-oriented structure, not a claim of strict adherence to
                every formal MVVM convention.
              </p>
            </div>
            {project.architecture && (
              <ArchitectureDiagram architecture={project.architecture} />
            )}
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.modernization.architectureLayers.map((layer) => (
                <div
                  key={layer.name}
                  className="rounded-lg border border-border/70 bg-background/60 p-3"
                >
                  <dt className="text-sm font-semibold">{layer.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {layer.responsibility}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
              {caseStudy.modernization.architectureBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-lg border border-border/70 p-3"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
            <h3 className="text-sm font-semibold tracking-tight">
              In-app APK update delivery
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Firebase Remote Config holds release information; AWS EC2 hosts
              the downloadable APK assets. Installation is not silent: staff
              confirms the update through Android&apos;s package installer.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                {
                  heading: "Previous workflow",
                  steps: caseStudy.modernization.previousUpdateWorkflow,
                },
                {
                  heading: "Modernized workflow",
                  steps: caseStudy.modernization.modernizedUpdateWorkflow,
                },
              ].map(({ heading, steps }) => (
                <div
                  key={heading}
                  className="rounded-lg border border-border/70 bg-background/60 p-3 sm:p-4"
                >
                  <h4 className="text-sm font-semibold">{heading}</h4>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <h4 className="mt-4 text-sm font-semibold tracking-tight">
              Update safeguards
            </h4>
            <ul className="mt-2 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
              {caseStudy.modernization.updateSafeguards.map((safeguard) => (
                <li
                  key={safeguard}
                  className="rounded-lg border border-border/70 bg-background/60 p-3"
                >
                  {safeguard}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
            <h3 className="text-sm font-semibold tracking-tight">
              Results and staff feedback
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {caseStudy.result}
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
              {caseStudy.modernization.staffFeedback.map((feedback) => (
                <li
                  key={feedback}
                  className="rounded-lg border border-border/70 bg-background/60 p-3"
                >
                  {feedback}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Qualitative feedback from actual users; no formal usability study
              or quantified satisfaction result was collected.
            </p>
          </section>
        </div>
      ) : (
        <>
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
              <h3 className="text-sm font-semibold tracking-tight">
                The problem
              </h3>
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
                    <div
                      key={label}
                      className="rounded-lg border border-border/70 p-3"
                    >
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
          </div>
        </>
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

      <section className="rounded-xl border border-border/70 bg-muted/20 p-4 sm:p-5">
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
    </section>
  );
}
