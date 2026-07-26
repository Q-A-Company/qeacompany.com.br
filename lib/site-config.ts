// ============================================================================
// Q&A COMPANY — Configuração editável do site
// ----------------------------------------------------------------------------
// Todos os dados que mudam com o tempo (VGV, números, depoimentos, portfólio)
// ficam centralizados aqui. Basta editar os valores abaixo para atualizar o
// site — nada de números "hardcoded" espalhados pelos componentes.
// ============================================================================

export const site = {
  name: "Q&A Company",
  domain: "qeacompany.com.br",
  slogan: "Transformando desafios em resultados.",
  tagline: "Mídia • Marketing • Soluções Digitais",
  description:
    "A Q&A Company une produção audiovisual, marketing e tecnologia para ajudar empresas a serem vistas, lembradas e escolhidas. Estratégia de ponta a ponta, sem terceirizar o que importa.",
  logo: "/brand/logo-white.png",
  whatsapp: "https://wa.me/5521965559712",
  email: "contato@qeacompany.com.br",
  social: {
    instagram: "https://instagram.com/qeacompany",
    youtube: "https://youtube.com/@qeacompany",
    tiktok: "https://tiktok.com/@qeacompany",
    linkedin: "https://linkedin.com/company/qea-company",
  },
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
    title: "Mídia",
    description:
      "Produção audiovisual que transforma atenção em resultado. Vídeos verticais e horizontais institucionais ou para venda.",
    href: "/midia",
  },
  {
    id: "02",
    title: "Marketing",
    description:
      "Gestão de redes e tráfego pago (Meta, Google Ads, TikTok Ads...) para colocar a sua marca na frente das pessoas certas.",
    href: "/marketing",
  },
  {
    id: "03",
    title: "Soluções Digitais",
    description:
      "Sites, apps e sistemas sob medida. Do conceito ao produto no ar, com tecnologia que escala.",
    href: "/solucoes-digitais",
  },
]

// Portfólio em destaque (mix das 3 áreas)
export const portfolio = [
  {
    title: "Campanha imobiliária vertical",
    category: "Mídia",
    format: "Vertical",
    image: "/portfolio/video-vertical-1.png",
    href: "/midia",
  },
  {
    title: "Institucional para lançamento",
    category: "Mídia",
    format: "Horizontal",
    image: "/portfolio/video-horizontal-1.png",
    href: "/midia",
  },
  {
    title: "Gestão de conteúdo e social",
    category: "Marketing",
    format: "Social",
    image: "/portfolio/marketing-1.png",
    href: "/marketing",
  },
  {
    title: "QEA Imob — app sob medida",
    category: "Soluções Digitais",
    format: "Produto",
    image: "/portfolio/digital-1.png",
    href: "/solucoes-digitais",
  },
]

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
      "A estratégia do Trafego trouxe leads realmente qualificados!",
    author: "Cliente do setor imobiliário",
    role: "Imobiliária parceira",
  },
  {
    quote:
      "O app que desenvolveram organizou nossa pauta de corretores inteira. Ganhamos velocidade na distribuição das fichas.",
    author: "Cliente do setor imobiliário",
    role: "Imobiliária parceira",
  },
]
