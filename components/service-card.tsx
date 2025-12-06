"use client"

import { Button } from "@/components/ui/button"
import { Clock, Sparkles } from "lucide-react"
import Link from "next/link"

interface Service {
  id: number
  name: string
  category: string
  duration: string
  price: number
  image: string
  shortDescription?: string
  description: string
  benefits: string[]
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/servicios/${service.id}`} className="group cursor-pointer block">
      {/* Image Container */}
      <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-secondary">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Clock className="h-3 w-3 text-accent" />
          <span className="text-xs font-medium text-foreground">{service.duration}</span>
        </div>

        {/* View Details Button */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
            Ver Detalles
          </Button>
        </div>
      </div>

      {/* Service Info */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{service.category}</p>
        <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {service.shortDescription || service.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1 pt-1">
          {service.benefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="text-xs text-accent flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              {benefit}
            </span>
          ))}
        </div>

        <p className="text-lg font-serif text-foreground pt-1">Desde ${service.price.toLocaleString("es-CO")}</p>
      </div>
    </Link>
  )
}
