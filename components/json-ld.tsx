import script from 'next/script'

export function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        name: 'Juliskin Cosmetología',
        image: 'https://juliskin.com/logo_skin_32x32.png',
        '@id': 'https://juliskin.com',
        url: 'https://juliskin.com',
        telephone: '+573000000000', // Reemplazar con el número real si lo tienes
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Cra. 54A #75 Sur 13, Mall Portal de Ditaires',
            addressLocality: 'La Estrella',
            addressRegion: 'Antioquia',
            postalCode: '055010',
            addressCountry: 'CO',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 6.155, // Coordenadas aprox de La Estrella, ajustar con las reales
            longitude: -75.63,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        sameAs: [
            'https://www.instagram.com/juliskin', // Ajustar redes sociales
            'https://www.facebook.com/juliskin',
        ],
        priceRange: '$$',
    }

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    )
}
