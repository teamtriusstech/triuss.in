"use client";

import { motion } from "framer-motion";

const clientNames = [
  "ASPL",
  "AVANT ENTERPRISE",
  "RESEARCH VISIONS",
  "BLUE MIND SURF SCHOOL",
  "SURAKSHA HOSPITAL",
  "ANGELS EMPYREAN SCHOOL",
  "KUNAFA AND CREAMS",
  "EIGHT HANDS",
];

export default function Clients() {
  // Triple the items to ensure smooth infinite loop
  const marqueeItems = [...clientNames, ...clientNames, ...clientNames];

  return (
    <section className="bg-white py-16 overflow-hidden border-y border-gray-100">
      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
          animate={{
            x: [0, -1039], // We'll adjust this based on content or use a simpler percentage-based one if possible
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((name, idx) => (
            <div
              key={idx}
              className="text-black/40 text-xl md:text-2xl font-black tracking-tighter hover:text-black transition-colors cursor-default uppercase"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>

  );
}

