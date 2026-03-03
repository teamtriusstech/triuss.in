import Image from "next/image";
import { HeroBadges, HeroButtons, HeroFloatingCards } from "./HeroAnimations";

export default function Hero() {
  return (
    <section className="relative bg-hero-bg pt-24 pb-24 md:pt-28 md:pb-32 px-6 overflow-hidden">
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
          <HeroBadges />

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-blue tracking-tight leading-[1.1] md:leading-[1] mb-6 px-1 appearance-none"
          >
            #1 Web Development <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light leading-[1.1] pb-2">
              & Digital Growth
            </span>{" "}
            in Bangalore
          </h1>

          <p
            className="text-lg md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-10"
          >
            We turn bold visions into digital powerhouses with <span className="text-gray-900 font-semibold">high-converting websites</span> and <span className="text-gray-900 font-semibold">expert SEO</span>.
          </p>

          <HeroButtons />
        </div>

        {/* Hero Image Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Triuss Digital Web Development & SEO Agency Bangalore"
              fill
              priority
              loading="eager"
              quality={75}
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
          </div>

          <HeroFloatingCards />
        </div>
      </div>
    </section>
  );
}
