"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { CertificateIcon, CloudLightningIcon, GlobeIcon,ArrowFatLinesRightIcon } from "@phosphor-icons/react";

export default function CTASection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (!glowRef.current) return;

        gsap.to(glowRef.current, {
            scale: 1.2,
            opacity: 0.6,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 md:py-32 bg-[#0a0820]/60 overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
 
            <div
                ref={glowRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-purple-600/10 blur-[80px]"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        What are you{" "}
                        <span className="bg-indigo-400 to-indigo-400 bg-clip-text text-transparent">
                            waiting for?
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Start your journey with us today and experience the future of technology.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-10 py-7 text-base rounded-xl shadow-lg shadow-purple-500/25 border-0 w-full sm:w-auto transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02]"
                        >
                            Get Started
                            <ArrowFatLinesRightIcon className="ml-2 size-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 px-10 py-7 text-base rounded-xl bg-white/5 backdrop-blur-sm w-full sm:w-auto transition-all duration-300 hover:bg-white/10"
                        >
                            View Portfolio
                        </Button>
                    </motion.div> 
                </motion.div>
            </div>
        </section>
    );
}