"use client"

import { createContext, useContext, useState, useCallback } from "react"

interface LoadingContextType {
    isLoading: boolean
    startLoading: () => void
    stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType>({
    isLoading: false,
    startLoading: () => { },
    stopLoading: () => { },
})

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false)

    const startLoading = useCallback(() => {
        setIsLoading(true)
    }, [])

    const stopLoading = useCallback(() => {
        setIsLoading(false)
    }, [])

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
            {isLoading && (
                <div className="page-loader">
                    <div className="flex flex-col items-center gap-4">
                        <div className="loading-spinner w-12 h-12 border-4 border-foreground border-t-transparent rounded-full" />
                        <p className="text-sm text-muted-foreground animate-pulse">Cargando...</p>
                    </div>
                </div>
            )}
        </LoadingContext.Provider>
    )
}

export function useLoading() {
    const context = useContext(LoadingContext)
    if (!context) {
        throw new Error("useLoading must be used within LoadingProvider")
    }
    return context
}
