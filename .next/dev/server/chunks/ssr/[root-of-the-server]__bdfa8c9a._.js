module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border border-primary-foreground bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/services-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategoryInfo",
    ()=>getCategoryInfo,
    "getFeaturedServices",
    ()=>getFeaturedServices,
    "getServicesByCategory",
    ()=>getServicesByCategory,
    "services",
    ()=>services
]);
const services = [
    // FACIALES
    {
        id: 1,
        name: "Diagnóstico de Piel",
        category: "Diagnóstico",
        categorySlug: "faciales",
        duration: "30 min",
        price: 100000,
        image: "/skin-diagnosis-treatment.jpg",
        shortDescription: "Evaluación integral de tu piel con aparatología especializada",
        description: "Evaluación integral de tu piel, rutina personalizada y recomendaciones de tratamiento. Incluye historial, análisis de tipo de piel y necesidades, rutina de skin care y análisis con aparatología especializada. Se puede realizar de manera online o presencial. Si realizas un procedimiento el mismo día, este costará solo $70.000",
        benefits: [
            "Conoce tu tipo de piel",
            "Rutina personalizada",
            "Recomendaciones profesionales",
            "Análisis especializado"
        ],
        includes: [
            "Historial completo",
            "Análisis de tipo de piel y necesidades",
            "Evaluación de rutina de skin care",
            "Análisis con aparatología especializada",
            "Recomendaciones de tratamiento"
        ],
        ideal: [
            "Primera visita",
            "Cambio de rutina",
            "Problemas de piel",
            "Mantenimiento preventivo"
        ],
        process: [
            "Historial y consulta inicial",
            "Análisis visual de la piel",
            "Evaluación con aparatología",
            "Determinación de tipo de piel",
            "Recomendaciones personalizadas"
        ]
    },
    {
        id: 2,
        name: "Hydrafacial",
        category: "Limpieza Profunda",
        categorySlug: "faciales",
        duration: "60 min",
        price: 190000,
        image: "/hydrafacial-treatment-spa.jpg",
        shortDescription: "Limpieza profunda que revitaliza e hidrata la piel",
        description: "Limpieza profunda que revitaliza e hidrata la piel, dejándola suave y luminosa. Tratamiento completo que combina exfoliación, extracción, hidrodermoabrasión y aplicación de productos especializados con oxígeno.",
        benefits: [
            "Piel revitalizada",
            "Hidratación profunda",
            "Luminosidad instantánea",
            "Piel suave"
        ],
        includes: [
            "Exfoliación",
            "Extracción de impurezas",
            "Hidrodermoabrasión",
            "Aparatología antiinflamatoria",
            "Mascarilla hidroplástica calmante",
            "Aplicación de oxígeno",
            "Productos especializados"
        ],
        ideal: [
            "Todo tipo de piel",
            "Piel deshidratada",
            "Piel opaca",
            "Mantenimiento regular"
        ],
        process: [
            "Limpieza inicial",
            "Exfoliación suave",
            "Hidrodermoabrasión",
            "Extracción de impurezas",
            "Aparatología antiinflamatoria",
            "Mascarilla hidroplástica",
            "Aplicación de oxígeno y productos"
        ],
        isFeatured: true
    },
    {
        id: 3,
        name: "Facial Personalizado",
        category: "Tratamiento Integral",
        categorySlug: "faciales",
        duration: "90 min",
        price: 280000,
        image: "/personalized-facial-treatment.jpg",
        shortDescription: "Tratamiento adaptado a las necesidades específicas de tu piel",
        description: "Tratamiento completamente adaptado a las necesidades de la piel para lograr un rostro fresco, limpio y equilibrado. Incluye la aplicación de los productos, técnicas y equipos que necesites y se puedan realizar en una sesión, como microdermoabrasión, ácidos, aparatología, ampollas nutritivas y mascarillas.",
        benefits: [
            "Tratamiento personalizado",
            "Resultados visibles",
            "Piel equilibrada",
            "Máxima efectividad"
        ],
        includes: [
            "Microdermoabrasión (si necesario)",
            "Aplicación de ácidos",
            "Aparatología especializada",
            "Ampollas nutritivas",
            "Mascarillas personalizadas",
            "Productos según necesidad"
        ],
        ideal: [
            "Necesidades específicas",
            "Piel con múltiples problemas",
            "Resultados rápidos",
            "Tratamiento completo"
        ],
        process: [
            "Diagnóstico de necesidades",
            "Selección de técnicas apropiadas",
            "Aplicación de tratamientos combinados",
            "Uso de aparatología según necesidad",
            "Finalización con productos especializados"
        ],
        isFeatured: true
    },
    {
        id: 4,
        name: "Alta Hidratación",
        category: "Hidratación Intensiva",
        categorySlug: "faciales",
        duration: "75 min",
        price: 220000,
        image: "/high-hydration-facial-treatment.jpg",
        shortDescription: "Tratamiento intensivo que hidrata profundamente la piel",
        description: "Tratamiento intensivo que hidrata profundamente, dejando la piel suave, flexible y luminosa. Combina hidrodermoabrasión, aparatología estimuladora de colágeno y cóctel de vitaminas hidratantes.",
        benefits: [
            "Hidratación profunda",
            "Piel flexible",
            "Luminosidad",
            "Estimula colágeno"
        ],
        includes: [
            "Hidrodermoabrasión",
            "Aparatología estimuladora de colágeno (ultrasonido)",
            "Cóctel de vitaminas hidratantes",
            "Mascarilla hidroplástica",
            "Masaje facial"
        ],
        ideal: [
            "Piel seca",
            "Piel deshidratada",
            "Después de sol",
            "Piel madura"
        ],
        process: [
            "Limpieza con hidrodermoabrasión",
            "Aplicación de ultrasonido",
            "Infusión de vitaminas",
            "Masaje facial relajante",
            "Mascarilla hidroplástica"
        ]
    },
    {
        id: 5,
        name: "Microdermoabrasión",
        category: "Exfoliación Avanzada",
        categorySlug: "faciales",
        duration: "60 min",
        price: 220000,
        image: "/microdermabrasion-treatment.jpg",
        shortDescription: "Exfoliación y renovación avanzada que suaviza e ilumina la piel",
        description: "Exfoliación y renovación avanzada que suaviza e ilumina la piel, eliminando impurezas y células muertas. Combina tres tipos de exfoliación: enzimática, mecánica con punta de diamante y química con ácido suave.",
        benefits: [
            "Piel suave",
            "Iluminación",
            "Renovación celular",
            "Elimina impurezas"
        ],
        includes: [
            "Exfoliación enzimática",
            "Exfoliación mecánica con punta de diamante",
            "Exfoliación química con ácido suave",
            "Celluma (fototerapia)",
            "Mascarilla hidroplástica"
        ],
        ideal: [
            "Piel opaca",
            "Textura irregular",
            "Poros dilatados",
            "Renovación celular"
        ],
        process: [
            "Exfoliación enzimática inicial",
            "Microdermoabrasión con punta de diamante",
            "Aplicación de ácido suave",
            "Fototerapia con Celluma",
            "Mascarilla hidroplástica"
        ]
    },
    {
        id: 6,
        name: "Peeling Químico",
        category: "Exfoliación Química",
        categorySlug: "faciales",
        duration: "45 min",
        price: 200000,
        image: "/chemical-peel-treatment.jpg",
        shortDescription: "Exfoliación química para mejorar pigmentaciones y luminosidad",
        description: "Exfoliación química que mejora pigmentaciones, luminosidad y calidad de la piel, ideal para manchas y acné. Incluye aplicación de ácidos específicos según necesidad y fototerapia.",
        benefits: [
            "Mejora pigmentaciones",
            "Mayor luminosidad",
            "Calidad de piel",
            "Reduce manchas"
        ],
        includes: [
            "Aplicación de ácidos específicos según necesidad",
            "Celluma (fototerapia)",
            "Mascarilla hidroplástica",
            "Productos especializados"
        ],
        ideal: [
            "Manchas",
            "Acné",
            "Pigmentación irregular",
            "Melasma"
        ],
        process: [
            "Limpieza preparatoria",
            "Aplicación de ácidos específicos",
            "Tiempo de acción controlado",
            "Neutralización",
            "Fototerapia Celluma",
            "Mascarilla hidroplástica"
        ],
        isFeatured: true
    },
    {
        id: 7,
        name: "Microagujas",
        category: "Estimulación de Colágeno",
        categorySlug: "faciales",
        duration: "60 min",
        price: 240000,
        image: "/microneedling-treatment.jpg",
        shortDescription: "Estimula la producción de colágeno y mejora textura de la piel",
        description: "Microagujamiento que estimula la producción de colágeno, mejora textura, poros y luminosidad, ayudando a regenerar y revitalizar la piel. Incluye aplicación de cóctel de vitaminas según necesidad.",
        benefits: [
            "Estimula colágeno",
            "Mejora textura",
            "Reduce poros",
            "Regenera piel"
        ],
        includes: [
            "Aplicación de cóctel de vitaminas según necesidad",
            "Microperforaciones controladas",
            "Celluma (fototerapia)"
        ],
        ideal: [
            "Cicatrices de acné",
            "Poros dilatados",
            "Líneas finas",
            "Textura irregular"
        ],
        process: [
            "Limpieza y preparación",
            "Aplicación de cóctel vitamínico",
            "Microagujamiento controlado",
            "Fototerapia Celluma",
            "Productos calmantes"
        ]
    },
    {
        id: 8,
        name: "Plasma PRP",
        category: "Bioestimulación",
        categorySlug: "faciales",
        duration: "75 min",
        price: 260000,
        image: "/prp-plasma-treatment.jpg",
        shortDescription: "Tratamiento autólogo que estimula colágeno y regenera la piel",
        description: "Tratamiento autólogo, biocompatible, que estimula la producción de colágeno, mejorando hidratación y luminosidad, ayudando a regenerar y revitalizar la piel. Utiliza tu propia sangre procesada.",
        benefits: [
            "Biocompatible",
            "Estimula colágeno",
            "Regenera piel",
            "Resultados naturales"
        ],
        includes: [
            "Extracción y procesamiento de tu propia sangre",
            "Aplicación en área a trabajar",
            "Celluma (fototerapia)"
        ],
        ideal: [
            "Rejuvenecimiento",
            "Cicatrices",
            "Pérdida de volumen",
            "Piel envejecida"
        ],
        process: [
            "Extracción de sangre",
            "Procesamiento en centrífuga",
            "Preparación del plasma",
            "Aplicación en zona a tratar",
            "Fototerapia Celluma"
        ]
    },
    // TRATAMIENTOS COMBINADOS FACIALES
    {
        id: 9,
        name: "Hydrafacial + Peeling Químico",
        category: "Tratamiento Combinado",
        categorySlug: "faciales",
        duration: "90 min",
        price: 260000,
        image: "/hydrafacial-peeling-combo.jpg",
        shortDescription: "Limpieza profunda combinada con exfoliación química",
        description: "Tratamiento combinado que une la limpieza profunda del Hydrafacial con la exfoliación química del peeling para resultados potenciados. Ideal para piel con múltiples necesidades.",
        benefits: [
            "Limpieza profunda",
            "Exfoliación química",
            "Resultados potenciados",
            "Piel renovada"
        ],
        includes: [
            "Todos los beneficios del Hydrafacial",
            "Aplicación de peeling químico",
            "Fototerapia",
            "Mascarilla especializada"
        ],
        ideal: [
            "Piel con múltiples problemas",
            "Resultados rápidos",
            "Eventos especiales",
            "Mantenimiento intensivo"
        ],
        process: [
            "Hydrafacial completo",
            "Aplicación de peeling químico",
            "Fototerapia",
            "Finalización con productos especializados"
        ]
    },
    {
        id: 10,
        name: "Hydrafacial + Alta Hidratación",
        category: "Tratamiento Combinado",
        categorySlug: "faciales",
        duration: "90 min",
        price: 250000,
        image: "/hydrafacial-hydration-combo.jpg",
        shortDescription: "Limpieza profunda con hidratación intensiva",
        description: "Combinación perfecta de limpieza profunda e hidratación intensiva para una piel radiante y profundamente nutrida.",
        benefits: [
            "Limpieza profunda",
            "Hidratación máxima",
            "Piel radiante",
            "Nutrición completa"
        ],
        includes: [
            "Hydrafacial completo",
            "Cóctel de vitaminas hidratantes",
            "Ultrasonido",
            "Mascarilla hidroplástica"
        ],
        ideal: [
            "Piel muy deshidratada",
            "Después de tratamientos agresivos",
            "Piel sensible",
            "Hidratación extrema"
        ],
        process: [
            "Hydrafacial completo",
            "Aplicación de ultrasonido",
            "Infusión de vitaminas",
            "Mascarilla hidroplástica"
        ]
    },
    {
        id: 11,
        name: "Hydrafacial + Microagujas",
        category: "Tratamiento Combinado",
        categorySlug: "faciales",
        duration: "120 min",
        price: 320000,
        image: "/hydrafacial-microneedling-combo.jpg",
        shortDescription: "Limpieza profunda con estimulación de colágeno",
        description: "Tratamiento avanzado que combina la limpieza del Hydrafacial con la estimulación de colágeno de las microagujas para resultados anti-edad superiores.",
        benefits: [
            "Limpieza profunda",
            "Estimula colágeno",
            "Anti-edad",
            "Mejora textura"
        ],
        includes: [
            "Hydrafacial completo",
            "Microagujamiento",
            "Cóctel vitamínico",
            "Fototerapia"
        ],
        ideal: [
            "Anti-edad",
            "Cicatrices",
            "Textura irregular",
            "Resultados intensivos"
        ],
        process: [
            "Hydrafacial completo",
            "Aplicación de vitaminas",
            "Microagujamiento",
            "Fototerapia Celluma"
        ]
    },
    {
        id: 12,
        name: "Alta Hidratación + Peeling Químico",
        category: "Tratamiento Combinado",
        categorySlug: "faciales",
        duration: "90 min",
        price: 260000,
        image: "/hydration-peeling-combo.jpg",
        shortDescription: "Exfoliación química con hidratación profunda",
        description: "Combinación de exfoliación química para renovar la piel e hidratación intensiva para nutrirla profundamente.",
        benefits: [
            "Renovación celular",
            "Hidratación profunda",
            "Piel luminosa",
            "Textura mejorada"
        ],
        includes: [
            "Peeling químico",
            "Cóctel de vitaminas",
            "Ultrasonido",
            "Mascarilla hidroplástica"
        ],
        ideal: [
            "Piel opaca",
            "Manchas con deshidratación",
            "Renovación completa",
            "Piel madura"
        ],
        process: [
            "Peeling químico",
            "Neutralización",
            "Hidratación intensiva",
            "Mascarilla hidroplástica"
        ]
    },
    {
        id: 13,
        name: "Alta Hidratación + Microdermoabrasión",
        category: "Tratamiento Combinado",
        categorySlug: "faciales",
        duration: "90 min",
        price: 250000,
        image: "/hydration-microderm-combo.jpg",
        shortDescription: "Exfoliación avanzada con hidratación intensiva",
        description: "Tratamiento que combina la exfoliación profunda de la microdermoabrasión con la hidratación intensiva para una piel suave y nutrida.",
        benefits: [
            "Exfoliación profunda",
            "Hidratación intensa",
            "Piel suave",
            "Luminosidad"
        ],
        includes: [
            "Microdermoabrasión completa",
            "Cóctel vitamínico",
            "Ultrasonido",
            "Mascarilla hidroplástica"
        ],
        ideal: [
            "Piel áspera",
            "Textura irregular",
            "Piel deshidratada",
            "Renovación con hidratación"
        ],
        process: [
            "Microdermoabrasión",
            "Aplicación de vitaminas",
            "Ultrasonido",
            "Mascarilla hidroplástica"
        ]
    },
    // CAPILARES
    {
        id: 14,
        name: "Crecimiento Capilar",
        category: "Estimulación Capilar",
        categorySlug: "capilares",
        duration: "60 min",
        price: 250000,
        image: "/hair-growth-treatment.jpg",
        shortDescription: "Estimula el crecimiento del cabello y previene la caída",
        description: "Aplicación de diferentes activos que estimulan el crecimiento del pelo, previniendo y mejorando diferentes tipos de caída. Incluye historial, recomendación de productos y seguimiento.",
        benefits: [
            "Estimula crecimiento",
            "Previene caída",
            "Fortalece raíces",
            "Cabello más denso"
        ],
        includes: [
            "Historial completo",
            "Aplicación de activos estimulantes",
            "Recomendación de productos en casa",
            "Seguimiento personalizado"
        ],
        ideal: [
            "Caída de cabello",
            "Cabello fino",
            "Alopecia leve",
            "Prevención"
        ],
        process: [
            "Historial y diagnóstico",
            "Preparación del cuero cabelludo",
            "Aplicación de activos",
            "Masaje estimulante",
            "Recomendaciones de cuidado"
        ],
        isFeatured: true
    },
    // CORPORALES
    {
        id: 15,
        name: "Peeling Corporal",
        category: "Exfoliación Corporal",
        categorySlug: "corporales",
        duration: "60 min",
        price: 250000,
        image: "/body-peeling-treatment.jpg",
        shortDescription: "Mejora acné corporal, queratosis pilar y manchas",
        description: "Mejoría en acné corporal, secuelas de acné, queratosis pilar y manchas corporales. Incluye microdermoabrasión, aplicación de ácidos exfoliantes y mascarilla aclarante.",
        benefits: [
            "Mejora acné corporal",
            "Reduce manchas",
            "Suaviza queratosis",
            "Piel uniforme"
        ],
        includes: [
            "Microdermoabrasión",
            "Aplicación de ácidos exfoliantes",
            "Mascarilla aclarante",
            "Hidratante y reparador",
            "Recomendación de productos en casa"
        ],
        ideal: [
            "Acné corporal",
            "Queratosis pilar",
            "Manchas corporales",
            "Piel irregular"
        ],
        process: [
            "Limpieza de la zona",
            "Microdermoabrasión",
            "Aplicación de ácidos",
            "Mascarilla aclarante",
            "Hidratación"
        ]
    },
    {
        id: 16,
        name: "Extracción + Peeling Corporal",
        category: "Tratamiento Acné Corporal",
        categorySlug: "corporales",
        duration: "90 min",
        price: 320000,
        image: "/body-extraction-peeling.jpg",
        shortDescription: "Tratamiento completo para acné corporal y sus secuelas",
        description: "Mejoría en acné corporal y sus secuelas. Incluye exfoliación, preparación enzimática, microdermoabrasión si es necesaria, extracción, aplicación de ácidos y mascarilla aclarante.",
        benefits: [
            "Elimina acné",
            "Reduce secuelas",
            "Piel limpia",
            "Previene brotes"
        ],
        includes: [
            "Exfoliación",
            "Preparación enzimática",
            "Microdermoabrasión (si necesario)",
            "Extracción",
            "Aplicación de ácidos exfoliantes",
            "Mascarilla aclarante",
            "Hidratante y reparador",
            "Recomendación de productos"
        ],
        ideal: [
            "Acné corporal activo",
            "Secuelas de acné",
            "Piel con impurezas",
            "Tratamiento intensivo"
        ],
        process: [
            "Exfoliación inicial",
            "Preparación enzimática",
            "Microdermoabrasión si necesario",
            "Extracción de comedones",
            "Aplicación de ácidos",
            "Mascarilla aclarante",
            "Hidratación final"
        ]
    },
    {
        id: 17,
        name: "Aclaramiento de Axilas",
        category: "Aclaramiento Corporal",
        categorySlug: "corporales",
        duration: "45 min",
        price: 200000,
        image: "/underarm-lightening-treatment.jpg",
        shortDescription: "Mejora la pigmentación axilar",
        description: "Mejoría en pigmentación axilar. Incluye examen físico e historial para indagar las posibles causas de tu pigmentación, microdermoabrasión, aplicación de ácidos exfoliantes y mascarilla aclarante.",
        benefits: [
            "Aclara pigmentación",
            "Piel uniforme",
            "Suaviza textura",
            "Previene oscurecimiento"
        ],
        includes: [
            "Examen físico e historial",
            "Microdermoabrasión",
            "Aplicación de ácidos exfoliantes",
            "Mascarilla aclarante",
            "Hidratante y reparador",
            "Recomendación de productos y hábitos"
        ],
        ideal: [
            "Pigmentación axilar",
            "Manchas oscuras",
            "Después de depilación",
            "Prevención"
        ],
        process: [
            "Examen e historial",
            "Microdermoabrasión",
            "Aplicación de ácidos",
            "Mascarilla aclarante",
            "Recomendaciones de cuidado"
        ]
    },
    {
        id: 18,
        name: "Aclaramiento de Bikini",
        category: "Aclaramiento Íntimo",
        categorySlug: "corporales",
        duration: "60 min",
        price: 350000,
        image: "/bikini-lightening-treatment.jpg",
        shortDescription: "Mejora la pigmentación de la zona íntima",
        description: "Mejoría en pigmentación de la zona íntima. Incluye examen físico e historial para indagar las posibles causas de tu pigmentación, microdermoabrasión, aplicación de ácidos exfoliantes y mascarilla aclarante.",
        benefits: [
            "Aclara zona íntima",
            "Piel uniforme",
            "Confianza",
            "Previene oscurecimiento"
        ],
        includes: [
            "Examen físico e historial",
            "Microdermoabrasión",
            "Aplicación de ácidos exfoliantes",
            "Mascarilla aclarante",
            "Hidratante y reparador",
            "Recomendación de productos y hábitos"
        ],
        ideal: [
            "Pigmentación íntima",
            "Manchas oscuras",
            "Después de depilación",
            "Prevención"
        ],
        process: [
            "Examen e historial",
            "Microdermoabrasión delicada",
            "Aplicación de ácidos específicos",
            "Mascarilla aclarante",
            "Recomendaciones de cuidado"
        ],
        isFeatured: true
    }
];
function getServicesByCategory(categorySlug) {
    return services.filter((service)=>service.categorySlug === categorySlug);
}
function getFeaturedServices() {
    return services.filter((service)=>service.isFeatured === true);
}
function getCategoryInfo(slug) {
    const categories = {
        faciales: {
            name: "Tratamientos Faciales",
            description: "Revitaliza tu piel con tratamientos avanzados de limpieza, hidratación profunda y rejuvenecimiento.",
            longDescription: "Nuestros tratamientos faciales están diseñados para abordar las necesidades específicas de tu piel. Desde limpiezas profundas hasta protocolos anti-edad avanzados, cada servicio combina técnicas manuales expertas con tecnología de vanguardia y productos premium.",
            image: "/facial-treatment-category-spa-elegant.jpg"
        },
        capilares: {
            name: "Tratamientos Capilares",
            description: "Soluciones innovadoras y tecnología de punta para restaurar la salud y vitalidad de tu cabello.",
            longDescription: "Transforma tu cabello con nuestros tratamientos especializados. Desde alisados con keratina hasta reparaciones intensivas con botox capilar, ofrecemos soluciones personalizadas para cada tipo de cabello y necesidad.",
            image: "/advanced-rejuvenation-treatment-category.jpg"
        },
        corporales: {
            name: "Tratamientos Corporales",
            description: "Experiencias de bienestar integral que esculpen, tonifican y relajan tu cuerpo.",
            longDescription: "Descubre el equilibrio perfecto entre relajación y resultados. Nuestros tratamientos corporales combinan masajes terapéuticos, tecnología avanzada y productos naturales para brindarte una experiencia de bienestar completa.",
            image: "/body-treatment-category-spa-luxury.jpg"
        }
    };
    return categories[slug] || null;
}
}),
"[project]/app/servicios/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceDetailPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { id } = await params;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].find((s)=>s.id === Number.parseInt(id));
    if (!service) {
        return {
            title: "Servicio no encontrado"
        };
    }
    return {
        title: `${service.name} | Cosmetología Premium`,
        description: service.shortDescription || service.description,
        openGraph: {
            title: service.name,
            description: service.shortDescription || service.description,
            images: [
                service.image
            ]
        }
    };
}
async function ServiceDetailPage({ params }) {
    const { id } = await params;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].find((s)=>s.id === Number.parseInt(id));
    if (!service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-[60vh] md:h-[70vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: service.image || "/placeholder.svg",
                        alt: service.name,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/servicios/[id]/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/app/servicios/[id]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#servicios",
                                    className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        "Volver a servicios"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3",
                                    children: service.category
                                }, void 0, false, {
                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4 text-balance",
                                    children: service.name
                                }, void 0, false, {
                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6 text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "h-5 w-5 text-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: service.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-serif text-foreground",
                                            children: [
                                                "Desde $",
                                                service.price.toLocaleString("es-CO")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/servicios/[id]/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/servicios/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/servicios/[id]/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-3 gap-12 lg:gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl md:text-3xl font-serif font-light text-foreground mb-6",
                                                children: "Sobre este tratamiento"
                                            }, void 0, false, {
                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground leading-relaxed text-lg",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/servicios/[id]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl md:text-2xl font-serif font-light text-foreground mb-6",
                                                children: "Beneficios"
                                            }, void 0, false, {
                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid sm:grid-cols-2 gap-4",
                                                children: service.benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3 p-4 rounded-lg bg-secondary/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-foreground",
                                                                children: benefit
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/servicios/[id]/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/servicios/[id]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl md:text-2xl font-serif font-light text-foreground mb-6",
                                                children: "Proceso del tratamiento"
                                            }, void 0, false, {
                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: service.process.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium text-accent",
                                                                    children: index + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground leading-relaxed pt-1",
                                                                children: step
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/servicios/[id]/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/servicios/[id]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-8 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-border rounded-lg p-6 bg-secondary/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium text-foreground mb-4",
                                                    children: "Este servicio incluye"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3",
                                                    children: service.includes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-border rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium text-foreground mb-4",
                                                    children: "Ideal para"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: service.ideal.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "text-sm text-muted-foreground flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-accent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 25
                                                                }, this),
                                                                item
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-primary text-primary-foreground rounded-lg p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mb-2 opacity-90",
                                                    children: "Precio desde"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-serif mb-4",
                                                    children: [
                                                        "$",
                                                        service.price.toLocaleString("es-CO")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    className: "w-full bg-background text-foreground hover:bg-background/90",
                                                    children: "Agendar Cita"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/servicios/[id]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/servicios/[id]/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/servicios/[id]/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-16 bg-secondary/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-serif font-light text-foreground mb-8 text-center",
                            children: "También te puede interesar"
                        }, void 0, false, {
                            fileName: "[project]/app/servicios/[id]/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].filter((s)=>s.id !== service.id).slice(0, 3).map((relatedService)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/servicios/${relatedService.id}`,
                                    className: "group block rounded-lg overflow-hidden bg-background border border-border hover:border-accent transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: relatedService.image || "/placeholder.svg",
                                                alt: relatedService.name,
                                                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/servicios/[id]/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-wider text-muted-foreground mb-2",
                                                    children: relatedService.category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-2",
                                                    children: relatedService.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground line-clamp-2 mb-3",
                                                    children: relatedService.shortDescription || relatedService.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-serif text-foreground",
                                                    children: [
                                                        "Desde $",
                                                        relatedService.price.toLocaleString("es-CO")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/servicios/[id]/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, relatedService.id, true, {
                                    fileName: "[project]/app/servicios/[id]/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/servicios/[id]/page.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/servicios/[id]/page.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/servicios/[id]/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/servicios/[id]/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/servicios/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/servicios/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdfa8c9a._.js.map