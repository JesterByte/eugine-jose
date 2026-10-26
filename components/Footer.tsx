"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">
            Eugine Jose<span className="text-primary">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software engineer · Application modernization
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[
            {
              icon: Github,
              href: "https://github.com/JesterByte",
              label: "GitHub profile",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/eugine-jose-b31156215/",
              label: "LinkedIn profile",
            },
            {
              icon: Mail,
              href: "mailto:ejjose94@gmail.com",
              label: "Email Eugine",
            },
          ].map(({ icon: Icon, href, label }) => (
            <Button key={label} asChild variant="outline" size="icon">
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith("https://")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            </Button>
          ))}
          <Button asChild variant="link" size="sm">
            <a
              href="https://github.com/JesterByte/eugine-jose"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
              <ExternalLink aria-hidden="true" className="ml-1 size-3" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
