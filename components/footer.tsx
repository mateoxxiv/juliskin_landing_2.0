import { Instagram, Facebook, Youtube } from 'lucide-react'
import { LoadingLink } from '@/components/loading-link'
import { WHATSAPP_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-light mb-4">
              Juliskin Cosmetología
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Cosmetología premium que transforma tu belleza natural en
              resultados extraordinarios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 uppercase text-sm tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LoadingLink
                  href="/categorias/faciales"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tratamientos Faciales
                </LoadingLink>
              </li>
              <li>
                <LoadingLink
                  href="/categorias/capilares"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tratamientos Capilares
                </LoadingLink>
              </li>
              <li>
                <LoadingLink
                  href="/categorias/corporales"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tratamientos Corporales
                </LoadingLink>
              </li>
              <li>
                <LoadingLink
                  href="/servicios"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Todos los Servicios
                </LoadingLink>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          {/* <div>
            <h4 className="font-medium mb-4 uppercase text-sm tracking-wider">Ayuda</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Agendar cita
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de cancelación
                </a>
              </li>
            </ul>
          </div> */}

          {/* About */}
          <div>
            <h4 className="font-medium mb-4 uppercase text-sm tracking-wider">
              Ubicación
            </h4>
            <div className="text-sm text-primary-foreground/80 leading-relaxed">
              <p className="font-medium text-primary-foreground mb-2">
                Dirección:
              </p>
              <a
                href="https://maps.google.com/?q=Mall+portal+de,+Cra.+54A+%2375+Sur+13,+Portal+de+Ditaires,+La+Estrella,+Itagüi,+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Mall Portal de Ditaires
                <br />
                Cra. 54A #75 Sur 13
                <br />
                La Estrella, Itagüí
                <br />
                Antioquia, Colombia
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Juliskin Cosmetología. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
