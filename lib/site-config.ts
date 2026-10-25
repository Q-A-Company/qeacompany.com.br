// ============================================================================
// Q&A COMPANY — Configuração editável do site
// ----------------------------------------------------------------------------
// Todos os dados que mudam com o tempo (VGV, números, depoimentos, portfólio)
// ficam centralizados aqui. Basta editar os valores abaixo para atualizar o
// site — nada de números "hardcoded" espalhados pelos componentes.
// ============================================================================

import { sendGAEvent } from "@next/third-parties/google"

export const site = {
  name: "Q&A Company",
  domain: "qeacompany.com.br",
  slogan: "Transformando desafios em resultados.",
  tagline: "Mídia • Captação e edição de vídeo",
  description:
    "A Q&A Company é uma produtora audiovisual que ajuda empresas a serem vistas, lembradas e escolhidas. Do planejamento à edição final, sem terceirizar o que importa.",
  logo: "/brand/logo-white.png",
  whatsapp: "https://wa.me/5541987457088",
  email: "contato@qeacompany.com.br",
  social: {
    instagram: "https://instagram.com/qeacompany",
    youtube: "https://youtube.com/@qeacompany",
    tiktok: "https://tiktok.com/@qeacompany",
    linkedin: "https://linkedin.com/company/qea-company",
  },
}

// Rastreamento de conversão (GA4) — chame essas funções no onClick
// dos botões de contato (WhatsApp / E-mail) em qualquer componente.
export function trackWhatsAppClick() {
  sendGAEvent("event", "contato_whatsapp", { method: "WhatsApp" })
}

export function trackEmailClick() {
  sendGAEvent("event", "contato_email", { method: "Email" })
}

// Contador de VGV (Valor Geral de Vendas) — atualize conforme cresce
export const vgv = {
  // valor em reais (usado pelo contador animado)
  value: 25_000_000,
  // como o número deve ser exibido depois de contar (unidade)
  displayValue: 25,
  displayUnit: "milhões",
  label: "vendidos com nossas estratégias",
}

// Números / resultados (contadores animados)
export const stats = [
  { value: 80, suffix: "+", label: "Clientes atendidos" },
  { value: 1200, suffix: "+", label: "Vídeos produzidos" },
  { value: 45, suffix: "+", label: "Projetos digitais entregues" },
  { value: 6, suffix: " anos", label: "De estrada no mercado" },
]

// Três pilares da empresa
export const pillars = [
  {
    id: "01",
    title: "Captação",
    description:
      "Filmagem profissional que transforma atenção em resultado. Vídeos verticais e horizontais, institucionais ou para venda..",
    href: "",
  },
  {
    id: "02",
    title: "Edição",
    description:
      "Do material bruto ao vídeo final: cortes, ritmo, cor, efeitos e som para entregar um conteúdo pronto para publicar.",
    href: "",
  },
  {
    id: "03",
    title: "Conteúdo para redes",
    description:
      "Vídeos pensados para Reels, TikTok, Youtube e Shorts, com linguagem direta para prender o público e colocar a sua marca na frente das pessoas certas.",
    href: "",
  },
]

// Portfólio em destaque (mix das 3 áreas)

const R2 = "https://pub-c152309086b74575813789c84adcb467.r2.dev";

export const portfolio = [
  {
    video: `${R2}/alphaville-reels.mp4`,
    image: `${R2}/capas/alphaville-reels.jpg`,
    href: "",
  },
    {
    video: `${R2}/mansoes-ia-pronto-2.mp4`,
    image: `${R2}/capas/mansoes-ia-pronto-2.jpg`,
    href: "",
  },
    {
    video: `${R2}/pedra-de-itauna-final.mp4`,
    image: `${R2}/capas/pedra-de-itauna-final.jpg`,
    href: "",
  },
      {
    video: `${R2}/PARQUE DAS PALMEIRAS-FINAL.mp4`,
    href: "",
  },
  {
    video: `${R2}/arouca-final.mp4`,
    image: `${R2}/capas/arouca-final.jpg`,
    href: "",
  },
  {
    video: `${R2}/novo-leblon-final.mp4`,
    image: `${R2}/capas/novo-leblon-final.jpg`,
    href: "",
  },
  {
    video: `${R2}/rio-mar-final.mp4`,
    image: `${R2}/capas/rio-mar-final.jpg`,
    href: "",
  },
  {
    video: `${R2}/villagio-felicita-ia-final.mp4`,
    image: `${R2}/capas/villagio-felicita-ia-final.jpg`,
    href: "",
  },
];


// Prova social real: caso vídeo → venda (respeitando LGPD nos prints)
export const proofCase = {
  context: "Casa parada no mercado há mais de 19 meses.",
  action:
    "Produzimos um vídeo vertical destacando os diferenciais do imóvel e utilizando I.A para reformas!",
  result: "Vendido em 34 dias após a publicação do vídeo.",
  // conversa estilizada (dados sensíveis omitidos conforme LGPD)
  conversation: [
    { from: "client", text: "Lembra daquele casa que estava encalhada?" },
    { from: "us", text: "Lembro sim! O do vídeo da I.A?" },
    { from: "client", text: "Essa mesma. VENDIDA!" },
    { from: "client", text: "O cliente já estava aqui como Lead, mas só decidiu visitar após ver o vídeo!" },
    { from: "us", text: "Incrível! Parabéns pela venda! 👏" },
  ],
}

// Depoimentos
export const testimonials = [
  {
    quote:
      "Mais um apartamento vendido graças ao vídeo produzido por vocês!.",
    author: "Cliente do setor imobiliário",
    role: "Imobiliária parceira",
  },
  {
    quote:
      "O vídeo de mobiliando a casa vazia fez a retenção do público disparar e leads quentes chegaram.",
    author: "Cliente do setor imobiliário",
    role: "Imobiliária parceira",
  },
  {
    quote:
      "Souberam traduzir a nossa operação em imagens profissionais. O material fortaleceu a nossa credibilidade com clientes e parceiros.",
    author: "Cliente do setor naval",
    role: "Empresa do ramo naval",
  },
]