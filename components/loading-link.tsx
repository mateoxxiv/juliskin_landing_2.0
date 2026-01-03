'use client'

import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useLoading } from '@/components/loading-provider'

interface LoadingLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

export function LoadingLink({ children, href, ...props }: LoadingLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { startLoading } = useLoading()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si es un enlace externo o con target, dejar que funcione normalmente
    if (
      props.target === '_blank' ||
      (typeof href === 'string' &&
        (href.startsWith('http') ||
          href.startsWith('mailto') ||
          href.startsWith('tel')))
    ) {
      return
    }

    // Si es un hash link (#), dejar que funcione normalmente
    if (typeof href === 'string' && href.includes('#')) {
      const [path, hash] = href.split('#')
      // Si el path es vacío (enlace tipo '#seccion') o es igual al pathname actual (enlace tipo '/#seccion')
      if (path === '' || path === '/' || path === pathname) {
        return
      }
    }

    // Si vamos a la misma página exacta, no hacemos nada (el Link manejará el scroll)
    const targetPath = href.toString()
    if (targetPath === pathname) {
      return
    }

    e.preventDefault()
    startLoading()

    // Usamos setTimeout para dejar que la interacción (clic) se procese
    // y luego lanzamos la navegación, mejorando el INP
    setTimeout(() => {
      router.push(href.toString())
    }, 0)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
