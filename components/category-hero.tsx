interface CategoryHeroProps {
  title: string
  description: string
  image: string
}

import Image from 'next/image'

export function CategoryHero({ title, description, image }: CategoryHeroProps) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          priority
          className="object-cover"
          unoptimized={image?.includes('ibb.co')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
          Especialidad
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 text-balance">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </section>
  )
}
