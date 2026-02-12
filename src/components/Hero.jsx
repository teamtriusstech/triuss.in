import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
<<<<<<< HEAD
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
=======

export default function Hero() {
  return (
    <section className="bg-hero-bg pt-16 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <span className="text-brand-blue font-bold text-lg mb-4 block">~#1 Digital Growth Partner in Bangalore</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Empowering <br />
            Businesses in <br />
            <span className="relative inline-block mt-2">
              <span className="text-brand-blue">Bangalore to Scale</span>
              <svg className="absolute -top-4 -right-10 w-10 h-10 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l4 4m0 0l-4 4m4-4H0" transform="translate(8,0)" />
                <path d="M20 4l-4 4m0 0l4 4m-4-4h12" transform="translate(-8,0)" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg text-base md:text-xl leading-relaxed">
            Every successful business starts with a bold vision. At Triuss, we specialize in turning that vision into a digital powerhouse. We provide end-to-end solutions from **high-converting website development** and **performance-driven SEO** to automated business systems that help Bangalore enterprises dominate their local and global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="btn-primary text-center">
              Get Your Free Consultation →
            </Link>
          </div>

          {/* Decorative Scribble - Hidden on very small screens to prevent overlap */}
          <svg className="absolute bottom-[-100px] left-[20px] w-[120px] h-[60px] hidden md:block" viewBox="0 0 100 50" fill="none" stroke="#1a1a2e" strokeWidth="2">
            <path d="M10 40 Q 30 10, 50 30 T 90 20" strokeLinecap="round" />
            <path d="M85 15 L 90 20 L 85 25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <div className="relative mt-8 md:mt-0">
          {/* Brand Blue Decorative Block */}
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-full h-full bg-brand-blue z-0 rounded-sm"></div>
          {/* Black Decorative Block */}
          <div className="absolute top-4 -right-2 md:top-8 md:-right-4 w-3/4 h-3/4 bg-gray-900 z-0 rounded-sm opacity-90"></div>
          {/* Main Image Container */}
          <div className="relative z-10 border-4 border-white shadow-2xl overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format"
              alt="Triuss Digital Marketing experts in Bangalore collaborating on custom software development and search engine optimization strategies for business growth."
              width={800}
              height={600}
              priority
              quality={70}
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 390px) 390px, (max-width: 640px) 640px, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
>>>>>>> origin/main
      </div>
    </section>
  );
}
