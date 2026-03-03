"use client";

import { m } from "framer-motion";
import { CheckCircle2, Target, Rocket, Heart, Shield, Award, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const values = [
        {
            title: "Performance First",
            desc: "If it's not fast, it's not finished. We prioritize speed and efficiency in every line of code we write.",
            icon: <Rocket className="w-8 h-8 text-brand-orange" />
        },
        {
            title: "Radical Transparency",
            desc: "No jargon, no hidden fees. We provide clear reporting and straight talk about your business growth.",
            icon: <Shield className="w-8 h-8 text-brand-blue-light" />
        },
        {
            title: "Client-Centric Growth",
            desc: "We don't just build websites; we build partnerships. Your success is the only metric that matters to us.",
            icon: <Heart className="w-8 h-8 text-red-500" />
        }
    ];

    const stats = [
        { label: "Successful Projects", value: "150+" },
        { label: "Average ROI Increase", value: "300%" },
        { label: "Coffee Consumed", value: "Infinite" },
        { label: "Happy Clients", value: "100%" }
    ];

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Premium Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-hero-bg">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px]" />
                    <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-bold text-brand-blue mb-8"
                    >
                        <Award className="w-4 h-4 text-brand-orange" />
                        The #1 Choice for Bangalore Startups
                    </m.div>

                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-brand-blue tracking-tight leading-[0.9] mb-8"
                    >
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">Digital Engines.</span>
                    </m.h1>

                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        We’re not just another digital agency. We’re a team of engineers and strategists dedicated to turning Bangalore's ambitious brands into market leaders.
                    </m.p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:py-32">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <m.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-brand-orange-text font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Story</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 tracking-tight">
                            Born in the Silicon Valley <br /> of India.
                        </h3>
                        <div className="space-y-6 text-lg text-gray-600 font-medium">
                            <p>
                                Triuss was founded with one clear mission: to solve the "static website" problem. We saw thousands of local businesses in Bangalore spending heavily on websites that looked pretty but didn't actually grow their business.
                            </p>
                            <p>
                                We decided to change that. By combining <strong>cutting-edge software engineering</strong> with <strong>data-driven SEO</strong>, we build digital assets that work harder than any salesperson.
                            </p>
                            <p>
                                Today, we are proud to be Bangalore's #1 digital growth partner, helping brands in HSR Layout, Indiranagar, and beyond dominate their markets.
                            </p>
                        </div>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=800&q=75"
                                alt="Triuss Strategy Session"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-8 -left-8 bg-brand-blue p-8 rounded-[30px] shadow-2xl text-white">
                            <div className="text-4xl font-black mb-1">5+</div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Growth</div>
                        </div>
                    </m.div>
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-12 rounded-[40px] hover:bg-white/10 transition-all group"
                    >
                        <Target className="w-12 h-12 text-brand-orange mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-black mb-6">Our Mission</h3>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
                            To empower 1,000 businesses in South India with high-performance digital ecosystems that prioritize revenue growth over vanity metrics.
                        </p>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-12 rounded-[40px] hover:bg-white/10 transition-all group"
                    >
                        <Rocket className="w-12 h-12 text-brand-blue-light mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-black mb-6">Our Vision</h3>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
                            To be the global benchmark for "Growth Engineering"—where tech and strategy merge to create unbreakable business momentum.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-6 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-6">What We Stand For.</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">The principles that guide every pixel we design and every line of code we ship.</p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="mb-6">{v.icon}</div>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">{v.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">{v.desc}</p>
                        </m.div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-gray-100 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-brand-blue mb-2 tracking-tight">{s.value}</div>
                            <div className="text-xs font-bold text-brand-orange-text uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-24 px-6 md:py-32 bg-brand-blue text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
                        Let’s Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">Growth Engine.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/70 mb-12 font-medium">
                        Ready to stop guessing and start growing? Join the 150+ businesses that have chosen Triuss as their unfair digital advantage.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/#contact" className="btn-primary px-10 py-5 text-xl flex items-center justify-center gap-2 group">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/services" className="px-10 py-5 text-xl border-2 border-white/20 rounded-full hover:bg-white/10 transition-all font-bold">
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
