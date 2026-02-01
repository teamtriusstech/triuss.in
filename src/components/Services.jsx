"use client";

import { Monitor, ShoppingBag, MessageCircle, Search, MapPin, Share2, Phone, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "website-development",
    title: "Website Development",
    icon: <Monitor className="w-6 h-6 text-white" />,
    image: "/images/web_development_new.png",
    desc: "Professional websites that help small businesses present themselves clearly and professionally online."
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    image: "/images/ecommerce_new.png",
    desc: "Secure and scalable online stores that make selling products online simple and efficient."
  },
  {
    id: "whatsapp-commerce",
    title: "WhatsApp Commerce",
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    image: "/images/whatsapp_commerce_new.png",
    desc: "Manage inquiries, orders, and follow-ups efficiently using WhatsApp automation."
  },
  {
    id: "seo-services",
    title: "SEO Services",
    icon: <Search className="w-6 h-6 text-white" />,
    image: "/images/seo_google_business_new.png",
    desc: "Steady and sustainable growth strategies to help customers find you online."
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile",
    icon: <MapPin className="w-6 h-6 text-white" />,
    image: "/images/google_business_new.png",
    desc: "Optimize your local presence to attract nearby customers actively searching for services."
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    icon: <Share2 className="w-6 h-6 text-white" />,
    image: "/images/social_media_marketing_new.png",
    desc: "Structured content and targeted ads to build trust and improve brand recall."
  },
  {
    id: "call-agents",
    title: "AI & Call Agents",
    icon: <Phone className="w-6 h-6 text-white" />,
    image: "/images/ai_agents_new.jpg",
    desc: "Ensure every customer inquiry is handled professionally with smart AI and call management."
  },
  {
    id: "billing-management",
    title: "Billing & Management",
    icon: <FileText className="w-6 h-6 text-white" />,
    image: "/images/billing_management_new.png",
    desc: "Simplify invoicing, sales tracking, and customer management with compliant systems."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-dark py-16 md:py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-red-accent font-bold text-2xl md:text-3xl mb-4 block">~Our Services</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Digital Growth Solutions
            </h2>
            <p className="text-gray-400 max-w-4xl mx-auto text-sm md:text-lg leading-relaxed">
              From high-performance <span className="text-red-accent">website development</span> and e-commerce solutions to advanced SEO, WhatsApp commerce, and integrated management systems, we provide the tools businesses in <span className="text-red-accent">Bangalore</span> need to <span className="text-red-accent">dominate their market</span>.
              Helping businesses scale with precision and expert digital strategies.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-red-accent/50 transition-all duration-300 scroll-mt-24 h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-60" />

                {/* Floating Icon */}
                <div className="absolute bottom-4 right-4 bg-red-accent p-3 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white font-bold mb-3 text-xl group-hover:text-red-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {service.desc}
                </p>
                <div className="flex items-center text-red-accent text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn More →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/#contact" className="btn-primary inline-block">
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
