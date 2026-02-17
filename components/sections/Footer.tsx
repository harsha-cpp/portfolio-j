"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const socials = [
    { icon: Linkedin, href: "https://linkedin.com/in/jahnavi-dantuluri", label: "LinkedIn" },
    { icon: Mail, href: "mailto:jahnavi.dantuluri@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://instagram.com/jahnavi.dantuluri", label: "Instagram" },
];

export default function Footer() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section id="contact" ref={sectionRef} className="pt-4 pb-10 relative overflow-hidden">
            <div className="px-10">
                {/* Two-column: Quote left, Info right */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-10">
                    {/* Left — Quote */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="relative"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
                        <blockquote className="pl-8 max-w-lg">
                            <p className="font-display text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] italic font-light text-text-secondary/70 leading-[1.4] mb-3 tracking-tight">
                                &ldquo;The best investment you can make is in yourself.&rdquo;
                            </p>
                            <cite className="text-caption text-text-muted not-italic font-medium tracking-wide">
                                — Warren Buffett
                            </cite>
                        </blockquote>
                    </motion.div>

                    {/* Right — Name + Socials */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="flex flex-col justify-center lg:items-end"
                    >
                        <motion.p
                            variants={staggerItem}
                            className="font-display text-heading-1 font-bold tracking-tight mb-1" style={{ color: '#ECE7D0' }}
                        >
                            Jahnavi Dantuluri
                        </motion.p>
                        <motion.p
                            variants={staggerItem}
                            className="text-small mb-6 lg:text-right" style={{ color: '#ECE7D0', opacity: 0.6 }}
                        >
                            Finance Professional · Bengaluru, India
                        </motion.p>

                        {/* Social links */}
                        <motion.div variants={staggerItem} className="flex items-center gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-xl bg-base-surface border border-border-subtle
                    flex items-center justify-center text-text-muted
                    hover:text-accent hover:border-accent/30
                    transition-all duration-200"
                                >
                                    <s.icon size={15} />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Footer bar */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="pt-5 border-t border-border-subtle
            flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                    <p className="text-caption text-text-dim">
                        © {new Date().getFullYear()} Jahnavi Dantuluri
                    </p>
                    <div className="flex items-center gap-1.5 text-caption text-text-dim">
                        <span>Built with</span>
                        <span className="text-accent">♥</span>
                        <span>& precision</span>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
        </section>
    );
}
