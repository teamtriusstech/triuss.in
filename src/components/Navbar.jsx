"use client";

import { Search, Menu, X, ChevronDown, Monitor, ShoppingBag, MessageCircle, MapPin, Share2, Phone, FileText, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";

const services = [
  { title: "Web App Development", href: "/services/web-development-bangalore", icon: <Monitor className="w-4 h-4" /> },
  { title: "Mobile App Development", href: "/services/mobile-app-development", icon: <Smartphone className="w-4 h-4" /> },
  { title: "E-Commerce Sites", href: "/services/ecommerce-solutions-bangalore", icon: <ShoppingBag className="w-4 h-4" /> },
  { title: "WhatsApp E-commerce", href: "/services/whatsapp-commerce-bangalore", icon: <MessageCircle className="w-4 h-4" /> },
  { title: "UGC & Product Ads", href: "/services/ugc-product-ads", icon: <FileText className="w-4 h-4" /> },
  { title: "Digital Marketing", href: "/services/digital-marketing-bangalore", icon: <Share2 className="w-4 h-4" /> },
  { title: "AI & Call Agents", href: "/services/ai-call-agents-bangalore", icon: <Phone className="w-4 h-4" /> },
  { title: "Social Media Management", href: "/services/social-media-management", icon: <Share2 className="w-4 h-4" /> },
];

const blogOptions = [
  { title: "All Articles", href: "/blog", icon: <FileText className="w-4 h-4" /> },
  { title: "Market Insights", href: "/blog?category=market-insights", icon: <MapPin className="w-4 h-4" /> },
  { title: "E-Commerce", href: "/blog?category=e-commerce", icon: <ShoppingBag className="w-4 h-4" /> },
  { title: "Tech Trends", href: "/blog?category=tech", icon: <Monitor className="w-4 h-4" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileBlogOpen, setIsMobileBlogOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
    setIsMobileBlogOpen(false);
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
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Triuss Digital Growth Agency Bangalore - Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <span className="text-2xl md:text-3xl font-black text-brand-blue tracking-tight group-hover:text-brand-blue-light transition-colors">
              Triuss
            </span>
          </Link>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className={`${isActive("/") ? "text-brand-orange-text" : "hover:text-brand-blue-light"} transition-colors flex items-center gap-1`}>
            Home
          </Link>
          <Link href="/about" className={`${isActive("/about") ? "text-brand-orange-text" : "hover:text-brand-blue-light"} transition-colors flex items-center gap-1`}>
            About
          </Link>

          {/* Desktop Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`${isActive("/services") ? "text-brand-orange-text" : "hover:text-brand-blue-light"} transition-colors flex items-center gap-1 cursor-pointer font-bold`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {isServicesOpen && (
                <m.div
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
                        className={`px-5 py-3 hover:bg-gray-50 flex items-center gap-3 transition-all group/item ${pathname === service.href ? "bg-orange-50 text-brand-orange-text" : "text-gray-700 hover:text-brand-orange-text"}`}
                      >
                        <span className={`${pathname === service.href ? "text-brand-orange-text" : "text-brand-blue-light group-hover/item:text-brand-orange"} transition-colors`}>{service.icon}</span>
                        <span className="text-xs font-bold">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>


          <Link href="/#work" className="hover:text-brand-blue-light transition-colors flex items-center gap-1">
            Work
          </Link>

          {/* Desktop Blog Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsBlogOpen(true)}
            onMouseLeave={() => setIsBlogOpen(false)}
          >
            <Link href="/blog" className={`${isActive("/blog") ? "text-brand-orange-text" : "hover:text-brand-blue-light"} transition-colors flex items-center gap-1 font-black`}>
              Blog <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isBlogOpen ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {isBlogOpen && (
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl border border-gray-100 mt-4 rounded-xl overflow-hidden py-2"
                >
                  <div className="grid grid-cols-1">
                    {blogOptions.map((option) => (
                      <Link
                        key={option.title}
                        href={option.href}
                        className={`px-5 py-3 hover:bg-gray-50 flex items-center gap-3 transition-all group/item ${pathname === option.href ? "bg-orange-50 text-brand-orange-text" : "text-gray-700 hover:text-brand-orange-text"}`}
                      >
                        <span className={`${pathname === option.href ? "text-brand-orange-text" : "text-brand-blue-light group-hover/item:text-brand-orange"} transition-colors`}>{option.icon}</span>
                        <span className="text-xs font-bold">{option.title}</span>
                      </Link>
                    ))}
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>

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
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 overflow-y-auto shadow-xl"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 pb-32">
              <Link href="/" className={`text-xl font-bold py-2 border-b border-gray-100 block ${isActive("/") ? "text-brand-orange-text" : "text-brand-blue"}`} onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/about" className={`text-xl font-bold py-2 border-b border-gray-100 block ${isActive("/about") ? "text-brand-orange-text" : "text-brand-blue"}`} onClick={toggleMenu}>
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className={`w-full flex justify-between items-center text-xl font-bold py-2 ${isActive("/services") ? "text-brand-orange-text" : "text-brand-blue"}`}
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <m.div
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
                            className={`p-3 text-sm font-bold flex items-center gap-3 hover:bg-gray-100 rounded transition ${pathname === service.href ? "text-brand-orange-text bg-white" : "text-brand-blue hover:text-brand-orange-text"}`}
                            onClick={toggleMenu}
                          >
                            <span className="text-brand-orange-text">{service.icon}</span>
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Blog Accordion */}
              <div className="border-b border-gray-100">
                <button
                  className={`w-full flex justify-between items-center text-xl font-bold py-2 ${isActive("/blog") ? "text-brand-orange-text" : "text-brand-blue"}`}
                  onClick={() => setIsMobileBlogOpen(!isMobileBlogOpen)}
                >
                  Insights / Blog
                  <ChevronDown className={`w-6 h-6 transition-transform ${isMobileBlogOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileBlogOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50 rounded-lg mb-2"
                    >
                      <div className="grid grid-cols-1 p-2 gap-1">
                        {blogOptions.map((option) => (
                          <Link
                            key={option.title}
                            href={option.href}
                            className={`p-3 text-sm font-bold flex items-center gap-3 hover:bg-gray-100 rounded transition ${pathname === option.href ? "text-brand-orange-text bg-white" : "text-brand-blue hover:text-brand-orange-text"}`}
                            onClick={toggleMenu}
                          >
                            <span className="text-brand-orange-text">{option.icon}</span>
                            {option.title}
                          </Link>
                        ))}
                      </div>
                    </m.div>
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
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
