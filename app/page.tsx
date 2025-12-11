import dynamic from 'next/dynamic'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedServices } from '@/components/featured-services'
import { Categories } from '@/components/categories'
import { Footer } from '@/components/footer'

// Lazy load para componentes que no son visibles inicialmente
const Testimonials = dynamic(
  () => import('@/components/testimonials').then((mod) => mod.Testimonials),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted" />,
    ssr: true, // Si quieres SEO en testimonios, déjalo en true. Si no, false.
  }
)

const Newsletter = dynamic(
  () => import('@/components/newsletter').then((mod) => mod.Newsletter),
  { ssr: false } // Newsletter no suele ser crítico para SEO
)

export const metadata = {
  title: 'Juliskin | Cosmetología Premium Transformadora',
  description:
    'Descubre el poder de tu piel con tratamientos faciales y corporales de alta tecnología en Juliskin. Agenda tu cita hoy para Hydrafacial, Peeling y más.',
  openGraph: {
    title: 'Juliskin | Transforma tu Belleza',
    description:
      'Experiencias cosmetológicas de lujo en Colombia. Resultados visibles desde la primera sesión. Tu piel merece lo mejor.',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedServices />
      <Categories />
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </main>
  )
}
