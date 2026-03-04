"use client";

import { Feature } from "@/components/ui/feature-section-with-grid";
import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a]">
      <Feature />

      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-6 px-12 py-6 rounded-full bg-brand-orange text-white font-black text-xl md:text-2xl shadow-[0_20px_50px_rgba(255,153,0,0.3)] hover:shadow-[0_20px_60px_rgba(255,153,0,0.5)] hover:scale-105 transition-all duration-500"
          >
            <span>Start Your Transformation</span>
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white group-hover:text-brand-orange transition-all duration-500">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
