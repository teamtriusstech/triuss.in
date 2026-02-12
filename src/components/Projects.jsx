"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "ASPL Tech",
    url: "https://aspltech.in",
    video: "/videos/aspl-tech.mp4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    desc: "A leading technology solutions provider helping businesses scale with cutting-edge software and IT services.",
    type: "TECH SOLUTIONS",
    tech: "REACT, NODE.JS",
  },
  {
    name: "Avant Enterprise",
    url: "https://avantenterprise.in/",
    video: "/videos/avant-enterprise.mp4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    desc: "Streamlining business operations with robust enterprise resource planning and management solutions.",
    type: "ENTERPRISE ERP",
    tech: "NEXT.JS, TAILWIND",
  },
  {
    name: "Blue Mind Surf School",
    url: "https://surfschool.asia",
    video: "/videos/blue-mind-surf-school.mp4",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=1200&q=80",
    desc: "Connecting surf enthusiasts with professional training and unforgettable ocean experiences.",
    type: "LIFESTYLE",
    tech: "NEXT.JS, STRIPE",
  },
  {
    name: "Suraksha Hospital",
    url: "https://surakshahosp.com",
    video: "/videos/suraksha-hospital.mp4",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    desc: "Delivering compassionate and advanced healthcare services to the community with trust and care.",
    type: "HEALTHCARE",
    tech: "REACT, SUPABASE",
  },
  {
    name: "Angels Empyrean School",
    url: "https://angels-empyrean.netlify.app/",
    video: "/videos/angels-empyrean-school.mp4",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    desc: "A nurturing educational environment focused on holistic development and academic excellence.",
    type: "EDUCATION",
    tech: "VITE, TAILWIND",
  },
  {
    name: "Nadayoga",
    url: "https://nadayoga.website/",
    video: "/videos/nadayoga.mp4",
    image: "https://images.unsplash.com/photo-1545205569-0d3454124973?w=1200&q=80",
    desc: "Promoting wellness and inner peace through the ancient practice of Nada Yoga and sound healing.",
    type: "WELLNESS",
    tech: "NEXT.JS, FRAMER",
  },
  {
    name: "Eight Hands Work",
    url: "https://eighthandswork.com",
    video: "/videos/eighthands.mp4",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    desc: "Innovative interior design studio delivering refined, sustainable, and functional spaces across Bangalore.",
    type: "INTERIOR DESIGN",
    tech: "REACT, MOTION",
  },
  {
    name: "Bienvenu Apartments",
    url: "https://bienvenu.in",
    video: "/videos/bienvenu.mp4",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    desc: "Luxury apartment rental and management services offering premium stays in the heart of the city.",
    type: "RENTAL SERVICE",
    tech: "NEXT.JS, PRISMIC",
  },
  {
    name: "Kunafa View",
    url: "https://kunafaview.com",
    video: "/videos/kunafa.mp4",
    image: "https://images.unsplash.com/photo-1515023115689-585010d6d445?w=1200&q=80",
    desc: "A specialized platform showcasing authentic Middle Eastern flavors and culinary excellence in Bangalore.",
    type: "FOOD & BEVERAGE",
    tech: "VITE, SUPABASE",
  }
];

function ProjectCard({ client, index }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!client.video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => { });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [client.video]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[380px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-[#0d0d0d] border border-white/10"
    >
      {/* Background (Video/Image) */}
      <div className="absolute inset-0 z-0">
        {client.video ? (
          <video
            ref={videoRef}
            src={client.video}
            loop
            muted
            playsInline
            preload="none"
            poster={client.image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Image
            src={client.image}
            alt={client.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
          />
        )}
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </div>

      {/* Content Overlay - Exactly as Reference */}
      <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-end items-start text-left">

        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-white text-black text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded-full tracking-tight uppercase whitespace-nowrap">
            {client.type}
          </span>
          <span className="text-white/60 text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm tracking-tight uppercase whitespace-nowrap">
            {client.tech}
          </span>
        </div>

        <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-3 group-hover:text-brand-orange transition-colors">
          {client.name}
        </h3>

        <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xl line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
          {client.desc}
        </p>
      </div>

      {/* Top Right External Link */}
      <div className="absolute top-6 right-6 z-20">
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      {/* Hover Status Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-blue w-0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 px-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-blue"></span>
              <span className="text-brand-blue font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">
              Selected <span className="text-white/20 italic font-serif">Success</span> Stories.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-sm md:text-base leading-relaxed md:text-right"
          >
            We partner with forward-thinking businesses to build digital products that move the needle.
          </motion.p>
        </div>

        {/* 2 Column Grid for the specific rectangular size in the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <ProjectCard key={index} client={client} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-6 group"
          >
            <span className="text-white font-bold text-xl md:text-4xl border-b-4 border-white/5 group-hover:border-brand-blue transition-colors pb-2">
              Have a project in mind?
            </span>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
              <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
