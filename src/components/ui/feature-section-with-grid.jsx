import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, ShoppingBag, MessageCircle, FileText, Search, Phone, Share2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        id: "web-app-development",
        title: "Web App Development",
        icon: <Monitor className="w-5 h-5" />,
        href: "/services/web-development-bangalore",
        image: "/images/web_development_new.png",
        desc: "Custom-engineered high-performance web applications built for scale and speed."
    },
    {
        id: "mobile-app-development",
        title: "Mobile App Development",
        icon: <Smartphone className="w-5 h-5" />,
        href: "/services/mobile-app-development",
        image: "/images/Flutter Mobile App Development.jpg",
        desc: "Premium iOS and Android apps that offer seamless user experiences and native performance."
    },
    {
        id: "ecommerce-sites",
        title: "E-commerce Sites",
        icon: <ShoppingBag className="w-5 h-5" />,
        href: "/services/ecommerce-solutions-bangalore",
        image: "/images/ecommerce_new.png",
        desc: "Conversion-optimized online stores with secure payments and automated inventory management."
    },
    {
        id: "whatsapp-ecommerce",
        title: "WhatsApp E-commerce",
        icon: <MessageCircle className="w-5 h-5" />,
        href: "/services/whatsapp-commerce-bangalore",
        image: "/images/whatsapp_commerce_new.png",
        desc: "Turn your WhatsApp into a sales machine with automated catalogues and checkout systems."
    },
    {
        id: "ugc-product-ads",
        title: "UGC & Product Ads",
        icon: <FileText className="w-5 h-5" />,
        href: "/services/ugc-product-ads",
        image: "/images/618b9bd1c3b905496d9d4910_BlogCover.png",
        desc: "High-impact product photography and User Generated Content that builds instant trust."
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        icon: <Search className="w-5 h-5" />,
        href: "/services/digital-marketing-bangalore",
        image: "/images/seo_google_business_new.png",
        desc: "Aggressive SEO and PPC strategies to dominate search results and crush your competition."
    },
    {
        id: "ai-automations",
        title: "AI & Call Agents",
        icon: <Phone className="w-5 h-5" />,
        href: "/services/ai-call-agents-bangalore",
        image: "/images/ai_agents_new.jpg",
        desc: "Voice AI and intelligent automation that handles inquiries 24/7 with human-like precision."
    },
    {
        id: "social-media-management",
        title: "Social Media Management",
        icon: <Share2 className="w-5 h-5" />,
        href: "/services/social-media-management",
        image: "/images/social_media_marketing_new.png",
        desc: "End-to-end management of your social presence to build brand authority and loyalty."
    }
];

function Feature() {
    return (
        <div id="services-grid" className="w-full py-20 lg:py-28 bg-[#0a0a0a]">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex flex-col gap-14">
                    <div className="flex gap-4 flex-col items-start">
                        <div>
                            <Badge variant="secondary">Solutions & Mastery</Badge>
                        </div>
                        <div className="flex gap-4 flex-col max-w-3xl">
                            <div className="flex items-center gap-3 text-brand-orange mb-2">
                                <Sparkles className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-[0.2em]">Our Services</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white">Digital Solutions</span>
                            </h2>
                        </div>
                    </div>
                    {/* Services Grid - Wider & Shorter Implementation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col gap-4 group p-4 rounded-[2rem] bg-[#121212] border border-white/[0.08] hover:border-brand-orange/30 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(255,153,0,0.1)]">
                                <div className="relative aspect-[16/8] mb-1 overflow-hidden rounded-xl border border-white/5">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        quality={90}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 p-2 rounded-lg text-white group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500 shadow-xl scale-90">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 px-1 text-left">
                                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-brand-orange transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-[14px] leading-snug font-medium line-clamp-2">
                                        {service.desc}
                                    </p>
                                    <Link href={service.href} className="inline-flex items-center gap-2 text-[10px] font-black text-brand-orange uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform mt-2">
                                        Explore <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Feature };
