import { ArrowUpRight, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ZoomableProjectMedia from "./ZoomableProjectMedia";

export default function SideProjectSlot() {
  return (
    <ScrollReveal>
      <article className="mt-5 grid gap-6 rounded-2xl border border-border bg-muted/20 p-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-8 md:p-7">
        <ZoomableProjectMedia
          src="/projects/kain-tayo.png"
          alt="KainTayo Android TV meal-planning app screenshot."
          caption="KainTayo Android TV screenshot"
        />

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Personal side project · Android TV
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            KainTayo
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A Taglish-first meal planner, with English available, designed with
            older parents in mind. Families enter their budget per cutoff and
            the number of people eating to plan meals.
          </p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {["Android TV", "Jetpack Compose", "Clean Architecture"].map(
              (technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {technology}
                </li>
              ),
            )}
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Not published on Google Play; install it on a device by sideloading
            with ADB.
          </p>

          <a
            href="https://github.com/JesterByte/KainTayo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Github aria-hidden="true" className="size-4" />
            View source code
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </article>
    </ScrollReveal>
  );
}
