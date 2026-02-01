import { Search, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-hero-bg border-b border-gray-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-48 h-16">
              <Image
                src="/images/triusslogo.png"
                alt="Triuss Logo"
                fill
                sizes="192px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/" className="text-red-accent flex items-center gap-1">
              <span className="text-red-accent">•</span> Home
            </Link>
            <Link href="/#about" className="hover:text-gray-900 flex items-center gap-1">
              <span className="">•</span> About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-gray-900 flex items-center gap-1 focus:outline-none">
                <span className="">•</span> Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/#website-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">Website Development</Link>
                  <Link href="/#ecommerce-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">E-Commerce Solutions</Link>
                  <Link href="/#whatsapp-commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">WhatsApp Commerce</Link>
                  <Link href="/#seo-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">SEO Services</Link>
                  <Link href="/#google-business-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">Google Business Profile</Link>
                  <Link href="/#social-media-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">Social Media Marketing</Link>
                  <Link href="/#call-agents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">AI & Call Agents</Link>
                  <Link href="/#billing-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-accent">Billing Systems</Link>
                </div>
              </div>
            </div>
            <Link href="/#contact" className="hover:text-gray-900 flex items-center gap-1">
              <span className="">•</span> Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-gray-200 rounded-full transition" aria-label="Search">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full transition md:hidden" aria-label="Open Menu">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <button className="hidden md:block btn-primary text-sm">
            Contact Us →
          </button>
        </div>
      </div>
    </nav>
  );
}
