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
  whatsapp: "https://wa.me/5500000000000", // TODO: substituir pelo número real
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
  value: 50_000_000,
  // como o número deve ser exibido depois de contar (unidade)
  displayValue: 50,
  displayUnit: "milhões",
  label: "em imóveis vendidos com nossas estratégias",
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
      "Produção audiovisual que transforma atenção em resultado. Vídeos verticais e horizontais pensados para vender.",
    href: "/midia",
  },
  {
    id: "02",
    title: "Marketing",
    description:
      "Estratégia, gestão de redes e tráfego pago para colocar a sua marca na frente das pessoas certas.",
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
  context: "Apartamento parado no mercado havia mais de 4 meses.",
  action:
    "Produzimos um vídeo vertical destacando os diferenciais do imóvel e estruturamos a divulgação nas redes.",
  result: "Vendido em 11 dias após a publicação do vídeo.",
  // conversa estilizada (dados sensíveis omitidos conforme LGPD)
  conversation: [
    { from: "client", text: "Cara, lembra daquele apê que tava encalhado?" },
    { from: "us", text: "Lembro sim! O do vídeo vertical?" },
    { from: "client", text: "Esse mesmo. VENDIDO 🎉" },
    { from: "client", text: "O comprador falou que decidiu depois de ver o vídeo" },
    { from: "us", text: "Isso é tudo! Parabéns 👏" },
  ],
}

// Depoimentos
export const testimonials = [
  {
    quote:
      "O vídeo mudou completamente o jogo. Imóvel que estava parado saiu em menos de duas semanas.",
    author: "Cliente do setor imobiliário",
    role: "Imobiliária parceira",
  },
  {
    quote:
      "Profissionalismo do briefing à entrega. A estratégia de conteúdo trouxe leads muito mais qualificados.",
    author: "Cliente do setor imobiliário",
    role: "Construtora",
  },
  {
    quote:
      "O app que desenvolveram organizou nossa operação inteira. Ganhamos velocidade em cada venda.",
    author: "Cliente do setor imobiliário",
    role: "Rede de corretores",
  },
]
