"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderOpen, User, Mail, Bookmark, Layers, Download, Menu, X } from "lucide-react";

const mainNav = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Projects", href: "#projects", icon: FolderOpen },
    { label: "About", href: "#about", icon: User },
    { label: "Contact", href: "#contact", icon: Mail },
];

const resourceNav = [
    { label: "Bookmarks", href: "#bookmarks", icon: Bookmark },
    { label: "Stack", href: "#stack", icon: Layers },
];

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState("#home");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [...mainNav, ...resourceNav].map((n) => n.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActiveSection(`#${id}`);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    const now = new Date();
    const dateStr = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

    const sidebarContent = (
        <>
            {/* Profile */}
            <div className="px-5 pt-6 pb-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-base-elevated border border-border flex items-center justify-center text-sm font-semibold text-accent">
                    JD
                </div>
                <div>
                    <p className="text-sm font-semibold text-text-primary leading-tight">
                        Jahnavi Dantuluri
                    </p>
                    <p className="text-caption text-text-muted">Finance Professional</p>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="px-3 mt-2">
                {mainNav.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`
                flex items-center gap-3 px-3 py-2.5 rounded-xl text-small font-medium
                transition-all duration-200 group mb-0.5
                ${isActive
                                    ? "bg-accent/10 text-accent"
                                    : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
                                }
              `}
                        >
                            <link.icon size={16} className={isActive ? "text-accent" : "text-text-muted group-hover:text-text-secondary"} />
                            {link.label}
                        </a>
                    );
                })}
            </nav>

            {/* Resources Section */}
            <div className="px-3 mt-6">
                <p className="px-3 mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-text-dim">
                    Resources
                </p>
                {resourceNav.map((link) => {
                    const isActive = activeSection === link.href;
                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`
                flex items-center gap-3 px-3 py-2.5 rounded-xl text-small font-medium
                transition-all duration-200 group mb-0.5
                ${isActive
                                    ? "bg-accent/10 text-accent"
                                    : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
                                }
              `}
                        >
                            <link.icon size={16} className={isActive ? "text-accent" : "text-text-muted group-hover:text-text-secondary"} />
                            {link.label}
                        </a>
                    );
                })}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Bottom Widget */}
            <div className="px-4 pb-5 mt-auto">
                <div className="rounded-2xl bg-base-elevated/60 border border-border-subtle p-4 space-y-3">
                    <div>
                        <p className="text-small font-medium text-text-primary">{dateStr}</p>
                        <p className="text-caption text-text-muted">Bengaluru</p>
                    </div>
                    <a
                        href="/resume.pdf"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl
              bg-base-surface border border-border text-small font-medium text-text-secondary
              hover:text-text-primary hover:border-border-hover transition-all duration-200"
                    >
                        <Download size={14} />
                        Download CV
                    </a>
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-sidebar flex-col z-40
        bg-base border-r border-border-subtle">
                {sidebarContent}
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14
        bg-base/90 backdrop-blur-xl border-b border-border-subtle
        flex items-center justify-between px-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-base-elevated border border-border flex items-center justify-center text-xs font-semibold text-accent">
                        JD
                    </div>
                    <span className="text-sm font-semibold text-text-primary">Jahnavi Dantuluri</span>
                </div>
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 text-text-secondary"
                    aria-label="Toggle Menu"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:hidden fixed top-0 left-0 bottom-0 w-[260px] z-50
                bg-base border-r border-border-subtle flex flex-col"
                        >
                            {sidebarContent}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
