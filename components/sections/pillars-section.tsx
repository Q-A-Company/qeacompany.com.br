import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { pillars } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function PillarsSection() {
  return (
    <section id="sobre" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Quem somos</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Três frentes, uma obsessão: resultado.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              A Q&A Company une produção audiovisual, marketing e tecnologia para
              ajudar empresas a serem vistas, lembradas e escolhidas. Estratégia de
              ponta a ponta, sem terceirizar o que importa.
            </p>
          </Reveal>

          <ul className="flex flex-col">
            {pillars.map((pillar, i) => (
              <Reveal as="li" key={pillar.id} delay={i * 0.08}>
                <Link
                  href={pillar.href}
                  className="group flex items-start gap-5 border-t border-border py-7 transition-colors hover:bg-secondary/50"
                >
                  <span className="font-serif text-sm text-muted-foreground">{pillar.id}</span>
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 text-xl font-medium tracking-tight">
                      {pillar.title}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </h3>
                    <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
