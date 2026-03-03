export const metadata = {
    title: "UGC & Product Video Ads Bangalore | High-Converting Content",
    description: "Scale your ads with authentic User Generated Content and professional product videos in Bangalore. We create videos that build trust and lower acquisition costs.",
    keywords: "UGC Ads Bangalore, Product Video Ads, Content Creation Bangalore, Video Marketing Agency, High-Converting Ads",
    alternates: {
        canonical: 'https://www.triuss.in/services/ugc-product-ads',
    },
    openGraph: {
        title: "UGC & Product Video Ads Bangalore | High-Converting Content",
        description: "Scale your ads with authentic User Generated Content and professional product videos. Content that builds trust.",
        url: 'https://www.triuss.in/services/ugc-product-ads',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/618b9bd1c3b905496d9d4910_BlogCover.png',
                width: 1200,
                height: 630,
                alt: 'UGC & Product Ads Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "UGC & Product Video Ads Bangalore | High-Converting Content",
        description: "Scale your ads with authentic UGC and professional product videos.",
        images: ['https://www.triuss.in/images/618b9bd1c3b905496d9d4910_BlogCover.png'],
    },
};

export default function UGCLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "UGC & Product Ads Bangalore",
        "description": "Viral content creation for product ads and user-generated content for brands.",
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
