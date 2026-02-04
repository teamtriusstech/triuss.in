"use client";

import { Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="bg-hero-bg border-b border-gray-300 px-6 py-4 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 h-10 md:w-48 md:h-16">
              <Image
                src="/images/triusslogo.png"
                alt="Triuss Digital Growth Agency Bangalore - Logo"
                fill
                sizes="(max-width: 768px) 128px, 192px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-red-accent transition-colors flex items-center gap-1"
              >
                <span>•</span> {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="p-2 hover:bg-gray-200 rounded-full transition" aria-label="Search Services">
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          <button
            className="p-2 hover:bg-gray-200 rounded-full transition md:hidden"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>

          <Link href="/#contact" className="hidden md:block btn-primary text-sm">
            Partner with Us →
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[72px] bg-white z-[90] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-gray-800 hover:text-red-accent py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-primary text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started →
          </Link>
        </div>
      </div>
    </nav>
  );
}
