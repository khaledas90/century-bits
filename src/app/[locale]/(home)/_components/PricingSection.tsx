"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckFatIcon  } from "@phosphor-icons/react";

const plans = [
    {
        name: "Starter",
        price: "$100",
        period: "/month",
        description: "Perfect for individuals and small projects getting started.",
        features: [
            "5 AI Models Access",
            "10K API Requests/mo",
            "Basic Analytics",
            "Email Support",
            "1 Team Member",
        ],
        cta: "Get Started",
        popular: false,
        gradient: "from-gray-600 to-gray-700",
    },
    {
        name: "Professional",
        price: "$200",
        period: "/month",
        description: "Best for growing teams and production applications.",
        features: [
            "All AI Models Access",
            "100K API Requests/mo",
            "Advanced Analytics",
            "Priority Support",
            "10 Team Members",
            "Custom Integrations",
            "SSO Authentication",
        ],
        cta: "Get Started",
        popular: true,
        gradient: "from-purple-600 to-indigo-600",
    },
    {
        name: "Enterprise",
        price: "$300",
        period: "/month",
        description: "For large organizations with custom needs and compliance.",
        features: [
            "Unlimited AI Models",
            "Unlimited API Requests",
            "Full Analytics Suite",
            "24/7 Dedicated Support",
            "Unlimited Team Members",
            "Custom Models",
            "SLA Guarantee",
            "On-Premise Deploy",
        ],
        cta: "Contact Sales",
        popular: false,
        gradient: "from-gray-600 to-gray-700",
    },
];

export default function PricingSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            id="pricing"
            className="relative py-20 md:py-32 bg-[#0a0820]/60 overflow-hidden"
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
                    <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
                        Our{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            Pricing Plan
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Simple, transparent pricing that grows with you. Start free and
                        scale as your business expands.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                    <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 px-4 py-1 text-xs shadow-lg shadow-purple-500/30">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}
                            <Card
                                className={`h-full flex flex-col bg-white/[0.03] backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${plan.popular
                                    ? "border-purple-500/40 shadow-lg shadow-purple-500/10 hover:border-purple-400/60"
                                    : "border-white/[0.06] hover:border-white/[0.12]"
                                    }`}
                            >
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-white text-xl font-semibold">
                                        {plan.name}
                                    </CardTitle>
                                    <CardDescription className="text-gray-400 text-sm mt-1">
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="mb-6 mt-2">
                                        <span className="text-4xl md:text-5xl font-bold text-white">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-400 text-base ml-1">
                                            {plan.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, fi) => (
                                            <li key={fi} className="flex items-center gap-3">
                                                <div
                                                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular
                                                        ? "bg-purple-500/20 text-purple-400"
                                                        : "bg-white/10 text-gray-400"
                                                        }`}
                                                >
                                                    <CheckFatIcon  className="size-3" />
                                                </div>
                                                <span className="text-gray-300 text-sm">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className={`w-full py-6 rounded-xl text-base font-medium transition-all duration-300 ${plan.popular
                                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 border-0"
                                            : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.12] hover:text-white border border-white/10"
                                            }`}
                                        variant={plan.popular ? "default" : "outline"}
                                    >
                                        {plan.cta}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
