"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

function getOffsets(direction: Direction) {
  switch (direction) {
    case "down":
      return { x: 0, y: -32 };
    case "left":
      return { x: 40, y: 0 };
    case "right":
      return { x: -40, y: 0 };
    case "up":
    default:
      return { x: 0, y: 32 };
  }
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const offset = getOffsets(direction);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

