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
  title: "Juliskin | Cosmetología Premium - Tratamientos Faciales, Capilares y Corporales",
  description:
    "Centro de cosmetología premium en Colombia. Tratamientos faciales con Hydrafacial, peeling químico, microdermoabrasión. Tratamientos capilares para caída del cabello. Aclaramiento corporal de axilas y bikini. Resultados visibles desde la primera sesión.",
  keywords:
    "juliskin, cosmetología, tratamientos faciales, hydrafacial, limpieza facial profunda, peeling químico, microdermoabrasión, tratamiento caída del cabello, crecimiento capilar, aclaramiento axilas, aclaramiento bikini, microagujas, plasma prp, alta hidratación, facial personalizado, tratamientos corporales, skincare Colombia, belleza premium, cuidado de la piel",
  openGraph: {
    title: "Juliskin | Cosmetología Premium - Hydrafacial, Tratamientos Faciales y Capilares",
    description: "Tratamientos especializados: Hydrafacial, limpieza facial, peeling químico, crecimiento capilar, aclaramiento corporal. Tecnología avanzada y resultados comprobados.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
