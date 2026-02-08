import * as motion from "framer-motion/client";

export default function Features() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div className="flex flex-col">
            <h2 className="text-brand-blue font-bold text-2xl md:text-3xl mb-4 block">~Why Us</h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Why Businesses in Bangalore Choose Triuss
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-end"
          >
            <p className="text-gray-600 max-w-lg text-sm md:text-lg leading-relaxed">
              We understand the dynamic <span className="text-brand-blue font-medium">Bangalore market</span> landscape. Our solutions are <span className="text-brand-blue font-medium">scalable</span>, efficient, and engineered to drive <span className="text-brand-blue font-medium">measurable business impact</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="feature-card border border-gray-200 p-8 bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 mb-6 text-brand-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Clarity</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We eliminate ambiguity with clear strategies, transparent reporting, and dedicated support, ensuring you always know where your growth stands.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="feature-card bg-brand-blue-deep p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-12 h-12 mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Our technologies and strategies are built to scale with your business, handling everything from initial traction to market dominance.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="feature-card bg-dark p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-12 h-12 mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Partner</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We work as your partner, guiding you step-by-step from starting fresh to improving what you already have.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
