export const metadata = {
    title: "WhatsApp Commerce Bangalore | Automated Shopping Catalogs",
    description: "Sell directly on WhatsApp with our automated commerce solutions in Bangalore. Transform your business into a 24/7 sales machine with custom catalogs.",
    keywords: "WhatsApp Commerce Bangalore, WhatsApp Shopping, Automated Catalogs, WhatsApp Marketing Agency, Direct Sales Automation",
    alternates: {
        canonical: 'https://www.triuss.in/services/whatsapp-commerce-bangalore',
    },
    openGraph: {
        title: "WhatsApp Commerce Bangalore | Automated Shopping Catalogs",
        description: "Sell directly on WhatsApp with our automated commerce solutions. Transform your business into a 24/7 sales machine.",
        url: 'https://www.triuss.in/services/whatsapp-commerce-bangalore',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/whatsapp_commerce_new.png',
                width: 1200,
                height: 630,
                alt: 'WhatsApp Commerce Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "WhatsApp Commerce Bangalore | Automated Shopping Catalogs",
        description: "Sell directly on WhatsApp with our automated commerce solutions.",
        images: ['https://www.triuss.in/images/whatsapp_commerce_new.png'],
    },
};

export default function WhatsAppCommerceLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "WhatsApp Commerce Development",
        "description": "Custom automated WhatsApp shopping solutions for modern businesses.",
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
