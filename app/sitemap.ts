import type { MetadataRoute } from "next"

const baseUrl = "https://qeacompany.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/midia", "/marketing", "/solucoes-digitais"]
  const now = new Date()
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
