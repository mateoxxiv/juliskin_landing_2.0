export interface Service {
  id: number
  name: string
  category: string
  categorySlug: string
  duration: string
  price: number
  image: string
  description: string
  shortDescription: string
  benefits: string[]
  includes: string[]
  ideal: string[]
  process: string[]
  isFeatured?: boolean
}

export const services: Service[] = [
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
    description:
      "Evaluación integral de tu piel, rutina personalizada y recomendaciones de tratamiento. Incluye historial, análisis de tipo de piel y necesidades, rutina de skin care y análisis con aparatología especializada. Se puede realizar de manera online o presencial. Si realizas un procedimiento el mismo día, este costará solo $70.000",
    benefits: ["Conoce tu tipo de piel", "Rutina personalizada", "Recomendaciones profesionales", "Análisis especializado"],
    includes: [
      "Historial completo",
      "Análisis de tipo de piel y necesidades",
      "Evaluación de rutina de skin care",
      "Análisis con aparatología especializada",
      "Recomendaciones de tratamiento",
    ],
    ideal: ["Primera visita", "Cambio de rutina", "Problemas de piel", "Mantenimiento preventivo"],
    process: [
      "Historial y consulta inicial",
      "Análisis visual de la piel",
      "Evaluación con aparatología",
      "Determinación de tipo de piel",
      "Recomendaciones personalizadas",
    ],
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
    description:
      "Limpieza profunda que revitaliza e hidrata la piel, dejándola suave y luminosa. Tratamiento completo que combina exfoliación, extracción, hidrodermoabrasión y aplicación de productos especializados con oxígeno.",
    benefits: ["Piel revitalizada", "Hidratación profunda", "Luminosidad instantánea", "Piel suave"],
    includes: [
      "Exfoliación",
      "Extracción de impurezas",
      "Hidrodermoabrasión",
      "Aparatología antiinflamatoria",
      "Mascarilla hidroplástica calmante",
      "Aplicación de oxígeno",
      "Productos especializados",
    ],
    ideal: ["Todo tipo de piel", "Piel deshidratada", "Piel opaca", "Mantenimiento regular"],
    process: [
      "Limpieza inicial",
      "Exfoliación suave",
      "Hidrodermoabrasión",
      "Extracción de impurezas",
      "Aparatología antiinflamatoria",
      "Mascarilla hidroplástica",
      "Aplicación de oxígeno y productos",
    ],
    isFeatured: true,
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
    description:
      "Tratamiento completamente adaptado a las necesidades de la piel para lograr un rostro fresco, limpio y equilibrado. Incluye la aplicación de los productos, técnicas y equipos que necesites y se puedan realizar en una sesión, como microdermoabrasión, ácidos, aparatología, ampollas nutritivas y mascarillas.",
    benefits: ["Tratamiento personalizado", "Resultados visibles", "Piel equilibrada", "Máxima efectividad"],
    includes: [
      "Microdermoabrasión (si necesario)",
      "Aplicación de ácidos",
      "Aparatología especializada",
      "Ampollas nutritivas",
      "Mascarillas personalizadas",
      "Productos según necesidad",
    ],
    ideal: ["Necesidades específicas", "Piel con múltiples problemas", "Resultados rápidos", "Tratamiento completo"],
    process: [
      "Diagnóstico de necesidades",
      "Selección de técnicas apropiadas",
      "Aplicación de tratamientos combinados",
      "Uso de aparatología según necesidad",
      "Finalización con productos especializados",
    ],
    isFeatured: true,
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
    description:
      "Tratamiento intensivo que hidrata profundamente, dejando la piel suave, flexible y luminosa. Combina hidrodermoabrasión, aparatología estimuladora de colágeno y cóctel de vitaminas hidratantes.",
    benefits: ["Hidratación profunda", "Piel flexible", "Luminosidad", "Estimula colágeno"],
    includes: [
      "Hidrodermoabrasión",
      "Aparatología estimuladora de colágeno (ultrasonido)",
      "Cóctel de vitaminas hidratantes",
      "Mascarilla hidroplástica",
      "Masaje facial",
    ],
    ideal: ["Piel seca", "Piel deshidratada", "Después de sol", "Piel madura"],
    process: [
      "Limpieza con hidrodermoabrasión",
      "Aplicación de ultrasonido",
      "Infusión de vitaminas",
      "Masaje facial relajante",
      "Mascarilla hidroplástica",
    ],
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
    description:
      "Exfoliación y renovación avanzada que suaviza e ilumina la piel, eliminando impurezas y células muertas. Combina tres tipos de exfoliación: enzimática, mecánica con punta de diamante y química con ácido suave.",
    benefits: ["Piel suave", "Iluminación", "Renovación celular", "Elimina impurezas"],
    includes: [
      "Exfoliación enzimática",
      "Exfoliación mecánica con punta de diamante",
      "Exfoliación química con ácido suave",
      "Celluma (fototerapia)",
      "Mascarilla hidroplástica",
    ],
    ideal: ["Piel opaca", "Textura irregular", "Poros dilatados", "Renovación celular"],
    process: [
      "Exfoliación enzimática inicial",
      "Microdermoabrasión con punta de diamante",
      "Aplicación de ácido suave",
      "Fototerapia con Celluma",
      "Mascarilla hidroplástica",
    ],
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
    description:
      "Exfoliación química que mejora pigmentaciones, luminosidad y calidad de la piel, ideal para manchas y acné. Incluye aplicación de ácidos específicos según necesidad y fototerapia.",
    benefits: ["Mejora pigmentaciones", "Mayor luminosidad", "Calidad de piel", "Reduce manchas"],
    includes: [
      "Aplicación de ácidos específicos según necesidad",
      "Celluma (fototerapia)",
      "Mascarilla hidroplástica",
      "Productos especializados",
    ],
    ideal: ["Manchas", "Acné", "Pigmentación irregular", "Melasma"],
    process: [
      "Limpieza preparatoria",
      "Aplicación de ácidos específicos",
      "Tiempo de acción controlado",
      "Neutralización",
      "Fototerapia Celluma",
      "Mascarilla hidroplástica",
    ],
    isFeatured: true,
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
    description:
      "Microagujamiento que estimula la producción de colágeno, mejora textura, poros y luminosidad, ayudando a regenerar y revitalizar la piel. Incluye aplicación de cóctel de vitaminas según necesidad.",
    benefits: ["Estimula colágeno", "Mejora textura", "Reduce poros", "Regenera piel"],
    includes: [
      "Aplicación de cóctel de vitaminas según necesidad",
      "Microperforaciones controladas",
      "Celluma (fototerapia)",
    ],
    ideal: ["Cicatrices de acné", "Poros dilatados", "Líneas finas", "Textura irregular"],
    process: [
      "Limpieza y preparación",
      "Aplicación de cóctel vitamínico",
      "Microagujamiento controlado",
      "Fototerapia Celluma",
      "Productos calmantes",
    ],
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
    description:
      "Tratamiento autólogo, biocompatible, que estimula la producción de colágeno, mejorando hidratación y luminosidad, ayudando a regenerar y revitalizar la piel. Utiliza tu propia sangre procesada.",
    benefits: ["Biocompatible", "Estimula colágeno", "Regenera piel", "Resultados naturales"],
    includes: [
      "Extracción y procesamiento de tu propia sangre",
      "Aplicación en área a trabajar",
      "Celluma (fototerapia)",
    ],
    ideal: ["Rejuvenecimiento", "Cicatrices", "Pérdida de volumen", "Piel envejecida"],
    process: [
      "Extracción de sangre",
      "Procesamiento en centrífuga",
      "Preparación del plasma",
      "Aplicación en zona a tratar",
      "Fototerapia Celluma",
    ],
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
    description:
      "Tratamiento combinado que une la limpieza profunda del Hydrafacial con la exfoliación química del peeling para resultados potenciados. Ideal para piel con múltiples necesidades.",
    benefits: ["Limpieza profunda", "Exfoliación química", "Resultados potenciados", "Piel renovada"],
    includes: [
      "Todos los beneficios del Hydrafacial",
      "Aplicación de peeling químico",
      "Fototerapia",
      "Mascarilla especializada",
    ],
    ideal: ["Piel con múltiples problemas", "Resultados rápidos", "Eventos especiales", "Mantenimiento intensivo"],
    process: [
      "Hydrafacial completo",
      "Aplicación de peeling químico",
      "Fototerapia",
      "Finalización con productos especializados",
    ],
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
    description:
      "Combinación perfecta de limpieza profunda e hidratación intensiva para una piel radiante y profundamente nutrida.",
    benefits: ["Limpieza profunda", "Hidratación máxima", "Piel radiante", "Nutrición completa"],
    includes: [
      "Hydrafacial completo",
      "Cóctel de vitaminas hidratantes",
      "Ultrasonido",
      "Mascarilla hidroplástica",
    ],
    ideal: ["Piel muy deshidratada", "Después de tratamientos agresivos", "Piel sensible", "Hidratación extrema"],
    process: [
      "Hydrafacial completo",
      "Aplicación de ultrasonido",
      "Infusión de vitaminas",
      "Mascarilla hidroplástica",
    ],
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
    description:
      "Tratamiento avanzado que combina la limpieza del Hydrafacial con la estimulación de colágeno de las microagujas para resultados anti-edad superiores.",
    benefits: ["Limpieza profunda", "Estimula colágeno", "Anti-edad", "Mejora textura"],
    includes: [
      "Hydrafacial completo",
      "Microagujamiento",
      "Cóctel vitamínico",
      "Fototerapia",
    ],
    ideal: ["Anti-edad", "Cicatrices", "Textura irregular", "Resultados intensivos"],
    process: [
      "Hydrafacial completo",
      "Aplicación de vitaminas",
      "Microagujamiento",
      "Fototerapia Celluma",
    ],
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
    description:
      "Combinación de exfoliación química para renovar la piel e hidratación intensiva para nutrirla profundamente.",
    benefits: ["Renovación celular", "Hidratación profunda", "Piel luminosa", "Textura mejorada"],
    includes: [
      "Peeling químico",
      "Cóctel de vitaminas",
      "Ultrasonido",
      "Mascarilla hidroplástica",
    ],
    ideal: ["Piel opaca", "Manchas con deshidratación", "Renovación completa", "Piel madura"],
    process: [
      "Peeling químico",
      "Neutralización",
      "Hidratación intensiva",
      "Mascarilla hidroplástica",
    ],
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
    description:
      "Tratamiento que combina la exfoliación profunda de la microdermoabrasión con la hidratación intensiva para una piel suave y nutrida.",
    benefits: ["Exfoliación profunda", "Hidratación intensa", "Piel suave", "Luminosidad"],
    includes: [
      "Microdermoabrasión completa",
      "Cóctel vitamínico",
      "Ultrasonido",
      "Mascarilla hidroplástica",
    ],
    ideal: ["Piel áspera", "Textura irregular", "Piel deshidratada", "Renovación con hidratación"],
    process: [
      "Microdermoabrasión",
      "Aplicación de vitaminas",
      "Ultrasonido",
      "Mascarilla hidroplástica",
    ],
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
    description:
      "Aplicación de diferentes activos que estimulan el crecimiento del pelo, previniendo y mejorando diferentes tipos de caída. Incluye historial, recomendación de productos y seguimiento.",
    benefits: ["Estimula crecimiento", "Previene caída", "Fortalece raíces", "Cabello más denso"],
    includes: [
      "Historial completo",
      "Aplicación de activos estimulantes",
      "Recomendación de productos en casa",
      "Seguimiento personalizado",
    ],
    ideal: ["Caída de cabello", "Cabello fino", "Alopecia leve", "Prevención"],
    process: [
      "Historial y diagnóstico",
      "Preparación del cuero cabelludo",
      "Aplicación de activos",
      "Masaje estimulante",
      "Recomendaciones de cuidado",
    ],
    isFeatured: true,
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
    description:
      "Mejoría en acné corporal, secuelas de acné, queratosis pilar y manchas corporales. Incluye microdermoabrasión, aplicación de ácidos exfoliantes y mascarilla aclarante.",
    benefits: ["Mejora acné corporal", "Reduce manchas", "Suaviza queratosis", "Piel uniforme"],
    includes: [
      "Microdermoabrasión",
      "Aplicación de ácidos exfoliantes",
      "Mascarilla aclarante",
      "Hidratante y reparador",
      "Recomendación de productos en casa",
    ],
    ideal: ["Acné corporal", "Queratosis pilar", "Manchas corporales", "Piel irregular"],
    process: [
      "Limpieza de la zona",
      "Microdermoabrasión",
      "Aplicación de ácidos",
      "Mascarilla aclarante",
      "Hidratación",
    ],
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
    description:
      "Mejoría en acné corporal y sus secuelas. Incluye exfoliación, preparación enzimática, microdermoabrasión si es necesaria, extracción, aplicación de ácidos y mascarilla aclarante.",
    benefits: ["Elimina acné", "Reduce secuelas", "Piel limpia", "Previene brotes"],
    includes: [
      "Exfoliación",
      "Preparación enzimática",
      "Microdermoabrasión (si necesario)",
      "Extracción",
      "Aplicación de ácidos exfoliantes",
      "Mascarilla aclarante",
      "Hidratante y reparador",
      "Recomendación de productos",
    ],
    ideal: ["Acné corporal activo", "Secuelas de acné", "Piel con impurezas", "Tratamiento intensivo"],
    process: [
      "Exfoliación inicial",
      "Preparación enzimática",
      "Microdermoabrasión si necesario",
      "Extracción de comedones",
      "Aplicación de ácidos",
      "Mascarilla aclarante",
      "Hidratación final",
    ],
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
    description:
      "Mejoría en pigmentación axilar. Incluye examen físico e historial para indagar las posibles causas de tu pigmentación, microdermoabrasión, aplicación de ácidos exfoliantes y mascarilla aclarante.",
    benefits: ["Aclara pigmentación", "Piel uniforme", "Suaviza textura", "Previene oscurecimiento"],
    includes: [
      "Examen físico e historial",
      "Microdermoabrasión",
      "Aplicación de ácidos exfoliantes",
      "Mascarilla aclarante",
      "Hidratante y reparador",
      "Recomendación de productos y hábitos",
    ],
    ideal: ["Pigmentación axilar", "Manchas oscuras", "Después de depilación", "Prevención"],
    process: [
      "Examen e historial",
      "Microdermoabrasión",
      "Aplicación de ácidos",
      "Mascarilla aclarante",
      "Recomendaciones de cuidado",
    ],
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
    description:
      "Mejoría en pigmentación de la zona íntima. Incluye examen físico e historial para indagar las posibles causas de tu pigmentación, microdermoabrasión, aplicación de ácidos exfoliantes y mascarilla aclarante.",
    benefits: ["Aclara zona íntima", "Piel uniforme", "Confianza", "Previene oscurecimiento"],
    includes: [
      "Examen físico e historial",
      "Microdermoabrasión",
      "Aplicación de ácidos exfoliantes",
      "Mascarilla aclarante",
      "Hidratante y reparador",
      "Recomendación de productos y hábitos",
    ],
    ideal: ["Pigmentación íntima", "Manchas oscuras", "Después de depilación", "Prevención"],
    process: [
      "Examen e historial",
      "Microdermoabrasión delicada",
      "Aplicación de ácidos específicos",
      "Mascarilla aclarante",
      "Recomendaciones de cuidado",
    ],
    isFeatured: true,
  },
]

