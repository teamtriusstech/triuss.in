import { Mail, MessageCircle, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-6 md:pt-8 pb-8 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mb-6 md:mb-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Triuss Digital Growth Agency Bangalore - Logo"
                width={48}
                height={48}
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="text-2xl md:text-3xl font-black text-brand-blue tracking-tight group-hover:text-brand-blue-light transition-colors">
              Triuss
            </span>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-medium">
            Helping businesses in Bangalore grow with comprehensive digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-brand-blue font-bold mb-3 md:mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600 font-medium">
            <li><Link href="/" className="hover:text-brand-orange transition-colors duration-200 block">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-orange transition-colors duration-200 block">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-brand-orange transition-colors duration-200 block">Blog</Link></li>
            <li><Link href="/services" className="hover:text-brand-orange transition-colors duration-200 block">Services</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-brand-blue font-bold mb-3 md:mb-4 tracking-wide uppercase text-sm">Services</h4>
          <ul className="space-y-1.5 text-sm text-gray-600 font-medium">
            <li><Link href="/services/web-development-bangalore" className="hover:text-brand-blue transition-colors duration-200 block">Web App Development</Link></li>
            <li><Link href="/services/mobile-app-development" className="hover:text-brand-blue transition-colors duration-200 block">Mobile App Development</Link></li>
            <li><Link href="/services/ecommerce-solutions-bangalore" className="hover:text-brand-blue transition-colors duration-200 block">E-Commerce Sites</Link></li>
            <li><Link href="/services/whatsapp-commerce-bangalore" className="hover:text-brand-blue transition-colors duration-200 block">WhatsApp E-commerce</Link></li>
            <li><Link href="/services/ugc-product-ads" className="hover:text-brand-blue transition-colors duration-200 block">UGC & Product Ads</Link></li>
            <li><Link href="/services/digital-marketing-bangalore" className="hover:text-brand-blue transition-colors duration-200 block">Digital Marketing</Link></li>
            <li><Link href="/services/ai-call-agents-bangalore" className="hover:text-brand-blue transition-colors duration-200 block">AI & Call Agents</Link></li>
            <li><Link href="/services/social-media-management" className="hover:text-brand-blue transition-colors duration-200 block">Social Media Management</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-brand-blue font-bold mb-3 md:mb-4 tracking-wide uppercase text-sm">Connect</h4>
          <div className="flex gap-4">
            <a
              href="mailto:teamtriuss@gmail.com"
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] transition-all duration-300 text-[#EA4335] shadow-sm"
              aria-label="Email Us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/trii.uss?igsh=MXJmY2JiajZ1MXlzeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300 text-[#E4405F] shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918431860448"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 text-[#25D366] shadow-sm"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 md:pt-6 border-t border-gray-100 text-center">
        <p className="text-gray-600 text-xs md:text-sm">
          © {new Date().getFullYear()} Triuss. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
