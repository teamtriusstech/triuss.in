export const metadata = {
    title: "Web Development Bangalore | Custom Next.js & React Websites",
    description: "Expert web development services in Bangalore. We build high-performance, conversion-focused websites using Next.js and React to scale your business digitally.",
    keywords: "Web Development Bangalore, Website Design Bangalore, Next.js Development, React Agency Bangalore, Custom Web Solutions",
    alternates: {
        canonical: 'https://www.triuss.in/services/web-development-bangalore',
    },
    openGraph: {
        title: "Web Development Bangalore | Custom Next.js & React Websites",
        description: "Expert web development services in Bangalore. We build high-performance, conversion-focused websites using Next.js and React to scale your business digitally.",
        url: 'https://www.triuss.in/services/web-development-bangalore',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/web_development_new.png',
                width: 1200,
                height: 630,
                alt: 'Web Development Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Web Development Bangalore | Custom Next.js & React Websites",
        description: "Expert web development services in Bangalore. We build high-performance, conversion-focused websites using Next.js and React to scale your business digitally.",
        images: ['https://www.triuss.in/images/web_development_new.png'],
    },
};

export default function WebDevLayout({ children }) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development Bangalore",
        "description": "Expert web development services in Bangalore. We build high-performance, conversion-focused websites using Next.js and React.",
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
                "name": "Web Development",
                "item": "https://www.triuss.in/services/web-development-bangalore"
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
