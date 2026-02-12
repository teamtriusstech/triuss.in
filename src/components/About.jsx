"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Decorative Backdrops */}
          <div className="absolute top-4 -right-4 w-full h-full bg-gray-100 rounded-3xl -z-10 group-hover:rotate-1 transition-transform duration-500"></div>
          <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-brand-blue/5 rounded-3xl -z-10 group-hover:-rotate-1 transition-transform duration-500"></div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Triuss Digital Growth Agency team in Bangalore"
                width={800}
                height={600}
                quality={90}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] z-20"
            >
              <p className="text-xs font-black text-brand-orange uppercase tracking-widest mb-2">Established 2024</p>
              <p className="text-sm font-bold text-gray-900 leading-tight">Empowering Bangalore Brands to Scale Digitally.</p>
            </motion.div>
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
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-0.5 w-12 bg-brand-blue rounded-full"></span>
            <span className="text-brand-blue font-black uppercase tracking-[0.2em] text-[10px] md:text-sm">The Triuss Story</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Building <span className="text-brand-blue">Digital Success</span> for Local Brands.
          </h2>

          <div className="space-y-6 mb-10 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              Born in the heart of <strong>Bangalore</strong>, Triuss isn't just a web design agency—we are your strategic digital partner. We understand that in a city buzzing with innovation, standing out requires more than just a website; it requires a <strong>digital ecosystem</strong>.
            </p>
            <p>
              We bridge the gap between complex technology and business growth, creating custom-engineered solutions that transform how brands interact with their customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Custom-Engineered Websites",
              "Data-Driven SEO Strategies",
              "Conversion-Focused Design",
              "Scalable Tech Architectures"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm md:text-base font-bold">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#services" className="inline-flex items-center justify-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-brand-orange transition-all duration-300 group shadow-lg shadow-brand-blue/20">
              Explore Our Expertise
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
