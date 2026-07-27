"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Megaphone, Target, TrendingUp } from "lucide-react"
import { site, testimonials, trackWhatsAppClick } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/sections/cta-section"
import { SmoothScroll } from "@/components/smooth-scroll"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const pageLabel = "Marketing"

// ----------------------------------------------------------------------------
// Serviços de Marketing
// ----------------------------------------------------------------------------
const services = [
  {
    icon: Target,
    title: "Tráfego pago",
    description: "Campanhas em Meta Ads e Google Ads com foco em geração de leads qualificados.",
  },
  {
    icon: Megaphone,
    title: "Gestão de redes sociais",
    description: "Planejamento e publicação estratégica para manter sua marca presente e relevante.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia e performance",
    description: "Análise de dados e otimização contínua para transformar investimento em resultado mensurável.",
  },
]

// ----------------------------------------------------------------------------
// Processo de trabalho — etapas reais e sequenciais
// ----------------------------------------------------------------------------
const process = [
  {
    id: "01",
    title: "Diagnóstico",
    description: "Entendemos seu negócio, seu público e onde estão as maiores oportunidades de crescimento.",
  },
  {
    id: "02",
    title: "Estratégia",
    description: "Montamos um plano de ação com metas claras, canais certos e cronograma de execução.",
  },
  {
    id: "03",
    title: "Execução",
    description: "Colocamos as campanhas e conteúdos no ar, com acompanhamento próximo desde o primeiro dia.",
  },
  {
    id: "04",
    title: "Otimização",
    description: "Analisamos os resultados semanalmente e ajustamos o que for preciso para melhorar performance.",
  },
]

export function MarketingContent() {
  return (
    <SmoothScroll>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

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
              {pageLabel}
            </motion.span>

            <motion.h1
              variants={item}
              className="max-w-4xl text-balance font-sans text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Marketing que <span className="italic font-serif font-normal">performa</span>.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Estratégia, tráfego pago e gestão de redes sociais para colocar sua marca na
              frente das pessoas certas, com dados, teste e otimização constante.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Pedir diagnóstico gratuito
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Ver serviços
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                O que fazemos
              </span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Marketing digital de ponta a ponta
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 0.08}>
                  <div className="rounded-xl border border-border p-6">
                    <service.icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="mt-5 text-lg font-medium tracking-tight">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Processo de trabalho */}
        <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Como trabalhamos
              </span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Um processo claro, do diagnóstico ao resultado
              </h2>
            </Reveal>

            <ul className="mt-12 flex flex-col">
              {process.map((step, i) => (
                <Reveal key={step.id} delay={i * 0.06}>
                  <li className="flex items-start gap-5 border-t border-border py-7 last:border-b">
                    <span className="font-serif text-sm text-muted-foreground">{step.id}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                      <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Depoimentos
              </span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Resultado que quem confiou na gente sente na prática
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.slice(0, 2).map((t, i) => (
                <Reveal key={t.author + i} delay={i * 0.08}>
                  <blockquote className="rounded-xl border border-border p-8">
                    <p className="text-pretty text-lg font-medium leading-snug tracking-tight">
                      “{t.quote}”
                    </p>
                    <footer className="mt-6 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{t.author}</span> · {t.role}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-border px-5 py-28 md:px-8 md:py-40">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Pronto pra colocar sua marca na frente das pessoas certas?
              </h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Conte sobre seu negócio. A gente monta um diagnóstico gratuito com as
                oportunidades de crescimento que enxergamos pra sua marca.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Chamar no WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </SmoothScroll>
  )
}
