# Build Plan

# **MASTER EXECUTION PLAN**

Premium Interactive Portfolio + Admin Dashboard

---

# **1. PRODUCT POSITIONING**

## **Core Identity**

This portfolio represents:

- Finance-focused professional
- Structured thinker
- Operations-aware
- Tech-curious
- Community-oriented

The experience should feel:

- Intelligent
- Composed
- Premium
- Confident
- Modern

Not:

- Overly playful
- Overly corporate
- Overly decorative
- Overly experimental

---

# **2. TECH STACK DECISION**

## **Recommended Stack**

Frontend:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

Backend:

- Prisma ORM
- PostgreSQL (Neon)
- NextAuth (Authentication)

Hosting:

- Vercel

Storage:

- Uploadthing or Cloudinary

Why this stack:

- Fully scalable
- Easy dashboard integration
- Excellent performance
- Recruiter-impressive
- Production-grade structure

---

# **3. ARCHITECTURE STRUCTURE**

## **Folder Structure**

```
app/
  page.tsx
  projects/[slug]/page.tsx
  admin/
components/
  sections/
  ui/
  animations/
lib/
  db.ts
  auth.ts
  utils.ts
prisma/
  schema.prisma
```

Keep it minimal. No random folders.

---

# **4. FRONTEND BUILD STRATEGY**

Build static UI first.

No backend initially.

Use mock JSON data.

---

## **Layout System**

- Max width container (1200–1280px)
- 12-column grid
- 8px spacing system
- Generous whitespace
- Strong typography hierarchy

---

## **Design Direction**

Dark-first premium layout.

Base:

- Deep charcoal background
- Soft purple accent
- Subtle mint highlight

Use:

- Layered depth
- Controlled glow
- Soft elevation

Avoid:

- Heavy glass everywhere
- Loud gradients
- Too many colors
- Cheap animation effects

---

# **5. SECTION BUILD ORDER**

Build in this exact order:

1. Root layout + global styles
2. Hero section
3. Experience section
4. About content
5. Skills block
6. PiggyWise section
7. Contact/footer

Do not jump between sections randomly.

---

# **6. MOTION SYSTEM**

Motion should feel intentional.

## **Rules**

- Animate only opacity + transform
- No layout shifts
- No height-auto animations
- Use GPU-friendly properties
- 300–500ms duration
- Smooth cubic-bezier easing

---

## **Add These Interactions**

- Fade-in + slight upward reveal
- Staggered content appearance
- Subtle card lift on hover
- Magnetic button hover
- Soft glow border interaction
- Smooth scroll (Lenis)

Optional:

- Cursor glow
- Page fade transitions

Premium motion = subtle, not dramatic.

---

# **7. CASE STUDY / PROJECT STRUCTURE (Future Ready)**

Even if minimal now, build scalable structure.

Each project supports:

- Title
- Description
- Image
- Modular content blocks

Use flexible schema so you can expand later.

---

# **8. DATABASE DESIGN**

Core Models:

User

Project

ProjectSection

Experience

Skill

SiteSettings

ProjectSection:

- type
- content
- order
- projectId

This makes dynamic storytelling possible.

---

# **9. ADMIN DASHBOARD STRUCTURE**

Accessible via:

```
/admin
```

Protected route.

---

## **Admin Capabilities**

- Edit hero text
- Add/edit experiences
- Add/edit skills
- Add/edit projects
- Upload images
- Reorder sections
- Update PiggyWise content
- Upload resume

Dashboard UI:

- Minimal
- Functional
- Clean layout
- No heavy animations

This is a tool, not marketing.

---

# **10. PERFORMANCE STRATEGY**

- Use next/image
- Lazy load below-the-fold sections
- Dynamic import heavy animation libraries
- Optimize font loading
- Avoid large client-side bundles
- Test mobile performance

Goal:

- Lighthouse 90+
- No scroll jank
- Fast first paint

---

# **11. RESPONSIVENESS STRATEGY**

Desktop:

- Two-column layouts
- Balanced negative space

Tablet:

- Stacked but preserved spacing

Mobile:

- Single column
- Reduced animation intensity
- No complex hover dependency

Test at:

- 1440px
- 1280px
- 1024px
- 768px
- 375px

---

# **12. VISUAL DEPTH SYSTEM**

Use 3 layers:

1. Base background
2. Surface background
3. Elevated card background

Each slightly different tone.

Add:

- Very subtle grain overlay
- Very slow background gradient movement

User should feel motion — not see it.

---

# **13. QUALITY CONTROL CHECKLIST**

Before launch:

- No inconsistent spacing
- No mismatched font weights
- No uneven margins
- No harsh glow
- No animation delays too long
- No layout jumps
- No visible loading flickers

---

# **14. FINAL POLISH LAYER**

After full build:

- Refine hover states
- Refine button interactions
- Adjust micro-spacing
- Tighten typography
- Optimize transitions
- Remove unnecessary dependencies

Polish is what separates average from premium.

---

# **15. EXECUTION MINDSET**

Rules:

- Do not redesign mid-build.
- Do not add features impulsively.
- Finish base layout fully.
- Then polish.
- Then optimize.

Restraint = premium.