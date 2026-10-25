
"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { portfolio } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function PortfolioSection() {
  const videosRef = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const playVideos = () => {
      videosRef.current.forEach((video) => {
        if (!video) return

        video.muted = true
        video.defaultMuted = true
        video.playsInline = true
        video.loop = true
        video.autoplay = true

        if (video.paused) {
          video.play().catch((error) => {
            console.warn(
              `Não foi possível reproduzir o vídeo ${video.currentSrc}:`,
              error
            )
          })
        }
      })
    }

    playVideos()

    document.addEventListener("visibilitychange", playVideos)

    return () => {
      document.removeEventListener("visibilitychange", playVideos)
    }
  }, [])

  return (
    <section
      id="portfolio"
      className="border-t border-border px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Portfólio
            </span>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Trabalhos em destaque
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {portfolio.map((item, i) => (
            <Reveal
              as="article"
              key={item.video}
              delay={i * 0.06}
            >
              <div className="group block">
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-black">
                  <video
                    ref={(el) => {
                      videosRef.current[i] = el
                    }}
                    className="absolute inset-0 h-full w-full object-contain"
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={`Vídeo ${i + 1} do portfólio da Q&A Company`}
                  />

                  <span className="absolute left-3 top-3 z-10 rounded-full bg-black/75 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {item.format || "Vídeo"}
                  </span>

                  <a
                    href={item.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir vídeo ${i + 1} em uma nova aba`}
                    className="absolute bottom-3 right-3 z-10 rounded-full bg-black/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
