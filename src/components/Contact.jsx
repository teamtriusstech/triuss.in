<<<<<<< HEAD
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
=======
>>>>>>> origin/main
import * as motion from "framer-motion/client";

export default function Contact() {
  return (
<<<<<<< HEAD
    <section id="contact" className="relative py-24 md:py-32 xl:py-40 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-6 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-light">Scale</span> Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl font-medium">
              Don't let your competition get ahead. Partner with Bangalore's #1 digital growth agency today. We build systems that print money for your business.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-brand-blue/5 border border-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-blue font-bold text-lg">Call Us</h4>
                  <p className="text-gray-600">+91 84318 60448</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-brand-blue/5 border border-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-blue font-bold text-lg">Email Us</h4>
                  <p className="text-gray-600">teamtriuss@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-brand-blue/5 border border-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-blue font-bold text-lg">Visit Us</h4>
                  <p className="text-gray-600">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-bold">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-orange fill-brand-orange/10" /> Free Consultation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-orange fill-brand-orange/10" /> 24/7 Support</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-orange fill-brand-orange/10" /> ROI Focused</span>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-xl shadow-brand-blue/5 relative"
          >
            {/* Form Decor */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-[60px] opacity-60 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-brand-blue mb-2">Send us a Message</h3>
            <p className="text-gray-500 text-sm mb-8 font-medium">We usually respond within 2 hours.</p>

            <form
              action="https://formspree.io/f/xqeezkyz"
              method="POST"
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-medium"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+91 99999 00000" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="john@company.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-medium"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea 
                  name="message" 
                  placeholder="Tell us about your project..." 
                  rows="4" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none font-medium"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
=======
    <section className="relative overflow-hidden" id="contact">
      <div className="grid md:grid-cols-2">
        {/* Left - Blue Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-brand-blue-deep py-8 px-5 md:px-8 flex flex-col justify-center"
        >
          <h2 className="text-white/90 font-bold text-xl md:text-2xl mb-4 block">~Contact Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h3>
          <p className="text-white/80 mb-6 text-sm md:text-lg leading-relaxed">
            Ready to grow? <span className="text-brand-blue font-bold underline">Partner with Triuss</span> today to dominate the digital landscape.
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
>>>>>>> origin/main
          </motion.div>
        </div>
      </div>
    </section>
  );
}
