import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Triuss - Digital Services for Small Businesses",
  description: "Helping Small Businesses in Bangalore Grow Digitally. Website development, SEO, and business solutions.",
  keywords: "Small Business, Bangalore, Digital Services, Web Development, SEO, WhatsApp Commerce",
  openGraph: {
    title: "Triuss - Digital Services for Small Businesses",
    description: "Helping Small Businesses in Bangalore Grow Digitally.",
    type: "website",
    images: ["/images/triusslogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
