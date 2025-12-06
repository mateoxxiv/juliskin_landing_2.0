import { Button } from "@/components/ui/button"
import { services } from "@/lib/services-data"
import { WHATSAPP_URL } from "@/lib/constants"
import { ArrowLeft, Clock, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BackButton } from "@/components/back-button"
import type { Metadata } from "next"

interface ServiceDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const service = services.find((s) => s.id === Number.parseInt(id))

  if (!service) {
    return {
      title: "Servicio no encontrado",
    }
  }

  return {
    title: `${service.name} | Cosmetología Premium`,
    description: service.shortDescription || service.description,
    openGraph: {
      title: service.name,
      description: service.shortDescription || service.description,
      images: [service.image],
    },
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params
  const service = services.find((s) => s.id === Number.parseInt(id))

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={service.image || "/placeholder.svg"} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
            <BackButton fallbackUrl="/servicios" className="mb-6" />

            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">{service.category}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4 text-balance">
              {service.name}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span>{service.duration}</span>
              </div>
              <div className="text-2xl font-serif text-foreground">Desde ${service.price.toLocaleString("es-CO")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6">
                  Sobre este tratamiento
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-light text-foreground mb-6">Beneficios</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                      <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-light text-foreground mb-6">
                  Proceso del tratamiento
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-accent">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* What's Included */}
                <div className="border border-border rounded-lg p-6 bg-secondary/20">
                  <h3 className="text-lg font-medium text-foreground mb-4">Este servicio incluye</h3>
                  <ul className="space-y-3">
                    {service.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">Ideal para</h3>
                  <ul className="space-y-2">
                    {service.ideal.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
                  <p className="text-sm mb-2 opacity-90">Precio desde</p>
                  <p className="text-3xl font-serif mb-4">${service.price.toLocaleString("es-CO")}</p>
                  <Button
                    size="lg"
                    className="w-full bg-background text-foreground hover:bg-background/90"
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Agendar Cita
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 text-center">
            También te puede interesar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/servicios/${relatedService.id}`}
                  className="group block rounded-lg overflow-hidden bg-background border border-border hover:border-accent transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedService.image || "/placeholder.svg"}
                      alt={relatedService.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {relatedService.category}
                    </p>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                      {relatedService.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {relatedService.shortDescription || relatedService.description}
                    </p>
                    <p className="text-lg font-serif text-foreground">
                      Desde ${relatedService.price.toLocaleString("es-CO")}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
