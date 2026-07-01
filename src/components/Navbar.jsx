import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, personal } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    setActive(href)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleNav('#hero')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center font-mono font-bold text-sm text-white">
              S
            </div>
            <span className="font-mono text-sm text-zinc-400 group-hover:text-white transition-colors">
              surya.dev
            </span>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                onClick={() => handleNav(link.href)}
                className={`animated-underline text-sm font-medium transition-colors ${
                  active === link.href ? 'text-brand-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href={`mailto:${personal.email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="px-4 py-2 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium hover:bg-brand-500/20 hover:border-brand-500/60 transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                whileHover={{ x: 10 }}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-semibold text-zinc-300 hover:text-brand-400 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="mt-4 px-8 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
