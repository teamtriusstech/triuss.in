import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark py-8 md:py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 mb-6 md:mb-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
          <div className="relative w-32 h-10 md:w-48 md:h-16">
            <Image
              src="/images/triusslogo.png"
              alt="Triuss Logo"
              fill
              sizes="(max-width: 768px) 128px, 192px"
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Helping businesses in Bangalore grow with comprehensive digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-2 md:mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-red-accent transition">Home</Link></li>
            <li><Link href="/#about" className="hover:text-red-accent transition">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-red-accent transition">Services</Link></li>
            <li><Link href="/#work" className="hover:text-red-accent transition">Our Work</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-2 md:mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/#website-development" className="hover:text-red-accent transition">Web Development</Link></li>
            <li><Link href="/#seo-services" className="hover:text-red-accent transition">SEO & Google Business</Link></li>
            <li><Link href="/#social-media-marketing" className="hover:text-red-accent transition">Digital Marketing</Link></li>
            <li><Link href="/#whatsapp-commerce" className="hover:text-red-accent transition">WhatsApp Business</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-bold mb-2 md:mb-4">Connect</h4>
          <div className="flex gap-4">
            <a
              href="mailto:teamtriuss@gmail.com"
              className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-red-accent transition text-white"
              aria-label="Email Us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918431860448"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-[#25D366] transition text-white"
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
