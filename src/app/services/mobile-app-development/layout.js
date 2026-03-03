export const metadata = {
    title: "Mobile App Development Bangalore | Native iOS & Android Apps",
    description: "Build high-performance mobile applications in Bangalore. Our expert Flutter developers create native-feeling iOS and Android apps that drive engagement and growth.",
    keywords: "Mobile App Development Bangalore, Flutter App Development, iOS App Development Bangalore, Android App Agency, Custom Mobile Apps",
    alternates: {
        canonical: 'https://www.triuss.in/services/mobile-app-development',
    },
    openGraph: {
        title: "Mobile App Development Bangalore | Native iOS & Android Apps",
        description: "Build high-performance mobile applications in Bangalore. Native-feeling iOS and Android apps using Flutter.",
        url: 'https://www.triuss.in/services/mobile-app-development',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/Flutter Mobile App Development.jpg',
                width: 1200,
                height: 630,
                alt: 'Mobile App Development Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Mobile App Development Bangalore | Native iOS & Android Apps",
        description: "Build high-performance mobile applications in Bangalore.",
        images: ['https://www.triuss.in/images/Flutter Mobile App Development.jpg'],
    },
};

export default function MobileAppLayout({ children }) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobile App Development Bangalore",
        "description": "Premium iOS and Android app development using Flutter and native technologies.",
        "provider": {
            "@type": "Organization",
            "name": "Triuss",
            "url": "https://www.triuss.in"
        },
        "areaServed": {
            "@type": "City",
            "name": "Bangalore"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.triuss.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.triuss.in/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Mobile App Development",
                "item": "https://www.triuss.in/services/mobile-app-development"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
