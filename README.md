# Personal Portfolio — Next.js

A clean, minimal, fully responsive personal portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features

- Single-page layout with smooth-scroll navigation
- Dark / light mode toggle (persists via `localStorage`)
- Sticky navbar with blur effect on scroll
- Sections: Hero · About · Skills · Projects · Contact · Footer
- Work experience / education timeline
- Downloadable resume button
- Contact form with client-side UI (console.log on submit — backend not wired)
- Social links (GitHub, LinkedIn, Twitter/X, Email)
- Fully responsive — mobile, tablet, desktop
- SEO basics: meta tags, Open Graph, Twitter card

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ (`node --version`)
- npm 9+

### Steps

```bash
# 1. Navigate into the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Customising Your Content

All placeholder content is marked with `// TODO:` comments. Here's the quick checklist:

| File | What to update |
|------|---------------|
| `app/layout.tsx` | Your name, meta description, deployed URL, Twitter handle |
| `components/Hero.tsx` | `HERO_DATA` — name, tagline, subtext. Replace the avatar `div` with `<Image />` |
| `components/About.tsx` | `BIO` paragraph and `STRENGTHS` array |
| `components/Skills.tsx` | `SKILL_CATEGORIES` and `EXPERIENCE` arrays |
| `components/Projects.tsx` | `PROJECTS` array — add your real projects |
| `components/Contact.tsx` | `SOCIAL_LINKS` — update all URLs + email |
| `components/Navbar.tsx` | Your name in the logo |
| `components/Footer.tsx` | Your name |

### Adding Your Profile Photo

In `Hero.tsx`, replace the initials `div` with a Next.js Image:

```tsx
import Image from "next/image";

// Replace the <div> block with:
<Image
  src="/avatar.jpg"          // put your photo in /public/avatar.jpg
  alt="Your Name"
  width={112}
  height={112}
  className="w-28 h-28 rounded-full object-cover shadow-lg"
  priority
/>
```

### Adding Your Resume

Drop your PDF into the `/public` folder as `resume.pdf`. The Download button in Skills already links to `/resume.pdf`.

### Wiring Up the Contact Form

The form currently logs to `console.log`. To send real emails, swap in one of:

- **[Formspree](https://formspree.io/)** — zero backend, just `fetch('https://formspree.io/f/<id>', ...)`
- **[EmailJS](https://www.emailjs.com/)** — client-side email sending
- **Resend** via a `app/api/contact/route.ts` Next.js route

---

## 🌐 Deploying to Vercel

The easiest way to deploy:

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Vercel auto-detects Next.js — click **Deploy**. That's it.

Your site will be live at `https://your-project.vercel.app`.

### Custom Domain

In the Vercel dashboard → **Settings → Domains**, add your domain and follow the DNS instructions.

---

## 📦 Other Deployment Options

### Static Export

If you want a fully static site (no server):

```bash
# In next.config.ts, add:
# output: "export"

npm run build
# Output is in the /out folder — upload to any static host (Netlify, GitHub Pages, S3, etc.)
```

### Docker / Self-Hosted

```bash
npm run build
npm start   # runs on port 3000
```

---

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16 (App Router) |
| React | 19 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| lucide-react | latest |
| TypeScript | 5 |
