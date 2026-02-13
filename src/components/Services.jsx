"use client";

import { Monitor, ShoppingBag, MessageCircle, Search, MapPin, Share2, Phone, FileText, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "website-development",
    title: "Website Development",
    icon: <Monitor className="w-5 h-5" />,
    image: "/images/web_development_new.png",
    desc: "Build fast, secure, and SEO-optimized websites tailored for strong online presence."
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    icon: <ShoppingBag className="w-5 h-5" />,
    image: "/images/ecommerce_new.png",
    desc: "Modern platforms with secure payments and inventory management to drive sales."
  },
  {
    id: "whatsapp-commerce",
    title: "WhatsApp Commerce",
    icon: <MessageCircle className="w-5 h-5" />,
    image: "/images/whatsapp_commerce_new.png",
    desc: "Automate inquiries, orders, and follow-ups efficiently on WhatsApp."
  },
  {
    id: "seo-services",
    title: "SEO Services",
    icon: <Search className="w-5 h-5" />,
    image: "/images/seo_google_business_new.png",
    desc: "Sustainable strategies to help customers find you organically online."
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile",
    icon: <MapPin className="w-5 h-5" />,
    image: "/images/google_business_new.png",
    desc: "Optimize local presence to attract nearby customers active in search."
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    icon: <Share2 className="w-5 h-5" />,
    image: "/images/social_media_marketing_new.png",
    desc: "Structured content and ads to build trust and brand recall."
  },
  {
    id: "call-agents",
    title: "AI & Call Agents",
    icon: <Phone className="w-5 h-5" />,
    image: "/images/ai_agents_new.jpg",
    desc: "Handle every inquiry professionally with smart AI and call systems."
  },
  {
    id: "billing-management",
    title: "Billing & Management",
    icon: <FileText className="w-5 h-5" />,
    image: "/images/billing_management_new.png",
    desc: "Simplify invoicing and tracking with easy-to-use compliant systems."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#121212] py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3 text-brand-orange">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Digital Solutions</span>
            </h2>
          </motion.div>



        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-[#1c1c1c] hover:bg-[#222] border border-white/5 rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c1c1c]/50 to-[#1c1c1c]" />

                {/* Icon Badge */}
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-lg text-white group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>

                <div className="flex items-center text-xs font-semibold text-white/40 group-hover:text-white transition-colors uppercase tracking-wider">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-xl md:text-2xl shadow-lg shadow-brand-orange/20 hover:bg-[#ff6b00] hover:scale-105 hover:shadow-brand-orange/40 transition-all duration-300 group"
          >
            Start your transformation
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
