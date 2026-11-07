import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ProjectMediaItem } from "@/lib/project-content";

export default function ProjectMedia({
  media,
  aspectClass = "aspect-video",
  sizes = "(max-width: 768px) 100vw, 50vw",
  showCaption = false,
}: {
  media: ProjectMediaItem;
  aspectClass?: string;
  sizes?: string;
  showCaption?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-muted/20">
      <div className={`relative ${aspectClass} overflow-hidden`}>
        {media.src ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={media.alt}
            className="flex h-full flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_55%)] p-5 text-center"
          >
            <ImageIcon aria-hidden="true" className="size-7 text-primary/70" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {media.caption}
            </span>
            <span className="text-xs text-muted-foreground">
              Image not provided.
            </span>
          </div>
        )}
      </div>
      {showCaption && media.src && (
        <figcaption className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
