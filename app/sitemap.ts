import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://juliskin.com' // Reemplazar con dominio real

  // Páginas estáticas
  const routes = [
    '',
    '/servicios',
    '/categorias/cursos',
    // Agrega otras rutas estáticas aquí
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Páginas dinámicas de servicios
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/servicios/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.isFeatured ? 0.9 : 0.7,
  }))

  return [...routes, ...serviceRoutes]
}
