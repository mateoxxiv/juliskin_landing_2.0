import type React from "react"
import type { Metadata } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LoadingProvider } from "@/components/loading-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://juliskin.com"), // Reemplazar con tu dominio real cuando lo tengas
  title: {
    default: "Juliskin | Cosmetología Premium - Tratamientos Faciales y Corporales",
    template: "%s | Juliskin Cosmetología",
  },
  description:
    "Centro de cosmetología premium en Colombia. Tratamientos faciales con Hydrafacial, peeling químico, microdermoabrasión. Tratamientos capilares y cursos profesionales.",
  keywords:
    "juliskin, cosmetología, tratamientos faciales, hydrafacial, cursos de estetica, limpieza facial, peeling, bogota, colombia",
  openGraph: {
    title: {
      default: "Juliskin | Cosmetología Premium",
      template: "%s | Juliskin",
    },
    description: "Tratamientos especializados y cursos profesionales de estética. Tecnología avanzada y resultados comprobados.",
    type: "website",
    siteName: "Juliskin",
    locale: "es_CO",
  },
  icons: {
    icon: [
      {
        url: "/logo_skin_32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_skin_32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo_skin_32x32.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo_skin_32x32.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${cormorant.variable} font-sans antialiased`}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}
