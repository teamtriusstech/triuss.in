export const metadata = {
    title: "AI Call Agents Bangalore | Voice AI & Support Automation",
    description: "Automate your support and sales with advanced AI Call Agents in Bangalore. Our voice AI solutions handle calls 24/7 with human-like precision.",
    keywords: "AI Call Agents Bangalore, Voice AI Bangalore, Support Automation, AI Voice Bots, Sales Automation Agency",
    alternates: {
        canonical: 'https://www.triuss.in/services/ai-call-agents-bangalore',
    },
    openGraph: {
        title: "AI Call Agents Bangalore | Voice AI & Support Automation",
        description: "Automate your support and sales with advanced AI Call Agents. Human-like voice AI that handles calls 24/7.",
        url: 'https://www.triuss.in/services/ai-call-agents-bangalore',
        siteName: 'Triuss',
        images: [
            {
                url: 'https://www.triuss.in/images/ai_agents_new.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Call Agents Bangalore - Triuss',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "AI Call Agents Bangalore | Voice AI & Support Automation",
        description: "Scale your business with 24/7 Voice AI automation in Bangalore.",
        images: ['https://www.triuss.in/images/ai_agents_new.jpg'],
    },
};

export default function AICallAgentsLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Call Agents & Automation",
        "description": "High-end voice AI agents for customer support and sales automation.",
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
