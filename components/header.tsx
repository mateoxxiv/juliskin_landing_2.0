"use client"

import { Menu, Search, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-serif font-light tracking-wide text-foreground">Juliskin</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Servicios
            </a>
            <a href="#tratamientos" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Tratamientos
            </a>
            <a
              href="#sobre-nosotros"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Nuestra Historia
            </a>
            <a href="#contacto" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-accent">
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Button>
            <Button variant="default" size="sm" className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Agendar Cita
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menú</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#servicios" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Servicios
              </a>
              <a
                href="#tratamientos"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Tratamientos
              </a>
              <a
                href="#sobre-nosotros"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Nuestra Historia
              </a>
              <a href="#contacto" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Contacto
              </a>
              <Button variant="default" size="sm" className="flex items-center justify-center gap-2 mt-2">
                <Phone className="h-4 w-4" />
                Agendar Cita
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
