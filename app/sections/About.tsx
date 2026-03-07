"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Award, Code2, Smartphone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          About Me<span className="text-primary">.</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Profile Visual - Fixed Glow */}
        <div className="md:col-span-5 flex justify-center order-2 md:order-1">
          <ScrollReveal delay={0.2}>
            <div className="relative group p-2"> 
              {/* Using drop-shadow instead of an absolute div to prevent container overlap */}
              <div className="relative rounded-2xl transition-all duration-500 filter drop-shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                <Image
                  src="/profile.png"
                  width={380}
                  height={380}
                  alt="Eugine Jose"
                  className="rounded-2xl border border-white/10 grayscale-[0.2] hover:grayscale-0 transition duration-500 object-cover"
                  loading="eager"
                  priority
                />
              </div>

              {/* Recognition Badge - Keeping it small and tight */}
              <div className="absolute -bottom-4 -right-4 bg-background border border-primary/40 p-3 rounded-lg shadow-xl flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-tighter">Thesis of the Year</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Narrative Content */}
        <div className="md:col-span-7 space-y-6 order-1 md:order-2">
          <ScrollReveal delay={0.4}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
              Junior Software Developer focused on <span className="text-primary">functional excellence.</span>
            </h3>
          </ScrollReveal>

          <Card className="bg-muted/20 backdrop-blur-sm border-border/40">
            <CardContent className="p-6 md:p-8 text-muted-foreground leading-relaxed space-y-5">
              <ScrollReveal delay={0.6}>
                <p>
                  I am an impact-driven developer from the Philippines. My journey is defined by a commitment to growth—returning to my studies to ultimately earn a <span className="text-foreground font-medium">"Thesis of the Year"</span> recognition for my work in digital record-keeping.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.7}>
                <p>
                  Currently, I specialize in building and maintaining systems using <span className="text-foreground font-medium">PHP (Laravel)</span> and <span className="text-foreground font-medium">Flutter</span>. I enjoy the challenge of modernizing legacy data and automating business workflows through clean, reliable code.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.8}>
                <p>
                  I am a firm believer in "learning by building." Whether it&apos;s perfecting state management in a mobile app or optimizing a backend database, I am always looking for ways to improve both my craft and the user experience.
                </p>
              </ScrollReveal>

              {/* Capability Tags */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] font-mono bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                  <Code2 className="w-3 h-3 text-primary" />
                  <span>BACKEND ARCHITECTURE</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                  <Smartphone className="w-3 h-3 text-primary" />
                  <span>MOBILE DEVELOPMENT</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}