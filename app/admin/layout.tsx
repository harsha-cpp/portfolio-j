"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    LayoutDashboard,
    Briefcase,
    Lightbulb,
    FolderOpen,
    Settings,
    LogOut,
    ArrowLeft,
} from "lucide-react";
import { signOut } from "next-auth/react";

const sidebarLinks = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Experiences", href: "/admin/experiences", icon: Briefcase },
    { label: "Skills", href: "/admin/skills", icon: Lightbulb },
    { label: "Projects", href: "/admin/projects", icon: FolderOpen },
    { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Don't show admin layout on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-base flex">
            {/* Sidebar */}
            <aside className="w-64 bg-base-surface border-r border-white/5 flex flex-col p-4 shrink-0">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-small text-text-muted hover:text-text-primary transition-colors mb-4"
                    >
                        <ArrowLeft size={14} />
                        Back to Site
                    </Link>
                    <h2 className="text-heading-3 font-bold text-text-primary">
                        <span className="text-accent-purple">J</span>D Admin
                    </h2>
                    <p className="text-xs text-text-dim mt-1">Content Management</p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-small font-medium transition-all duration-200 ${isActive
                                        ? "bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                                        : "text-text-muted hover:text-text-primary hover:bg-white/5"
                                    }`}
                            >
                                <link.icon size={16} />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sign Out */}
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-small font-medium text-text-dim hover:text-red-400 hover:bg-red-500/5 transition-all mt-auto"
                >
                    <LogOut size={16} />
                    Sign Out
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
    );
}
