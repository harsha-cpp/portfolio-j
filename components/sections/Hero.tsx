"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import heroData from "@/data/hero.json";
import MagneticButton from "@/components/ui/MagneticButton";

// Word-by-word reveal animation
const headingWords: { text: string; accent: boolean; italic?: boolean; break?: boolean }[] = [
    { text: "Hi,", accent: false },
    { text: "I'm", accent: false },
    { text: "Jahnavi", accent: true, break: true },
    { text: "Finance", accent: false },
    { text: "Professional", accent: false },
    { text: "building", accent: false },
    { text: "experiences", accent: true, italic: true },
    { text: "that", accent: false },
    { text: "matter.", accent: false },
];

const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: 0.4 + i * 0.08,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    }),
};

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[calc(100vh-56px)] lg:min-h-screen flex items-center">
            <div className="w-full max-w-content mx-auto px-10 py-20">
                {/* Status badge — top right (absolute) */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-6 right-6 sm:top-8 sm:right-10 z-10"
                >
                    <motion.div
                        variants={staggerItem}
                        className="flex items-center gap-3"
                    >
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              bg-accent/10 border border-accent/20 text-caption font-medium text-accent">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
                            Open to new work
                        </span>
                        <span className="text-caption text-text-muted hidden sm:inline">
                            • My time: {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
                        </span>
                    </motion.div>
                </motion.div>

                {/* Heading — Word-by-word reveal */}
                <div className="max-w-2xl">
                    <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-display-xl font-display font-bold text-text-primary leading-[1.08] tracking-tight mb-6">
                        {headingWords.map((word, i) => (
                            <>
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={wordVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={`inline-block mr-[0.3em] ${word.accent ? "text-accent" : ""
                                        } ${word.italic ? "italic" : ""}`}
                                >
                                    {word.text}
                                </motion.span>
                                {word.break && <br />}
                            </>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-body text-text-secondary max-w-lg leading-relaxed mb-8"
                    >
                        {heroData.description.slice(0, 180)}...
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <MagneticButton
                            href="#contact"
                            strength={0.35}
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl
                bg-base-elevated border border-border hover:border-accent/30
                text-small font-medium text-text-primary
                transition-all duration-300 hover:shadow-glow group cursor-pointer"
                        >
                            <svg
                                className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Contact me
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 rounded-full border border-border flex justify-center pt-2"
                    >
                        <div className="w-1 h-1.5 rounded-full bg-text-dim" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
