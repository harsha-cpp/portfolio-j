"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    className?: string;
    strength?: number;
}

export default function MagneticButton({
    children,
    href,
    className = "",
    strength = 0.3,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        setPosition({ x, y });
    };

    const handleLeave = () => setPosition({ x: 0, y: 0 });

    const Tag = href ? "a" : "div";

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.2 }}
            className="inline-block"
        >
            <Tag
                {...(href ? { href } : {})}
                className={className}
            >
                {children}
            </Tag>
        </motion.div>
    );
}
