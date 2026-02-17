"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
interface MotionWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    once?: boolean;
}

const directionVariants = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
};

export default function MotionWrapper({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    once = true,
}: MotionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-60px" });
    const offset = directionVariants[direction];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, ...offset }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
