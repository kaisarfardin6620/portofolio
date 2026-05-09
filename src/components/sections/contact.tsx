"use client";

import { FormEvent, useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { MagicBorder } from "@/components/motion/magic-border";
import { Magnetic } from "@/components/motion/magnetic";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured yet. Add EmailJS keys to .env.local.",
      });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    try {
      setIsSending(true);
      setStatus({ type: "idle", message: "" });

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name,
            reply_to: form.email,
            message: form.message,
            to_name: "Abdullah Kaisar Fardin",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent successfully." });
    } catch {
      setStatus({
        type: "error",
        message: "Could not send message right now. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          label="// contact"
          title="Let's Build Something"
          description="Have a project in mind? I'm always open to discussing new opportunities."
        />

        <FadeIn>
          <MagicBorder>
            <Card className="floating-glass-card group relative overflow-hidden transition-transform duration-300">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-cyan-500/20 via-primary/20 to-violet-600/20 opacity-80" />
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/0 via-primary/20 to-violet-400/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

              <CardContent className="relative space-y-7 p-8">
              <div className="space-y-4 text-center">
                <a
                  href="mailto:kaisarfardin128@gmail.com"
                  className="group inline-flex items-center gap-2 text-lg font-mono text-primary transition-colors hover:text-foreground"
                >
                  <Magnetic strength={0.2}>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      kaisarfardin128@gmail.com
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Magnetic>
                </a>
              </div>


              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    required
                    className="h-11 rounded-lg border border-border/60 bg-background/70 px-3 text-sm outline-none transition focus:border-primary/60"
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Your email"
                    required
                    className="h-11 rounded-lg border border-border/60 bg-background/70 px-3 text-sm outline-none transition focus:border-primary/60"
                  />
                </div>

                <textarea
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border/60 bg-background/70 p-3 text-sm outline-none transition focus:border-primary/60"
                />

                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={isSending}
                      className={buttonVariants({ size: "lg" })}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </Magnetic>


                  {status.type !== "idle" && (
                    <p
                      className={`text-xs ${
                        status.type === "success" ? "text-emerald-500" : "text-red-500"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </form>

              <div className="flex justify-center gap-4">
                <Magnetic>
                  <a
                    href="https://github.com/kaisarfardin6620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://www.linkedin.com/in/abdullah-kaisar-fardin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Magnetic>
              </div>
            </CardContent>
          </Card>
          </MagicBorder>
        </FadeIn>
      </div>
    </section>
  );
}
