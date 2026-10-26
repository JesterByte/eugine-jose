import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email Eugine",
    detail: "ejjose94@gmail.com",
    href: "mailto:ejjose94@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub profile",
    detail: "github.com/JesterByte",
    href: "https://github.com/JesterByte",
    icon: Github,
  },
  {
    label: "LinkedIn profile",
    detail: "linkedin.com/in/eugine-jose-b31156215",
    href: "https://www.linkedin.com/in/eugine-jose-b31156215/",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <ScrollReveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
          Contact
        </p>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s talk about thoughtful software.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              For engineering opportunities, project questions, or a
              conversation about application modernization, reach me through
              any of these verified profiles.
            </p>
          </div>
          <div className="space-y-3">
            {contactLinks.map(({ label, detail, href, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                className="h-auto w-full justify-start gap-4 rounded-xl px-4 py-4 text-left"
              >
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("https://")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon aria-hidden="true" className="size-5 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {detail}
                    </span>
                  </span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
