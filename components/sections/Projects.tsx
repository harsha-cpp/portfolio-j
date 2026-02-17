"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles, Eye } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import projects from "@/data/projects.json";

export default function Projects() {
    const project = projects[0];

    return (
        <section id="projects" className="py-24 lg:py-32">
            <div className="px-10">
                {/* Section marker */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="flex items-center justify-between mb-8"
                >
                    <span className="section-marker">&lt;!-- Featured works --&gt;</span>
                    <a
                        href="#projects"
                        className="text-caption text-text-muted hover:text-accent flex items-center gap-1.5 transition-colors duration-300"
                    >
                        All projects <ArrowUpRight size={12} />
                    </a>
                </motion.div>

                {/* Featured Project — Large showcase card */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.div
                        variants={staggerItem}
                        className="relative overflow-hidden rounded-3xl
              border border-border-subtle
              bg-gradient-to-br from-base-surface via-base-surface to-base-elevated
              group cursor-pointer"
                    >
                        {/* Top gradient glow */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-10 lg:p-14">
                            {/* Project visual placeholder */}
                            <div className="mb-10 rounded-2xl overflow-hidden border border-border-subtle
                bg-gradient-to-br from-base-elevated to-base-surface
                aspect-[16/7] flex items-center justify-center relative">
                                {/* Decorative gradient mesh inside */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-accent/[0.06] blur-[80px]" />
                                    <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-emerald-400/[0.04] blur-[60px]" />
                                    {/* Grid pattern */}
                                    <div className="absolute inset-0 opacity-[0.03]"
                                        style={{
                                            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                                            backgroundSize: "40px 40px",
                                        }}
                                    />
                                </div>
                                <div className="relative text-center px-8">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 border border-accent/20
                    flex items-center justify-center">
                                        <Sparkles size={24} className="text-accent" />
                                    </div>
                                    <p className="text-heading-3 font-display font-semibold text-text-primary mb-1">{project.title}</p>
                                    <p className="text-small text-text-muted">{project.tagline}</p>
                                </div>
                            </div>

                            {/* Info row */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="flex-1">
                                    {/* Badge */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                    bg-accent/10 border border-accent/20
                    text-[11px] font-semibold text-accent uppercase tracking-wide mb-4">
                                        <span className="w-1 h-1 rounded-full bg-accent" />
                                        Concept Project
                                    </span>

                                    <h3 className="text-heading-1 lg:text-display font-display font-bold text-text-primary mb-3 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-body text-text-secondary max-w-xl leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Arrow CTA */}
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-2 text-text-muted group-hover:text-accent transition-colors duration-300 shrink-0"
                                >
                                    <span className="text-small font-medium">View Details</span>
                                    <ArrowRight size={16} />
                                </motion.div>
                            </div>

                            {/* Features as refined pills */}
                            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border-subtle">
                                {project.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-3.5 py-1.5 rounded-full
                      bg-base-elevated/80 border border-border-subtle
                      text-caption text-text-muted font-medium
                      hover:border-border-hover hover:text-text-secondary
                      transition-all duration-200"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom gradient line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
                    </motion.div>

                    {/* Mission & Vision Cards */}
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                        <motion.div
                            variants={staggerItem}
                            className="rounded-2xl bg-base-surface border border-border-subtle p-7 lg:p-8
                hover:border-border-hover transition-all duration-300 group/card relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center
                  group-hover/card:bg-accent/15 transition-colors duration-300">
                                    <Sparkles size={16} className="text-accent" />
                                </div>
                                <h4 className="text-heading-3 font-display font-semibold text-text-primary">Mission</h4>
                            </div>
                            <p className="text-small text-text-secondary leading-relaxed">{project.mission}</p>
                        </motion.div>

                        <motion.div
                            variants={staggerItem}
                            className="rounded-2xl bg-base-surface border border-border-subtle p-7 lg:p-8
                hover:border-border-hover transition-all duration-300 group/card relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center
                  group-hover/card:bg-accent/15 transition-colors duration-300">
                                    <Eye size={16} className="text-accent" />
                                </div>
                                <h4 className="text-heading-3 font-display font-semibold text-text-primary">Vision</h4>
                            </div>
                            <p className="text-small text-text-secondary leading-relaxed">{project.vision}</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
