"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorSpotlight() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring configurations for a "liquid" trailing effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springConfigSlow = { damping: 30, stiffness: 80, mass: 1 };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const xSlow = useSpring(mouseX, springConfigSlow);
  const ySlow = useSpring(mouseY, springConfigSlow);

  useEffect(() => {
    // Do not attach mouse listeners on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {/* Primary Deep Glow (Vibrant Cyan) */}
      <motion.div
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.22_195_/_0.28)_0%,transparent_70%)] blur-[70px]"
      />

      {/* Secondary Trailing Glow (Vibrant Violet) */}
      <motion.div
        style={{
          x: xSlow,
          y: ySlow,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.25_300_/_0.22)_0%,transparent_70%)] blur-[60px]"
      />

      {/* Tertiary Ambient (Electric Blue) */}
      <motion.div
        style={{
          x: x,
          y: y,
          translateX: "-60%",
          translateY: "-40%",
        }}
        className="absolute h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.70_0.28_250_/_0.16)_0%,transparent_70%)] blur-[50px]"
      />
    </div>
  );
}
