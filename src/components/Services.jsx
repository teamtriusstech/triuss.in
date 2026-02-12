"use client";

import { Monitor, ShoppingBag, MessageCircle, Search, MapPin, Share2, Phone, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "website-development",
    title: "Website Development",
    icon: <Monitor className="w-6 h-6 text-white" />,
    image: "/images/web_development_new.png",
    desc: "Our expert website development team builds fast, secure, and SEO-optimized websites tailored for small businesses and enterprises in Bangalore to establish a strong online presence."
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    image: "/images/ecommerce_new.png",
    desc: "We build modern, user-friendly e-commerce platforms that integrate secure payment gateways, inventory management, and smooth checkout experiences to drive online sales."
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
    <section id="services" className="bg-[#0a0a0a] py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-brand-blue/5 blur-[120px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-orange/5 blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-orange"></span>
              <span className="text-brand-orange font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
              Scale Your <span className="text-white/30 italic font-serif">Impact</span> Digitally.
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
              We provide the strategic firepower and technical execution to help businesses in <span className="text-brand-blue font-bold text-white">Bangalore</span> dominate their market. From engineering to growth, we've got you covered.
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
              className="group relative overflow-hidden rounded-2xl bg-[#111111] border border-white/5 hover:border-brand-blue/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container with Dark Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={65}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                {/* Corner Icon */}
                <div className="absolute top-4 left-4 bg-[#1a1a1a] p-2.5 rounded-xl border border-white/10 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white font-bold mb-3 text-xl group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-orange text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all duration-300">
                  Detailed Expertise <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Hover Line Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-blue group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/#contact" className="inline-flex items-center gap-4 group">
            <span className="text-white font-bold text-lg md:text-xl border-b border-white/10 group-hover:border-brand-orange transition-colors pb-1">
              Let's discuss your project
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 transform group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
