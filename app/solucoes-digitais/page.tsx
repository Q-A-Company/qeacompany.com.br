import type { Metadata } from "next"
import { SolucoesDigitaisContent } from "@/components/solucoes-digitais-content"

export const metadata: Metadata = {
  title: "Soluções Digitais — Sites, Apps e Sistemas | Q&A Company",
  description:
    "Desenvolvimento de sites, aplicativos e sistemas sob medida da Q&A Company. Conheça o case QEA Imob e outros produtos digitais que já colocamos no ar.",
}

export default function SolucoesDigitaisPage() {
  return <SolucoesDigitaisContent />
}
