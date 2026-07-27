"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Play } from "lucide-react"
import { site, proofCase, trackWhatsAppClick } from "@/lib/site-config"
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

// ----------------------------------------------------------------------------
// Portfólio de Mídia — vídeos verticais e horizontais
// Adicione novos projetos aqui conforme forem produzidos.
// youtubeId: cole apenas o ID do vídeo (ex: link youtube.com/watch?v=ABC123 → "ABC123")
// Funciona normalmente com vídeos "não listados" do YouTube.
// ----------------------------------------------------------------------------
const mediaPortfolio = [
  {
    title: "Campanha imobiliária vertical",
    description: "Vídeo vertical para Reels e Stories, focado em conversão rápida de leads imobiliários.",
    format: "Vertical" as const,
    image: "/portfolio/video-vertical-1.png",
    youtubeId: "SEU_ID_AQUI",
  },
  {
    title: "Tour guiado do imóvel",
    description: "Produção audiovisual imobiliária em formato vertical, com narração e trilha original.",
    format: "Vertical" as const,
    image: "/portfolio/video-vertical-1.png",
    youtubeId: "SEU_ID_AQUI",
  },
  {
    title: "Depoimento em vídeo",
    description: "Vídeo vertical com depoimento real de cliente sobre o resultado da campanha.",
    format: "Vertical" as const,
    image: "/portfolio/video-vertical-1.png",
    youtubeId: "SEU_ID_AQUI",
  },
  {
    title: "Bastidores de produção",
    description: "Vídeo vertical de bastidores, usado como conteúdo de aquecimento nas redes sociais.",
    format: "Vertical" as const,
    image: "/portfolio/video-vertical-1.png",
    youtubeId: "SEU_ID_AQUI",
  },
    {
    title: "Institucional para lançamento",
    description: "Vídeo horizontal institucional para apresentação de empreendimento a investidores.",
    format: "Horizontal" as const,
    image: "/portfolio/video-horizontal-1.png",
    youtubeId: "SEU_ID_AQUI",
  },
    {
    title: "Case de lançamento — YouTube",
    description: "Vídeo horizontal de longa duração para campanha de mídia paga no YouTube.",
    format: "Horizontal" as const,
    image: "/portfolio/video-horizontal-1.png",
    youtubeId: "SEU_ID_AQUI",
  },
]

const formats = ["Todos", "Vertical", "Horizontal"] as const
type Format = (typeof formats)[number]

const pageLabel = "Mídia"

export function MidiaContent() {
  const [activeFormat, setActiveFormat] = useState<Format>("Todos")
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const filtered =
    activeFormat === "Todos"
      ? mediaPortfolio
      : mediaPortfolio.filter((item) => item.format === activeFormat)

  return (
    <SmoothScroll>
      <SiteHeader />
      <main>
        {/* Hero da página */}
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
              {pageLabel}
            </motion.span>

            <motion.h1
              variants={item}
              className="max-w-4xl text-balance font-sans text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Mídia que <span className="italic font-serif font-normal">vende</span>.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Produção audiovisual: vídeos verticais e horizontais
              pensados para transformar atenção em resultado! Do roteiro à publicação.
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
                href="#portfolio-midia"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Ver portfólio
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Portfólio filtrável */}
        <section id="portfolio-midia" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Portfólio
                  </span>
                  <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                    Vídeos verticais e horizontais
                  </h2>
                </div>
                <div className="flex gap-2">
                  {formats.map((format) => (
                    <button
                      key={format}
                      type="button"
                      onClick={() => setActiveFormat(format)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        activeFormat === format
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((item, i) => {
                const isPlaying = playingVideo === item.title
                return (
                  <Reveal key={item.title} delay={i * 0.05}>
                    <article className="group relative overflow-hidden rounded-xl border border-border bg-secondary">
                      <div
                        className={`relative overflow-hidden ${
                          item.format === "Vertical" ? "aspect-[9/16]" : "aspect-video"
                        }`}
                      >
                        {isPlaying ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() => setPlayingVideo(item.title)}
                            className="absolute inset-0 block h-full w-full"
                            aria-label={`Reproduzir vídeo: ${item.title}`}
                          >
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={`${item.title} — projeto de Mídia da Q&A Company`}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                            />
                            <span className="absolute left-2.5 top-2.5 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm">
                              {item.format}
                            </span>
                            <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/30">
                              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 transition-transform group-hover:scale-110">
                                <Play className="h-4 w-4 translate-x-0.5" fill="currentColor" />
                              </div>
                            </div>
                          </button>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium leading-snug tracking-tight">{item.title}</h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

{/* Por que vídeo — pilares rápidos */}
        <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Por que vídeo
              </span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Atenção tem prazo de validade. Vídeo é o que segura o olhar.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Roteiro estratégico",
                  text: "Cada vídeo nasce de um objetivo claro: gerar lead, fechar venda ou fortalecer marca.",
                },
                {
                  title: "Formato certo pro canal",
                  text: "Vertical para Reels e Stories, horizontal para YouTube e campanhas de mídia paga.",
                },
                {
                  title: "Edição que retém",
                  text: "Ritmo, legenda e trilha pensados para quem assiste em 3 segundos decide continuar.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case real — vídeo direto para a venda */}
        <section className="border-t border-border px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Case real
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Do vídeo direto para a <span className="italic font-serif font-normal">venda</span>.
              </h2>
              <dl className="mt-8 space-y-6">
                <div className="border-l-2 border-border pl-5">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Contexto
                  </dt>
                  <dd className="mt-1 leading-relaxed">{proofCase.context}</dd>
                </div>
                <div className="border-l-2 border-border pl-5">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    O que fizemos
                  </dt>
                  <dd className="mt-1 leading-relaxed">{proofCase.action}</dd>
                </div>
                <div className="border-l-2 border-foreground pl-5">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Resultado
                  </dt>
                  <dd className="mt-1 text-lg font-medium leading-relaxed">{proofCase.result}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="flex justify-center">
              <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-sm font-semibold">
                    C
                  </div>
                  <div>
                    <p className="text-sm font-medium">Cliente</p>
                    <p className="text-xs text-muted-foreground">online</p>
                  </div>
                </div>
                <div className="space-y-2.5 px-4 py-6">
                  {proofCase.conversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.from === "us" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                          msg.from === "us"
                            ? "bg-foreground text-background"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        {msg.text}
                        {msg.from === "us" && (
                          <Check className="ml-1.5 inline h-3 w-3 -translate-y-px opacity-60" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-border px-5 py-28 md:px-8 md:py-40">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Bora gravar o próximo case de sucesso?
              </h2>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">
                Conte sobre o seu produto. A gente monta a estratégia de vídeo
                certa para o seu objetivo.
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
