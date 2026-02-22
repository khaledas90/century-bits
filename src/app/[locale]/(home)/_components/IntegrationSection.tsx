"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
    GithubLogo as GithubLogoIcon,
    SlackLogo as SlackLogoIcon,
    GoogleLogo as GoogleLogoIcon,
    FigmaLogo as FigmaLogoIcon,
    DiscordLogo as DiscordLogoIcon,
    At as AtIcon,
    StripeLogo as StripeLogoIcon,
    LinkedinLogo as LinkedinLogoIcon,
    WhatsappLogo as WhatsappLogoIcon,
    TelegramLogo as TelegramLogoIcon,
    XLogo as XLogoIcon
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
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                            Integrations
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Seamless{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                Integrations
                            </span>{" "}
                            with Your Stack
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                            Connect with the tools you already love. Our platform integrates
                            seamlessly with 100+ services to streamline your workflow and boost
                            productivity.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "100+ Integrations", desc: "Ready to connect" },
                                { label: "API First", desc: "RESTful & GraphQL" },
                                { label: "Webhooks", desc: "Real-time events" },
                                { label: "SDK Support", desc: "Major languages" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 hover:border-purple-500/30 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                >
                                    <div className="text-white font-semibold text-sm mb-1">
                                        {item.label}
                                    </div>
                                    <div className="text-gray-500 text-xs">{item.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual - Orbital Integration Logos */}
                    <motion.div
                        className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-white  to-gray-400 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent">
                                AI
                            </span>

                            {/* Inner Circle */}
                            <OrbitingCircles
                                className="size-[40px] border border-purple-500/20 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(168,85,247,0.15)] flex items-center justify-center"
                                duration={20}
                                delay={20}
                                radius={80}
                            >
                                <GithubLogoIcon size={22} className="text-white" />
                                <SlackLogoIcon size={22} className="text-[#e01e5a]" />
                                <FigmaLogoIcon size={22} className="text-[#F24E1E]" />
                            </OrbitingCircles>

                            {/* Middle Circle */}
                            <OrbitingCircles
                                className="size-[50px] border border-blue-500/20 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(59,130,246,0.15)] flex items-center justify-center"
                                duration={30}
                                radius={140}
                                reverse
                            >
                                <GoogleLogoIcon size={28} className="text-[#4285F4]" />
                                <DiscordLogoIcon size={28} className="text-[#5865F2]" />
                                <StripeLogoIcon size={28} className="text-[#635BFF]" />
                                <AtIcon size={28} className="text-purple-400" />
                            </OrbitingCircles>

                            {/* Outer Circle */}
                            <OrbitingCircles
                                className="size-[60px] border border-indigo-500/20 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_25px_rgba(79,70,229,0.15)] flex items-center justify-center"
                                duration={40}
                                radius={210}
                            >
                                <LinkedinLogoIcon size={32} className="text-[#0A66C2]" />
                                <WhatsappLogoIcon size={32} className="text-[#25D366]" />
                                <TelegramLogoIcon size={32} className="text-[#24A1DE]" />
                                <XLogoIcon size={32} className="text-white" />
                            </OrbitingCircles>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

