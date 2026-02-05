# 🦅 Enterprise OpenClaw Landing Page

A production-ready landing page for Enterprise OpenClaw, built with Next.js 14 and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully responsive** design
- 🚀 **One-click Vercel deployment**
- 🔍 **SEO optimized** with meta tags
- ✨ **Interactive sections**: Hero, Problem, Solution, Results, Pricing, Waitlist, FAQ

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/enterprise-openclaw-landing)

### Option 2: Manual Deploy

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

That's it! Your landing page will be live in under a minute.

## Project Structure

```
src/
├── app/
│   ├── page.tsx      # Main landing page with all sections
│   ├── layout.tsx    # Root layout with SEO metadata
│   └── globals.css   # Global styles and Tailwind imports
```

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching headline with 97% cost reduction hook |
| **Problem** | Pain points: context bloat, heartbeat overhead, etc. |
| **Solution** | 4 key features: routing, dashboard, optimization, control |
| **Results** | Before/after cost comparisons |
| **Pricing** | Community (Free), Pro ($29), Enterprise (Custom) |
| **Waitlist** | Email signup form (mailto-based MVP) |
| **FAQ** | Common questions with accordion UI |
| **Footer** | CTAs and social links |

## Customization

### Update Waitlist Integration

The current waitlist uses a simple `mailto:` link. To integrate with a real backend:

1. **Formspree** (easiest):
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Supabase**:
   ```tsx
   const { data, error } = await supabase
     .from('waitlist')
     .insert({ email });
   ```

3. **Loops.so** or **ConvertKit**:
   Use their JavaScript SDK

### Update Links

Replace placeholder links in `page.tsx`:
- GitHub repository URL
- Discord invite URL
- Demo video URL

### Add Analytics

Uncomment and configure in `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';
// or
import posthog from 'posthog-js';
```

## Environment Variables

For production, you may want:

```env
NEXT_PUBLIC_SITE_URL=https://enterprise-openclaw.com
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
```

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## License

MIT - Use this template freely for your projects.

---

Built with ❤️ for the AI agent community
