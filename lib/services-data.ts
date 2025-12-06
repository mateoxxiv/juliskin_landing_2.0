export interface Service {
  id: number
  name: string
  category: string
  duration: string
  price: number
  image: string
  description: string
  shortDescription: string
  benefits: string[]
  includes: string[]
  ideal: string[]
  process: string[]
}

export const services: Service[] = [
  {
    id: 1,
    name: "Limpieza Facial Profunda",
    category: "Tratamiento Facial",
    duration: "60 min",
    price: 120000,
    image: "/professional-facial-cleansing-treatment-spa.jpg",
    shortDescription: "Limpieza profunda con extracción de impurezas, exfoliación y mascaraje purificante",
    description:
      "Nuestro tratamiento de limpieza facial profunda es un protocolo completo que combina técnicas manuales y productos de alta gama para eliminar impurezas, células muertas y renovar completamente tu piel. Este servicio incluye análisis de piel, limpieza profunda, exfoliación enzimática, extracción de comedones, masaje facial relajante y mascarilla personalizada según tu tipo de piel.",
    benefits: ["Piel renovada", "Poros limpios", "Luminosidad natural", "Textura mejorada"],
    includes: [
      "Análisis de piel con lupa",
      "Limpieza profunda con vaporizador",
      "Exfoliación enzimática suave",
      "Extracción de impurezas",
      "Masaje facial relajante",
      "Mascarilla purificante",
      "Hidratación personalizada",
    ],
    ideal: ["Todo tipo de piel", "Piel con impurezas", "Mantenimiento mensual", "Preparación para eventos"],
    process: [
      "Análisis personalizado de tu tipo de piel",
      "Desmaquillado y limpieza inicial",
      "Aplicación de vapor para apertura de poros",
      "Exfoliación suave con enzimas naturales",
      "Extracción profesional de comedones",
      "Masaje facial con técnicas de drenaje linfático",
      "Mascarilla adaptada a tus necesidades",
      "Tónico y suero hidratante",
      "Protección solar",
    ],
  },
  {
    id: 2,
    name: "Peeling Químico",
    category: "Rejuvenecimiento",
    duration: "45 min",
    price: 180000,
    image: "/professional-chemical-peel-treatment.jpg",
    shortDescription: "Exfoliación química controlada para renovar la capa superficial de la piel",
    description:
      "El peeling químico es un tratamiento avanzado de exfoliación que utiliza ácidos especializados para eliminar las capas superficiales de la piel, estimulando la regeneración celular. Este procedimiento mejora significativamente la textura, reduce manchas, minimiza líneas finas y proporciona un brillo saludable a tu rostro.",
    benefits: ["Reduce manchas", "Mejora textura", "Estimula colágeno", "Unifica el tono"],
    includes: [
      "Evaluación previa del tipo de piel",
      "Limpieza preparatoria",
      "Aplicación de peeling químico graduado",
      "Neutralización profesional",
      "Mascarilla calmante",
      "Protector solar SPF 50+",
      "Protocolo de cuidados post-tratamiento",
    ],
    ideal: [
      "Manchas por el sol",
      "Cicatrices de acné",
      "Textura irregular",
      "Signos de envejecimiento",
      "Melasma leve",
    ],
    process: [
      "Consulta previa para determinar tipo de peeling",
      "Preparación de la piel con limpieza profunda",
      "Aplicación controlada del agente químico",
      "Monitoreo del tiempo de exposición",
      "Neutralización del producto",
      "Aplicación de mascarilla calmante",
      "Hidratación intensiva",
      "Recomendaciones de cuidado en casa",
    ],
  },
  {
    id: 3,
    name: "Hidratación Intensiva",
    category: "Tratamiento Hidratante",
    duration: "50 min",
    price: 95000,
    image: "/hydrating-facial-treatment-spa-luxury.jpg",
    shortDescription: "Tratamiento intensivo con ácido hialurónico y vitaminas para piel radiante",
    description:
      "Este tratamiento de hidratación intensiva es perfecto para pieles deshidratadas, secas o que necesitan un impulso de vitalidad. Utilizamos una combinación de ácido hialurónico de diferentes pesos moleculares, vitaminas y antioxidantes para penetrar en las capas profundas de la piel, proporcionando hidratación duradera y un aspecto juvenil.",
    benefits: ["Hidratación profunda", "Piel suave", "Efecto lifting", "Luminosidad instantánea"],
    includes: [
      "Limpieza facial suave",
      "Exfoliación enzimática delicada",
      "Aplicación de suero de ácido hialurónico",
      "Masaje facial hidratante",
      "Mascarilla de hidratación intensiva",
      "Ampolla de vitamina C",
      "Crema hidratante premium",
    ],
    ideal: ["Piel seca o deshidratada", "Después de exposición solar", "Cambios de estación", "Mantenimiento semanal"],
    process: [
      "Limpieza suave del rostro",
      "Exfoliación enzimática sin fricción",
      "Aplicación de tónico hidratante",
      "Suero de ácido hialurónico multicapa",
      "Masaje facial con técnica japonesa",
      "Mascarilla de hidratación profunda",
      "Ampolla concentrada de vitaminas",
      "Sellado con crema y protector",
    ],
  },
  {
    id: 4,
    name: "Tratamiento Anti-Age",
    category: "Rejuvenecimiento Avanzado",
    duration: "75 min",
    price: 220000,
    image: "/anti-aging-facial-treatment-luxury-spa.jpg",
    shortDescription: "Protocolo completo con radiofrecuencia y sérums especializados contra el envejecimiento",
    description:
      "Nuestro tratamiento anti-age más completo combina tecnología de radiofrecuencia con principios activos de última generación. Este protocolo está diseñado para combatir múltiples signos del envejecimiento: arrugas, flacidez, pérdida de volumen y manchas. Incluye radiofrecuencia facial, microdermoabrasión con punta de diamante, aplicación de cóctel de péptidos y factores de crecimiento.",
    benefits: ["Reduce arrugas", "Firmeza visible", "Piel rejuvenecida", "Efecto tensor inmediato"],
    includes: [
      "Análisis de signos de envejecimiento",
      "Limpieza profunda especializada",
      "Microdermoabrasión con punta de diamante",
      "Radiofrecuencia facial",
      "Cóctel de péptidos y factores de crecimiento",
      "Mascarilla tensor de colágeno",
      "Suero anti-age premium",
      "Contorno de ojos especializado",
    ],
    ideal: [
      "Pieles maduras 35+",
      "Arrugas y líneas de expresión",
      "Flacidez facial",
      "Pérdida de firmeza",
      "Rejuvenecimiento integral",
    ],
    process: [
      "Diagnóstico personalizado de envejecimiento",
      "Desmaquillado y limpieza anti-age",
      "Microdermoabrasión para renovación celular",
      "Aplicación de radiofrecuencia en zonas clave",
      "Infusión de principios activos anti-age",
      "Masaje lifting con técnicas avanzadas",
      "Mascarilla de colágeno y elastina",
      "Aplicación de sueros concentrados",
      "Crema reafirmante y contorno de ojos",
    ],
  },
]
