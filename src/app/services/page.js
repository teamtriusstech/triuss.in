"use client";

import Link from "next/link";
import { Monitor, ShoppingBag, MessageCircle, Search, MapPin, Share2, Phone, FileText, ArrowRight, Sparkles, Target, Zap, Smartphone } from "lucide-react";
import { m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const services = [
    {
        title: "Web App Development",
        description: "Custom-engineered high-performance web applications built for scale and speed. We use cutting-edge technology to build digital masterpieces.",
        href: "/services/web-development-bangalore",
        icon: <Monitor className="w-10 h-10" />,
        color: "bg-blue-600",
        keywords: ["Next.js 15", "React", "Scalable Tech"]
    },
    {
        title: "Mobile App Development",
        description: "Premium iOS and Android apps that offer seamless user experiences and native performance for businesses on the move.",
        href: "/services/mobile-app-development",
        icon: <Smartphone className="w-10 h-10" />,
        color: "bg-brand-orange",
        keywords: ["Native Apps", "iOS & Android", "UI/UX"]
    },
    {
        title: "E-Commerce Sites",
        description: "Conversion-optimized online stores with secure payments and automated inventory management to scale your retail brand.",
        href: "/services/ecommerce-solutions-bangalore",
        icon: <ShoppingBag className="w-10 h-10" />,
        color: "bg-purple-600",
        keywords: ["Custom E-com", "Payments", "Inventory"]
    },
    {
        title: "WhatsApp E-commerce",
        description: "Turn your WhatsApp into a sales machine with automated catalogues and direct checkout systems where your customers chat.",
        href: "/services/whatsapp-commerce-bangalore",
        icon: <MessageCircle className="w-10 h-10" />,
        color: "bg-green-600",
        keywords: ["Automation", "Direct Sales", "High Conversion"]
    },
    {
        title: "UGC & Product Ads",
        description: "High-impact product photography and User Generated Content that builds instant trust and dominates social feeds.",
        href: "/services/ugc-product-ads",
        icon: <FileText className="w-10 h-10" />,
        color: "bg-red-600",
        keywords: ["Creative Ads", "Photography", "Trust Building"]
    },
    {
        title: "Digital Marketing",
        description: "Aggressive SEO and PPC strategies to dominate search results and crush your competition in the digital landscape.",
        href: "/services/digital-marketing-bangalore",
        icon: <Share2 className="w-10 h-10" />,
        color: "bg-pink-600",
        keywords: ["SEO", "PPC", "Market Growth"]
    },
    {
        title: "AI & Call Agents",
        description: "Voice AI and intelligent automation that handles inquiries 24/7 with human-like precision and efficiency.",
        href: "/services/ai-call-agents-bangalore",
        icon: <Phone className="w-10 h-10" />,
        color: "bg-indigo-600",
        keywords: ["Voice AI", "24/7 Support", "Automation"]
    },
    {
        title: "Social Media Management",
        description: "End-to-end management of your social presence to build brand authority and deep loyalty with your audience.",
        href: "/services/social-media-management",
        icon: <Target className="w-10 h-10" />,
        color: "bg-orange-600",
        keywords: ["Brand Authority", "Ads", "Engagement"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Services Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-gray-900 text-white text-center">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-brand-orange mb-8 mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Specialized Digital Growth Solutions
                    </m.div>

                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8"
                    >
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white">Digital</span> <br />
                        Solutions.
                    </m.h1>

                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        We provide a comprehensive suite of digital growth services designed to help Bangalore businesses dominate their industries.
                    </m.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    href={service.href}
                                    className="group h-full bg-white p-10 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 block"
                                >
                                    <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-black text-brand-blue mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed font-medium">{service.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.keywords.map(kw => (
                                            <span key={kw} className="text-[10px] font-black px-3 py-1 bg-gray-100 text-gray-500 rounded-lg uppercase tracking-widest group-hover:bg-brand-blue/5 group-hover:text-brand-blue transition-colors">
                                                {kw}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-brand-blue font-black gap-2 mt-auto">
                                        Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
