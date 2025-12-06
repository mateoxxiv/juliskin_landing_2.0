export function ServiceCardSkeleton() {
    return (
        <div className="group block rounded-lg overflow-hidden bg-card border border-border animate-pulse">
            {/* Image skeleton */}
            <div className="aspect-[4/3] skeleton" />

            {/* Content skeleton */}
            <div className="p-6 space-y-4">
                {/* Category */}
                <div className="h-3 w-24 skeleton" />

                {/* Title */}
                <div className="space-y-2">
                    <div className="h-6 w-3/4 skeleton" />
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <div className="h-4 w-full skeleton" />
                    <div className="h-4 w-5/6 skeleton" />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4">
                    <div className="h-5 w-20 skeleton" />
                    <div className="h-6 w-24 skeleton" />
                </div>
            </div>
        </div>
    )
}

export function ServiceGridSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {Array.from({ length: count }).map((_, i) => (
                <ServiceCardSkeleton key={i} />
            ))}
        </div>
    )
}
