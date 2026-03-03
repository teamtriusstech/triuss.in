export const metadata = {
    title: "Social Media Management Bangalore | Build Brand Authority",
    description: "Dominate social platforms with our expert management in Bangalore. We create viral content and manage your brand authority on Instagram, LinkedIn, and more.",
    keywords: "Social Media Management Bangalore, Instagram Marketing Bangalore, Brand Authority, Content Strategy Bangalore, Viral Growth Agency",
    alternates: {
        canonical: 'https://www.triuss.in/services/social-media-management',
    },
    openGraph: {
        title: "Social Media Management Bangalore | Build Brand Authority",
        description: "Dominate social platforms with our expert management. Viral content and brand authority on Instagram and LinkedIn.",
        url: 'https://www.triuss.in/services/social-media-management',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/social_media_marketing_new.png',
                width: 1200,
                height: 630,
                alt: 'Social Media Management Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Social Media Management Bangalore | Build Brand Authority",
        description: "Dominate social platforms with our expert management. Viral growth agency in Bangalore.",
        images: ['https://www.triuss.in/images/social_media_marketing_new.png'],
    },
};

export default function SocialMediaLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Social Media Management Bangalore",
        "description": "Expert management of social media accounts to build engagement and brand authority.",
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
