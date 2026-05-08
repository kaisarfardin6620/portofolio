import { FadeIn } from "@/components/motion/fade-in";
import { TextReveal } from "@/components/motion/text-reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mb-14 text-center md:mb-16">
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs tracking-wider text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {label}
      </span>
      <h2 className="mx-auto mb-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <TextReveal text={title} delay={0.1} />
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    </FadeIn>
  );
}
