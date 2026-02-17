"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    link?: { label: string; href: string };
}

export default function SectionHeading({
    title,
    subtitle,
    align = "left",
    link,
}: SectionHeadingProps) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={`mb-10 ${align === "center" ? "text-center" : ""}`}
        >
            {/* Code-comment style marker */}
            <span className="section-marker mb-3 block">
                &lt;!-- {title} --&gt;
            </span>

            {link && (
                <div className="flex items-center justify-between">
                    <div />
                    <a
                        href={link.href}
                        className="text-caption text-text-muted hover:text-text-primary flex items-center gap-1 transition-colors"
                    >
                        {link.label} <ArrowUpRight size={12} />
                    </a>
                </div>
            )}

            {subtitle && (
                <p className="text-body text-text-secondary max-w-lg mt-1">{subtitle}</p>
            )}
        </motion.div>
    );
}
