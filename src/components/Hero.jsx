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
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-red-accent font-bold text-lg mb-4 block">~#1 Digital Growth Partner in Bangalore</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Empowering<br />
            Businesses in<br />
            <span className="relative inline-block">
              <span className="text-red-accent">Bangalore to Scale</span>
              <svg className="absolute -top-4 -right-8 w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l4 4m0 0l-4 4m4-4H0" transform="translate(8,0)" />
                <path d="M20 4l-4 4m0 0l4 4m-4-4h12" transform="translate(-8,0)" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
            Every business starts with a vision. We turn that vision into a powerful digital reality with website development, SEO, and strategic marketing that delivers real ROI.
          </p>
          <div className="flex gap-4">
            <Link href="/#contact" className="btn-primary">
              Get Your Free Consultation →
            </Link>
          </div>

          {/* Decorative Scribble */}
          <svg className="absolute bottom-[-60px] left-[20px] w-[100px] h-[50px]" viewBox="0 0 100 50" fill="none" stroke="#1a1a2e" strokeWidth="2">
            <path d="M10 40 Q 30 10, 50 30 T 90 20" strokeLinecap="round" />
            <path d="M85 15 L 90 20 L 85 25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <div className="relative">
          {/* Red Decorative Block */}
          <div className="absolute -top-8 -right-8 w-full h-full bg-red-accent z-0"></div>
          {/* Black Decorative Block */}
          <div className="absolute top-8 -right-4 w-3/4 h-3/4 bg-gray-900 z-0"></div>
          {/* Main Image Container */}
          <div className="relative z-10 border-2 border-white">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=75&auto=format"
              alt="Team working"
              width={800}
              height={600}
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
