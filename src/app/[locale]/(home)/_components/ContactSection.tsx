"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MailboxIcon, PhoneCallIcon, MapPinAreaIcon, PaperPlaneTiltIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative py-20 md:py-32 bg-[#0a0820]/60 overflow-hidden"
        > 
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px]" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
                        Contact
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline text-white mb-5">
                        Get In{" "}
                        <span className="bg-indigo-400 bg-clip-text text-transparent font-accent">
                            Touch
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-body">
                        Ready to transform your business? We&apos;d love to hear from you. Send us a message and
                        we&apos;ll respond as soon as possible to discuss your project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                  
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {[
                            {
                                icon: MailboxIcon,
                                title: "Email Us",
                                detail: "hello@centurybits.com",
                                desc: "We reply within 24 hours",
                            },
                            {
                                icon: PhoneCallIcon,
                                title: "Call Us",
                                detail: "+1 (555) 123-4567",
                                desc: "Mon-Fri 9am-6pm EST",
                            },
                            {
                                icon: MapPinAreaIcon,
                                title: "Visit Us",
                                detail: "Your Location",
                                desc: "Available Worldwide",
                            },
                            {
                                icon: WhatsappLogoIcon,
                                title: "Whatsapp Us",
                                detail: "+1 (555) 123-4567",
                                desc: "24/7 Support",
                            },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + i * 0.1,
                                    }}
                                >
                                    <Card className="bg-white/[0.03] border-white/[0.06] hover:border-purple-500/20 transition-all duration-300">
                                        <CardContent className="p-5 flex items-start gap-4">
                                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 flex items-center justify-center flex-shrink-0">
                                                <Icon className="size-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <div className="text-white font-headline font-semibold text-sm mb-0.5">
                                                    {item.title}
                                                </div>
                                                <div className="text-gray-300 text-sm font-body">
                                                    {item.detail}
                                                </div>
                                                <div className="text-gray-500 text-xs mt-1 font-body">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Card className="bg-white/[0.03] border-white/[0.06] backdrop-blur-sm">
                            <CardContent className="p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                        <label className="block text-gray-400 text-sm mb-2 font-body">
                                            Your Name
                                        </label>
                                            <Input
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 focus-visible:border-purple-500/50 focus-visible:ring-purple-500/20 h-12 rounded-xl"
                                            />
                                        </div>
                                        <div>
                                        <label className="block text-gray-400 text-sm mb-2 font-body">
                                            Your Email
                                        </label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 focus-visible:border-purple-500/50 focus-visible:ring-purple-500/20 h-12 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2 font-body">
                                            Subject
                                        </label>
                                        <Input
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 focus-visible:border-purple-500/50 focus-visible:ring-purple-500/20 h-12 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2 font-body">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            placeholder="Tell us more about your project..."
                                            rows={5}
                                            className="w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600 focus-visible:border-purple-500/50 focus-visible:ring-purple-500/20 rounded-xl px-3 py-3 text-sm resize-none outline-none focus:ring-[3px] focus:ring-purple-500/20 transition-all"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-6 rounded-xl text-base font-nav shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 border-0"
                                    >
                                        Send Message
                                        <PaperPlaneTiltIcon className="ml-2 size-5" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
