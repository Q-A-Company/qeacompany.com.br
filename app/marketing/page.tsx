import type { Metadata } from "next"
import { MarketingContent } from "@/components/marketing-content"

export const metadata: Metadata = {
  title: "Marketing — Estratégia e Performance | Q&A Company",
  description:
    "Marketing digital, gestão de redes sociais e tráfego pago (Meta, Google Ads) para colocar sua marca na frente das pessoas certas.",
}

export default function MarketingPage() {
  return <MarketingContent />
}
