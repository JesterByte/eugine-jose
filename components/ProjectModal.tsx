"use client";

import React, { useRef } from "react";
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
import Autoplay from "embla-carousel-autoplay";
import {
  Github,
  ExternalLink,
  ScrollText,
  ImageIcon,
  Award,
  ZoomIn,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string;
  tech: string[];
  images: string[];
  links: {
    github?: string | null;
    live?: string | null;
  };
}

export default function ProjectModal({ project }: { project: Project }) {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

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
        <Gallery
          options={{
            bgOpacity: 0.98,
            padding: { top: 40, bottom: 40, left: 10, right: 10 },
            closeOnVerticalDrag: true,
          }}
        >
          <div className="relative w-full bg-black group/carousel">
            <Carousel
              plugins={[autoplay.current]}
              className="w-full"
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              <CarouselContent>
                {project.images.map((img, idx) => (
                  <CarouselItem key={idx}>
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
                          className="relative aspect-video w-full overflow-hidden cursor-zoom-in group/image"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} slide ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                            priority
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/carousel:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                            <ZoomIn className="w-10 h-10 text-white/70" />
                          </div>
                        </div>
                      )}
                    </Item>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white flex items-center gap-2 border border-white/10 pointer-events-none font-medium">
                <ImageIcon className="w-3.5 h-3.5" />
                {project.images.length} Photos
              </div>

              <div className="hidden md:block">
                <CarouselPrevious className="left-4 bg-black/20 hover:bg-black/80 border-none text-white backdrop-blur-sm" />
                <CarouselNext className="right-4 bg-black/20 hover:bg-black/80 border-none text-white backdrop-blur-sm" />
              </div>
            </Carousel>
          </div>
        </Gallery>

        <div className="p-6 sm:p-10 space-y-8">
          <div className="space-y-4">
            <DialogHeader className="text-left">
              <div className="flex items-center gap-2 mb-2">
                {project.title.toLowerCase().includes("green haven") && (
                  <div className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    Top Technical Project
                  </div>
                )}
              </div>
              <DialogTitle className="text-2xl md:text-4xl font-bold tracking-tight italic uppercase text-foreground">
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
            <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap bg-muted/40 p-6 rounded-2xl border border-border/40 font-medium">
              {project.details}
            </div>
          </div>

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
