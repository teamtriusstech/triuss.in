export const metadata = {
    title: "Digital Marketing Bangalore | Performance & Growth SEO Agency",
    description: "Expert digital marketing services in Bangalore. We specialize in performance ads, SEO, and ROI-focused growth strategies to scale your revenue.",
    keywords: "Digital Marketing Bangalore, SEO Services Bangalore, PPC Agency, Performance Marketing, Growth Agency Bangalore, ROI Marketing",
    alternates: {
        canonical: 'https://www.triuss.in/services/digital-marketing-bangalore',
    },
    openGraph: {
        title: "Digital Marketing Bangalore | Performance & Growth SEO Agency",
        description: "Expert digital marketing services in Bangalore. Performance ads, SEO, and ROI-focused growth strategies.",
        url: 'https://www.triuss.in/services/digital-marketing-bangalore',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/seo_google_business_new.png',
                width: 1200,
                height: 630,
                alt: 'Digital Marketing Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Digital Marketing Bangalore | Performance & Growth SEO Agency",
        description: "Scale your revenue with ROI-focused digital marketing in Bangalore.",
        images: ['https://www.triuss.in/images/seo_google_business_new.png'],
    },
};

export default function DigitalMarketingLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Marketing Agency Bangalore",
        "description": "High-performance digital marketing including SEO, SEM, and performance creative.",
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
