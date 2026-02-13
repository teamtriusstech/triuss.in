"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Section (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:block relative group perspective-1000"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Triuss Digital Growth Agency team collaborating"
                width={800}
                height={900}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-brand-blue/10 rounded-3xl -z-10 transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="absolute -inset-4 bg-gray-100 rounded-3xl -z-20 transform -rotate-2 group-hover:-rotate-1 transition-transform duration-500"></div>

            {/* Floating Stats Badge */}
            <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-xs animate-float">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">100%</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Client Satisfaction</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-snug">
                Delivering measurable results and digital excellence for every partner.
              </p>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-0.5 w-10 bg-brand-blue"></span>
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Building <span className="text-brand-blue relative inline-block">
                Digital Success
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-blue/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> for Local Brands.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-600 mb-6 text-lg leading-relaxed text-justify md:text-left">
              Born in the heart of <strong>Bangalore</strong>, Triuss isn't just a web design agency—we are your strategic digital partner. We understand that in a city buzzing with innovation, standing out requires more than just a website; it requires a complete <strong>digital ecosystem</strong>.
            </p>

            {/* Mobile Image (Visible primarily on Mobile/Tablet) */}
            <div className="block lg:hidden relative mb-8 my-6 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Triuss Team Layout"
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Paragraph 2 */}
            <p className="text-gray-600 mb-8 text-lg leading-relaxed text-justify md:text-left">
              Our team blends creativity with technical expertise to craft solutions that don't just look good but perform exceptionally. From the first line of code to the final pixel, every decision is driven by one goal: <strong>your business growth</strong>.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">Custom-Engineered Websites</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">Data-Driven SEO Strategies</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">Scalable Digital Solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">Performance Optimized</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#services" className="btn-primary group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-all">
                Explore Our Expertise
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
