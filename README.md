# Surya S — Portfolio

A modern, cinematic developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## ✨ Features
- Custom animated cursor with magnetic ring
- Smooth scrolling via Lenis
- Framer Motion scroll-triggered animations
- Animated skill bars
- Glassmorphism UI with glow effects
- Typewriter hero text
- Responsive & mobile-friendly
- Dark theme with brand orange accent

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173)

## 🛠 Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Lenis (smooth scroll)
- React Icons

## 📁 Structure
```
src/
├── components/     # UI components (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, Cursor)
├── data/           # portfolio.js — all your content in one file
├── hooks/          # useCursor, useTypewriter, useInView
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization
Edit `src/data/portfolio.js` to update all content — name, links, projects, skills, experience.

## 🌐 Deploy to Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to netlify.com/drop
```
