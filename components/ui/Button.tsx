"use client";

import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    href?: string;
    onClick?: () => void;
    className?: string;
    size?: "sm" | "md" | "lg";
}

const variantStyles = {
    primary:
        "bg-accent/10 border border-accent/20 text-accent hover:bg-accent/15 hover:border-accent/30",
    secondary:
        "bg-base-elevated border border-border text-text-secondary hover:text-text-primary hover:border-border-hover",
    ghost:
        "bg-transparent text-text-muted hover:text-text-primary hover:bg-white/[0.03]",
};

const sizeStyles = {
    sm: "px-4 py-2 text-caption",
    md: "px-5 py-2.5 text-small",
    lg: "px-6 py-3 text-small",
};

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
    size = "md",
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
    rounded-xl font-medium
    transition-all duration-200
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

    const Component = href ? "a" : "button";

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
        >
            <Component href={href} onClick={onClick} className={baseStyles}>
                {children}
            </Component>
        </motion.div>
    );
}
