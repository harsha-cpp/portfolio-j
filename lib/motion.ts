import { type Variants } from "framer-motion";

// Consistent easing curve used across all animations
export const ease = [0.22, 1, 0.36, 1] as const;

// ─── Fade Variants ──────────────────────────────────────────────

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease },
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease },
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease },
    },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease },
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease },
    },
};

// ─── Stagger Variants ───────────────────────────────────────────

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease },
    },
};

// ─── Scale Variants ─────────────────────────────────────────────

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease },
    },
};

// ─── Slide Variants ─────────────────────────────────────────────

export const slideInFromLeft: Variants = {
    hidden: { x: -80, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, ease },
    },
};

// ─── Card Hover ─────────────────────────────────────────────────

export const cardHover = {
    rest: {
        y: 0,
        boxShadow: "0 0 0 rgba(74, 222, 128, 0)",
        transition: { duration: 0.3, ease },
    },
    hover: {
        y: -4,
        boxShadow: "0 8px 30px rgba(74, 222, 128, 0.08)",
        transition: { duration: 0.3, ease },
    },
};

// ─── Viewport Settings ──────────────────────────────────────────

export const viewportOnce = { once: true, margin: "-80px" as const };
