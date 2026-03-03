"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import dynamic from 'next/dynamic';

const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

export function FramerProvider({ children }) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
            <WhatsAppButton />
        </LazyMotion>
    );
}
