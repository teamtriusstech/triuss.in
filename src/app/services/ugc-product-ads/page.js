"use client";

import { Video, Users, Zap, TrendingUp, Sparkles, Layout, Globe, ArrowRight, CheckCircle2, ShieldCheck, Camera, Play, Eye, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function UGCAdsPage() {
    const stats = [
        { label: "AVG CTR", value: "4.2%", icon: <Eye className="w-5 h-5" /> },
        { label: "HOOK RATE", value: "32%", icon: <Zap className="w-5 h-5" /> },
        { label: "CONVERSION LIFT", value: "2.8x", icon: <TrendingUp className="w-5 h-5" /> },
    ];

    const features = [
        {
            title: "Creator Network",
            desc: "Access to a diverse pool of creators who produce authentic, high-converting content for your brand.",
            icon: <Users className="w-6 h-6" />,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Viral Scripting",
            desc: "Data-backed scripts designed to grab attention within the first 3 seconds and drive action.",
            icon: <Video className="w-6 h-6" />,
            color: "text-pink-600",
            bg: "bg-pink-50"
        },
        {
            title: "High-Impact Edits",
            desc: "Professional video editing optimized for TikTok, Reels, and YouTube Shorts algorithms.",
            icon: <Zap className="w-6 h-6" />,
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            title: "Ad Account Audit",
            desc: "We don't just make ads; we optimize your entire funnel to ensure the content converts.",
            icon: <Sparkles className="w-6 h-6" />,
            color: "text-purple-600",
            bg: "bg-purple-50"
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
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                <Sparkles className="w-3 h-3" />
                                UGC & Performance Creative
                            </m.div>

                            <m.h1
                                variants={itemVariants}
                                className="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter leading-[0.95] mb-6"
                            >
                                UGC & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Performance.</span>
                            </m.h1>

                            <m.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed font-medium"
                            >
                                Stop making ads. Start making stories. We produce high-converting
                                <span className="text-brand-blue font-bold"> UGC & Product Video</span> that kills your CAC.
                            </m.p>

                            <m.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                                <Link href="/#contact" className="btn-primary flex items-center justify-center gap-3 px-10 py-4 !bg-brand-blue !border-brand-blue hover:scale-105 transition-transform w-full sm:w-auto">
                                    Get Free Hooks
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-brand-blue">2.8x</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avg Conversion Lift</span>
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
                                    src="/images/618b9bd1c3b905496d9d4910_BlogCover.png"
                                    alt="UGC & Product Video Ads Bangalore - High-Converting Performance Content"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/10 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <m.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-600 shadow-xl cursor-pointer"
                                    >
                                        <Play className="w-8 h-8 fill-pink-600 ml-1" />
                                    </m.div>
                                </div>
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
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue tracking-tight mb-4">Content That Converts.</h2>
                        <p className="text-lg text-gray-500 font-medium max-w-2xl">We bridge the gap between creative storytelling and hard-hitting data performance.</p>
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

            {/* Value Section */}
            <section className="py-16 md:py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-6 leading-tight">
                            Real People. <br />
                            <span className="text-pink-600">Real Impact.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Authentic scroll-stopping hooks",
                                "Organic-feel high-production value",
                                "Continuous A/B creative testing",
                                "Full rights and usage ownership"
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
                                <Share2 className="w-32 h-32 text-pink-400" />
                            </div>
                            <h3 className="text-2xl font-black mb-6">Built for Paid Social.</h3>
                            <p className="text-gray-400 font-medium leading-relaxed mb-10 text-lg">
                                We don't just "make videos." We build performance assets designed to lower your CAC and
                                increase your ROAS. Our content is engineered for the TikTok and Meta algorithms.
                            </p>
                            <Link href="/#contact" className="btn-primary !bg-pink-600 !border-pink-600 hover:scale-105 transition-all text-sm">
                                View Performance Ads
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
