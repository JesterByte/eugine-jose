"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-24 max-w-4xl mx-auto px-6 text-center"
      >
        <ScrollReveal>
          <div className="p-12 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Message Received!
            </h2>
            <p className="text-muted-foreground">
              Thanks for reaching out, Eugine here. I'll get back to you as soon
              as possible.
            </p>
            <Button
              className="mt-8 rounded-full"
              onClick={() => window.location.reload()}
            >
              Send another message
            </Button>
          </div>
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 max-w-4xl mx-auto px-6 text-center scroll-mt-20"
    >
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="mb-12 text-muted-foreground max-w-xl mx-auto">
          Currently looking for new opportunities. Whether you have a question
          or just want to say hi, I’ll get back to you!
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start text-left">
        {/* Left Side: Info */}
        <div className="md:col-span-2 space-y-8">
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Details</h3>
              <a
                href="mailto:ejjose94@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">ejjose94@gmail.com</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Socials</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl hover:border-primary/50 hover:text-primary"
                  asChild
                >
                  <a href="https://github.com/JesterByte" target="_blank">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl hover:border-primary/50 hover:text-primary"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/eugine-jose-b31156215/"
                    target="_blank"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Form */}
        <div className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl border border-border/50 bg-background/30 backdrop-blur-xl shadow-2xl space-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/50 via-primary to-primary/50" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-border/40 focus-visible:ring-primary rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="bg-background/50 border-border/40 focus-visible:ring-primary rounded-xl"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-xs text-red-500 ml-1"
                />
              </div>
            </div>

            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="bg-background/50 border-border/40 rounded-xl"
            />

            <Textarea
              id="message"
              name="message"
              placeholder="How can I help you?"
              rows={5}
              required
              className="bg-background/50 border-border/40 resize-none rounded-xl"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-xs text-red-500 ml-1"
            />

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full group h-12 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              {state.submitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>

            {state.errors && !state.succeeded && (
              <p className="text-sm text-red-500 mt-4 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                {state.errors.getFormErrors().length > 0
                  ? "Something went wrong. Please try again later."
                  : "Please complete the CAPTCHA or check your connection."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
