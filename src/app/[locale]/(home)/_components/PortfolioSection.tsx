"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GlobeIcon, Code, Database, Robot, DeviceMobile, PaintBrush } from "@phosphor-icons/react";

const portfolioItems = [
    {
        category: "Website Development",
        icon: GlobeIcon,
        projects: [
            { name: "E-Commerce Platform", description: "Modern online store with payment integration" },
            { name: "Corporate Website", description: "Professional business website with CMS" },
            { name: "Portfolio Site", description: "Creative portfolio for design agency" },
        ],
    },
    {
        category: "WebApp Development",
        icon: Code,
        projects: [
            { name: "Project Management Tool", description: "Collaborative workspace application" },
            { name: "Analytics Dashboard", description: "Real-time data visualization platform" },
            { name: "CRM System", description: "Customer relationship management solution" },
        ],
    },
    {
        category: "ERP Systems",
        icon: Database,
        projects: [
            { name: "Manufacturing ERP", description: "Complete production management system" },
            { name: "Retail ERP", description: "Inventory and sales management platform" },
            { name: "Healthcare ERP", description: "Medical facility management system" },
        ],
    },
    {
        category: "AI Applications",
        icon: Robot,
        projects: [
            { name: "Chatbot Platform", description: "AI-powered customer support system" },
            { name: "Predictive Analytics", description: "Machine learning forecasting tool" },
            { name: "Image Recognition", description: "Computer vision application" },
        ],
    },
    {
        category: "Application Development",
        icon: DeviceMobile,
        projects: [
            { name: "Fitness Tracker", description: "iOS and Android fitness application" },
            { name: "Social Media App", description: "Cross-platform social networking app" },
            { name: "Banking App", description: "Secure mobile banking solution" },
        ],
    },
    {
        category: "Graphics Design",
        icon: PaintBrush,
        projects: [
            { name: "Brand Identity", description: "Complete brand design system" },
            { name: "UI/UX Design", description: "User interface and experience design" },
            { name: "Marketing Materials", description: "Print and digital marketing assets" },
        ],
    },
];

export default function PortfolioSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section
            ref={sectionRef}
            id="portfolio"
            className="relative py-20 md:py-32 bg-transparent overflow-hidden"
        >
           
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-white mb-5">
                        Our Portfolio
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-body">
                        Explore our portfolio of successful projects across all our service areas. 
                        Each project represents our commitment to excellence and innovation.
                    </p>
                </motion.div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {portfolioItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="group bg-white/[0.03] border-white/[0.06] hover:border-purple-500/30 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] h-full">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="size-6 text-white" />
                                        </div>
                                        <h3 className="text-white text-lg font-headline mb-4 group-hover:text-purple-300 transition-colors duration-300">
                                            {item.category}
                                        </h3>
                                        <div className="space-y-3">
                                            {item.projects.map((project, pIndex) => (
                                                <div
                                                    key={pIndex}
                                                    className="pb-3 border-b border-white/[0.06] last:border-0 last:pb-0"
                                                >
                                                    <div className="text-white text-sm font-headline mb-1">
                                                        {project.name}
                                                    </div>
                                                    <div className="text-gray-400 text-xs font-body">
                                                        {project.description}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
