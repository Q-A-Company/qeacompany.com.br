import type { Metadata } from "next"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Marketing — Estratégia e Performance",
  description:
    "Gestão de redes, tráfego pago, branding e estratégia. A Q&A Company coloca a sua marca na frente das pessoas certas.",
}

export default function MarketingPage() {
  return (
    <ComingSoon
      title="Marketing com estratégia."
      description="Em breve: nossa metodologia de trabalho, cases de sucesso com métricas reais e depoimentos de quem cresceu com a gente."
    />
  )
}
