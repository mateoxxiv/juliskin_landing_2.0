const testimonials = [
  {
    name: "María González",
    role: "Cliente desde 2023",
    content:
      "Los productos han transformado mi piel completamente. La calidad es excepcional y los resultados son visibles desde la primera semana.",
    rating: 5,
  },
  {
    name: "Andrea Rodríguez",
    role: "Cliente desde 2022",
    content:
      "Nunca había usado productos de esta calidad. Mi piel luce radiante y saludable. El sérum intensivo es mi favorito absoluto.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Cliente desde 2023",
    content:
      "La atención al detalle en cada producto es impresionante. Se nota la dedicación en cada fórmula. Totalmente recomendado.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Testimonios</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            {"Lo que dicen nuestras clientas"}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 md:p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{`"${testimonial.content}"`}</p>

              {/* Author */}
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
