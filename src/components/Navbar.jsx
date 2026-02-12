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
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
=======
  const dropdownRef = useRef(null);
>>>>>>> origin/main

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
  };

<<<<<<< HEAD
  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Triuss Logo"
                fill
                sizes="48px"
=======
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
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
                src="/images/triuss-logo.svg"
                alt="Triuss Digital Growth Agency Bangalore - Logo"
                fill
                sizes="(max-width: 768px) 128px, 192px"
>>>>>>> origin/main
                className="object-contain"
                priority
              />
            </div>
<<<<<<< HEAD
            <span className="text-2xl md:text-3xl font-black text-brand-blue tracking-tight group-hover:text-brand-orange transition-colors">
              Triuss
            </span>
          </Link>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link href="/#about" className="hover:text-brand-blue transition-colors">
            About
          </Link>

          {/* Desktop Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer">
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
                        <span className="text-brand-blue group-hover/item:text-brand-orange transition-colors">{service.icon}</span>
                        <span className="text-xs font-bold">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#work" className="hover:text-brand-blue transition-colors">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-brand-blue transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden md:inline-flex bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-orange transition-all duration-300">
            Partner with Us
          </Link>

          <button
            className="p-2 hover:bg-gray-100 rounded-full transition md:hidden"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-brand-blue" /> : <Menu className="w-6 h-6 text-brand-blue" />}
          </button>
=======
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-brand-blue transition-colors flex items-center gap-1">
              <span>•</span> Home
            </Link>
            <Link href="/#about" className="hover:text-brand-blue transition-colors flex items-center gap-1">
              <span>•</span> About
            </Link>

            {/* Desktop Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer">
                <span>•</span> Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 mt-2 rounded-lg overflow-hidden py-2"
                  >
                    <div className="grid grid-cols-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3 text-gray-700 hover:text-brand-blue transition-all"
                        >
                          <span className="text-brand-blue">{service.icon}</span>
                          <span className="text-xs font-semibold">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#work" className="hover:text-brand-blue transition-colors flex items-center gap-1">
              <span>•</span> Work
            </Link>
            <Link href="/#contact" className="hover:text-brand-blue transition-colors flex items-center gap-1">
              <span>•</span> Contact
            </Link>
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
>>>>>>> origin/main
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
<<<<<<< HEAD
            className="md:hidden fixed inset-0 top-0 bg-white z-[90] flex flex-col p-6 pt-24 space-y-4"
          >
            <Link href="/" className="text-2xl font-bold text-gray-900 py-3 border-b border-gray-100" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/#about" className="text-2xl font-bold text-gray-900 py-3 border-b border-gray-100" onClick={toggleMenu}>
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center text-2xl font-bold text-gray-900 py-3"
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
                          className="p-3 text-sm text-gray-700 font-bold flex items-center gap-3 hover:bg-white rounded transition hover:text-brand-orange"
                          onClick={toggleMenu}
                        >
                          <span className="text-brand-blue">{service.icon}</span>
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#work" className="text-2xl font-bold text-gray-900 py-3 border-b border-gray-100" onClick={toggleMenu}>
              Our Work
            </Link>
            <Link href="/#contact" className="text-2xl font-bold text-gray-900 py-3 border-b border-gray-100" onClick={toggleMenu}>
              Contact
            </Link>

            <Link
              href="/#contact"
              className="w-full bg-brand-blue text-white py-4 rounded-xl flex items-center justify-center font-bold mt-4"
              onClick={toggleMenu}
            >
              Get Started →
            </Link>
=======
            className="md:hidden fixed inset-0 top-[72px] bg-white z-[90] overflow-y-auto max-h-[calc(100vh-72px)]"
          >
            <div className="flex flex-col p-6 space-y-4 pb-20">
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-brand-blue py-2 border-b border-gray-100" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/#about" className="text-xl font-bold text-gray-800 hover:text-brand-blue py-2 border-b border-gray-100" onClick={toggleMenu}>
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full flex justify-between items-center text-xl font-bold text-gray-800 hover:text-brand-blue py-2"
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
                            className="p-3 text-sm text-gray-600 flex items-center gap-3 hover:bg-gray-100 rounded transition"
                            onClick={toggleMenu}
                          >
                            <span className="text-brand-blue">{service.icon}</span>
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
                className="btn-primary text-center mt-4"
                onClick={toggleMenu}
              >
                Get Started →
              </Link>
            </div>
>>>>>>> origin/main
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
