"use client";

import { MessageCircle, ShoppingCart, Zap, Layout, CheckCircle2, ArrowRight, Smartphone, TrendingUp, Users, Clock, Sparkles, Filter, MousePointerClick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function WhatsAppCommercePage() {
    const stats = [
        { label: "OPEN RATE", value: "98%", icon: <Users className="w-5 h-5" /> },
        { label: "USER RETENTION", value: "85%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "ROI AVG", value: "12x", icon: <Zap className="w-5 h-5" /> },
    ];

    const features = [
        {
            title: "Custom Web Catalog",
            desc: "A high-performance web app designed to showcase your products with speed and clarity.",
            icon: <Layout className="w-6 h-6" />,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "One-Click Chat Buttons",
            desc: "Every product features a direct WhatsApp button to start instant sales conversations.",
            icon: <MessageCircle className="w-6 h-6" />,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Pre-filled Inquiries",
            desc: "When clicked, WhatsApp opens with the product details already typed out for the buyer.",
            icon: <MousePointerClick className="w-6 h-6" />,
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            title: "Smart Filtering",
            desc: "Let customers find exactly what they want with fast, intuitive category management.",
            icon: <Filter className="w-6 h-6" />,
            color: "text-purple-600",
            bg: "bg-purple-50"
        }
    ];

    return (
        <main className="min-h-screen bg-white font-sans antialiased text-[#00122E]">
            <Navbar />

            {/* Hero Section - Focused on the Catalog Theory */}
            <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 px-6 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-left">
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                <Sparkles className="w-3 h-3" />
                                Custom WhatsApp Shopping Catalogs
                            </m.div>

                            <m.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter leading-[0.95] mb-6"
                            >
                                WhatsApp <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Commerce.</span>
                            </m.h1>

                            <m.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed font-medium"
                            >
                                We build performance-driven web catalogs where every product is just one click away from a
                                <span className="text-brand-blue font-bold"> WhatsApp sale</span>. No complex checkout blocks—just direct human connection.
                            </m.p>

                            <m.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                                <Link href="/#contact" className="btn-primary flex items-center justify-center gap-3 px-10 py-4 !bg-green-600 !border-green-600 hover:scale-105 transition-transform w-full sm:w-auto">
                                    Start Your Catalog
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-brand-blue">1-Tap</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Product Inquiry</span>
                                </div>
                            </m.div>
                        </div>

                        <m.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 aspect-[16/10] border border-gray-100">
                                <Image
                                    src="/images/whatsapp_commerce_new.png"
                                    alt="WhatsApp Commerce Solutions Bangalore - Automated Sales & Support"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600/40 to-transparent h-1/2" />
                            </div>
                        </m.div>
                    </div>
                </div>
            </section>

            {/* Strategy Bar */}
            <div className="bg-[#00122E] py-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 md:gap-0">
                    {stats.map((stat, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-1 flex-1 min-w-[120px]"
                        >
                            <span className="text-3xl font-black text-white">{stat.value}</span>
                            <span className="text-[10px] font-bold text-white/30 tracking-[0.2em]">{stat.label}</span>
                        </m.div>
                    ))}
                </div>
            </div>

            {/* Features Grid */}
            <section className="py-16 md:py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue tracking-tight mb-4">The Catalog Flow.</h2>
                        <p className="text-lg text-gray-500 font-medium max-w-2xl">We bridge the gap between high-end web browsing and the instant engagement of WhatsApp.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feature, i) => (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-[#f9fafb] border border-transparent hover:border-gray-200 transition-all group"
                            >
                                <div className={`w-10 h-10 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-brand-blue mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - The Flow Description */}
            <section className="py-16 md:py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-6 leading-tight">
                            One Click to <br />
                            <span className="text-green-600">Personalized Sales.</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Step 1: Browse", desc: "User visits your custom-built web catalog from search or social." },
                                { title: "Step 2: Selection", desc: "They click the 'Enquire on WhatsApp' button on their favorite product." },
                                { title: "Step 3: Auto-Inquiry", desc: "WhatsApp opens with a pre-written message: 'Hi, I'm interested in [Product Name]...'" },
                                { title: "Step 4: Close", desc: "You receive the message and close the deal instantly in the chat." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="font-black text-green-600 mt-1">{i + 1}.</div>
                                    <div>
                                        <h4 className="font-black text-brand-blue">{step.title}</h4>
                                        <p className="text-gray-500 text-sm font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-[#00122E] p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <MessageCircle className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-black mb-6">Built for D2C Brands.</h3>
                            <p className="text-gray-400 font-medium leading-relaxed mb-10 text-lg">
                                This isn't just a website; it's a funnel. We remove the friction of payment gateways and complex carts,
                                allowing you to build relationships while you sell.
                            </p>
                            <Link href="/#contact" className="btn-primary !bg-green-600 !border-green-600 hover:scale-105 transition-all text-sm">
                                Launch Your Catalog Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
