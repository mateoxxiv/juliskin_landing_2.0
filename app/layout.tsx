import type React from "react"
import type { Metadata } from "next"
import { Geist, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Lumière Beauté | Cosmetología Premium y Productos de Lujo",
  description:
    "Descubre la excelencia en cosmetología. Productos innovadores que transforman tu piel con ingredientes científicamente probados. Belleza natural, resultados extraordinarios.",
  keywords:
    "cosmetología, productos de belleza, cuidado de la piel, tratamientos faciales, belleza premium, skincare, cosméticos de lujo",
  openGraph: {
    title: "Lumière Beauté | Cosmetología Premium",
    description: "Belleza natural, resultados extraordinarios",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
