"use client";

import { m } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Sandeep K.",
        role: "Director, Suraksha Hospital",
        content: "Triuss redesigned our patient portal and optimized our local search presence. We've seen a 40% increase in online appointments. Their healthcare-focused SEO is exceptional.",
        initials: "SH",
        color: "bg-red-50 text-red-600",
        tags: ["Web Dev", "Healthcare SEO"]
    },
    {
        name: "Rahul Mehra",
        role: "Operations Head, Avant Enterprise",
        content: "The enterprise solutions provided by Triuss helped us scale our digital operations across three cities. Their attention to detail and robust web architecture are why we trust them.",
        initials: "AE",
        color: "bg-blue-50 text-blue-600",
        tags: ["Enterprise App", "UI/UX"]
    },
    {
        name: "Sanya Gupta",
        role: "Founder, Kunafa and Creams",
        content: "Our dessert brand needed a fresh, vibrant online look and Triuss delivered exactly that. The integration of our social media and new web menu has made ordering seamless for our customers.",
        initials: "KC",
        color: "bg-orange-50 text-orange-600",
        tags: ["Branding", "E-commerce"]
    }
];



export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 px-6 bg-gray-50 overflow-hidden relative" id="testimonials">
            {/* Visual Decor */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -ml-32 -mt-32" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mb-32" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-bold text-brand-orange-text mb-8"
                    >
                        <Star className="w-4 h-4 fill-brand-orange" />
                        Voted #1 Digital Agency by Local Clients
                    </m.div>
                    <m.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-brand-blue tracking-tight leading-[0.9] mb-8"
                    >
                        What the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">Leaders</span> Say.
                    </m.h2>
                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto font-medium"
                    >
                        From startups to established enterprises, we’ve helped Bangalore's brightest businesses dominate the digital landscape.
                    </m.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group flex flex-col h-full"

                        >
                            <div className="absolute top-8 right-10 opacity-10 group-hover:scale-110 group-hover:text-brand-orange transition-all duration-300">
                                <Quote className="w-16 h-16" />
                            </div>

                            <div className="flex gap-1 mb-6 text-brand-orange">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-brand-orange" />
                                ))}
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-50 pt-8 mt-auto">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg border-2 border-white shadow-sm ${t.color}`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <h3 className="font-black text-brand-blue">{t.name}</h3>
                                    <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-6">
                                {t.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-black px-3 py-1 bg-brand-blue/5 text-brand-blue rounded-lg uppercase tracking-tighter">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </m.div>
                    ))}
                </div>

                {/* Brand Indicators - Infinite Marquee */}
                <div className="mt-24 pt-12 border-t border-gray-100 overflow-hidden relative">
                    <m.div
                        className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
                        animate={{
                            x: [0, -1200]
                        }}
                        transition={{
                            duration: 25,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {[
                            "ASPL",
                            "AVANT ENTERPRISE",
                            "RESEARCH VISIONS",
                            "BLUE MIND SURF SCHOOL",
                            "SURAKSHA HOSPITAL",
                            "ANGELS EMPYREAN SCHOOL",
                            "KUNAFA AND CREAMS",
                            "EIGHT HANDS",
                            // Repeat for seamless loop
                            "ASPL",
                            "AVANT ENTERPRISE",
                            "RESEARCH VISIONS",
                            "BLUE MIND SURF SCHOOL",
                            "SURAKSHA HOSPITAL",
                            "ANGELS EMPYREAN SCHOOL",
                            "KUNAFA AND CREAMS",
                            "EIGHT HANDS"
                        ].map((name, idx) => (
                            <div
                                key={idx}
                                className="text-xl md:text-2xl font-black text-black tracking-tighter hover:opacity-70 transition-all duration-300 cursor-default uppercase"
                            >
                                {name}
                            </div>

                        ))}
                    </m.div>
                    {/* Fade Edges */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
                </div>
            </div>
        </section>
    );
}

