import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

/** A short, quiet rise-in when a block scrolls into view. Off for reduced motion. */
const Reveal = ({ children, delay = 0, className, as = "div" }: RevealProps) => {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] as const, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
