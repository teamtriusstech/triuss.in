export const metadata = {
    title: "Digital Growth Services Bangalore | Web, App & Marketing Solutions",
    description: "Discover our comprehensive suite of digital growth services in Bangalore. From expert web and mobile app development to performance marketing and AI solutions, we help brands scale.",
    keywords: "Digital Services Bangalore, Web Development Agency, App Development Bangalore, Performance Marketing, AI Solutions Bangalore, Social Media Management",
    alternates: {
        canonical: 'https://www.triuss.in/services',
    },
    openGraph: {
        title: "Digital Growth Services Bangalore | Triuss",
        description: "Comprehensive digital growth services including Web, App, and Performance Marketing.",
        url: 'https://www.triuss.in/services',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/about_team_stack.png',
                width: 1200,
                height: 630,
                alt: 'Our Digital Services - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Digital Growth Services Bangalore | Triuss",
        description: "Scale your brand with expert digital services in Bangalore.",
        images: ['https://www.triuss.in/images/about_team_stack.png'],
    },
};

export default function ServicesLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Triuss Digital Services",
        "description": "A list of specialized digital growth services offered by Triuss in Bangalore.",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "url": "https://www.triuss.in/services/web-development-bangalore",
                "name": "Web Development"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "url": "https://www.triuss.in/services/mobile-app-development",
                "name": "Mobile App Development"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "url": "https://www.triuss.in/services/ecommerce-solutions-bangalore",
                "name": "E-Commerce Solutions"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "url": "https://www.triuss.in/services/digital-marketing-bangalore",
                "name": "Digital Marketing"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
