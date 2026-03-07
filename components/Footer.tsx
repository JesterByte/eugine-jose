"use client";

import { Github, Linkedin, Mail, ExternalLink, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-16 px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-4">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold tracking-tight">Eugine Jose</h3>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Collaboration
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Specializing in full-stack ecosystems with{" "}
              <span className="text-foreground font-medium">Next.js</span>,{" "}
              <span className="text-foreground font-medium">Flutter</span>, and{" "}
              <span className="text-foreground font-medium">Laravel</span>.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground/60">
              <MapPin className="w-3 h-3" />
              <span>Bulacan, Philippines</span>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-2">
              {[
                {
                  icon: Github,
                  href: "https://github.com/JesterByte",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/eugine-jose-b31156215/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:ejjose94@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-xl hover:bg-primary/10 hover:text-primary transition-colors border-border/50"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={0.4}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground hover:text-primary p-0 h-auto text-xs group"
              asChild
            >
              <a
                href="https://github.com/JesterByte/eugine-jose"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository Source
                <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <p className="text-[10px] text-muted-foreground/50 font-mono uppercase tracking-widest">
              &copy; {currentYear} • Handcrafted with Precision
            </p>
          </ScrollReveal>

          {/* Meta Tech Stack Row */}
          <ScrollReveal
            delay={0.5}
            className="mt-12 border-t border-border/10 pt-8 w-full"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start gap-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/50">
                  System Architecture
                </span>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 text-[11px] font-medium text-muted-foreground/80">
                  <span>Next.js 15</span>
                  <span className="text-border">•</span>
                  <span>TypeScript</span>
                  <span className="text-border">•</span>
                  <span>Tailwind CSS</span>
                  <span className="text-border md:hidden">•</span>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/50">
                  Experience Engine
                </span>
                <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-2 text-[11px] font-medium text-muted-foreground/80">
                  <span>Framer Motion</span>
                  <span className="text-border">•</span>
                  <span>PhotoSwipe</span>
                  <span className="text-border">•</span>
                  <span>Shadcn/UI</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
