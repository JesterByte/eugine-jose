"use client";

import React from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  ExternalLink,
  ImageIcon,
  ZoomIn,
} from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import ProjectCaseStudy from "./ProjectCaseStudy";
import type { Project, ProjectMediaItem } from "@/lib/project-content";

export default function ProjectModal({ project }: { project: Project }) {
  const galleryMedia = project.media.filter(
    (item): item is ProjectMediaItem & { src: string } =>
      typeof item.src === "string",
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
        >
          View Details
        </Button>
      </DialogTrigger>

      <DialogContent
        className="w-[95vw] sm:max-w-3xl max-h-[90dvh] overflow-y-auto p-0 border-none sm:rounded-2xl scrollbar-hide focus:outline-none"
        onPointerDownOutside={(e) => {
          if (document.querySelector(".pswp--open")) {
            e.preventDefault();
          }
        }}
      >
        {project.architecture ? (
          <ArchitectureDiagram architecture={project.architecture} />
        ) : galleryMedia.length > 0 ? (
          <Gallery
            options={{
              bgOpacity: 0.98,
              padding: { top: 40, bottom: 40, left: 10, right: 10 },
              closeOnVerticalDrag: true,
            }}
          >
            <div className="group/carousel relative w-full bg-black">
              <Carousel
                className="w-full"
              >
                <CarouselContent>
                  {galleryMedia.map((media) => (
                    <CarouselItem key={media.src}>
                      <Item
                        original={media.src}
                        thumbnail={media.src}
                        width="1600"
                        height="900"
                      >
                        {({ ref, open }) => (
                          <div
                            ref={
                              ref as unknown as React.MutableRefObject<HTMLDivElement>
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              open(e);
                            }}
                            onKeyDown={(event) => {
                              if (
                                event.key === "Enter" ||
                                event.key === " "
                              ) {
                                event.preventDefault();
                                event.currentTarget.click();
                              }
                            }}
                            className="group/image relative aspect-video w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            tabIndex={0}
                            role="button"
                            aria-label={`Open full-size image: ${media.caption}`}
                          >
                            <Image
                              src={media.src}
                              alt={media.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 768px"
                              className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100">
                              <ZoomIn className="size-10 text-white/70" />
                            </div>
                          </div>
                        )}
                      </Item>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="pointer-events-none absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
                  <ImageIcon aria-hidden="true" className="size-3.5" />
                  {galleryMedia.length} photos
                </div>

                <div className="hidden md:block">
                  <CarouselPrevious className="left-4 border-none bg-black/20 text-white backdrop-blur-sm hover:bg-black/80" />
                  <CarouselNext className="right-4 border-none bg-black/20 text-white backdrop-blur-sm hover:bg-black/80" />
                </div>
              </Carousel>
            </div>
          </Gallery>
        ) : null}

        <div className="p-6 sm:p-10 space-y-8">
          <div className="space-y-4">
            <DialogHeader className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                {project.description}
              </DialogDescription>
            </DialogHeader>

          </div>

          <ProjectCaseStudy project={project} />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {project.links.live && (
              <Button
                asChild
                className="w-full sm:flex-1 h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 text-base font-semibold"
              >
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" /> Visit Site
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
