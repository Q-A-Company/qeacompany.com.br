import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { portfolio } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Portfólio</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Trabalhos em destaque
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item, i) => (
            <Reveal as="article" key={item.title} delay={i * 0.06}>
              <Link href={item.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} — projeto de ${item.category} da Q&A Company`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {item.format}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
