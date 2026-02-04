"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-10 md:py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto md:mx-0"
        >
          {/* Red Decorative Lines */}
          <svg className="absolute -top-6 -left-3 w-12 h-12 text-red-accent" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="10" y1="10" x2="30" y2="5" strokeLinecap="round" />
            <line x1="5" y1="25" x2="25" y2="15" strokeLinecap="round" />
            <line x1="15" y1="40" x2="30" y2="25" strokeLinecap="round" />
          </svg>

          {/* Orange Decorative Block */}
          <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 bg-orange-500 -z-10 opacity-20"></div>

          {/* Main Image */}
          <div className="relative z-10">
            <Image
              src="/images/about_team_stack.png"
              alt="Triuss Team collaborating on tech stack and digital strategy for Bangalore businesses"
              width={500}
              height={400}
              className="w-full h-auto shadow-xl rounded-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-red-accent font-bold text-2xl md:text-3xl mb-4 block">~About Us</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Triuss Does?
          </h3>
          <p className="text-gray-600 mb-4 text-sm md:text-lg leading-relaxed">
            Triuss was founded to empower forward-thinking businesses in <span className="text-red-accent font-medium">Bangalore</span> that demand clarity and results. We partner with business leaders to build robust <span className="text-red-accent font-medium">online ecosystems</span> and streamline operations using <span className="text-red-accent font-medium">cutting-edge digital solutions</span>.
          </p>
          <p className="text-gray-600 mb-6 text-sm md:text-lg leading-relaxed">
            Many organizations struggle with underperforming websites and limited search visibility. Triuss unifies essential services under one roof—from <span className="text-red-accent font-medium">custom web development</span> to integrated business systems, we help you <span className="text-red-accent font-medium">scale with confidence</span>.
          </p>
          <Link href="/#services" className="btn-primary py-2 px-6 text-sm inline-block">
            View Our Services ▶
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
