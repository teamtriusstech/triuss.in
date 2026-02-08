"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto md:mx-0"
        >
          {/* Brand Blue Decorative Lines */}
          <svg className="absolute -top-6 -left-3 w-12 h-12 text-brand-blue opacity-50" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="10" y1="10" x2="30" y2="5" strokeLinecap="round" />
            <line x1="5" y1="25" x2="25" y2="15" strokeLinecap="round" />
            <line x1="15" y1="40" x2="30" y2="25" strokeLinecap="round" />
          </svg>

          {/* Orange Decorative Block */}
          <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 bg-orange-500 -z-10 opacity-10 rounded-3xl"></div>

          {/* Main Image */}
          <div className="relative z-10 border-8 border-gray-50 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about_team_stack.png"
              alt="Triuss Digital Growth Agency team in Bangalore discussing tech stack, software architecture, and digital marketing strategies for scalable business growth."
              width={600}
              height={500}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-brand-blue font-extrabold text-xl md:text-2xl mb-4 tracking-wider uppercase">~ Who We Are</h2>
          <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            We Build Digital <br /> Ecosystems That Win.
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-xl leading-relaxed">
            Triuss was born in the heart of **Bangalore** with a single mission: to empower local businesses through superior digital engineering. We don't just build websites; we architect comprehensive **online ecosystems** tailored to your specific industry needs. By combining **cutting-edge web development** with data-driven marketing, we ensure your business doesn't just exist online—it thrives.
          </p>
          <p className="text-gray-600 mb-8 text-sm md:text-lg leading-relaxed border-l-4 border-brand-blue pl-6 italic">
            "In today's fast-paced digital economy, being 'online' is a baseline. Being 'optimized' is the competitive edge. Triuss bridges that gap by providing expert-led growth solutions that are scalable, secure, and built for performance."
          </p>
          <div className="flex gap-4">
            <Link href="/#services" className="btn-primary py-3 px-8 text-sm inline-block">
              Explore Our Expertise →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
