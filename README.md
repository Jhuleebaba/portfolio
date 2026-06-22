# Julius Adereti — Developer Portfolio

> **Live Portfolio:** [github.com/Jhuleebaba](https://github.com/Jhuleebaba) · **GitHub:** [@Jhuleebaba](https://github.com/Jhuleebaba) · **Twitter/X:** [@jhulee_1](https://x.com/jhulee_1)

A cyberpunk-themed, production-grade personal portfolio for **Julius Adereti** — Lead Full-Stack Software Engineer & DevOps Architect. Built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**, it showcases live production deployments, an interactive terminal emulator, a technical skills matrix, a real-time system health dashboard, and a contact form — all wrapped in a dark, glowing, terminal-inspired UI.

---

## ✨ Features

### 🖥️ Interactive Terminal Emulator
A fully interactive terminal widget sits in the hero section. Visitors can type commands directly or click quick-launch buttons to explore information about Julius's background, projects, and skills.

| Command | Description |
|---|---|
| `help` | List all available commands |
| `about` | Who is Julius Adereti? |
| `projects` | List all live production deployments |
| `skills` | Display technical skill stack |
| `contact` | Show socials & direct links |
| `uptime` | Live health check of all production systems |
| `clear` | Flush the terminal output buffer |

### 📊 Systems Operational Dashboard
A live health-monitoring panel displays uptime percentages, latency readings, and primary tech node for each deployed project — styled like a real-time DevOps monitoring console.

### 🚀 Live Production Deployments
Five fully deployed, real-world projects are documented with:
- Live URLs and GitHub repository links
- Type classification (SaaS, Enterprise, CBT, etc.)
- Uptime and latency metrics
- Full technology stack tags
- Key architectural feature highlights

### 🛠️ Technical Skills Matrix
An interactive tabbed interface that categorizes skills across three domains with proficiency bars:
- **Backend APIs & Architecture** — Python, FastAPI, Flask, Node.js, Celery, SQLAlchemy
- **Frontend & Cross-Platform UI** — React 19, Next.js, React Native (Expo), TypeScript, Tailwind
- **DevOps & Orchestration** — Docker, PostgreSQL, MongoDB, Redis, Vercel, Render, CI/CD

### 📬 Contact / Inquiry Form
A themed contact form styled as a YAML config payload with:
- One-click email copy to clipboard
- Direct social media links (LinkedIn, X/Twitter, Facebook)
- Terminal feedback on submission

### 🎨 Cyberpunk Design System
- **Scanline overlay** — CRT-monitor aesthetic covering the entire page
- **Cyber grid background** — Subtle grid lines across the layout
- **Neon glow effects** — Text and border glow on key elements (`glow-cyan`, `glow-lime`, `glow-purple`)
- **Ambient blur orbs** — Large, radial gradient blobs for atmospheric depth
- **Custom scrollbar** — Styled with the cyber cyan palette
- **Animated cursor blink** — Terminal-style blinking cursor in the input

---

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── layout.tsx        # Root layout: fonts, metadata, JSON-LD schema
│       ├── page.tsx          # Single-page app: all sections & logic
│       ├── globals.css       # Design system: tokens, animations, custom utilities
│       ├── robots.ts         # Next.js robots.txt generation
│       ├── sitemap.ts        # Next.js sitemap.xml generation
│       └── favicon.ico       # Site favicon
├── public/                   # Static assets (SVGs)
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint configuration
├── postcss.config.mjs        # PostCSS + Tailwind v4 config
└── package.json
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | [Geist Sans & Geist Mono](https://vercel.com/font) (via `next/font/google`) |
| **Linting** | ESLint 9 + `eslint-config-next` |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Jhuleebaba/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Next.js development server with hot-reload |
| `npm run build` | Create a production-optimised build |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🌐 SEO & Metadata

This portfolio is fully optimised for search engines and social sharing:

- **Full Open Graph tags** for rich link previews on social platforms
- **Twitter Card** (`summary_large_image`) metadata for X/Twitter
- **JSON-LD structured data** (`schema.org/Person`) injected in the `<head>` for Google Knowledge Graph eligibility
- **`robots.ts`** — Generates `robots.txt` allowing full crawl access
- **`sitemap.ts`** — Generates `sitemap.xml` for search engine indexing
- **Canonical keyword targeting**: Julius Adereti, Jhuleebaba, Python Developer Nigeria, FastAPI Developer, etc.

---

## 🏗️ Featured Projects

### 1. [Beze Exam Suite](https://exam.beze.ng) — Enterprise SaaS API Provider
> FastAPI · SQLAlchemy · PostgreSQL · Next.js 16 · Celery · Redis · Docker

A modular monolith exam and printing engine. Separates auth, references, questions, and integrations into distinct modules. Features background worker processing for bulk imports and PDF/DOCX exam sheet generation, and exposes a REST question-provider API for school portals.

- **Uptime:** 99.98% · **Latency:** 22ms
- [GitHub →](https://github.com/Jhuleebaba/beze_backend)

---

### 2. [Bezalel SaaS](https://bezalel-three.vercel.app) — Multi-Tenant School Management Platform
> Flask · MongoDB · PyMongo · JWT Auth · Paystack API · ReportLab · Vite · TypeScript

A commercial multi-tenant SaaS platform with custom `school_id` context filters for data isolation. Integrates Paystack for billing and invoice payments, includes a financial payroll tracker, and dynamically compiles styled school report card PDFs.

- **Uptime:** 99.95% · **Latency:** 34ms
- [GitHub →](https://github.com/Jhuleebaba/bezalel_backend)

---

### 3. [Goodly Heritage Portal](https://ghsportal-frontend.vercel.app) — Dedicated School Web & Mobile Ecosystem
> React Native · Expo · Flask · MongoDB · React · TypeScript · Tailwind CSS

A full school ecosystem with a cross-platform Expo mobile app for parents and staff, a dual-mode student login (personal vs. exam-locked mode), real-time announcements, an assignments module, and a super-administrator settings panel.

- **Uptime:** 99.94% · **Latency:** 31ms
- [GitHub →](https://github.com/Jhuleebaba/Ghsportal_frontend)

---

### 4. [MMS CBT System](https://mmscbtfronten.vercel.app) — High-Integrity Testing Engine
> React 19 · FastAPI · MongoDB · Tailwind v4 · Quill Editor · Axios Interceptors

A Computer-Based Testing engine supporting MCQs and subjective theory assessments simultaneously. Features real-time auto-saving with status pills (Syncing / Synced / Error), a question flagging/bookmarking system with quick-navigation grids, and a rich Quill Editor for admin question compilation.

- **Uptime:** 100.0% · **Latency:** 18ms
- [GitHub →](https://github.com/Jhuleebaba/mmscbt_frontend)

---

### 5. Entrance Exam System — Admissions & Authentication Service
> Node.js · Express · TypeScript · MongoDB · React · JWT Auth

A public admissions intake system with secure candidate enrollment and verification flow, strict JWT session timeout tracking, and an admin control room for scheduling, resets, and score registers.

- **Uptime:** 99.99% · **Latency:** 28ms
- [GitHub →](https://github.com/Jhuleebaba/entrance_exam_backend)

---

## 🎨 Design System

Custom CSS tokens and utilities are defined in [`globals.css`](./src/app/globals.css) using the Tailwind v4 `@theme` directive:

| Token | Value | Usage |
|---|---|---|
| `--color-cyber-bg` | `#050811` | Page background |
| `--color-cyber-cyan` | `#06b6d4` | Primary accent, borders, glows |
| `--color-cyber-lime` | `#a3e635` | Success states, uptime indicators |
| `--color-cyber-purple` | `#a855f7` | Secondary accent, labels |
| `--color-cyber-dark` | `#090e1a` | Deep card backgrounds |

**Custom CSS utilities:**
- `.cyber-grid` — Subtle grid background overlay
- `.cyber-dots` — Radial dot pattern for terminal areas
- `.scanlines` — CRT scanline overlay (pseudo-element, fixed position)
- `.glow-cyan` / `.glow-lime` / `.glow-purple` — Neon text-shadow effects
- `.cyber-card-border` — Glowing card borders on hover

---

## 📬 Contact

| Channel | Link |
|---|---|
| **Email** | [jhulee1@gmail.com](mailto:jhulee1@gmail.com) |
| **LinkedIn** | [julius-adereti-682308178](https://www.linkedin.com/in/julius-adereti-682308178) |
| **X / Twitter** | [@jhulee_1](https://x.com/jhulee_1) |
| **Facebook** | [julius.aderetiadeyemi](https://www.facebook.com/julius.aderetiadeyemi) |
| **GitHub** | [@Jhuleebaba](https://github.com/Jhuleebaba) |

---

## 📄 License

© 2026 Julius Adereti (Jhuleebaba). All rights reserved.

This is a personal portfolio repository. The source code is open for reference and inspiration, but the design, brand, and content (name, projects, work descriptions) are the intellectual property of Julius Adereti and may not be reproduced or redistributed without permission.
