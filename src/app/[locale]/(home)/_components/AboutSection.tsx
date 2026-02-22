"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
    Target, 
    Users, 
    Trophy, 
    Lightbulb,
    Rocket,
    Heart
} from "@phosphor-icons/react";

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description: "To deliver cutting-edge digital solutions that transform businesses and drive innovation across industries.",
        color: "from-purple-500/20 to-indigo-500/20",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "A talented team of developers, designers, and strategists dedicated to bringing your vision to life.",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: Trophy,
        title: "Excellence",
        description: "Committed to delivering the highest quality solutions with attention to detail and customer satisfaction.",
        color: "from-yellow-500/20 to-orange-500/20",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead of technology trends to provide innovative solutions that give you a competitive edge.",
        color: "from-green-500/20 to-emerald-500/20",
    },
    {
        icon: Rocket,
        title: "Growth",
        description: "Helping businesses scale and grow through strategic digital transformation and modern technology.",
        color: "from-pink-500/20 to-rose-500/20",
    },
    {
        icon: Heart,
        title: "Partnership",
        description: "Building long-term relationships with our clients based on trust, transparency, and mutual success.",
        color: "from-red-500/20 to-pink-500/20",
    },
];

const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Happy Clients" },
    { value: "6", label: "Years Experience" },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative py-20 md:py-32 bg-[#0a0820]/40 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[100px]" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
                        About Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-white mb-5">
                        Who We{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-accent">
                            Are
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-body">
                        Century Bits is a leading digital solutions company specializing in comprehensive 
                        technology services. We combine creativity, innovation, and technical expertise to 
                        deliver exceptional results for businesses worldwide.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl font-headline text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm font-body">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            >
                                <Card className="group bg-white/[0.03] border-white/[0.06] hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] h-full">
                                    <CardContent className="p-6">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className="size-7 text-white" />
                                        </div>
                                        <h3 className="text-white text-lg font-headline mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-body leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
