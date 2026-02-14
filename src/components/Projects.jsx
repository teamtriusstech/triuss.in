"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "ASPL Tech",
    url: "https://aspltech.in",
    video: "/videos/aspl-tech.mp4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=60",
    desc: "A leading technology solutions provider helping businesses scale with cutting-edge software and IT services.",
    tags: ["TECH SOLUTIONS", "REACT, NODE.JS"]
  },
  {
    name: "Avant Enterprise",
    url: "https://avantenterprise.in/",
    video: "/videos/avant-enterprise.mp4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=60",
    desc: "Streamlining business operations with robust enterprise resource planning and management solutions.",
    tags: ["ENTERPRISE ERP", "NEXT.JS, TAILWIND"]
  },
  {
    name: "Blue Mind Surf School",
    url: "https://surfschool.asia",
    video: "/videos/blue-mind-surf-school.mp4",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&q=60",
    desc: "Connecting surf enthusiasts with professional training and unforgettable ocean experiences.",
    tags: ["LIFESTYLE", "NEXT.JS, STRIPE"]
  },
  {
    name: "Suraksha Hospital",
    url: "https://surakshahosp.com",
    video: "/videos/suraksha-hospital.mp4",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=60",
    desc: "Delivering compassionate and advanced healthcare services to the community with trust and care.",
    tags: ["HEALTHCARE", "REACT, SUPABASE"]
  },
  {
    name: "Angels Empyrean School",
    url: "https://angels-empyrean.netlify.app/",
    video: "/videos/angels-empyrean-school.mp4",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=60",
    desc: "A nurturing educational environment focused on holistic development and academic excellence.",
    tags: ["EDUCATION", "VITE, TAILWIND"]
  },
  {
    name: "Nadayoga",
    url: "https://nadayoga.website/",
    video: "/videos/nadayoga.mp4",
    image: "https://images.unsplash.com/photo-1545205569-0d3454124973?w=1200&q=80",
    desc: "Promoting wellness and inner peace through the ancient practice of Nada Yoga and sound healing.",
    tags: ["WELLNESS", "NEXT.JS, FRAMER"],
  },
  {
    name: "Eight Hands",
    url: "https://eighthandswork.com",
    video: "/videos/eighthands.mp4",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    desc: "Innovative interior design studio delivering refined, sustainable, and functional spaces across Bangalore.",
    tags: ["INTERIOR DESIGN", "REACT, MOTION"]
  },
  {
    name: "Bienvenue",
    url: "https://bienvenue-waves-book.lovable.app",
    video: "/videos/bienvenu.mp4",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    desc: "Luxury apartment rental and management services offering premium stays in the heart of the city.",
    tags: ["RENTAL SERVICE", "NEXT.JS, PRISMIC"]
  },
  {
    name: "Kunafa & Creams",
    url: "https://kunafaandcreams.netlify.app/",
    video: "/videos/kunafacreams.mp4",
    image: "https://images.unsplash.com/photo-1515023115689-585010d6d445?w=1200&q=80",
    desc: "A specialized platform showcasing authentic Middle Eastern flavors and culinary excellence in Bangalore.",
    tags: ["FOOD & BEVERAGE", "VITE, SUPABASE"]
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
    <motion.a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group block relative h-[450px] w-full overflow-hidden rounded-3xl bg-gray-900 border border-white/10"
    >
      {/* Media Layer */}
      <div className="absolute inset-0 w-full h-full bg-[#1c1c1c]">
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
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-[object-position] duration-[2500ms] ease-in-out group-hover:object-bottom"
          />
        )}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start justify-end h-full">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 opacity-100 transform translate-y-0 transition-transform duration-500">
          {client.tags.map((tag, i) => (
            <span key={i} className="px-4 py-1.5 bg-white text-black text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="flex items-center justify-between w-full mb-2">
          <h3 className="text-3xl font-bold text-white leading-tight">
            {client.name}
          </h3>
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <ArrowUpRight className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2 max-w-sm">
          {client.desc}
        </p>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 bg-black text-white">
      <div className="max-w-[1600px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-blue"></span>
              <span className="text-brand-blue-light font-black uppercase tracking-[0.2em] text-[10px] md:text-sm">
                Our Work
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
              Selected <span className="text-white/40 italic font-serif">Success</span> Stories.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed md:text-right pb-2"
          >
            We partner with forward-thinking businesses to build digital products that move the needle.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-20 md:mb-32">
          {clients.map((client, index) => (
            <ProjectCard key={index} client={client} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Have a project in mind?
          </h3>
          <Link href="/#contact" className="group flex items-center justify-center w-16 h-16 rounded-full border border-white/20 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
            <ArrowUpRight className="w-8 h-8 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
