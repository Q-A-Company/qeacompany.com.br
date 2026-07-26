import type { Metadata } from "next"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Mídia — Produção de Vídeo",
  description:
    "Portfólio de produção audiovisual da Q&A Company: vídeos verticais e horizontais que transformam atenção em venda.",
}

export default function MidiaPage() {
  return (
    <ComingSoon
      title="Mídia que vende."
      description="Nossa página de portfólio audiovisual está a caminho — com vídeos verticais, horizontais e o case completo de vídeo direto para a venda."
    />
  )
}
