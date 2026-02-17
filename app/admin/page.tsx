"use client";

import { Briefcase, Lightbulb, FolderOpen, Settings } from "lucide-react";
import Link from "next/link";

const stats = [
    { label: "Experiences", count: 4, icon: Briefcase, href: "/admin/experiences", color: "purple" },
    { label: "Skills", count: 12, icon: Lightbulb, href: "/admin/skills", color: "mint" },
    { label: "Projects", count: 1, icon: FolderOpen, href: "/admin/projects", color: "purple" },
    { label: "Settings", count: null, icon: Settings, href: "/admin/settings", color: "mint" },
];

export default function AdminDashboard() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-heading-1 font-bold text-text-primary mb-2">
                    Dashboard
                </h1>
                <p className="text-body text-text-muted">
                    Manage your portfolio content from here.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                    <Link
                        key={stat.label}
                        href={stat.href}
                        className="surface-card p-6 hover:border-accent-purple/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div
                                className={`p-2.5 rounded-xl ${stat.color === "purple"
                                        ? "bg-accent-purple/10"
                                        : "bg-accent-mint/10"
                                    }`}
                            >
                                <stat.icon
                                    size={20}
                                    className={
                                        stat.color === "purple"
                                            ? "text-accent-purple"
                                            : "text-accent-mint"
                                    }
                                />
                            </div>
                            {stat.count !== null && (
                                <span className="text-heading-2 font-bold text-text-primary">
                                    {stat.count}
                                </span>
                            )}
                        </div>
                        <h3 className="text-small font-medium text-text-muted group-hover:text-text-primary transition-colors">
                            {stat.label}
                        </h3>
                    </Link>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="surface-card p-6">
                <h2 className="text-heading-3 font-semibold text-text-primary mb-4">
                    Quick Actions
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Link
                        href="/admin/experiences"
                        className="flex items-center gap-3 p-4 rounded-xl bg-base-elevated border border-white/5 hover:border-accent-purple/20 transition-all text-small text-text-muted hover:text-text-primary"
                    >
                        <Briefcase size={16} className="text-accent-purple" />
                        Add New Experience
                    </Link>
                    <Link
                        href="/admin/skills"
                        className="flex items-center gap-3 p-4 rounded-xl bg-base-elevated border border-white/5 hover:border-accent-mint/20 transition-all text-small text-text-muted hover:text-text-primary"
                    >
                        <Lightbulb size={16} className="text-accent-mint" />
                        Manage Skills
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="flex items-center gap-3 p-4 rounded-xl bg-base-elevated border border-white/5 hover:border-accent-purple/20 transition-all text-small text-text-muted hover:text-text-primary"
                    >
                        <Settings size={16} className="text-accent-purple" />
                        Update Site Settings
                    </Link>
                </div>
            </div>
        </div>
    );
}
