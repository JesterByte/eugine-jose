"use client";

import { Menu, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavProps {
  navItems: {
    name: string;
    id: string;
  }[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="rounded-full transition-transform hover:bg-primary/10 active:scale-95"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-72 bg-background/95 backdrop-blur-md border-l border-border/40 flex flex-col p-0 shadow-2xl overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="mt-10">
              <SheetHeader className="text-left mb-12">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/70 mb-1">
                  Navigation
                </p>
                <SheetTitle className="text-3xl font-black tracking-tighter">
                  MENU<span className="text-primary">.</span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Use the links below to navigate through the portfolio
                  sections.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-2">
                <AnimatePresence>
                  {isOpen &&
                    navItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          delay: 0.05 * index,
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center justify-between w-full py-4 text-left border-b border-border/5 hover:text-primary transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="text-[10px] font-mono text-muted-foreground mr-4">
                              0{index + 1}
                            </span>
                            <span className="text-2xl font-bold tracking-tight">
                              {item.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </a>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </nav>
            </div>
          </div>

          <div className="p-6 bg-background/50 border-t border-border/40">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex gap-3">
                {[
                  {
                    icon: <Github className="w-5 h-5" />,
                    href: "https://github.com/JesterByte",
                    label: "GitHub profile",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    href: "https://www.linkedin.com/in/eugine-jose-b31156215/",
                    label: "LinkedIn profile",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    href: "mailto:ejjose94@gmail.com",
                    label: "Email Eugine",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    {...(social.href.startsWith("https://")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="p-3 rounded-xl bg-muted/50 border border-border/50 active:bg-primary active:text-primary-foreground transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
