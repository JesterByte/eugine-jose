"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { ZoomIn } from "lucide-react";
import "photoswipe/dist/photoswipe.css";

export default function ZoomableProjectMedia({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <Gallery
      options={{
        bgOpacity: 0.98,
        padding: { top: 40, bottom: 40, left: 10, right: 10 },
        closeOnVerticalDrag: true,
      }}
    >
      <figure className="overflow-hidden rounded-lg border border-border bg-muted/20">
        <Item original={src} thumbnail={src} width="1920" height="1080">
          {({ ref, open }) => (
            <div
              ref={ref}
              onClick={(event) => open(event)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  event.currentTarget.click();
                }
              }}
              className="group/image relative aspect-[2.2/1] w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              tabIndex={0}
              role="button"
              aria-label={`Open full-size image: ${caption}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover/image:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                <ZoomIn aria-hidden="true" className="size-10 text-white/80" />
              </div>
            </div>
          )}
        </Item>
        <figcaption className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      </figure>
    </Gallery>
  );
}
