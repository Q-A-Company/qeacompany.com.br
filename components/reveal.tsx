"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Deslocamento vertical inicial em px */
  y?: number
  as?: "div" | "section" | "li" | "span" | "article"
}

export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
