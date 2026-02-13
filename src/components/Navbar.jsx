"use client";

import { Search, Menu, X, ChevronDown, Monitor, ShoppingBag, MessageCircle, MapPin, Share2, Phone, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Website Development", href: "/#website-development", icon: <Monitor className="w-4 h-4" /> },
  { title: "E-Commerce Solutions", href: "/#ecommerce-solutions", icon: <ShoppingBag className="w-4 h-4" /> },
  { title: "WhatsApp Commerce", href: "/#whatsapp-commerce", icon: <MessageCircle className="w-4 h-4" /> },
  { title: "SEO Services", href: "/#seo-services", icon: <Search className="w-4 h-4" /> },
  { title: "Google Business", href: "/#google-business-profile", icon: <MapPin className="w-4 h-4" /> },
  { title: "Digital Marketing", href: "/#social-media-marketing", icon: <Share2 className="w-4 h-4" /> },
  { title: "AI & Call Agents", href: "/#call-agents", icon: <Phone className="w-4 h-4" /> },
  { title: "Billing & Mgmt", href: "/#billing-management", icon: <FileText className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`bg-white/90 backdrop-blur-md py-3 fixed top-0 w-full z-[100] transition-all duration-300 ${isMenuOpen ? '' : 'border-b border-gray-200'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group pl-2 md:pl-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Triuss Digital Growth Agency Bangalore - Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl md:text-3xl font-black text-brand-blue tracking-tight group-hover:text-brand-blue-light transition-colors">
              Triuss
            </span>
          </Link>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:text-brand-blue-light transition-colors flex items-center gap-1">
            Home
          </Link>
          <Link href="/#about" className="hover:text-brand-blue-light transition-colors flex items-center gap-1">
            About
          </Link>

          {/* Desktop Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="hover:text-brand-blue-light transition-colors flex items-center gap-1 cursor-pointer">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl border border-gray-100 mt-4 rounded-xl overflow-hidden py-2"
                >
                  <div className="grid grid-cols-1">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="px-5 py-3 hover:bg-gray-50 flex items-center gap-3 text-gray-700 hover:text-brand-orange transition-all group/item"
                      >
                        <span className="text-brand-blue-light group-hover/item:text-brand-orange transition-colors">{service.icon}</span>
                        <span className="text-xs font-bold">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#work" className="hover:text-brand-blue-light transition-colors flex items-center gap-1">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-brand-blue-light transition-colors flex items-center gap-1">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">


          <button
            className="p-2 hover:bg-gray-200 rounded-full transition md:hidden"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-brand-blue" /> : <Menu className="w-6 h-6 text-brand-blue" />}
          </button>

          <div className="hidden md:block">
            <Link href="/#contact" className="btn-primary text-sm !py-2.5 !px-6 shadow-none hover:shadow-md">
              Partner with Us →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 overflow-y-auto shadow-xl"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 pb-32">
              <Link href="/" className="text-xl font-bold text-brand-blue hover:text-brand-orange py-2 border-b border-gray-100 block" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/#about" className="text-xl font-bold text-brand-blue hover:text-brand-orange py-2 border-b border-gray-100 block" onClick={toggleMenu}>
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full flex justify-between items-center text-xl font-bold text-brand-blue hover:text-brand-orange py-2"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50 rounded-lg mb-2"
                    >
                      <div className="grid grid-cols-1 p-2 gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="p-3 text-sm text-brand-blue font-bold flex items-center gap-3 hover:bg-gray-100 rounded transition hover:text-brand-orange"
                            onClick={toggleMenu}
                          >
                            <span className="text-brand-orange">{service.icon}</span>
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#work" className="text-xl font-bold text-gray-800 hover:text-brand-blue py-2 border-b border-gray-100" onClick={toggleMenu}>
                Our Work
              </Link>
              <Link href="/#contact" className="text-xl font-bold text-gray-800 hover:text-brand-blue py-2 border-b border-gray-100" onClick={toggleMenu}>
                Contact
              </Link>

              <Link
                href="/#contact"
                className="btn-primary text-center mt-6 w-full justify-center"
                onClick={toggleMenu}
              >
                Get Started →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
