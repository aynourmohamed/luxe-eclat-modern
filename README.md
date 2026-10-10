# Luxe Éclat — Modern Rebuild

A modern rebuild of the Luxe Éclat candle e-commerce site. The original was built with HTML, CSS, JavaScript, and Bootstrap ([legacy version](https://github.com/aynourmohamed/luxe-eclat-legacy)). This version was rebuilt from scratch with Next.js, TypeScript, and Tailwind CSS as a learning project and portfolio piece.

Live Demo

[YOUR-VERCEL-URL.vercel.app](https://luxe-eclat-modern.vercel.app/)

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React, React Icons |
| State management | React Context (cart), persisted with localStorage |
| Fonts | Poppins, Playfair Display (Google Fonts) |
| Deployment | Vercel |

## Features

- Fully responsive across mobile, tablet, and desktop
- Pages: Home, Shop, Product Detail, Cart, Checkout, Contact, Help, Account, About
- Product catalog with pagination
- Product detail pages via dynamic routing (`/shop/[slug]`)
- Shopping cart with quantity controls, shared across the whole site through React Context
- Cart persists across page refreshes (localStorage)
- Mock checkout flow: shipping form, order summary, confirmation
- Contact form backed by a custom API route
- FAQ accordion, login/signup modal, auto-rotating hero carousel
- Accessible interactive components (ARIA labels, keyboard focus states)
- Per-page SEO metadata

## Project Structure

```
app/
├── components/   # Reusable UI (Navbar, CandleCard, Hero, etc.)
├── context/      # Cart state (React Context)
├── data/         # Mock product and content data
├── types/        # Shared TypeScript types
├── api/          # API routes (contact form)
└── ...           # Page routes: shop, shop/[slug], cart, checkout,
                  # contact, help, account, about
```

Pages that need interactivity and SEO metadata (Help, Account, Cart) are split into a thin Server Component (`page.tsx`, holds `metadata`) and a Client Component (`*Content.tsx`, holds the interactive logic).

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Legacy vs. Modern

| | Legacy | Modern |
|---|---|---|
| Stack | HTML, CSS, JS, Bootstrap | Next.js, TypeScript, Tailwind |
| Routing | Separate `.html` files | File-based routing, dynamic routes |
| Data | Hardcoded in markup | Typed data files |
| Cart | None | Context-based, persisted |
| Responsiveness | Bootstrap grid + fixed widths | Mobile-first Tailwind breakpoints |

## What I Learned

- Server vs. Client Components, and when to use each
- File-based and dynamic routing in the App Router
- Type-safe data modeling with TypeScript interfaces
- Sharing and persisting state with React Context and localStorage
- Building accessible, responsive UI with Tailwind
- Separating data, types, and components for a cleaner structure

## What I'd Improve Next

- Connect to Supabase instead of mock data
- Real payment processing in checkout
- Product filtering, sorting, and search
- Wishlist
- Automated tests