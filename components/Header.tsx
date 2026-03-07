"use client";

import { ThemeToggle } from "./ThemeToggle";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    setIsOpen(false);
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-4 px-6 md:px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <ScrollReveal>
          <Button
            variant="link"
            onClick={() => scrollToSection("hero")}
            className="p-0 hover:no-underline"
          >
            <h1 className="text-xl font-bold tracking-tight">Eugine Jose</h1>
          </Button>
        </ScrollReveal>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.2 * (index + 1)}>
              <Button variant="ghost" onClick={() => scrollToSection(item.id)}>
                {item.name}
              </Button>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.8}>
            <ThemeToggle />
          </ScrollReveal>
        </nav>

        <MobileNav navItems={navItems} scrollToSection={scrollToSection} />
      </div>
    </header>
  );
}
