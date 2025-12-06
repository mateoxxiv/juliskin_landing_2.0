import { CategoryHero } from "@/components/category-hero"
import { ServiceCard } from "@/components/service-card"
import { getServicesByCategory, getCategoryInfo } from "@/lib/services-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Sparkles, Award, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryPageProps {
    params: Promise<{
        slug: string
    }>
}

const categoryBenefits = {
    faciales: [
        {
            icon: Sparkles,
            title: "Tecnología Avanzada",
            description: "Equipos de última generación para resultados visibles"
        },
        {
            icon: Award,
            title: "Profesionales Certificados",
            description: "Especialistas con años de experiencia"
        },
        {
            icon: Clock,
            title: "Resultados Inmediatos",
            description: "Nota la diferencia desde la primera sesión"
        },
        {
            icon: Heart,
            title: "Productos Premium",
            description: "Solo las mejores marcas para tu piel"
        }
    ],
    capilares: [
        {
            icon: Sparkles,
            title: "Fórmulas Exclusivas",
            description: "Tratamientos personalizados para cada tipo de cabello"
        },
        {
            icon: Award,
            title: "Expertos Capilares",
            description: "Estilistas especializados en salud capilar"
        },
        {
            icon: Clock,
            title: "Duración Prolongada",
            description: "Resultados que perduran por meses"
        },
        {
            icon: Heart,
            title: "Cuidado Integral",
            description: "Desde la raíz hasta las puntas"
        }
    ],
    corporales: [
        {
            icon: Sparkles,
            title: "Experiencia Completa",
            description: "Relajación y resultados en cada sesión"
        },
        {
            icon: Award,
            title: "Terapeutas Certificados",
            description: "Profesionales en bienestar corporal"
        },
        {
            icon: Clock,
            title: "Sesiones Personalizadas",
            description: "Adaptadas a tus necesidades específicas"
        },
        {
            icon: Heart,
            title: "Ambiente Premium",
            description: "Espacios diseñados para tu confort"
        }
    ]
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params
    const categoryInfo = getCategoryInfo(slug)

    if (!categoryInfo) {
        notFound()
    }

    const services = getServicesByCategory(slug)
    const benefits = categoryBenefits[slug as keyof typeof categoryBenefits] || []

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <CategoryHero
                title={categoryInfo.name}
                description={categoryInfo.description}
                image={categoryInfo.image}
            />

            {/* Back Button */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
                <Link href="/#tratamientos">
                    <Button variant="ghost" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Volver a categorías
                    </Button>
                </Link>
            </div>

            {/* Category Description */}
            <section className="py-8 md:py-12 bg-secondary/20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6">
                            Descubre nuestros tratamientos
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-pretty">
                            {categoryInfo.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 md:py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">¿Por qué elegirnos?</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                            Excelencia en cada detalle
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div key={index} className="text-center group">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                                        <Icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-secondary/20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Nuestros servicios</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                            Tratamientos disponibles
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {services.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">
                                Próximamente agregaremos más servicios en esta categoría.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6">
                            ¿Lista para transformarte?
                        </h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Agenda tu cita hoy y descubre el poder de nuestros tratamientos especializados
                        </p>
                        <Button size="lg" className="gap-2">
                            Agendar Cita
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

// Generate static params for all categories
export function generateStaticParams() {
    return [
        { slug: "faciales" },
        { slug: "capilares" },
        { slug: "corporales" },
    ]
}
