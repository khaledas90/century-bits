"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle as PlayIcon, ArrowFatLinesRightIcon } from "@phosphor-icons/react";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!orbRef.current) return;

        // Animate the glowing orb
        gsap.to(orbRef.current, {
            scale: 1.15,
            opacity: 0.8,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
        > 
            <div
                ref={orbRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-60"
                style={{
                    background:
                        "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(76,29,149,0.2) 40%, transparent 70%)",
                }}
            />
 
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Badge
                        variant="outline"
                        className="mb-6 border-purple-500/30 text-purple-300 bg-purple-500/10 px-4 py-1.5 text-sm backdrop-blur-sm font-body"
                    >
                        Digital Solutions Specialists
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline text-white leading-tight tracking-tight mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                >
                    Transform Your Business
                    <br />
                    <span className="bg-indigo-400 bg-clip-text text-transparent font-accent">
                        with Century Bits
                    </span>
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed px-4 font-body"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    We specialize in Website Development, WebApps, ERP Systems, AI Applications, Native APPs, and Graphics Design. 
                    Delivering cutting-edge digital solutions that drive your business forward.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-6 text-base font-nav rounded-xl shadow-lg shadow-purple-500/25 border-0 w-full sm:w-auto transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02]"
                    >
                        Get Started
                        <ArrowFatLinesRightIcon size={24} className="ml-2 size-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-gray-700 text-gray-300 hover:text-purple-400 hover:border-purple-500/50 px-8 py-6 text-base font-nav rounded-xl bg-white/5 backdrop-blur-sm w-full sm:w-auto transition-all duration-300 hover:bg-white/10"
                    >
                        <PlayIcon size={24} className="me-2 size-5" />
                        View Portfolio
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    {[
                        { value: "200+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "6", label: "Core Services" },
                        { value: "24/7", label: "Support" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-2xl sm:text-3xl font-headline text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 font-body">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
