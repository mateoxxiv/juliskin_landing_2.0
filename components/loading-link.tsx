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
    if (typeof href === 'string' && href.startsWith('#')) {
      return
    }

    // Si vamos a la misma página exacta, no hacemos nada (el Link manejará el scroll)
    // Esto evita que el spinner se quede pegado porque no hay cambio de ruta
    const targetPath = href.toString()
    const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    if (targetPath === pathname || targetPath === currentPath) {
      return
    }

    e.preventDefault()
    startLoading()

    // Usamos router.push para navegar
    // El LoadingProvider se encargará de detener el loading cuando cambie la ruta (pathname)
    router.push(href.toString())
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
