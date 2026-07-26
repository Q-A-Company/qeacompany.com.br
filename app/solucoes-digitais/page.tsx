import type { Metadata } from "next"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Soluções Digitais — Sites, Apps e Sistemas",
  description:
    "Apps, sites institucionais e sistemas sob medida. Conheça o case QEA Imob e outros projetos digitais da Q&A Company.",
}

export default function SolucoesDigitaisPage() {
  return (
    <ComingSoon
      title="Soluções digitais sob medida."
      description="Em breve: o case QEA Imob em destaque, com mockups em dispositivo, a estrutura problema → solução → resultado e outros projetos."
    />
  )
}
