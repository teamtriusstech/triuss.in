import * as motion from "framer-motion/client";

export default function Contact() {
  return (
    <section className="relative" id="contact">
      <div className="grid md:grid-cols-2">
        {/* Left - Blue Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-accent py-8 px-5 md:px-8 flex flex-col justify-center"
        >
          <h2 className="text-white/90 font-bold text-xl md:text-2xl mb-4 block">~Contact Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h3>
          <p className="text-white/80 mb-6 text-sm md:text-lg leading-relaxed">
            Ready to grow? <span className="text-red-accent font-bold underline">Partner with Triuss</span> today to dominate the digital landscape.
          </p>

          <div className="text-white mb-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">📍 Bangalore, India</p>
            <p className="flex items-center gap-2">📞 +91 84318 60448</p>
            <p className="flex items-center gap-2">📧 teamtriuss@gmail.com</p>
          </div>

          <form
            action="https://formspree.io/f/xqeezkyz"
            method="POST"
            className="space-y-2 max-w-sm"
          >
            <div>
              <input type="text" name="name" placeholder="Name" className="input-underline text-sm py-1" required />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" className="input-underline text-sm py-1" required />
            </div>
            <div>
              <input type="tel" name="phone" placeholder="Phone" className="input-underline text-sm py-1" />
            </div>
            <div>
              <textarea name="message" placeholder="Message" rows="2" className="input-underline resize-none text-sm py-1" required></textarea>
            </div>
            <button type="submit" className="btn-white mt-3 w-full text-sm py-2">
              Submit →
            </button>
          </form>
        </motion.div>

        {/* Right - Map with Decorative Background */}
        <div className="bg-dark relative overflow-hidden h-[300px] md:h-auto">
          {/* Decorative Waves */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600" preserveAspectRatio="none">
            <path d="M0,100 Q200,50 400,100 T800,100" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0,200 Q200,150 400,200 T800,200" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0,300 Q200,250 400,300 T800,300" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0,400 Q200,350 400,400 T800,400" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0,500 Q200,450 400,500 T800,500" fill="none" stroke="white" strokeWidth="2" />
          </svg>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/4 bg-gray-200 overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124436.70278783687!2d77.51475850901297!3d12.978873406548173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1705000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%)' }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
