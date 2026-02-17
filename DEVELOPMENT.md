# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/               # Next.js App Router pages
  admin/           # Admin dashboard (protected)
  api/             # API routes (CRUD)
components/
  sections/        # Page sections (Hero, Experience, etc.)
  ui/              # Reusable UI primitives
  providers/       # Context providers (SmoothScroll)
data/              # Static JSON content files
lib/               # Utilities (db, auth, utils)
prisma/            # Database schema
```

---

## Database Setup (Neon Postgres)

1. Create a free database at [neon.tech](https://neon.tech)
2. Copy `.env.example` to `.env` and fill in your database URLs:
   ```bash
   cp .env.example .env
   ```
3. Generate Prisma client and run migrations:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
4. (Optional) Seed initial data:
   ```bash
   npx prisma db seed
   ```

---

## Migrating from JSON to CMS

The frontend currently reads from `data/*.json` files. To switch to database-driven content:

1. **Set up the database** (see above)
2. **Seed your JSON data** into Postgres using a seed script
3. **Update components** to fetch from API routes instead of importing JSON:
   ```tsx
   // Before (JSON):
   import experiences from "@/data/experiences.json";

   // After (API):
   const res = await fetch("/api/experiences");
   const experiences = await res.json();
   ```
4. **Uncomment Prisma queries** in the API route files (`app/api/*/route.ts`)
5. API routes already have commented Prisma code ready to enable

---

## Admin Dashboard

- Access at `/admin` (protected by NextAuth)
- Default credentials in `.env`: `admin@jahnavi.dev` / `change-this-in-production`
- Manages: Hero text, Experiences, Skills, Projects, Site Settings
- Resume upload dropzone ready for Uploadthing/Cloudinary integration

---

## Deploying to Vercel

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL` — your Neon connection string
   - `DIRECT_URL` — your Neon direct connection string
   - `NEXTAUTH_SECRET` — generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL` — your production URL (e.g., `https://jahnavi.dev`)
   - `ADMIN_EMAIL` / `ADMIN_PASSWORD` — admin credentials
4. Deploy! Vercel auto-detects Next.js

---

## Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | Next.js 14 (App Router)   |
| Language   | TypeScript                |
| Styling    | TailwindCSS               |
| Animation  | Framer Motion             |
| Scroll     | Lenis                     |
| Database   | Prisma + Neon (Postgres)  |
| Auth       | NextAuth.js               |
| Uploads    | Uploadthing / Cloudinary  |
| Hosting    | Vercel                    |
| Icons      | Lucide React              |

---

## Performance Tips

- Below-the-fold sections use `dynamic()` imports
- Images use `next/image` for automatic optimization
- Lenis handles 60fps smooth scrolling
- Animations use GPU-friendly `transform` + `opacity` only
- Target: Lighthouse 90+
