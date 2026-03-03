import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.triuss.in'),
  title: "Triuss - #1 Digital Growth Agency in Bangalore | Web Dev & SEO",
  description: "Triuss is Bangalore's #1 digital growth agency for custom web development, SEO, and automation. Scale your business with our proven digital strategies.",
  keywords: "Digital Agency Bangalore, Website Development Bangalore, SEO Services Bangalore, Business Automation, WhatsApp Commerce, Triuss Digital",
  alternates: {
    canonical: 'https://www.triuss.in',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Triuss - #1 Digital Growth Agency in Bangalore",
    description: "Empowering businesses in Bangalore to scale with custom web development and expert SEO.",
    url: 'https://www.triuss.in',
    siteName: 'Triuss',
    images: [
      {
        url: "/images/triuss-logo.svg",
        width: 1200,
        height: 630,
        alt: 'Triuss Digital Growth Agency Bangalore',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#002D72',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import { FramerProvider } from "@/providers/FramerProvider";

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Triuss Digital Growth Agency",
    "image": "https://www.triuss.in/images/triuss-logo.svg",
    "@id": "https://www.triuss.in",
    "url": "https://www.triuss.in",
    "telephone": "+91 84318 60448",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore",
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://wa.me/918431860448"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://formspree.io" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white`} suppressHydrationWarning>
        <FramerProvider>
          {children}
        </FramerProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} strategy="lazyOnload" />
    </html>
  );
}
