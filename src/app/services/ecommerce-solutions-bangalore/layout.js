export const metadata = {
    title: "E-Commerce Solutions Bangalore | High-Converting Online Stores",
    description: "Build a powerful online store with our E-commerce solutions in Bangalore. We create scalable, secure, and user-friendly stores that drive sales 24/7.",
    keywords: "E-Commerce Solutions Bangalore, Online Store Development, Shopify Experts Bangalore, E-com Agency, Online Sales Automation",
    alternates: {
        canonical: 'https://www.triuss.in/services/ecommerce-solutions-bangalore',
    },
    openGraph: {
        title: "E-Commerce Solutions Bangalore | High-Converting Online Stores",
        description: "Build a powerful online store with our E-commerce solutions in Bangalore. We create scalable, secure, and user-friendly stores.",
        url: 'https://www.triuss.in/services/ecommerce-solutions-bangalore',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/Ecommerce_new.png',
                width: 1200,
                height: 630,
                alt: 'E-Commerce Solutions Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "E-Commerce Solutions Bangalore | High-Converting Online Stores",
        description: "Build a powerful online store with our E-commerce solutions in Bangalore.",
        images: ['https://www.triuss.in/images/Ecommerce_new.png'],
    },
};

export default function EcommerceLayout({ children }) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "E-Commerce Development Bangalore",
        "description": "High-performance E-commerce website development using modern tech stacks for maximum conversion.",
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
                "name": "E-Commerce Solutions",
                "item": "https://www.triuss.in/services/ecommerce-solutions-bangalore"
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
