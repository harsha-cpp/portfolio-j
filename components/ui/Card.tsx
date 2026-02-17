"use client";

import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export default function Card({
    children,
    className = "",
    hoverable = true,
}: CardProps) {
    return (
        <motion.div
            className={`
        relative rounded-2xl
        bg-base-surface border border-border-subtle
        p-6 transition-all duration-300
        ${hoverable ? "hover:border-border-hover hover:shadow-card" : ""}
        ${className}
      `}
            whileHover={
                hoverable
                    ? { y: -3, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }
                    : {}
            }
        >
            {/* Subtle hover gradient overlay */}
            {hoverable && (
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100
            transition-opacity duration-300 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(74, 222, 128, 0.03) 0%, transparent 60%)",
                    }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
