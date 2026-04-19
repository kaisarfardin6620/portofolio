"use client";

import { act, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#about");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const offset = window.scrollY + 140;
      let current = "#about";

      for (const section of sections) {
        if (offset >= section.offsetTop) {
          current = `#${section.id}`;
        }
      }

      setActiveHref(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-3">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 shadow-lg shadow-black/5 backdrop-blur-xl md:h-16 md:px-6">
        <a href="#" className="font-mono text-sm font-bold tracking-wider">
          <span className="gradient-text">kaisar</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-secondary/40 p-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                activeHref === link.href
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm transition-colors ${
                    activeHref === link.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
