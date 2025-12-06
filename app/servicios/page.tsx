"use client"

import { useState, useMemo } from "react"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/services-data"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiciosPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>("all")

    const categories = [
        { slug: "all", name: "Todos los Servicios" },
        { slug: "faciales", name: "Tratamientos Faciales" },
        { slug: "capilares", name: "Tratamientos Capilares" },
        { slug: "corporales", name: "Tratamientos Corporales" },
    ]

    // Filtrar servicios
    const filteredServices = useMemo(() => {
        return services.filter((service) => {
            // Filtro por categoría
            const matchesCategory = selectedCategory === "all" || service.categorySlug === selectedCategory

            // Filtro por búsqueda
            const matchesSearch =
                searchQuery === "" ||
                service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase())

            return matchesCategory && matchesSearch
        })
    }, [searchQuery, selectedCategory])

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                            Nuestro catálogo completo
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6 text-balance">
                            Todos los Servicios
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Explora nuestra amplia gama de tratamientos especializados diseñados para realzar tu belleza natural
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-8 border-b border-border bg-background sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Buscar tratamientos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                            {categories.map((category) => (
                                <Button
                                    key={category.slug}
                                    variant={selectedCategory === category.slug ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category.slug)}
                                    className="transition-all"
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-center lg:text-left">
                        <p className="text-sm text-muted-foreground">
                            Mostrando <span className="font-medium text-foreground">{filteredServices.length}</span> de{" "}
                            <span className="font-medium text-foreground">{services.length}</span> servicios
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    {filteredServices.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {filteredServices.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="max-w-md mx-auto">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                                    <Search className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-serif font-light text-foreground mb-2">
                                    No se encontraron servicios
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Intenta con otros términos de búsqueda o selecciona una categoría diferente
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSearchQuery("")
                                        setSelectedCategory("all")
                                    }}
                                >
                                    Limpiar filtros
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
