"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { site } from "@/lib/site-config"
import { site, trackWhatsAppClick, trackEmailClick } from "@/lib/site"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-24">
      {/* grid decorativo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* marca d'água do monograma Q&A */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 md:-left-24"
      >
        <Image
          src={site.logo || "/placeholder.svg"}
          alt=""
          width={720}
          height={720}
          className="h-[70svh] w-auto object-contain"
          priority
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          {site.tagline}
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-4xl text-balance font-sans text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Transformando desafios em <span className="italic font-serif font-normal">resultados</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Somos a {site.name}: mídia, marketing e soluções digitais para marcas que
          querem crescer com estratégia e provar resultado.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Fale com a gente
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ver portfólio
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