export function getServicesByCategory(categorySlug: string): Service[] {
  return services.filter(service => service.categorySlug === categorySlug)
}

export function getFeaturedServices(): Service[] {
  return services.filter(service => service.isFeatured === true)
}

export function getCategoryInfo(slug: string) {
  const categories = {
    faciales: {
      name: "Tratamientos Faciales",
      description: "Revitaliza tu piel con tratamientos avanzados de limpieza, hidratación profunda y rejuvenecimiento.",
      longDescription: "Nuestros tratamientos faciales están diseñados para abordar las necesidades específicas de tu piel. Desde limpiezas profundas hasta protocolos anti-edad avanzados, cada servicio combina técnicas manuales expertas con tecnología de vanguardia y productos premium.",
      image: "/facial-treatment-category-spa-elegant.jpg",
    },
    capilares: {
      name: "Tratamientos Capilares",
      description: "Soluciones innovadoras y tecnología de punta para restaurar la salud y vitalidad de tu cabello.",
      longDescription: "Transforma tu cabello con nuestros tratamientos especializados. Desde alisados con keratina hasta reparaciones intensivas con botox capilar, ofrecemos soluciones personalizadas para cada tipo de cabello y necesidad.",
      image: "/advanced-rejuvenation-treatment-category.jpg",
    },
    corporales: {
      name: "Tratamientos Corporales",
      description: "Experiencias de bienestar integral que esculpen, tonifican y relajan tu cuerpo.",
      longDescription: "Descubre el equilibrio perfecto entre relajación y resultados. Nuestros tratamientos corporales combinan masajes terapéuticos, tecnología avanzada y productos naturales para brindarte una experiencia de bienestar completa.",
      image: "/body-treatment-category-spa-luxury.jpg",
    },
  }

  return categories[slug as keyof typeof categories] || null
}
