import { ProductCard } from '@/components/product-card'

const products = [
  {
    id: 1,
    name: 'Sérum Radiante Intensivo',
    category: 'Tratamiento Facial',
    price: 189000,
    image: '/luxury-serum-bottle-gold-cosmetic-minimal.jpg',
    description:
      'Fórmula avanzada con vitamina C y ácido hialurónico para una piel luminosa',
  },
  {
    id: 2,
    name: 'Crema Regeneradora Nocturna',
    category: 'Cuidado Nocturno',
    price: 245000,
    image: '/elegant-night-cream-jar-beige-luxury.jpg',
    description:
      'Regeneración celular profunda mientras duermes con péptidos activos',
  },
  {
    id: 3,
    name: 'Mascarilla Purificante',
    category: 'Mascarillas',
    price: 125000,
    image: '/luxury-face-mask-tube-minimalist-beige.jpg',
    description:
      'Detoxifica y purifica con arcillas minerales y extractos botánicos',
  },
  {
    id: 4,
    name: 'Contorno de Ojos Premium',
    category: 'Cuidado de Ojos',
    price: 165000,
    image: '/eye-cream-luxury-packaging-minimal-elegant.jpg',
    description:
      'Reduce líneas de expresión y ojeras con cafeína y retinol suave',
  },
]

export function FeaturedProducts() {
  return (
    <section id="productos" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Los más deseados
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6 text-balance">
            Productos destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Descubre nuestra selección premium de productos científicamente
            formulados para transformar tu piel
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
