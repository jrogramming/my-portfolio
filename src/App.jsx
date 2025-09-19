import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

/********
 * Single-file modular React app scaffold
 * - Default export: App
 * - Uses Tailwind CSS classes for styling (no Tailwind imports here)
 * - Uses framer-motion for smooth animations
 * - Modular components: Nav, Layout, Home, Info, Portfolio, PortfolioSection, SkillCard
 *
 * Drop this file into src/App.jsx (or App.tsx if you convert to TS)
 * Install dependencies listed in the README below.
 ********/

// Shared animation presets
const fadeIn = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };
const float = {
  animate: { y: [0, -6, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-indigo-500 flex items-center justify-center text-white font-bold">G</div>
        <span className="font-semibold text-lg tracking-wide">Gamey Studio</span>
      </Link>

      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/info">Info</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081129] via-[#071027] to-[#041022] text-slate-100">
      <header className="backdrop-blur-md bg-white/5 sticky top-0 z-30">
        <Nav />
      </header>

      <main className="py-12 px-6 max-w-6xl mx-auto">{children}</main>

      <footer className="py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} — Built with 💙 — Improve visuals and assets later
      </footer>
    </div>
  );
}

function Home() {
  return (
    <motion.section initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
      <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-400">gamey</span> portfolio
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-slate-300 max-w-xl">
            A modular React starter with cute and smooth animations. This front page is a landing hub — you can plug in your own graphics and sprites where indicated.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-6 flex gap-3">
            <Link to="/portfolio" className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">See portfolio</Link>
            <Link to="/info" className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition">Learn more</Link>
          </motion.div>
        </div>

        <div className="relative">
          {/* Placeholder for your artwork / animated sprite - replace with image or canvas */}
          <motion.div
            className="w-full h-72 md:h-96 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/5 flex items-center justify-center"
            {...float}
          >
            <div className="text-slate-200/80">Your hero art goes here</div>
          </motion.div>

          <motion.div className="absolute -bottom-6 left-6 bg-white/6 px-4 py-2 rounded-xl border border-white/5 backdrop-blur" variants={fadeIn}>
            <small className="text-xs text-slate-200/70">Tip: replace this with an animated canvas or SVG</small>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Info() {
  return (
    <motion.section initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
      <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-4">About this project</motion.h2>
      <motion.p variants={fadeIn} className="text-slate-300 max-w-3xl">
        This app is intended as a starting point for a game-styled portfolio. It's intentionally modular: split components into files as your project grows. Use Tailwind utilities for layout and color tokens so you can iterate quickly.
      </motion.p>

      <motion.div variants={fadeIn} className="mt-8 grid md:grid-cols-2 gap-6">
        <InfoCard title="Design approach" text="Think in layers: background parallax, midground components, foreground HUD. Keep animation motion subtle and consistent." />
        <InfoCard title="Performance" text="Lazy-load heavy assets, compress spritesheets, and prefer CSS transforms (translate/scale) for smooth GPU-accelerated animation." />
      </motion.div>

      <motion.div variants={fadeIn} className="mt-8">
        <h3 className="text-xl font-medium">Integration tips</h3>
        <ul className="list-disc pl-6 mt-3 text-slate-300 space-y-2">
          <li>Replace placeholders with optimized SVGs or a <code>canvas</code> component.</li>
          <li>Consider using an asset manager or sprite atlas for characters.</li>
          <li>Use <code>framer-motion</code> or CSS variables for consistent animation timing.</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

function InfoCard({ title, text }) {
  return (
    <motion.div variants={fadeIn} className="p-4 rounded-2xl bg-white/3 border border-white/6">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-slate-200/85 text-sm">{text}</p>
    </motion.div>
  );
}

function Portfolio() {
  // Example skillsets - replace or extend as you like
  const sections = [
    {
      id: "frontend",
      title: "Frontend",
      desc: "React, Tailwind, Accessibility, UI/UX",
      items: [
        { title: "Interactive UI", blurb: "Responsive interfaces with subtle motion." },
        { title: "Component Systems", blurb: "Reusable components and tokens." },
      ],
    },
    {
      id: "game-dev",
      title: "Game Dev",
      desc: "Canvas, WebGL, sprites, physics integration",
      items: [
        { title: "2D Sprites", blurb: "Optimized sprite atlases and animation." },
        { title: "UI/HUD", blurb: "Smooth, readable in-game interfaces." },
      ],
    },
    {
      id: "tools",
      title: "Tools & Backend",
      desc: "Build tools, pipelines, and asset hosting",
      items: [
        { title: "Pipelines", blurb: "Asset processing and deployment flows." },
        { title: "Hosting", blurb: "Static hosting (GitHub Pages, Vercel) and CDNs." },
      ],
    },
  ];

  return (
    <motion.section initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
      <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-6">Portfolio</motion.h2>

      <div className="space-y-6">
        {sections.map((s) => (
          <PortfolioSection key={s.id} section={s} />
        ))}
      </div>
    </motion.section>
  );
}

function PortfolioSection({ section }) {
  return (
    <motion.div variants={fadeIn} className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/4 border border-white/6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{section.title}</h3>
          <p className="mt-1 text-slate-300 text-sm">{section.desc}</p>
        </div>
        <div className="text-sm text-slate-400">{section.items.length} items</div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {section.items.map((item, i) => (
          <SkillCard key={i} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillCard({ item }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ scale: 1.02, translateY: -4 }}
      className="p-4 rounded-xl bg-white/5 border border-white/5"
    >
      <h4 className="font-medium">{item.title}</h4>
      <p className="mt-2 text-slate-300 text-sm">{item.blurb}</p>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}
