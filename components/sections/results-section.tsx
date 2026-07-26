import { vgv, stats } from "@/lib/site-config"
import { AnimatedCounter } from "@/components/animated-counter"
import { Reveal } from "@/components/reveal"

export function ResultsSection() {
  return (
    <section id="resultados" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Destaque VGV */}
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Prova de resultado</span>
          <p className="mt-6 flex items-baseline justify-center text-balance font-sans text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
            <span className="mr-2 font-serif text-4xl font-normal text-muted-foreground sm:text-5xl">R$</span>
            <AnimatedCounter value={vgv.displayValue} />
            <span className="ml-3 text-3xl font-normal text-muted-foreground sm:text-4xl">{vgv.displayUnit}</span>
          </p>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {vgv.label}
          </p>
        </Reveal>

        {/* Grid de números */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="flex flex-col items-center bg-background px-4 py-10 text-center"
            >
              <span className="font-sans text-4xl font-semibold tracking-tight md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-3 text-sm text-muted-foreground">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
