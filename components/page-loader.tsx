"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageLoader() {
    const [loading, setLoading] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setLoading(false)
    }, [pathname])

    useEffect(() => {
        const handleStart = () => setLoading(true)
        const handleComplete = () => setLoading(false)

        // Listen for route changes
        window.addEventListener("beforeunload", handleStart)

        return () => {
            window.removeEventListener("beforeunload", handleStart)
        }
    }, [])

    if (!loading) return null

    return (
        <div className="page-loader">
            <div className="flex flex-col items-center gap-4">
                <div className="loading-spinner w-12 h-12 border-4 border-foreground border-t-transparent rounded-full" />
                <p className="text-sm text-muted-foreground animate-pulse">Cargando...</p>
            </div>
        </div>
    )
}
