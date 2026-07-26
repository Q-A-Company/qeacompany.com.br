"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { site } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { site, trackWhatsAppClick, trackEmailClick } from "@/lib/site"

const nav = [
  { label: "Quem somos", href: "/#sobre" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Cases reais", href: "/#cases" },
  { label: "Mídia", href: "/midia" },
  { label: "Marketing", href: "/marketing" },
  { label: "Soluções Digitais", href: "/solucoes-digitais" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name} — página inicial`}>
          <Image
            src={site.logo || "/placeholder.svg"}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="hidden text-sm font-medium tracking-tight sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            Fale com a gente
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Navegação mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted-foreground last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="mt-4 inline-flex justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              Fale com a gente
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
