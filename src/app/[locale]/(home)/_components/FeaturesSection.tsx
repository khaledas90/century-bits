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
import { ChartBarIcon, CloudLightningIcon, FingerprintIcon, GlobeIcon, TreeStructureIcon, PasswordIcon } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: CloudLightningIcon,
        title: "Lightning Fast",
        description:
            "Optimized performance with edge computing and CDN integration for blazing-fast load times worldwide.",
    },
    {
        icon: FingerprintIcon,
        title: "Enterprise Security",
        description:
            "Bank-grade security with end-to-end encryption, SOC2 compliance, and advanced threat protection built-in.",
    },
    {
        icon: ChartBarIcon,
        title: "Advanced Analytics",
        description:
            "Real-time dashboards with AI-driven insights. Track user behavior, revenue, and growth metrics at a glance.",
    },
    {
        icon: TreeStructureIcon,
        title: "Modular Architecture",
        description:
            "Plug-and-play components designed for scalability. Customize every aspect to match your exact requirements.",
    },
    {
        icon: GlobeIcon,
        title: "Global CDN",
        description:
            "Deploy globally with automatic geo-routing and intelligent caching to deliver content at the speed of light.",
    },
    {
        icon: PasswordIcon,
        title: "Auth & Payments",
        description:
            "Pre-built authentication flows and payment integration with Stripe. Accept payments within minutes of launch.",
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
            id="features"
            className="relative py-20 md:py-32 bg-transparent overflow-hidden"
        >
            {/* Subtle gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-16 md:mb-20">
                    <motion.span
                        className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        Features
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
                        Key Features of{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            Century bits
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Everything you need to build, scale, and ship your AI-powered SaaS
                        product with confidence.
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
                                        <CardTitle className="text-white text-lg font-semibold group-hover:text-purple-300 transition-colors duration-300">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-400 text-sm leading-relaxed">
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
