import { Mail, MessageCircle, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
            Helping businesses in Bangalore grow with comprehensive digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-brand-blue font-bold mb-4 md:mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-600 font-medium">
            <li><Link href="/" className="hover:text-brand-orange transition-colors duration-200 block">Home</Link></li>
            <li><Link href="/#about" className="hover:text-brand-orange transition-colors duration-200 block">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-brand-orange transition-colors duration-200 block">Services</Link></li>
            <li><Link href="/#work" className="hover:text-brand-orange transition-colors duration-200 block">Our Work</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-brand-blue font-bold mb-4 md:mb-6 tracking-wide uppercase text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-gray-600 font-medium">
            <li><Link href="/#website-development" className="hover:text-brand-blue transition-colors duration-200 block">Website Development</Link></li>
            <li><Link href="/#ecommerce-solutions" className="hover:text-brand-blue transition-colors duration-200 block">E-Commerce Solutions</Link></li>
            <li><Link href="/#whatsapp-commerce" className="hover:text-brand-blue transition-colors duration-200 block">WhatsApp Commerce</Link></li>
            <li><Link href="/#seo-services" className="hover:text-brand-blue transition-colors duration-200 block">SEO Services</Link></li>
            <li><Link href="/#google-business-profile" className="hover:text-brand-blue transition-colors duration-200 block">Google Business Profile</Link></li>
            <li><Link href="/#social-media-marketing" className="hover:text-brand-blue transition-colors duration-200 block">Social Media Marketing</Link></li>
            <li><Link href="/#call-agents" className="hover:text-brand-blue transition-colors duration-200 block">AI & Call Agents</Link></li>
            <li><Link href="/#billing-management" className="hover:text-brand-blue transition-colors duration-200 block">Billing & Management</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-brand-blue font-bold mb-4 md:mb-6 tracking-wide uppercase text-sm">Connect</h4>
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

      <div className="max-w-7xl mx-auto pt-6 md:pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs md:text-sm">
          © {new Date().getFullYear()} Triuss. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
