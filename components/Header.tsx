"use client";

import { ThemeToggle } from "./ThemeToggle";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-4 px-6 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#hero"
          className="rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Eugine Jose<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.2 * (index + 1)}>
              <Button asChild variant="ghost">
                <a href={`#${item.id}`}>
                  {item.name}
                </a>
              </Button>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.8}>
            <ThemeToggle />
          </ScrollReveal>
        </nav>

        <MobileNav navItems={navItems} />
      </div>
    </header>
  );
}
