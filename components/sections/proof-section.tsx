import { Check, MessageCircle } from "lucide-react"
import { proofCase } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function ProofSection() {
  return (
    <section id="cases" className="border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Case real</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Do vídeo direto para a <span className="italic font-serif font-normal">venda</span>.
          </h2>

          <dl className="mt-8 space-y-6">
            <div className="border-l-2 border-border pl-5">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Contexto</dt>
              <dd className="mt-1 leading-relaxed">{proofCase.context}</dd>
            </div>
            <div className="border-l-2 border-border pl-5">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">O que fizemos</dt>
              <dd className="mt-1 leading-relaxed">{proofCase.action}</dd>
            </div>
            <div className="border-l-2 border-foreground pl-5">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Resultado</dt>
              <dd className="mt-1 text-lg font-medium leading-relaxed">{proofCase.result}</dd>
            </div>
          </dl>

          <p className="mt-8 flex items-start gap-2 text-xs text-muted-foreground">
            <MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Conversa reproduzida com autorização. Dados pessoais omitidos conforme a LGPD.
          </p>
        </Reveal>

        {/* Print estilizado de WhatsApp */}
        <Reveal delay={0.1} className="flex justify-center">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            {/* topo do chat */}
            <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-sm font-semibold">
                C
              </div>
              <div>
                <p className="text-sm font-medium">Cliente</p>
                <p className="text-xs text-muted-foreground">online</p>
              </div>
            </div>

            {/* mensagens */}
            <div className="space-y-2.5 px-4 py-6">
              {proofCase.conversation.map((msg, i) => {
                const mine = msg.from === "us"
                return (
                  <div key={i} className={mine ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className={
                        (mine
                          ? "bg-foreground text-background"
                          : "bg-secondary text-foreground") +
                        " max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug"
                      }
                    >
                      {msg.text}
                      <span
                        className={
                          (mine ? "text-background/60" : "text-muted-foreground") +
                          " ml-2 inline-flex translate-y-0.5 items-center gap-0.5 text-[10px]"
                        }
                      >
                        14:2{i}
                        {mine && <Check className="h-3 w-3" />}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
