import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/sections/cta-section"

export function ComingSoon({ title, description }: { title: string; description: string }) {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-svh flex-col justify-center px-5 py-32 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Em breve</span>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
