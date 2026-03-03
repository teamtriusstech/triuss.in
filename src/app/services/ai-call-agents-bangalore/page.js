"use client";

import { Mic, Cpu, MessageSquare, Zap, Sparkles, Phone, ArrowRight, CheckCircle2, ShieldCheck, Globe, Clock, BarChart3, Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function AICallAgentsPage() {
    const stats = [
        { label: "RESOLUTION RATE", value: "85%+", icon: <CheckCircle2 className="w-5 h-5" /> },
        { label: "COST SAVINGS", value: "60%", icon: <Zap className="w-5 h-5" /> },
        { label: "AVAILABILITY", value: "24/7", icon: <Clock className="w-5 h-5" /> },
    ];

    const features = [
        {
            title: "Natural Voice AI",
            desc: "Human-like conversational agents that can handle complex inquiries with empathy and precision.",
            icon: <Mic className="w-6 h-6" />,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "24/7 Front Desk",
            desc: "Never miss a lead. Your AI agents handle calls, book appointments, and answer FAQs around the clock.",
            icon: <Phone className="w-6 h-6" />,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "CRM Integration",
            desc: "Every call is logged, summarized, and synced directly with your existing CRM system.",
            icon: <Cpu className="w-6 h-6" />,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Multi-Language",
            desc: "Support your customers in English, Hindi, Kannada, and more with fluent local accents.",
            icon: <Globe className="w-6 h-6" />,
            color: "text-orange-600",
            bg: "bg-orange-50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <main className="min-h-screen bg-white font-sans antialiased text-[#00122E]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-36 md:pb-16 px-6 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <m.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="lg:w-1/2 text-left"
                        >
                            <m.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                <Sparkles className="w-3 h-3" />
                                Voice AI & Automation
                            </m.div>

                            <m.h1
                                variants={itemVariants}
                                className="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter leading-[0.95] mb-6"
                            >
                                AI Call <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Center.</span>
                            </m.h1>

                            <m.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed font-medium"
                            >
                                Scale your customer support and sales without hiring a single person.
                                <span className="text-brand-blue font-bold"> Human-like Voice AI</span> that closes deals 24/7.
                            </m.p>

                            <m.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                                <Link href="/#contact" className="btn-primary flex items-center justify-center gap-3 px-10 py-4 !bg-brand-blue !border-brand-blue hover:scale-105 transition-transform w-full sm:w-auto">
                                    Book a Demo
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-brand-blue">60%</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">OpEx Reduction</span>
                                </div>
                            </m.div>
                        </m.div>

                        <m.div
                            initial={{ opacity: 0, scale: 0.98, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 aspect-[16/10] border border-gray-100 group">
                                <Image
                                    src="/images/ai_agents_new.jpg"
                                    alt="AI Call Agent Bangalore - Custom Multilingual Voice Bots & Automation"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/40 to-transparent h-1/2" />
                            </div>
                        </m.div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#00122E] py-8 px-6"
            >
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 md:gap-0">
                    {stats.map((stat, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1 flex-1 min-w-[120px]"
                        >
                            <span className="text-3xl font-black text-white">{stat.value}</span>
                            <span className="text-[10px] font-bold text-white/30 tracking-[0.2em]">{stat.label}</span>
                        </m.div>
                    ))}
                </div>
            </m.div>

            {/* Features Grid */}
            <section className="py-16 md:py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue tracking-tight mb-4">Core Capabilities.</h2>
                        <p className="text-lg text-gray-500 font-medium max-w-2xl">Deploy enterprise-grade voice agents that sound and act exactly like your best employees.</p>
                    </m.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feature, i) => (
                            <m.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-[#f9fafb] border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className={`w-10 h-10 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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

            {/* How It Works */}
            <section className="py-16 md:py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-6 leading-tight">
                            The Future of <br />
                            <span className="text-blue-600">Client Support.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Instant response to every inbound call",
                                "Zero wait times for customers",
                                "Automated lead qualification & booking",
                                "Continuous learning from call history"
                            ].map((item, i) => (
                                <m.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-lg font-bold text-brand-blue"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    {item}
                                </m.li>
                            ))}
                        </ul>
                    </m.div>
                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-[#00122E] p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Bot className="w-32 h-32 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-black mb-6">AI Beyond Chat.</h3>
                            <p className="text-gray-400 font-medium leading-relaxed mb-10 text-lg">
                                Chatbots are just the beginning. Our Voice AI can handle tone, intent, and local nuances,
                                providing a premium experience that traditional call centers simply cannot match.
                            </p>
                            <Link href="/#contact" className="btn-primary !bg-blue-600 !border-blue-600 hover:scale-105 transition-all text-sm">
                                Explore AI Agents
                            </Link>
                        </div>
                    </m.div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
