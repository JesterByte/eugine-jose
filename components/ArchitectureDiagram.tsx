export type ArchitectureNodeKind =
  | "application"
  | "logic"
  | "storage"
  | "remote"
  | "legacy"
  | "conceptual";

export interface ArchitectureFlow {
  label: string;
  direction?: "forward" | "bidirectional" | "related";
  nodes: {
    label: string;
    detail?: string;
    kind?: ArchitectureNodeKind;
  }[];
}

export interface ArchitectureView {
  title: string;
  status: string;
  description: string;
  flows: ArchitectureFlow[];
  notes?: string[];
}

export interface ProjectArchitecture {
  title: string;
  caption: string;
  accessibleDescription: string;
  views: ArchitectureView[];
}

const nodeStyles: Record<ArchitectureNodeKind, string> = {
  application: "border-primary/30 bg-primary/5",
  logic: "border-primary/20 bg-muted/60",
  storage: "border-sky-500/30 bg-sky-500/5",
  remote: "border-violet-500/30 bg-violet-500/5",
  legacy: "border-amber-500/30 bg-amber-500/5",
  conceptual: "border-dashed border-border bg-muted/30",
};

const connectorSymbols = {
  forward: "→",
  bidirectional: "↔",
  related: "· · ·",
} as const;

const mobileConnectorSymbols = {
  forward: "↓",
  bidirectional: "↕",
  related: "⋮",
} as const;

export default function ArchitectureDiagram({
  architecture,
  compact = false,
}: {
  architecture: ProjectArchitecture;
  compact?: boolean;
}) {
  const views = compact ? architecture.views.slice(0, 1) : architecture.views;

  return (
    <figure
      aria-label={architecture.accessibleDescription}
      className={`overflow-hidden border border-border bg-background/80 ${
        compact ? "rounded-none border-x-0 border-t-0" : "rounded-xl"
      }`}
    >
      <figcaption
        className={`border-b border-border ${
          compact ? "px-6 py-4 md:px-7" : "px-4 py-4 sm:px-6"
        }`}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
          Architecture overview
        </p>
        <h4 className="mt-1 text-sm font-semibold tracking-tight sm:text-base">
          {architecture.title}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {architecture.caption}
        </p>
        {compact && (
          <p className="mt-2 font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
            Preview · Full diagram in case study
          </p>
        )}
      </figcaption>

      <div
        className={`space-y-3 ${
          compact ? "p-4 md:px-7 md:py-5" : "p-3 sm:p-5"
        }`}
      >
        {views.map((view) => (
          <section
            key={view.title}
            aria-label={`${view.title}: ${view.status}`}
            className="rounded-lg border border-border/70 bg-muted/10 p-3 sm:p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h5 className="text-xs font-semibold sm:text-sm">{view.title}</h5>
              <span className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                {view.status}
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              {view.description}
            </p>

            <div className="mt-3 space-y-3">
              {view.flows.map((flow, flowIndex) => (
                <div
                  key={`${view.title}-${flowIndex}`}
                  role="group"
                  aria-label={flow.label}
                  className="rounded-md border border-border/50 bg-background/60 p-2.5 sm:p-3"
                >
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    {flow.label}
                  </p>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-stretch sm:gap-0">
                    {flow.nodes.map((node, nodeIndex) => (
                      <div
                        key={`${node.label}-${nodeIndex}`}
                        className="contents"
                      >
                        <div
                          className={`min-w-0 flex-1 rounded-md border px-3 py-2 ${
                            nodeStyles[node.kind ?? "application"]
                          }`}
                        >
                          <p className="text-xs font-semibold leading-snug">
                            {node.label}
                          </p>
                          {node.detail && (
                            <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                              {node.detail}
                            </p>
                          )}
                        </div>
                        {nodeIndex < flow.nodes.length - 1 && (
                          <div
                            aria-hidden="true"
                            className="flex shrink-0 items-center justify-center py-0.5 font-mono text-xs text-primary sm:w-10 sm:py-0"
                          >
                            <span className="sm:hidden">
                              {mobileConnectorSymbols[
                                flow.direction ?? "forward"
                              ]}
                            </span>
                            <span className="hidden sm:inline">
                              {connectorSymbols[flow.direction ?? "forward"]}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {view.notes && view.notes.length > 0 && (
              <ul className="mt-3 space-y-1 text-[10px] leading-relaxed text-muted-foreground">
                {view.notes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary">
                      •
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div
          aria-label="Diagram legend"
          className="flex flex-wrap gap-x-4 gap-y-1 px-1 text-[9px] text-muted-foreground"
        >
          <span>
            <span className="mr-1 text-primary">→</span>Flow
          </span>
          <span>
            <span className="mr-1 text-primary">↔</span>Two-way data
          </span>
          <span>
            <span className="mr-1 text-primary">· · ·</span>Related; sequence
            unspecified
          </span>
        </div>
      </div>
    </figure>
  );
}
