"use client";

import { m } from "framer-motion";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export function HeroBadges() {
    return (
        <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-brand-blue mb-6 hover:shadow-md transition-shadow"
        >
            <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Leading Digital Growth Partner in Bangalore
        </m.div>
    );
}

export function HeroButtons() {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
        >
            <Link
                href="/#contact"
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 group"
            >
                Grow My Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

        </m.div>
    );
}

export function HeroFloatingCards() {
    return (
        <>
            {/* Floating Card 1: Stats */}
            <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute -bottom-6 -left-4 md:-bottom-12 md:-left-12 bg-white p-2 md:p-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 md:gap-4 max-w-[140px] md:max-w-xs z-20"
            >
                <div className="bg-brand-orange/10 p-1.5 md:p-3 rounded-full text-brand-orange">
                    <TrendingUp className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                    <div className="text-base md:text-2xl font-bold text-gray-900 leading-none mb-0.5">3x</div>
                    <div className="text-[10px] md:text-xs text-brand-orange-text font-bold uppercase tracking-wide leading-none">Avg. ROI Growth</div>
                </div>
            </m.div>

            {/* Floating Card 2: Clients */}
            <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -top-6 -right-4 md:-top-12 md:-right-12 bg-white p-2 md:p-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 md:gap-4 max-w-[140px] md:max-w-xs z-20"
            >
                <div className="bg-blue-100 p-1.5 md:p-3 rounded-full text-brand-blue">
                    <Users className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                    <div className="text-base md:text-2xl font-bold text-gray-900 leading-none mb-0.5">150+</div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide leading-none">Happy Clients</div>
                </div>
            </m.div>
        </>
    );
}
