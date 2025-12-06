"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
    fallbackUrl?: string
    className?: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

export function BackButton({
    fallbackUrl = "/servicios",
    className = "",
    variant = "ghost",
    size = "default"
}: BackButtonProps) {
    const router = useRouter()
    const [canGoBack, setCanGoBack] = useState(false)

    useEffect(() => {
        // Verificar si hay historial disponible
        // Si window.history.length > 1, significa que hay páginas anteriores
        setCanGoBack(window.history.length > 1)
    }, [])

    const handleBack = () => {
        // Si hay historial y no es un reload, volver atrás
        if (canGoBack && document.referrer && !document.referrer.includes(window.location.pathname)) {
            router.back()
        } else {
            // Si no hay historial o es un reload, ir a la página de fallback
            router.push(fallbackUrl)
        }
    }

    return (
        <Button
            onClick={handleBack}
            variant={variant}
            size={size}
            className={`gap-2 ${className}`}
        >
            <ArrowLeft className="h-4 w-4" />
            Volver
        </Button>
    )
}
