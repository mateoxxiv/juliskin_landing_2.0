# Cosmetology Landing Page - JuliSkin

Landing page premium para servicios de cosmetología con diseño elegante y moderno. Inspirada en el minimalismo de Brunsohn Clean y la sofisticación de La Prairie.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/mquicenotoro-7375s-projects/v0-cosmetology-landing-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/iqpDpe7jbWW)

## Características

- Landing page tipo ecommerce para mostrar servicios cosmetológicos
- Páginas de detalle para cada servicio
- Diseño responsive y optimizado para móviles
- SEO optimizado siguiendo mejores prácticas
- Paleta de colores premium beige/crema con acentos dorados
- Tipografía elegante serif/sans-serif

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Tipografías**: Cormorant Garamond (serif), Inter (sans-serif)

## Comenzar

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/juliskin_landing_2.0.git
cd juliskin_landing_2.0
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura de Directorios

```
juliskin_landing_2.0/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal con metadatos SEO
│   ├── page.tsx                 # Página de inicio
│   ├── globals.css              # Estilos globales y tokens de diseño
│   └── servicios/               # Rutas de servicios
│       └── [id]/
│           └── page.tsx         # Página dinámica de detalle de servicio
│
├── components/                   # Componentes React
│   ├── ui/                      # Componentes base de shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── header.tsx               # Header con navegación
│   ├── hero.tsx                 # Sección hero principal
│   ├── featured-services.tsx    # Grid de servicios destacados
│   ├── service-card.tsx         # Tarjeta individual de servicio
│   ├── categories.tsx           # Categorías de tratamientos
│   ├── testimonials.tsx         # Reseñas de clientes
│   ├── newsletter.tsx           # Formulario de suscripción
│   └── footer.tsx               # Footer con enlaces y redes sociales
│
├── lib/                         # Utilidades y datos
│   ├── utils.ts                 # Función cn() para clases condicionales
│   └── services-data.ts         # Datos de servicios (dummy data)
│
├── public/                      # Archivos estáticos
│   └── *.jpg                    # Imágenes de servicios y tratamientos
│
├── hooks/                       # React hooks personalizados
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
└── README.md                    # Este archivo
```

## Convenciones del Proyecto

### Nomenclatura de Archivos

- **Componentes React**: `kebab-case.tsx` (ej: `service-card.tsx`)
- **Páginas**: `page.tsx` siguiendo convención de App Router
- **Utilidades**: `kebab-case.ts` (ej: `services-data.ts`)
- **Imágenes**: `kebab-case-descriptivo.jpg`

### Convenciones de Código

#### Componentes

```typescript
// Usar 'use client' solo cuando sea necesario
'use client'

// Imports organizados: externos, internos, tipos
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Service } from '@/lib/types'

// Props con TypeScript
interface ServiceCardProps {
  service: Service
  className?: string
}

// Componentes como funciones con arrow functions
export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    // JSX aquí
  )
}
```

#### Estilos con Tailwind

- Usar tokens de diseño cuando sea posible: `bg-primary`, `text-foreground`
- Preferir clases de espaciado de Tailwind sobre valores arbitrarios
- Usar responsive prefixes: `md:`, `lg:`
- Agrupar clases relacionadas: `flex items-center justify-between`

```tsx
// Bueno
<div className="bg-primary text-primary-foreground p-6 md:p-8">

// Evitar
<div className="bg-[#f5f0e8] text-[#2c2416] p-[24px] md:p-[32px]">
```

#### Gestión de Estado

- Usar React Server Components por defecto
- `'use client'` solo cuando se necesite interactividad
- SWR para data fetching en cliente (si fuera necesario)
- useState para estado local del componente

#### Rutas y Navegación

- Usar `Link` de Next.js para navegación interna
- Rutas dinámicas: `[id]` para parámetros
- Metadata SEO en cada página con `generateMetadata()`

### Tokens de Diseño

Definidos en `app/globals.css`:

```css
--primary: 35 25% 50%        /* Marrón cálido */
--accent: 40 65% 85%          /* Beige claro */
--accent-gold: 45 75% 65%     /* Dorado suave */
--foreground: 30 15% 15%      /* Texto oscuro */
--background: 40 25% 97%      /* Fondo crema */
```

### Datos de Servicios

Los servicios están centralizados en `lib/services-data.ts`:

```typescript
export interface Service {
  id: string
  title: string
  description: string
  price: string
  duration: string
  benefits: string[]
  // ... más campos
}
```

## Personalización

### Cambiar Servicios

Edita `lib/services-data.ts` para modificar, añadir o eliminar servicios.

### Cambiar Colores

Modifica los tokens de diseño en `app/globals.css` en la sección `@theme`.

### Cambiar Tipografías

Edita `app/layout.tsx` para cambiar las fuentes de Google Fonts y actualiza las variables en `globals.css`.

## Deployment

### Vercel (Recomendado)

Este proyecto está configurado para deployment automático en Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente Next.js
3. Los cambios en `main` se despliegan automáticamente

### Otros Servicios

```bash
# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [v0.dev Chat](https://v0.app/chat/iqpDpe7jbWW)

## Licencia

MIT
