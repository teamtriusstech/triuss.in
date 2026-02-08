import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

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
      </div>
    </section>
  );
}
