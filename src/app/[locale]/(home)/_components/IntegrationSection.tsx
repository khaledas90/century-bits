"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
    Cloud,
    Code,
    Database,
    Robot,
    DeviceMobile,
    Terminal,
    GitBranch,
    HardDrives,
    Lightning,
    Globe,
    Lock,
    ChartLine
} from "@phosphor-icons/react";

export default function IntegrationSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section
            ref={sectionRef}
            id="integrations"
            className="relative py-20 md:py-32 bg-transparent overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                   
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
                            Technology Partners
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-white mb-6 leading-tight">
                            Built With{" "}
                            <span className="bg-indigo-400 bg-clip-text text-transparent font-accent">
                                Industry Leaders
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-body">
                            We partner with leading technology providers to deliver cutting-edge solutions. 
                            From cloud platforms to development frameworks, we leverage the best tools 
                            to build robust, scalable applications for your business.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Cloud Solutions", desc: "AWS, Azure, GCP" },
                                { label: "Modern Frameworks", desc: "React, Next.js, Vue" },
                                { label: "AI & Machine Learning", desc: "OpenAI, TensorFlow" },
                                { label: "Mobile Platforms", desc: "iOS, Android, Cross-platform" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 hover:border-purple-500/30 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                >
                                    <div className="text-white font-headline font-semibold text-sm mb-1">
                                        {item.label}
                                    </div>
                                    <div className="text-gray-500 text-xs font-body">{item.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
 
                    <motion.div
                        className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                          
                            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-white to-gray-400 bg-clip-text text-center text-5xl md:text-8xl font-headline leading-none text-transparent">
                                CB
                            </span>
 
                            <OrbitingCircles
                                className="size-[40px] border border-purple-500/20 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(168,85,247,0.15)] flex items-center justify-center"
                                duration={20}
                                delay={20}
                                radius={80}
                            >
                                <Code size={22} className="text-[#61DAFB]" />
                                <Terminal size={22} className="text-[#4EC9B0]" />
                                <GitBranch size={22} className="text-[#F05032]" />
                            </OrbitingCircles>
 
                            <OrbitingCircles
                                className="size-[50px] border border-blue-500/20 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(59,130,246,0.15)] flex items-center justify-center"
                                duration={30}
                                radius={140}
                                reverse
                            >
                                <Cloud size={28} className="text-[#4285F4]" />
                                <HardDrives size={28} className="text-[#00D9FF]" />
                                <Database size={28} className="text-[#336791]" />
                                <Lightning size={28} className="text-[#FFB800]" />
                            </OrbitingCircles>
 
                            <OrbitingCircles
                                className="size-[60px] border border-indigo-500/20 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_25px_rgba(79,70,229,0.15)] flex items-center justify-center"
                                duration={40}
                                radius={210}
                            >
                                <Robot size={32} className="text-[#FF6B6B]" />
                                <DeviceMobile size={32} className="text-[#34C759]" />
                                <Globe size={32} className="text-[#007AFF]" />
                                <Lock size={32} className="text-[#FF9500]" />
                                <ChartLine size={32} className="text-[#AF52DE]" />
                            </OrbitingCircles>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
