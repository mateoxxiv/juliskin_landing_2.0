'use client'

import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-secondary">
        <img
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Quick Add Button */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="sm"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Añadir al carrito
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <p className="text-lg font-serif text-foreground">
          ${product.price.toLocaleString('es-CO')}
        </p>
      </div>
    </div>
  )
}
