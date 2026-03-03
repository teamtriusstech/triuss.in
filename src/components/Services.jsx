"use client";

import { Monitor, Smartphone, ShoppingBag, MessageCircle, FileText, Search, Phone, Share2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";

const services = [
  {
    id: "web-app-development",
    title: "Web App Development",
    icon: <Monitor className="w-5 h-5" />,
    href: "/services/web-development-bangalore",
    image: "/images/web_development_new.png",
    desc: "Custom-engineered high-performance web applications built for scale and speed."
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    icon: <Smartphone className="w-5 h-5" />,
    href: "/services/mobile-app-development",
    image: "/images/Flutter Mobile App Development.jpg",
    desc: "Premium iOS and Android apps that offer seamless user experiences and native performance."
  },
  {
    id: "ecommerce-sites",
    title: "E-commerce Sites",
    icon: <ShoppingBag className="w-5 h-5" />,
    href: "/services/ecommerce-solutions-bangalore",
    image: "/images/ecommerce_new.png",
    desc: "Conversion-optimized online stores with secure payments and automated inventory management."
  },
  {
    id: "whatsapp-ecommerce",
    title: "WhatsApp E-commerce",
    icon: <MessageCircle className="w-5 h-5" />,
    href: "/services/whatsapp-commerce-bangalore",
    image: "/images/whatsapp_commerce_new.png",
    desc: "Turn your WhatsApp into a sales machine with automated catalogues and checkout systems."
  },
  {
    id: "ugc-product-ads",
    title: "UGC & Product Ads",
    icon: <FileText className="w-5 h-5" />,
    href: "/services/ugc-product-ads",
    image: "/images/618b9bd1c3b905496d9d4910_BlogCover.png",
    desc: "High-impact product photography and User Generated Content that builds instant trust."
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: <Search className="w-5 h-5" />,
    href: "/services/digital-marketing-bangalore",
    image: "/images/seo_google_business_new.png",
    desc: "Aggressive SEO and PPC strategies to dominate search results and crush your competition."
  },
  {
    id: "ai-automations",
    title: "AI & Call Agents",
    icon: <Phone className="w-5 h-5" />,
    href: "/services/ai-call-agents-bangalore",
    image: "/images/ai_agents_new.jpg",
    desc: "Voice AI and intelligent automation that handles inquiries 24/7 with human-like precision."
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    icon: <Share2 className="w-5 h-5" />,
    href: "/services/social-media-management",
    image: "/images/social_media_marketing_new.png",
    desc: "End-to-end management of your social presence to build brand authority and loyalty."
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
          <m.div
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
          </m.div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-[#1c1c1c] hover:bg-[#222] border border-white/5 rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col"
            >
              <Link href={service.href || "#"} className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={60}
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
              </Link>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-white/10 transition-all duration-300 pointer-events-none" />
            </m.div>
          ))}
        </div>

        <m.div
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
        </m.div>
      </div>
    </section>
  );
}
