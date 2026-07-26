import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { site } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function CtaSection() {
  return (
    <section id="contato" className="border-t border-border px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Vamos fazer a sua marca vender mais?
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Conte o seu desafio. A gente responde com estratégia e um plano para
            transformar atenção em resultado.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Chamar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  const nav = [
  { label: "Mídia", href: "/midia" },
  { label: "Marketing", href: "/marketing" },
  { label: "Soluções Digitais", href: "/solucoes-digitais" },
  { label: "Contato", href: "#contato" },
  ]
  const social = [
    { label: "Instagram", href: site.social.instagram },
    { label: "YouTube", href: site.social.youtube },
    { label: "TikTok", href: site.social.tiktok },
    { label: "LinkedIn", href: site.social.linkedin },
  ]

  return (
    <footer className="border-t border-border px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {site.slogan}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{site.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Navegação</p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Redes</p>
              <ul className="mt-4 space-y-2.5">
                {social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <span>{site.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
