import Link from "next/link"

const categories = [
  {
    name: "Tratamientos Faciales",
    slug: "faciales",
    description: "Revitaliza tu piel con tratamientos avanzados de limpieza, hidratación profunda y rejuvenecimiento.",
    image: "/facial-treatment-category-spa-elegant.jpg",
  },
  {
    name: "Tratamientos Capilares",
    slug: "capilares",
    description: "Soluciones innovadoras y tecnología de punta para restaurar la salud y vitalidad de tu cabello.",
    image: "/advanced-rejuvenation-treatment-category.jpg",
  },
  {
    name: "Tratamientos Corporales",
    slug: "corporales",
    description: "Experiencias de bienestar integral que esculpen, tonifican y relajan tu cuerpo.",
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
            <Link
              key={index}
              href={`/categorias/${category.slug}`}
              className="group relative overflow-hidden rounded-lg cursor-pointer block"
            >
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
                <span className="text-sm font-medium uppercase tracking-wider border-b border-white/50 group-hover:border-white transition-colors pb-1">
                  Explorar
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
