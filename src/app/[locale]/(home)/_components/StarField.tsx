"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
 
const STAR_COUNT = 80;
const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    top: ((i * 17 + 31) % 100),             
    left: ((i * 23 + 7) % 100),
    size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
    duration: 2 + (i % 5) * 0.8,
    delay: (i % 7) * 0.4,
    brightness: i % 4 === 0 ? 1 : 0.6,
}));

export default function StarField() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;

        gsap.fromTo(
            gridRef.current,
            { opacity: 0.02 },
            {
                opacity: 0.06,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            }
        );
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        
            <div
                ref={gridRef}
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(139,92,246,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.25) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />
 
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.brightness * 0.3,
                    }}
                    animate={{
                        opacity: [star.brightness * 0.15, star.brightness * 0.7, star.brightness * 0.15],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
