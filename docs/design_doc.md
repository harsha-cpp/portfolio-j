# DESIGN DOCUMENT

# 

Now the visual and interaction layer.

---

# **1. Design Philosophy**

The portfolio should feel:

- Confident
- Minimal but layered
- Modern
- Slightly futuristic
- Human but technical

Avoid:

- Over-glassmorphism
- Generic gradient spam
- Overly playful animations

---

# **2. Visual Identity**

## **Color Palette**

Primary Background:

#0B0F14

Accent 1:

Soft Tech Purple #7C5CFF

Accent 2:

Mint Glow #00E0A4

Text Primary:

#E6EDF3

Text Muted:

#8892A6

Hover glow:

Subtle neon diffusion (low opacity blur)

---

# **3. Typography**

Primary Font:

Modern sans-serif (e.g., Geist, Inter, Satoshi)

Heading Style:

- Large
- Generous line height
- Slight tracking increase

Body:

- Clean
- 16–18px
- 1.6 line-height

Use hierarchy properly:

- H1 → Hero
- H2 → Section titles
- H3 → Subsections

---

# **4. Layout System**

12-column responsive grid

Max width: 1280px

Padding: 24–32px

Spacing scale:

8px base system

---

# **5. Motion Design System**

Motion principles:

- Ease: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 300–600ms
- Animate only opacity + transform
- Avoid layout-shifting animations

Scroll animations:

- Fade in + slight upward translate
- Staggered children reveal

Hover animations:

- 1–2px lift
- Soft glow
- Border illumination

Page transitions:

- Crossfade with subtle overlay

---

# **6. Component Design Guidelines**

## **Buttons**

- Rounded (12–16px radius)
- Soft gradient border
- Glow on hover
- Magnetic interaction

---

## **Cards**

- Elevated surface
- Subtle border
- Low opacity background
- Soft shadow

---

## **Case Study Layout**

Hero image full-width

Text constrained to readable width

Visual breaks between sections

---

# **7. Interaction Patterns**

- Smooth scroll
- Scroll-triggered animations
- Cursor-based micro parallax
- Subtle tilt effect on project cards
- Animated underline on links

---

# **8. Responsive Strategy**

Desktop:

Two-column layouts

Tablet:

Stacked with preserved spacing

Mobile:

Single-column

Reduced animation intensity

---

# **9. Performance Design Constraints**

- Avoid heavy 3D unless optimized
- Lazy load images
- Use blur placeholders
- Defer heavy animation libs

---

# **10. Future Expansion Ready**

Structure should allow:

- Blog
- Speaking events
- Press mentions
- Testimonials
- Dark/light mode switch