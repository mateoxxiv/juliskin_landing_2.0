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
    image: "https://i.ibb.co/GQBJM2W7/diagnostico-piel.jpg",
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
    duration: "80 min",
    price: 190000,
    image: "https://i.ibb.co/dw1cb8Pv/limpieza-facial.jpg",
    shortDescription: "Limpieza profunda que revitaliza e hidrata la piel",
    description:
      "Limpia y desobstruye los poros dejando la piel suave y libre de impurezas.",
    benefits: ["Piel revitalizada", "Descongestión de poros", "Prevención de acne", "Piel suave"],
    includes: [
      "Exfoliación",
      "Extracción de impurezas",
      "Hidrodermoabrasión",
      "Aparatología antiinflamatoria",
      "Mascarilla hidroplástica calmante",
      "Aplicación de oxígeno",
      "Productos especializados",
    ],
    ideal: ["Pieles mixtas a grasas", "Pieles congestionadas", "Puntos negros ó tendencia a acné", "Mantenimiento regular"],
    process: [
      "Limpieza inicial",
      "Exfoliación suave",
      "Toalla caliente",
      "Hidrodermoabrasión",
      "Extracción de impurezas",
      "Aparatología antiinflamatoria",
      "Mascarilla hidroplástica",
      "Terapias relajantes",
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
    image: "https://i.ibb.co/yns7hf2x/tratamientos-faciales.jpg",
    shortDescription: "Tratamiento adaptado a las necesidades específicas de tu piel",
    description:
      "Tratamiento completamente adaptado a las necesidades de la piel para lograr un rostro fresco, limpio y equilibrado. Incluye la aplicación de los productos, técnicas y equipos que necesites y se puedan realizar en una sesión, como microdermoabrasión, ácidos, aparatología, ampollas nutritivas y mascarillas.",
    benefits: ["Tratamiento personalizado", "Resultados visibles", "Piel equilibrada", "Máxima efectividad"],
    includes: [
      "Microdermoabrasión (si es necesario)",
      "Aplicación de ácidos",
      "Aparatología especializada",
      "Ampollas nutritivas",
      "Mascarillas personalizadas",
      "Productos según necesidad",
    ],
    ideal: ["Todo tipo de piel", "Primera visita", "No sabes qué realizarte", "Resultados rápidos"],
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
    image: "https://i.ibb.co/WN875GLV/alta-hidrataci-n.jpg",
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
      "Técnicas relajantes"
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
    duration: "75 min",
    price: 220000,
    image: "https://i.ibb.co/tpsrBFS2/microdermoambrasi-n.jpg",
    shortDescription: "Exfoliación y renovación avanzada que suaviza e ilumina la piel",
    description:
      "Exfoliación y renovación avanzada que suaviza e ilumina la piel, eliminando impurezas y células muertas. Combina tres tipos de exfoliación: enzimática, mecánica con punta de diamante y química con ácido suave.",
    benefits: ["Piel suave", "Iluminación", "Renovación celular", "Elimina impurezas"],
    includes: [
      "Exfoliación enzimática",
      "Exfoliación mecánica con punta de diamante",
      "Exfoliación química con ácido suave",
      "Celluma ® (fototerapia)",
      "Mascarilla hidroplástica",
    ],
    ideal: ["Piel opaca", "Textura irregular", "Poros dilatados", "Renovación celular"],
    process: [
      "Exfoliación enzimática inicial",
      "Microdermoabrasión con punta de diamante",
      "Aplicación de ácido suave",
      "Fototerapia con Celluma ®",
      "Mascarilla hidroplástica",
    ],
  },
  {
    id: 6,
    name: "Peeling Químico",
    category: "Exfoliación Química",
    categorySlug: "faciales",
    duration: "60 min",
    price: 200000,
    image: "https://i.ibb.co/TBGT0Mp5/peeling-quimico.jpg",
    shortDescription: "Exfoliación química para mejorar pigmentaciones y luminosidad",
    description:
      "Exfoliación química que mejora pigmentaciones, luminosidad y calidad de la piel, ideal para manchas y acné. Incluye aplicación de ácidos específicos según necesidad y fototerapia.",
    benefits: ["Mejora pigmentaciones", "Mayor luminosidad", "Calidad de piel", "Reduce manchas"],
    includes: [
      "Aplicación de ácidos específicos según necesidad",
      "Celluma ® (fototerapia profesional)",
      "Mascarilla hidroplástica",
      "Productos especializados",
    ],
    ideal: ["Manchas", "Acné", "Pigmentación irregular", "Melasma"],
    process: [
      "Limpieza preparatoria",
      "Aplicación de ácidos específicos",
      "Tiempo de acción controlado",
      "Fototerapia Celluma ®",
      "Mascarilla hidroplástica calmante",
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
    image: "https://i.ibb.co/PXJHKvD/microagujamiento.jpg",
    shortDescription: "Estimula la producción de colágeno y mejora textura de la piel",
    description:
      "Microagujamiento que estimula la producción de colágeno, mejora textura, poros y luminosidad, ayudando a regenerar y revitalizar la piel. Incluye aplicación de cóctel de vitaminas según necesidad.",
    benefits: ["Estimula colágeno", "Mejora textura", "Reduce poros", "Regenera piel"],
    includes: [
      "Aplicación de cóctel de vitaminas según necesidad",
      "Microperforaciones controladas",
      "Celluma ® (fototerapia)",
    ],
    ideal: ["Cicatrices de acné", "Poros dilatados", "Líneas finas", "Textura irregular"],
    process: [
      "Limpieza y preparación",
      "Aplicación de cóctel vitamínico",
      "Microagujamiento controlado",
      "Fototerapia Celluma ®",
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
    image: "https://i.ibb.co/dsd4R12r/plasma.jpg",
    shortDescription: "Tratamiento autólogo que estimula colágeno y regenera la piel",
    description:
      "Tratamiento autólogo, biocompatible, que estimula la producción de colágeno, mejorando hidratación y luminosidad, ayudando a regenerar y revitalizar la piel. Utiliza tu propia sangre procesada.",
    benefits: ["Biocompatible", "Estimula colágeno", "Regenera piel", "Resultados naturales"],
    includes: [
      "Extracción y procesamiento de tu propia sangre",
      "Aplicación en área a trabajar",
      "Celluma ® (fototerapia)",
    ],
    ideal: ["Rejuvenecimiento", "Cicatrices", "Pérdida de volumen", "Piel envejecida"],
    process: [
      "Extracción de sangre",
      "Procesamiento en centrífuga",
      "Preparación del plasma",
      "Aplicación en zona a tratar",
      "Fototerapia Celluma ®",
    ],
  },
  {
    id: 19,
    name: "Tratamiento Celluma ®",
    category: "Fototerapia",
    categorySlug: "faciales",
    duration: "35 min",
    price: 70000,
    image: "https://i.ibb.co/v4PgXZbN/Celluma ®.jpg",
    shortDescription: "Terapia de luz LED para acné y rejuvenecimiento",
    description:
      "Terapia de luz LED de grado médico. Sus longitudes de onda trabajan en capas profundas para tratar acné, calmar rojeces, acelerar la cicatrización, mejorar la textura y apoyar procesos de rejuvenecimiento. Es un complemento ideal después de procedimientos, ya que disminuye el tiempo de recuperación y potencia los resultados de cualquier tratamiento facial.",
    benefits: ["Combate el acné", "Reduce líneas finas", "Disminuye inflamación", "Piel radiante"],
    includes: [
      "Sesión de Fototerapia Celluma ®",
      "Hidratación",
      "Protección solar",
    ],
    ideal: ["Todo tipo de piel", "Brotes de acné", "Signos de edad", "Mantenimiento"],
    process: [
      "Limpieza de la zona",
      "Aplicación de luz LED (30 min)",
      "Hidratación final",
    ],
  },
  {
    id: 20,
    name: "Tensamax Facial",
    category: "Reafirmante",
    categorySlug: "faciales",
    duration: "30 min",
    price: 180000,
    image: "https://i.ibb.co/60bHrSMH/tesamax.png",
    shortDescription: "Radiofrecuencia reafirmante con efecto tensor inmediato",
    description:
      "Tratamiento reafirmante no invasivo, con tecnología de radiofrecuencia que estimula la producción de colágeno, mejora la firmeza, redefine el óvalo facial y aporta un efecto tensor inmediato. Opción de paquete: 5 sesiones por $800.000.",
    benefits: ["Efecto tensor inmediato", "Estimula colágeno", "Redefine óvalo facial", "Mejora firmeza"],
    includes: [
      "Limpieza facial",
      "Radiofrecuencia Tensamax",
      "Gel conductor especializado",
      "Hidratación",
    ],
    ideal: ["Flacidez", "Pérdida de definición", "Prevención de envejecimiento", "Eventos especiales"],
    process: [
      "Limpieza de la zona",
      "Aplicación de gel conductor",
      "Sesión de Radiofrecuencia",
      "Hidratación final",
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
    image: "",
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
    image: "",
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
    image: "",
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
      "Fototerapia Celluma ®",
    ],
  },
  {
    id: 12,
    name: "Alta Hidratación + Peeling Químico",
    category: "Tratamiento Combinado",
    categorySlug: "faciales",
    duration: "90 min",
    price: 260000,
    image: "",
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
    image: "",
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
    image: "https://i.ibb.co/gZfcbDRQ/crecimiento-capilar.jpg",
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
    image: "https://i.ibb.co/mVfHYkcD/peeling-corporal.jpg",
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
    image: "",
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
    image: "https://i.ibb.co/35SrtG4G/aclaramiento-axilas.jpg",
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
    image: "https://i.ibb.co/XkDDwKs4/aclaramiento-vikini.jpg",
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
  {
    id: 34,
    name: "Moldeo Essential",
    category: "Moldeo Corporal",
    categorySlug: "corporales",
    duration: "5 Sesiones",
    price: 650000,
    image: "https://i.ibb.co/JRf8TpnH/tratamiento-corporal.png",
    shortDescription: "Paquete básico de moldeo con radiofrecuencia y enzimas",
    description:
      "Plan esencial de moldeo corporal diseñado para iniciar la transformación de tu silueta. Combina masajes moldeantes con tecnología de radiofrecuencia y potentes enzimas lipolíticas.",
    benefits: ["Reducción de medidas", "Mejora firmeza", "Tratamiento localizado", "Resultados visibles"],
    includes: [
      "3 sesiones de masaje moldeante + radiofrecuencia Tensamax",
      "2 sesiones de enzimas lipolíticas",
    ],
    ideal: ["Grasa localizada", "Primera vez", "Mantenimiento", "Necesidades puntuales"],
    process: [
      "Masaje moldeante",
      "Radiofrecuencia Tensamax",
      "Aplicación de Enzimas",
    ],
  },
  {
    id: 35,
    name: "Moldeo Advanced",
    category: "Moldeo Corporal",
    categorySlug: "corporales",
    duration: "10 Sesiones",
    price: 1120000,
    image: "https://i.ibb.co/mVfHYkcD/peeling-corporal.jpg",
    shortDescription: "Paquete avanzado de moldeo con aparatología completa",
    description:
      "Nuestro plan más completo de transformación corporal. Una potente combinación de técnicas manuales, radiofrecuencia, ultrasonido, drenaje y la última tecnología en electroestimulación.",
    benefits: ["Transformación total", "Combate celulitis", "Tonificación muscular", "Drenaje de líquidos"],
    includes: [
      "5 sesiones de masaje moldeante + radiofrecuencia Tensamax",
      "3 sesiones de enzimas lipolíticas con ultrasonido",
      "2 sesiones de drenaje linfático manual",
      "REGALO: 1 sesión de EMS (electroestimulación)"
    ],
    ideal: ["Cambio radical", "Post-parto", "Celulitis rebelde", "Tonificación"],
    process: [
      "Masaje y Radiofrecuencia",
      "Ultrasonido y Enzimas",
      "Drenaje Linfático",
      "Electroestimulación (EMS)"
    ],
    isFeatured: true,
  },
  // CURSOS Y TALLERES
  {
    id: 21,
    name: "Curso Limpieza Facial",
    category: "Cursos Faciales",
    categorySlug: "cursos",
    duration: "Virtual - Presencial",
    price: 0,
    image: "",
    shortDescription: "Aprende varios tipos de limpieza facial para todas las pieles",
    description:
      "Capacitación completa que incluye biotipos, fototipos, anatomía, enfermedades, protocolo, proveedores y práctica. Ideal para aprender varios tipos de limpieza facial para todas las pieles.",
    benefits: ["Aprende desde cero", "Conocimiento de biotipos", "Práctica real", "Certificado"],
    includes: [
      "Capacitación personalizada",
      "Certificado de asistencia",
      "Protocolos completos en PDF",
      "Lista de proveedores",
      "Acompañamiento por 3 meses"
    ],
    ideal: ["Profesionales de la estética", "Estudiantes", "Emprendedores"],
    process: ["Teoría fundamental", "Demostración práctica", "Práctica asistida"],
  },
  {
    id: 22,
    name: "Curso Microagujamiento (Dermapen)",
    category: "Cursos Avanzados",
    categorySlug: "cursos",
    duration: "6 horas",
    price: 0,
    image: "",
    shortDescription: "Domina la técnica de Dermapen para cicatrices y rejuvenecimiento",
    description:
      "Aprende fisiología, protocolo, principios activos, manejo de agujas (velocidad y profundidad) y práctica. Ideal para tratar cicatrices de acné, HPI, líneas finas, poros dilatados y envejecimiento prematuro.",
    benefits: ["Técnica en tendencia", "Resultados visibles", "Alta demanda", "Tratamiento versátil"],
    includes: [
      "Teoría y Fisiología",
      "Protocolos y principios activos",
      "Manejo de equipos",
      "Práctica con modelos",
      "Certificación"
    ],
    ideal: ["Tratar cicatrices", "Rejuvenecimiento", "Profesionales avanzados"],
    process: ["Teoría técnica", "Manejo del dispositivo", "Práctica en modelo"],
  },


  {
    id: 25,
    name: "Curso Sistema y Drenaje Linfático",
    category: "Cursos Corporales",
    categorySlug: "cursos",
    duration: "6 horas",
    price: 0,
    image: "",
    shortDescription: "Técnicas manuales para tratamientos faciales y corporales",
    description:
      "Domina la anatomía, fisiología y los protocolos del drenaje linfático manual. Esencial para tratamientos faciales, corporales y recuperación postquirúrgica.",
    benefits: ["Técnica esencial", "Recuperación post-op", "Complemento ideal", "Bienestar integral"],
    includes: [
      "Anatomía del sistema linfático",
      "Fisiología",
      "Protocolos de drenaje",
      "Aplicaciones estéticas",
      "Práctica manual"
    ],
    ideal: ["Post-quirúrgicos", "Reducción de edema", "Tratamientos relajantes"],
    process: ["Teoría anatómica", "Maniobras básicas", "Protocolos completos"],
  },


  {
    id: 28,
    name: "Protocolo de Acné (Premium)",
    category: "Cursos Premium",
    categorySlug: "cursos",
    duration: "12 horas (4 clases)",
    price: 0,
    image: "",
    shortDescription: "El protocolo real usado por JuliSkin para tratar acné",
    description:
      "Protocolo especializado que abarca causas, tipos, fallas hormonales, acné adulto, tratamientos, recomendaciones alimenticias, rutina personalizada y productos sugeridos.",
    benefits: ["Protocolo probado", "Enfoque integral", "Resultados garantizados", "Experticia clínica"],
    includes: [
      "Diagnóstico avanzado",
      "Tratamientos combinados",
      "Nutrición y hábitos",
      "Rutinas personalizadas",
      "Certificación Premium"
    ],
    ideal: ["Especialistas en acné", "Casos difíciles", "Enfoque dermatológico"],
    process: ["Diagnóstico", "Plan de tratamiento", "Seguimiento"],
  },
  {
    id: 29,
    name: "Protocolo de Manchas (Premium)",
    category: "Cursos Premium",
    categorySlug: "cursos",
    duration: "12 horas",
    price: 0,
    image: "",
    shortDescription: "Protocolo exclusivo para hiperpigmentación",
    description:
      "Aprende a tratar hiperpigmentaciones con el protocolo usado por JuliSkin. Incluye causas, tipos, tratamientos personalizados, skincare y productos recomendados.",
    benefits: ["Solución a manchas", "Protocolo seguro", "Resultados visibles", "Caso a caso"],
    includes: [
      "Fisiopatología de la mancha",
      "Selección de activos",
      "Peelings y aparatología",
      "Skincare despigmentante",
      "Certificación Premium"
    ],
    ideal: ["Melasma", "Hiperpigmentación", "Fotoenvejecimiento"],
    process: ["Evaluación", "Tratamiento despigmentante", "Mantenimiento"],
  },
  {
    id: 30,
    name: "Protocolo Cicatriz Atrófica (Premium)",
    category: "Cursos Premium",
    categorySlug: "cursos",
    duration: "12 horas",
    price: 0,
    image: "",
    shortDescription: "Especialización en secuelas de acné",
    description:
      "Protocolo avanzado para cicatrices atróficas. Cubre causas, anatomía, tipos de cicatrices, tratamientos combinados, skincare y productos recomendados.",
    benefits: ["Mejora de textura", "Protocolo combinado", "Alta especialización", "Cambio de vida"],
    includes: [
      "Tipos de cicatrices",
      "Técnicas combinadas",
      "Inducción de colágeno",
      "Recuperación de piel",
      "Certificación Premium"
    ],
    ideal: ["Secuelas severas", "Piel irregular", "Tratamientos correctivos"],
    process: ["Evaluación de tejido", "Plan combinado", "Regeneración"],
  },
  {
    id: 31,
    name: "Protocolo Párpados y Bolsas",
    category: "Cursos Premium",
    categorySlug: "cursos",
    duration: "2 horas",
    price: 0,
    image: "",
    shortDescription: "Protocolo exclusivo JuliSkin para zona periocular",
    description:
      "Aprende anatomía periocular, causas del envejecimiento, uso de plasmapen, mesoterapia y protocolos completos para tratar párpados caídos y ojeras tipo bolsa.",
    benefits: ["Zona difícil", "Técnica exclusiva", "Rejuvenecimiento mirada", "Sin cirugía"],
    includes: [
      "Anatomía periocular",
      "Técnicas de Plasmapen",
      "Mesoterapia específica",
      "Protocolo exclusivo",
      "Certificación"
    ],
    ideal: ["Mirada cansada", "Bolsas y ojeras", "Flacidez palpebral"],
    process: ["Diagnóstico diferencial", "Técnica combinada", "Cuidados delicados"],
  },
  {
    id: 32,
    name: "Curso Desinfección y Esterilización",
    category: "Cursos Básicos",
    categorySlug: "cursos",
    duration: "Virtual - Presencial",
    price: 0,
    image: "",
    shortDescription: "Bioseguridad y estándares de calidad",
    description:
      "Mejora la calidad de tu servicio aprendiendo sobre factores de riesgo, limpieza, correcta desinfección y esterilización de equipos y materiales.",
    benefits: ["Bioseguridad", "Cumplimiento normativo", "Confianza del cliente", "Calidad total"],
    includes: [
      "Normativa vigente",
      "Protocolos de limpieza",
      "Procesos de esterilización",
      "Manejo de residuos",
      "Certificación"
    ],
    ideal: ["Todo profesional estético", "Apertura de local", "Auditorías"],
    process: ["Fundamentos", "Protocolos paso a paso", "Implementación"],
  },
  {
    id: 33,
    name: "Asesoría Personalizada",
    category: "Mentoría Profesional",
    categorySlug: "cursos",
    duration: "A convenir",
    price: 0,
    image: "",
    shortDescription: "Mentoría 1 a 1 para resolver dudas y casos clínicos",
    description:
      "Espacio exclusivo diseñado para profesionales o estudiantes que necesitan resolver dudas puntuales, analizar casos clínicos complejos o recibir orientación sobre protocolos y emprendimiento en estética.",
    benefits: ["Atención 1 a 1", "Resolución de casos", "Refuerzo de conocimientos", "Orientación de negocio"],
    includes: [
      "Sesión virtual o presencial",
      "Análisis de casos clínicos",
      "Revisión de protocolos",
      "Resolución de dudas específicas",
      "Recomendaciones personalizadas"
    ],
    ideal: ["Profesionales con dudas", "Estudiantes", "Emprendedores", "Revisión de casos"],
    process: ["Evaluación de necesidades", "Sesión de mentoría", "Plan de acción"],
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
      image: "https://i.ibb.co/yns7hf2x/tratamientos-faciales.jpg",
    },
    capilares: {
      name: "Tratamientos Capilares",
      description: "Soluciones innovadoras y tecnología de punta para restaurar la salud y vitalidad de tu cabello.",
      longDescription: "Transforma tu cabello con nuestros tratamientos especializados. Desde alisados con keratina hasta reparaciones intensivas con botox capilar, ofrecemos soluciones personalizadas para cada tipo de cabello y necesidad.",
      image: "https://i.ibb.co/yns7hf2x/tratamientos-faciales.jpg",
    },
    corporales: {
      name: "Tratamientos Corporales",
      description: "Experiencias de bienestar integral que esculpen, tonifican y relajan tu cuerpo.",
      longDescription: "Descubre el equilibrio perfecto entre relajación y resultados. Nuestros tratamientos corporales combinan masajes terapéuticos, tecnología avanzada y productos naturales para brindarte una experiencia de bienestar completa.",
      image: "https://i.ibb.co/yns7hf2x/tratamientos-faciales.jpg",
    },
    cursos: {
      name: "Cursos y Talleres",
      description: "Aprende técnicas profesionales para el cuidado de tu piel y belleza.",
      longDescription: "Nuestros cursos están diseñados para empoderarte con el conocimiento y las técnicas necesarias para un cuidado personal experto. Desde automaquillaje hasta rutinas de skincare avanzadas, aprende de la mano de profesionales.",
      image: "https://i.ibb.co/yns7hf2x/tratamientos-faciales.jpg",
    },
  }

  return categories[slug as keyof typeof categories] || null
}
