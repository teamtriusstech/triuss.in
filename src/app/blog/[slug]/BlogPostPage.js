"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { Calendar, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogPostPage({ post, children }) {
    if (!post) return null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.frontmatter.title,
        "image": post.frontmatter.coverImage,
        "datePublished": post.frontmatter.date,
        "author": {
            "@type": "Organization",
            "name": "Triuss Digital",
            "url": "https://www.triuss.in"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Triuss",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.triuss.in/images/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.triuss.in/blog/${post.slug}`
        },
        "description": post.frontmatter.excerpt
    };

    return (
        <main className="overflow-x-hidden">

            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Article Header */}
            <m.article className="pt-32 md:pt-48 pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-brand-blue font-black hover:text-brand-orange transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-widest inline-block border border-brand-orange/10">
                                {post.frontmatter.category}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-gray-200" />
                            <span className="text-xs font-black text-gray-400 uppercase tracking-tighter">7 Min Read</span>
                        </div>

                        <h1 className="text-4xl md:text-8xl font-black text-brand-blue tracking-tight leading-[1] md:leading-[0.9] mb-12">
                            {post.frontmatter.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 py-8 border-y border-gray-100 mb-16">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-black shadow-lg">T</div>
                                <div>
                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Written by</div>
                                    <div className="text-sm font-black text-brand-blue">{post.frontmatter.author}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-orange">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Published on</div>
                                    <div className="text-sm font-black text-brand-blue">
                                        {new Date(post.frontmatter.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </m.div>

                    {/* Featured Image */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[350px] md:h-[650px] rounded-[60px] overflow-hidden shadow-2xl mb-24 group"
                    >
                        <Image
                            src={post.frontmatter.coverImage}
                            alt={post.frontmatter.title}
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent" />
                    </m.div>

                    {/* Content Wrapper */}
                    <div className="relative">
                        {/* Social Floating (Desktop) */}
                        <div className="hidden xl:block absolute -left-32 top-0 sticky top-48 h-fit space-y-4">
                            {[
                                { icon: <Facebook className="w-5 h-5" />, color: "text-gray-400 hover:text-[#1877F2]" },
                                { icon: <Twitter className="w-5 h-5" />, color: "text-gray-400 hover:text-[#1DA1F2]" },
                                { icon: <Linkedin className="w-5 h-5" />, color: "text-gray-400 hover:text-[#0A66C2]" },
                            ].map((social, i) => (
                                <button key={i} className={`p-4 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all ${social.color}`}>
                                    {social.icon}
                                </button>
                            ))}
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <div className="prose prose-xl md:prose-2xl prose-brand max-w-none prose-headings:text-brand-blue prose-p:text-gray-700 md:prose-p:text-xl md:prose-p:leading-relaxed">
                                {children}
                            </div>
                        </div>
                    </div>

                    {/* Post Footer/CTA */}
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-10 md:p-20 rounded-[60px] bg-gray-50 border border-gray-100 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
                        <h2 className="text-2xl md:text-5xl font-black text-brand-blue mb-8 relative z-10 lg:px-12">
                            Found this insight valuable? <br />
                            <span className="text-brand-orange">Let's build your success together.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link href="/#contact" className="btn-primary px-10 py-5 text-xl">Get Free Audit</Link>
                            <Link href="/services" className="btn-white px-10 py-5 text-xl">Our Services</Link>
                        </div>
                    </m.div>
                </div>
            </m.article>

        </main>
    );
}
