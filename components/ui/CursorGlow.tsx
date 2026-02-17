"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring follow — feels organic
    const springX = useSpring(mouseX, { damping: 25, stiffness: 150, mass: 0.5 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 150, mass: 0.5 });

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [mouseX, mouseY, isVisible]);

    // Hide on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed pointer-events-none z-[1] mix-blend-screen"
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
                opacity: isVisible ? 1 : 0,
            }}
        >
            {/* Primary orb */}
            <div
                className="w-[400px] h-[400px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(74,222,128,0.07) 0%, rgba(74,222,128,0.02) 40%, transparent 70%)",
                }}
            />
        </motion.div>
    );
}
