"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { GlobeIcon, Code, Database, Robot, DeviceMobile, PaintBrush } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: GlobeIcon,
        title: "Website Development",
        description:
            "Custom, responsive websites built with modern technologies. From simple landing pages to complex e-commerce platforms, we create digital experiences that convert.",
    },
    {
        icon: Code,
        title: "WebApp Development",
        description:
            "Progressive web applications that work seamlessly across all devices. Build powerful, scalable web apps that enhance productivity and user engagement.",
    },
    {
        icon: Database,
        title: "ERP Systems",
        description:
            "Enterprise Resource Planning solutions tailored to your business needs. Streamline operations, improve efficiency, and make data-driven decisions.",
    },
    {
        icon: Robot,
        title: "AI Applications",
        description:
            "Intelligent applications powered by artificial intelligence. Automate processes, gain insights, and unlock new possibilities with cutting-edge AI technology.",
    },
    {
        icon: DeviceMobile,
        title: "Application Development",
        description:
            "High-performance native mobile applications for iOS and Android. Deliver exceptional user experiences with apps built specifically for each platform.",
    },
    {
        icon: PaintBrush,
        title: "Graphics Design",
        description:
            "Creative visual solutions that capture your brand essence. From logos to complete brand identities, we design visuals that make a lasting impression.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function FeaturesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!titleRef.current) return;

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative py-20 md:py-32 bg-transparent overflow-hidden"
        >  
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
               
                <div ref={titleRef} className="text-center mb-16 md:mb-20">
                    <motion.span
                        className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block font-body"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        Our Services
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-white mb-5">
                        What We{" "}
                        <span className="bg-indigo-400 bg-clip-text text-transparent font-accent">
                            Specialize In
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-body">
                        Comprehensive digital solutions across six core disciplines. From web development to AI applications, 
                        we deliver excellence in every project.
                    </p>
                </div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="group bg-white/[0.03] border-white/[0.06] hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] h-full cursor-default">
                                    <CardHeader className="pb-3">
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                                        >
                                            <Icon className="size-6 text-white" />
                                        </div>
                                        <CardTitle className="text-white text-lg font-headline group-hover:text-purple-300 transition-colors duration-300">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-400 text-sm leading-relaxed font-body">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
