export function Spinner({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <div className="h-12 w-12 rounded-full border-4 border-muted opacity-30"></div>
            <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-t-foreground animate-spin"></div>
        </div>
    )
}
