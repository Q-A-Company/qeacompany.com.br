import type { Metadata } from "next"
import { MidiaContent } from "@/components/midia-content"

export const metadata: Metadata = {
  title: "Mídia — Produção de Vídeo | Q&A Company",
  description:
    "Portfólio de produção audiovisual imobiliária da Q&A Company: vídeos verticais e horizontais que transformam atenção em venda.",
}

export default function MidiaPage() {
  return <MidiaContent />
}
