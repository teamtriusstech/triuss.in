import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-hero-bg pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content: Centered */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-brand-blue mb-6 hover:shadow-md transition-shadow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            #1 Digital Growth Partner in Bangalore
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-blue tracking-tight leading-[1] mb-6"
          >
            Scaling <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light leading-[1.1] pb-2">
              Businesses
            </span>{" "}
            in Bangalore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-10"
          >
            We turn bold visions into digital powerhouses with <span className="text-gray-900 font-semibold">high-converting websites</span> and <span className="text-gray-900 font-semibold">data-driven marketing</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/#contact" className="btn-primary group flex items-center justify-center gap-2 text-sm md:text-lg px-5 py-3 md:px-8 md:py-4 transition-all">
              Get Your Free Consultation
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/#work" className="btn-white group flex items-center justify-center gap-2 text-sm md:text-lg px-5 py-3 md:px-8 md:py-4 transition-all">
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format"
              alt="Triuss Digital Team in Bangalore"
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Floating Card 1: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-6 -left-4 md:-bottom-12 md:-left-12 bg-white p-4 md:p-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-[200px] md:max-w-xs"
          >
            <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">300%</div>
              <div className="text-xs text-brand-orange font-bold uppercase tracking-wide">Avg. ROI Growth</div>
            </div>
          </motion.div>

          {/* Floating Card 2: Clients */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -top-6 -right-4 md:-top-12 md:-right-12 bg-white p-4 md:p-6 rounded-xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-full text-brand-blue">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
