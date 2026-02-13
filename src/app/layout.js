import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://www.triuss.in'),
  title: "Triuss - #1 Digital Growth Agency in Bangalore | Web Dev & SEO",
  description: "Triuss is a premier digital growth agency in Bangalore specializing in custom website development, SEO, and business automation. We help Bangalore businesses scale digitally.",
  keywords: "Digital Agency Bangalore, Website Development Bangalore, SEO Services Bangalore, Business Automation, WhatsApp Commerce, Triuss Digital",
  alternates: {
    canonical: '/',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white`} suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
