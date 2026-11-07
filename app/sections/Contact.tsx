import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/lib/site-identity";
import CopyEmailButton from "@/components/CopyEmailButton";

const contactLinks = [
  {
    label: "Email Eugine",
    detail: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "GitHub profile",
    detail: "github.com/JesterByte",
    href: GITHUB_PROFILE_URL,
    icon: Github,
  },
  {
    label: "LinkedIn profile",
    detail: "linkedin.com/in/eugine-jose-b31156215",
    href: LINKEDIN_PROFILE_URL,
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
          <div className="min-w-0">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Have an engineering role or project in mind?
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Email me about an engineering role or project, or connect with
              me on GitHub or LinkedIn.
            </p>
          </div>
          <div className="min-w-0 space-y-3">
            {contactLinks.map(({ label, detail, href, icon: Icon }) => (
              <div key={label} className="flex min-w-0 items-center gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="h-auto min-w-0 flex-1 justify-start gap-4 rounded-xl px-4 py-4 text-left"
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
                {href.startsWith("mailto:") && (
                  <CopyEmailButton email={CONTACT_EMAIL} />
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
