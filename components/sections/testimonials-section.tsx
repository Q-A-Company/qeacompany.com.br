"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { testimonials } from "@/lib/site-config"

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((next: number) => {
    setDir(next > 0 ? 1 : -1)
    setIndex((prev) => (prev + next + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [go])

  const current = testimonials[index]

  return (
    <section id="depoimentos" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Depoimentos</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Depoimento anterior"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo depoimento"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Quote className="mt-10 h-8 w-8 text-muted-foreground" aria-hidden="true" />

        <div className="relative mt-6 min-h-48">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-balance text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                {"\u201C"}
                {current.quote}
                {"\u201D"}
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{current.author}</span> · {current.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDir(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={
                (i === index ? "w-8 bg-foreground" : "w-4 bg-border") +
                " h-1 rounded-full transition-all"
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
