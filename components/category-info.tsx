import { Check } from "lucide-react"

interface CategoryInfoProps {
    title: string
    items: string[]
}

export function CategoryInfo({ title, items }: CategoryInfoProps) {
    return (
        <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-serif font-light text-foreground mb-6">
                {title}
            </h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                <Check className="h-3 w-3 text-accent" />
                            </div>
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
