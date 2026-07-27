"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, AppWindow, Globe, Cog } from "lucide-react"
import { site, trackWhatsAppClick } from "@/lib/site-config"
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

const pageLabel = "Soluções Digitais"

// ----------------------------------------------------------------------------
// Serviços de Soluções Digitais
// ----------------------------------------------------------------------------
const services = [
  {
    icon: Globe,
    title: "Sites institucionais",
    description: "Sites rápidos, responsivos e otimizados para SEO, a base digital que sua marca merece ter.",
  },
  {
    icon: AppWindow,
    title: "Aplicativos",
    description: "Apps sob medida para Android e iOS, do conceito ao lançamento nas lojas.",
  },
  {
    icon: Cog,
    title: "Sistemas sob medida",
    description: "Plataformas internas, CRM e ferramentas customizadas para automatizar processos do seu negócio.",
  },
]

// ----------------------------------------------------------------------------
// Outros projetos — além do case principal (QEA Imob)
// ----------------------------------------------------------------------------
const otherProjects = [
  {
    title: "Sistema de Pauta para Imobiliaria",
    description: "Sistema para organizar a vez de cada corretor, otimizando e agilizando o repasse de fichas.",
    image: "/portfolio/digital-1.png",
  },
]

export function SolucoesDigitaisContent() {
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
              Tecnologia que <span className="italic font-serif font-normal">escala</span>.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Sites, aplicativos e sistemas sob medida. Do conceito ao produto no ar,
              com tecnologia pensada para crescer junto com o seu negócio.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Pedir orçamento
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#case-qea-imob"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Ver cases
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Serviços */}
        <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                O que fazemos
              </span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Desenvolvimento de sites e aplicativos sob medida
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

        {/* Case em destaque — QEA Imob * EM BREVE/}
        <section id="case-qea-imob" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Case em destaque
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                QEA Imob — <span className="italic font-serif font-normal">app sob medida</span>
              </h2>
              <dl className="mt-8 space-y-6">
                <div className="border-l-2 border-border pl-5">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Problema
                  </dt>
                  <dd className="mt-1 leading-relaxed">
                    A equipe de corretores não tinha um sistema centralizado para organizar
                    leads e fichas de imóveis, perdendo tempo e oportunidades de venda.
                  </dd>
                </div>
                <div className="border-l-2 border-border pl-5">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Solução
                  </dt>
                  <dd className="mt-1 leading-relaxed">
                    Desenvolvemos um aplicativo sob medida para organizar toda a pauta de
                    corretores, com distribuição automática de leads e fichas de imóveis.
                  </dd>
                </div>
                <div className="border-l-2 border-foreground pl-5">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Resultado
                  </dt>
                  <dd className="mt-1 text-lg font-medium leading-relaxed">
                    Ganho real de velocidade na distribuição das fichas entre corretores.
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="flex justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <Image
                  src="/portfolio/digital-1.png"
                  alt="QEA Imob — mockup do aplicativo em dispositivo móvel"
                  width={480}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outros projetos */}
        <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Projetos
              </span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Produtos que colocamos no ar
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {otherProjects.map((proj, i) => (
                <Reveal key={proj.title} delay={i * 0.08}>
                  <article className="group relative overflow-hidden rounded-xl border border-border bg-secondary">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={proj.image || "/placeholder.svg"}
                        alt={`${proj.title} — projeto de Soluções Digitais da Q&A Company`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-medium tracking-tight">{proj.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {proj.description}
                      </p>
                    </div>
                  </article>
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
                Tem um produto digital em mente?
              </h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Conte sobre o seu projeto. A gente ajuda a tirar do papel: Do site
                institucional ao sistema mais complexo.
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
