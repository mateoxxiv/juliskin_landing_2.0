const categories = [
  {
    name: "Tratamientos Faciales",
    description: "Limpieza, hidratación y rejuvenecimiento profesional",
    image: "/facial-treatment-category-spa-elegant.jpg",
  },
  {
    name: "Rejuvenecimiento Avanzado",
    description: "Tecnología de vanguardia para resultados visibles",
    image: "/advanced-rejuvenation-treatment-category.jpg",
  },
  {
    name: "Tratamientos Corporales",
    description: "Cuidado integral para todo tu cuerpo",
    image: "/body-treatment-category-spa-luxury.jpg",
  },
]

export function Categories() {
  return (
    <section id="tratamientos" className="py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Explora</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            Categorías de tratamientos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Cada tratamiento diseñado con la más alta tecnología e innovación para tu bienestar
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer">
              {/* Image */}
              <div className="aspect-[4/5] relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-serif font-light mb-2 text-balance">{category.name}</h3>
                <p className="text-sm text-white/90 mb-4 leading-relaxed text-pretty">{category.description}</p>
                <button className="text-sm font-medium uppercase tracking-wider border-b border-white/50 hover:border-white transition-colors pb-1">
                  Explorar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
