"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import skillsData from "@/data/skills.json";

interface StackItem {
    name: string;
    level: string;
}

const primaryStack: StackItem[] = skillsData.technical.map((s) => ({
    name: s.name,
    level: s.level >= 85 ? "Advanced" : s.level >= 70 ? "Proficient" : "Familiar",
}));

const professionalStack: StackItem[] = skillsData.professional.slice(0, 6).map((s) => ({
    name: s.name,
    level: s.level >= 85 ? "Advanced" : s.level >= 70 ? "Proficient" : "Familiar",
}));

const levelColor: Record<string, string> = {
    Advanced: "text-accent",
    Proficient: "text-emerald-400/70",
    Familiar: "text-text-muted",
};

export default function Stack() {
    return (
        <section id="stack" className="py-24 lg:py-32">
            <div className="px-10">
                {/* Section marker */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="mb-8"
                >
                    <span className="section-marker">&lt;!-- My tech stack --&gt;</span>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.h2
                        variants={staggerItem}
                        className="text-heading-1 font-display font-bold text-text-primary mb-3 tracking-tight"
                    >
                        Tools & Skills
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        className="text-body text-text-secondary max-w-lg mb-10"
                    >
                        Technologies and competencies I use to build impactful solutions.
                    </motion.p>
                </motion.div>

                {/* Technical Skills */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="mb-10"
                >
                    <motion.p variants={staggerItem} className="text-caption font-mono text-text-dim uppercase tracking-wider mb-4">
                        Technical
                    </motion.p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                        {primaryStack.map((item) => (
                            <motion.div
                                key={item.name}
                                variants={staggerItem}
                                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                className="group rounded-2xl bg-base-surface border border-border-subtle
                  px-5 py-4 hover:border-border-hover hover:shadow-card
                  transition-all duration-300 relative overflow-hidden cursor-default"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                                <p className="text-small font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                                    {item.name}
                                </p>
                                <p className={`text-caption font-medium ${levelColor[item.level] || "text-text-muted"}`}>
                                    {item.level}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Professional Skills */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.p variants={staggerItem} className="text-caption font-mono text-text-dim uppercase tracking-wider mb-4">
                        Professional
                    </motion.p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                        {professionalStack.map((item) => (
                            <motion.div
                                key={item.name}
                                variants={staggerItem}
                                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                className="group rounded-2xl bg-base-surface border border-border-subtle
                  px-5 py-4 hover:border-border-hover hover:shadow-card
                  transition-all duration-300 relative overflow-hidden cursor-default"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
                                <p className="text-small font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                                    {item.name}
                                </p>
                                <p className={`text-caption font-medium ${levelColor[item.level] || "text-text-muted"}`}>
                                    {item.level}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
