"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function BlogListingPage({ posts }) {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Blog Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-brand-orange mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        Insights for Digital Growth
                    </m.div>

                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white">Triuss</span> Blog.
                    </m.h1>

                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        Strategies, trends, and success stories to help your business dominate the digital landscape in Bangalore.
                    </m.p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, idx) => (
                            <m.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col h-full bg-white rounded-[35px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-brand-blue text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-widest shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-10 flex flex-col flex-1">
                                    <div className="flex items-center gap-6 text-xs font-bold text-gray-400 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-brand-orange" />
                                            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-brand-blue" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-black text-brand-blue mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 mb-8 leading-relaxed font-medium line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-brand-blue font-black gap-2 group/btn"
                                        >
                                            Read Article <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </m.article>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
