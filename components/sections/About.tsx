"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import experiences from "@/data/experiences.json";

const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/jahnavi-dantuluri", label: "LinkedIn" },
    { icon: Mail, href: "mailto:jahnavi.dantuluri@gmail.com", label: "Email" },
];

const companyColors: Record<string, string> = {
    "CSC Global": "#4ade80",
    "Outlook Publishing (India) Pvt. Ltd.": "#60a5fa",
    "Art of Living": "#f59e0b",
};

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32">
            <div className="px-10">
                {/* Section marker */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="mb-8"
                >
                    <span className="section-marker">&lt;!-- About me section --&gt;</span>
                </motion.div>

                {/* Two-column: Bio + Photo */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid lg:grid-cols-[1fr,300px] gap-8 lg:gap-12 mb-20"
                >
                    <div>
                        <motion.h2
                            variants={staggerItem}
                            className="text-display font-display font-bold text-text-primary mb-6 tracking-tight"
                        >
                            Behind the Screens
                        </motion.h2>

                        <motion.p variants={staggerItem} className="text-body text-text-secondary leading-relaxed mb-4">
                            I&apos;m a{" "}
                            <span className="text-accent font-medium">
                                Finance professional
                            </span>{" "}
                            with a passion for structured financial systems and technology-driven solutions. With a strong
                            foundation in operations and analytical thinking, I build workflows that are both user-friendly
                            and impact-focused.
                        </motion.p>

                        <motion.p variants={staggerItem} className="text-body text-text-secondary leading-relaxed mb-6">
                            I enjoy{" "}
                            <span className="text-accent">collaborating with teams</span>,{" "}
                            <span className="text-accent">solving real-world problems</span>, and{" "}
                            <span className="text-accent">transforming complex data</span>{" "}
                            into simple, actionable insights.
                        </motion.p>

                        {/* Quick stats row */}
                        <motion.div variants={staggerItem} className="flex items-center gap-6 mt-8">
                            <div className="flex items-center gap-2 text-small text-text-muted">
                                <MapPin size={14} className="text-accent" />
                                Bengaluru, India
                            </div>
                            <div className="flex items-center gap-2 text-small text-text-muted">
                                <GraduationCap size={14} className="text-accent" />
                                BBA, RV University
                            </div>
                        </motion.div>
                    </div>

                    {/* Right column */}
                    <motion.div variants={staggerItem} className="space-y-4">
                        {/* Photo placeholder — premium style */}
                        <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative
              bg-gradient-to-br from-base-elevated via-base-surface to-base-elevated
              border border-border-subtle">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-accent/10 border border-accent/20
                    flex items-center justify-center">
                                        <span className="text-3xl font-display font-bold text-accent">J</span>
                                    </div>
                                    <p className="text-caption text-text-dim">Photo coming soon</p>
                                </div>
                            </div>
                            {/* Gradient overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-24
                bg-gradient-to-t from-base-surface/90 to-transparent" />
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                    bg-base-surface border border-border-subtle
                    text-caption font-medium text-text-muted
                    hover:text-text-primary hover:border-border-hover
                    transition-all duration-200"
                                >
                                    <link.icon size={13} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.div variants={staggerItem} className="mb-6">
                        <h3 className="text-heading-2 font-display font-semibold text-text-primary">Experience</h3>
                    </motion.div>

                    <div className="rounded-2xl border border-border-subtle overflow-hidden">
                        {experiences.map((exp, i) => {
                            const dotColor = companyColors[exp.company] || "#71717a";
                            return (
                                <motion.div
                                    key={exp.id}
                                    variants={staggerItem}
                                    className={`flex items-center gap-4 px-5 py-4
                    hover:bg-base-surface/50 transition-colors duration-200 group
                    ${i < experiences.length - 1 ? "border-b border-border-subtle" : ""}`}
                                >
                                    {/* Company icon */}
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                      text-xs font-bold border"
                                        style={{
                                            backgroundColor: `${dotColor}10`,
                                            borderColor: `${dotColor}20`,
                                            color: dotColor,
                                        }}
                                    >
                                        {exp.company.charAt(0)}
                                    </div>

                                    {/* Company + Role */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-small font-semibold text-text-primary truncate">
                                            {exp.company}
                                        </p>
                                        <p className="text-caption text-text-muted truncate">{exp.title}</p>
                                    </div>

                                    {/* Period */}
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-caption text-text-dim font-mono">
                                            {exp.period}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
