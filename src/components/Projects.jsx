"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "ASPL Tech",
    url: "https://aspltech.in",
    video: "/videos/aspl-tech.mp4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75",
    desc: "A leading technology solutions provider helping businesses scale with cutting-edge software and IT services."
  },
  {
    name: "Avant Enterprise",
    url: "https://avantenterprise.in/",
    video: "/videos/avant-enterprise.mp4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    desc: "Streamlining business operations with robust enterprise resource planning and management solutions."
  },
  {
    name: "Blue Mind Surf School",
    url: "https://surfschool.asia",
    video: "/videos/blue-mind-surf-school.mp4",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=75",
    desc: "Connecting surf enthusiasts with professional training and unforgettable ocean experiences."
  },
  {
    name: "Suraksha Hospital",
    url: "https://surakshahosp.com",
    video: "/videos/suraksha-hospital.mp4",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=75",
    desc: "Delivering compassionate and advanced healthcare services to the community with trust and care."
  },
  {
    name: "Angels Empyrean School",
    url: "https://angels-empyrean.netlify.app/",
    video: "/videos/angels-empyrean-school.mp4",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=75",
    desc: "A nurturing educational environment focused on holistic development and academic excellence."
  },
  {
    name: "Srinath Parameswaran",
    url: "https://srinathparameswaran.com",
    video: "/videos/portfolio.mp4",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=75",
    desc: "Showcasing the personal brand and professional portfolio of a visionary leader and thinker."
  },
  {
    name: "Nadayoga",
    url: "https://nadayoga.website/",
    video: "/videos/nadayoga.mp4",
    image: "https://images.unsplash.com/photo-1545205569-0d3454124973?w=800&q=75",
    desc: "Promoting wellness and inner peace through the ancient practice of Nada Yoga and sound healing."
  },
  {
    name: "Bienvenu",
    url: "https://angels-empyrean.netlify.app/",
    video: "/videos/bienvenu.mp4",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=75",
    desc: "Creating elegant and immersive digital experiences for luxury hospitality and lifestyle brands."
  },
  {
    name: "8hands",
    url: "https://eighthands.netlify.app/",
    video: "/videos/eighthands.mp4",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=75",
    desc: "A collaborative platform connecting creative minds to build, share, and innovate together. (Work In Process)"
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group block relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {client.video ? (
          <video
            ref={videoRef}
            src={client.video}
            loop
            muted
            playsInline
            preload="none"
            poster={client.image}
            title={`Success story video for ${client.name}`}
            aria-label={`Success story video for ${client.name}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={client.image}
            alt={`${client.name} - Case study of digital growth and website development by Triuss Bangalore`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a href={client.url} target="_blank" rel="noopener noreferrer" className="bg-white/90 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-colors" aria-label={`Visit ${client.name} website`}>
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">
          {client.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
          {client.desc}
        </p>
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${client.name} website`}
          className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-900 text-white text-sm font-medium rounded hover:bg-brand-blue transition-colors"
        >
          Visit Site <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-12 px-4 md:py-24 md:px-6 bg-gray-50">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-blue font-bold text-2xl md:text-3xl mb-4 block">~Our Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Valuable Clients & Success Stories
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-lg leading-relaxed">
              We take pride in helping diverse businesses establish their <span className="text-brand-blue font-medium">digital presence</span>. Here are some of the high-performance solutions we've <span className="text-brand-blue font-medium">delivered</span> to our partners.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <ProjectCard key={index} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
