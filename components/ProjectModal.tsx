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
  Github,
  ExternalLink,
  ScrollText,
  ImageIcon,
  ZoomIn,
} from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  details: string;
  tech: string[];
  images: string[];
  repositories?: {
    label: string;
    href: string;
  }[];
  links: {
    github?: string | null;
    live?: string | null;
  };
}

export default function ProjectModal({ project }: { project: Project }) {
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
        {project.images.length > 0 && (
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
                  {project.images.map((img, idx) => (
                    <CarouselItem key={img}>
                      <Item
                        original={img}
                        thumbnail={img}
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
                            className="group/image relative aspect-video w-full cursor-zoom-in overflow-hidden"
                          >
                            <Image
                              src={img}
                              alt={`${project.title} screenshot ${idx + 1}`}
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
                  {project.images.length} photos
                </div>

                <div className="hidden md:block">
                  <CarouselPrevious className="left-4 border-none bg-black/20 text-white backdrop-blur-sm hover:bg-black/80" />
                  <CarouselNext className="right-4 border-none bg-black/20 text-white backdrop-blur-sm hover:bg-black/80" />
                </div>
              </Carousel>
            </div>
          </Gallery>
        )}

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

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold flex items-center gap-2 uppercase tracking-[0.2em] text-primary/80">
              <ScrollText className="w-4 h-4" />
              Project Breakdown
            </h4>
            <div className="whitespace-pre-wrap rounded-2xl border border-border/40 bg-muted/40 p-6 text-sm font-medium leading-relaxed text-muted-foreground">
              {project.details}
            </div>
          </div>

          {project.repositories && project.repositories.length > 1 && (
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {project.repositories.map((repository) => (
                <a
                  key={repository.href}
                  href={repository.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {repository.label}
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {project.links.github && (
              <Button
                asChild
                variant="outline"
                className="w-full sm:flex-1 h-14 rounded-2xl border-primary/20 hover:bg-primary/5 text-base font-semibold"
              >
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Github className="w-5 h-5" /> Source Code
                </a>
              </Button>
            )}
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
