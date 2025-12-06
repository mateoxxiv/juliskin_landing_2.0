"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLoading } from "@/components/loading-provider"

interface LoadingLinkProps extends React.ComponentProps<typeof Link> {
    children: React.ReactNode
}

export function LoadingLink({ children, href, ...props }: LoadingLinkProps) {
    const router = useRouter()
    const { startLoading, stopLoading } = useLoading()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Si es un enlace externo o con target, dejar que funcione normalmente
        if (
            props.target === "_blank" ||
            (typeof href === "string" && (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")))
        ) {
            return
        }

        // Si es un hash link (#), dejar que funcione normalmente
        if (typeof href === "string" && href.startsWith("#")) {
            return
        }

        e.preventDefault()
        startLoading()

        // Pequeño delay para que se vea el loader
        setTimeout(() => {
            router.push(href.toString())
            // El stopLoading se llamará cuando la página cargue
            setTimeout(stopLoading, 500)
        }, 100)
    }

    return (
        <Link href={href} onClick={handleClick} {...props}>
            {children}
        </Link>
    )
}
