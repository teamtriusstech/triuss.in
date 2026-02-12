<<<<<<< HEAD
import { Mail, MessageCircle, Instagram } from "lucide-react";
=======
import { Mail, MessageCircle } from "lucide-react";
>>>>>>> origin/main
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-50 py-12 md:py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mb-10 md:mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Triuss Digital Growth Agency Bangalore - Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <span className="text-2xl md:text-3xl font-black text-brand-blue tracking-tight group-hover:text-brand-blue-light transition-colors">
              Triuss
            </span>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-medium">
=======
    <footer className="bg-dark py-8 md:py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 mb-6 md:mb-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
          <div className="relative w-32 h-10 md:w-48 md:h-16">
            <Image
              src="/images/triuss-logo.svg"
              alt="Triuss Digital Growth Agency Bangalore - Logo"
              fill
              sizes="(max-width: 768px) 128px, 192px"
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
>>>>>>> origin/main
            Helping businesses in Bangalore grow with comprehensive digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
<<<<<<< HEAD
          <h4 className="text-brand-blue font-bold mb-4 md:mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-600 font-medium">
            <li><Link href="/" className="hover:text-brand-orange transition-colors duration-200 block">Home</Link></li>
            <li><Link href="/#about" className="hover:text-brand-orange transition-colors duration-200 block">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-brand-orange transition-colors duration-200 block">Services</Link></li>
            <li><Link href="/#work" className="hover:text-brand-orange transition-colors duration-200 block">Our Work</Link></li>
=======
          <h4 className="text-white font-bold mb-2 md:mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-brand-blue transition">Home</Link></li>
            <li><Link href="/#about" className="hover:text-brand-blue transition">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-brand-blue transition">Services</Link></li>
            <li><Link href="/#work" className="hover:text-brand-blue transition">Our Work</Link></li>
>>>>>>> origin/main
          </ul>
        </div>

        {/* Services */}
        <div>
<<<<<<< HEAD
          <h4 className="text-brand-blue font-bold mb-4 md:mb-6 tracking-wide uppercase text-sm">Services</h4>
          <ul className="space-y-3 text-sm text-gray-600 font-medium">
            <li><Link href="/#website-development" className="hover:text-brand-blue transition-colors duration-200 block">Web Development</Link></li>
            <li><Link href="/#seo-services" className="hover:text-brand-blue transition-colors duration-200 block">SEO & Google Business</Link></li>
            <li><Link href="/#social-media-marketing" className="hover:text-brand-blue transition-colors duration-200 block">Digital Marketing</Link></li>
            <li><Link href="/#whatsapp-commerce" className="hover:text-brand-blue transition-colors duration-200 block">WhatsApp Business</Link></li>
=======
          <h4 className="text-white font-bold mb-2 md:mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/#website-development" className="hover:text-brand-blue transition">Web Development</Link></li>
            <li><Link href="/#seo-services" className="hover:text-brand-blue transition">SEO & Google Business</Link></li>
            <li><Link href="/#social-media-marketing" className="hover:text-brand-blue transition">Digital Marketing</Link></li>
            <li><Link href="/#whatsapp-commerce" className="hover:text-brand-blue transition">WhatsApp Business</Link></li>
>>>>>>> origin/main
          </ul>
        </div>

        {/* Socials */}
        <div>
<<<<<<< HEAD
          <h4 className="text-brand-blue font-bold mb-4 md:mb-6 tracking-wide uppercase text-sm">Connect</h4>
          <div className="flex gap-4">
            <a
              href="mailto:teamtriuss@gmail.com"
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 text-gray-600 shadow-sm"
=======
          <h4 className="text-white font-bold mb-2 md:mb-4">Connect</h4>
          <div className="flex gap-4">
            <a
              href="mailto:teamtriuss@gmail.com"
              className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-brand-blue transition text-white"
>>>>>>> origin/main
              aria-label="Email Us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
<<<<<<< HEAD
              href="https://www.instagram.com/trii.uss?igsh=MXJmY2JiajZ1MXlzeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300 text-gray-600 shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918431860448"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 text-gray-600 shadow-sm"
=======
              href="https://wa.me/918431860448"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-[#25D366] transition text-white"
>>>>>>> origin/main
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 md:pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs md:text-sm">
          © {new Date().getFullYear()} Triuss. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
