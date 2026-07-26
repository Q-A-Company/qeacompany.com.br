import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const siteUrl = 'https://qeacompany.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Q&A Company — Transformando desafios em resultados',
    template: '%s | Q&A Company',
  },
  description:
    'A Q&A Company une produção audiovisual, marketing e tecnologia para ajudar empresas a serem vistas, lembradas e escolhidas. Estratégia de ponta a ponta, sem terceirizar o que importa.',
  keywords: [
    'agência de mídia',
    'marketing digital',
    'produção de vídeo',
    'soluções digitais',
    'desenvolvimento de sites',
    'tráfego pago',
  ],
  authors: [{ name: 'Q&A Company' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Q&A Company',
    title: 'Q&A Company — Transformando desafios em resultados',
    description:
      'Mídia, marketing e soluções digitais para marcas que querem crescer com estratégia e provar resultado.',
    images: [{ url: '/brand/banner.png', width: 1706, height: 960, alt: 'Q&A Company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Q&A Company — Transformando desafios em resultados',
    description:
      'Mídia, marketing e soluções digitais para marcas que querem crescer com estratégia e provar resultado.',
    images: ['/brand/banner.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark bg-background ${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <GoogleAnalytics gaId="G-ZMCKP5KCV7" />
      </body>
    </html>
  )
}
