'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4 text-balance">
            Únete a nuestra comunidad
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
            Recibe consejos exclusivos de belleza, promociones especiales y
            novedades de nuestros tratamientos directamente en tu correo
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border"
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
            >
              Suscribirse
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Al suscribirte, aceptas recibir correos electrónicos de marketing.
            Puedes cancelar en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
