import { SmoothScroll } from "@/components/smooth-scroll"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/sections/hero-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { ResultsSection } from "@/components/sections/results-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ProofSection } from "@/components/sections/proof-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection, SiteFooter } from "@/components/sections/cta-section"
import { site, vgv, testimonials } from "@/lib/site-config"

// Schema markup (JSON-LD) — Organization + AggregateRating
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: `https://${site.domain}`,
  logo: `https://${site.domain}${site.logo}`,
  slogan: site.slogan,
  description: site.description,
  sameAs: [
    site.social.instagram,
    site.social.youtube,
    site.social.tiktok,
    site.social.linkedin,
  ],
  knowsAbout: [
    "produção audiovisual",
    "marketing digital",
    "tráfego pago",
    "desenvolvimento de sites e aplicativos",
  ],
}

export default function HomePage() {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <PillarsSection />
        <PortfolioSection />
        <ProofSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </SmoothScroll>
  )
}
