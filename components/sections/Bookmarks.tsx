"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface BookmarkEntry {
    title: string;
    category: string;
    icon: string;
    href: string;
}

const bookmarks: BookmarkEntry[] = [
    {
        title: "Investopedia",
        category: "Finance & Markets",
        icon: "📊",
        href: "https://investopedia.com",
    },
    {
        title: "Harvard Business Review",
        category: "Strategy & Leadership",
        icon: "📰",
        href: "https://hbr.org",
    },
    {
        title: "Morning Brew",
        category: "Business News",
        icon: "☕",
        href: "https://morningbrew.com",
    },
    {
        title: "Notion Templates",
        category: "Productivity",
        icon: "📋",
        href: "https://notion.so/templates",
    },
    {
        title: "Y Combinator Library",
        category: "Startup & FinTech",
        icon: "🚀",
        href: "https://ycombinator.com/library",
    },
];

export default function Bookmarks() {
    return (
        <section id="bookmarks" className="py-24 lg:py-32">
            <div className="px-10">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="mb-8"
                >
                    <motion.span variants={staggerItem} className="section-marker block mb-4">
                        &lt;!-- Resources I revisit --&gt;
                    </motion.span>
                    <motion.h2
                        variants={staggerItem}
                        className="text-heading-1 font-display font-bold text-text-primary mb-2 tracking-tight"
                    >
                        Bookmarks
                    </motion.h2>
                    <motion.p variants={staggerItem} className="text-body text-text-secondary max-w-lg">
                        A curated collection of resources worth revisiting whenever inspiration strikes.
                    </motion.p>
                </motion.div>

                {/* Bookmark list — contained */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="rounded-2xl border border-border-subtle overflow-hidden"
                >
                    {bookmarks.map((item, i) => (
                        <motion.a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={staggerItem}
                            className={`flex items-center gap-4 px-5 py-4
                hover:bg-base-surface/50 transition-all duration-200 group
                ${i < bookmarks.length - 1 ? "border-b border-border-subtle" : ""}`}
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-base-elevated border border-border-subtle
                flex items-center justify-center text-base shrink-0
                group-hover:border-border-hover transition-colors duration-200">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <p className="text-small font-semibold text-text-primary group-hover:text-accent transition-colors duration-200 truncate">
                                    {item.title}
                                </p>
                                <p className="text-caption text-text-muted">{item.category}</p>
                            </div>

                            {/* Link icon */}
                            <ExternalLink
                                size={14}
                                className="text-text-dim group-hover:text-accent shrink-0
                  transition-colors duration-200"
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
