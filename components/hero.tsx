import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-spa-treatment-room-with-soft-lighting.jpg"
          alt="Sala de tratamiento de spa elegante"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6 md:mb-8">
          Experiencia Premium
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6 md:mb-8 leading-tight text-balance">
          {"Renueva tu piel,"}
          <br />
          {"transforma tu belleza"}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed text-pretty">
          Tratamientos cosmetológicos innovadores que realzan tu belleza natural. Tecnología de vanguardia combinada con
          técnicas especializadas para resultados visibles y duraderos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px]">
            Ver Tratamientos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-foreground hover:bg-secondary min-w-[200px] bg-transparent"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Descubre más</span>
          <div className="w-[1px] h-12 bg-muted-foreground/30 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
