"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 25,
      filter: "blur(8px)",
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120,
      },
    },
  } as const;



  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap", verticalAlign: "top" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span 
          variants={child} 
          style={{ display: "inline-block", whiteSpace: "pre" }} 
          key={index}
        >
          {word}{index !== words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );

}
