"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagicBorderProps {
  children: ReactNode;
  className?: string;
}

export function MagicBorder({ children, className }: MagicBorderProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl p-[1px] group", className)}>
      <div
        className="absolute inset-0 z-0 rounded-2xl bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#0ea5e9_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-[spin_4s_linear_infinite]"
        // Using cyan-500 (#0ea5e9) spinning glow
      />
      <div className="absolute inset-0 z-0 rounded-2xl bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#8b5cf6_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-[spin_4s_linear_infinite_reverse]"
        // Using violet-500 (#8b5cf6) spinning glow reverse
      />
      <div className="relative z-10 h-full w-full rounded-2xl bg-card/60 backdrop-blur-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}
