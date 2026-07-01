import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import { personal } from '../data/portfolio'

const words = [
  'Full Stack Developer',
  'React Specialist',
  'Spring Boot Engineer',
  'API Architect',
  'UI/UX Enthusiast',
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypewriter(words, 80, 2000)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] bg-brand-500 -top-32 -right-32" />
      <div className="blob w-[400px] h-[400px] bg-purple-600 bottom-0 -left-20" />
      <div className="blob w-[300px] h-[300px] bg-blue-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-950/60 to-zinc-950 pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
          </span>
          <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 leading-none"
        >
          <span className="text-white">SURYA</span>
          <span className="gradient-text"> S</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 text-xl md:text-2xl font-mono text-zinc-400 mb-6 h-8"
        >
          <span>{typed}</span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-3.5 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-400 transition-all duration-300 glow-sm flex items-center gap-2"
          >
            View My Work
            <FiArrowDown size={16} />
          </motion.a>
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl glass glass-hover border border-white/10 text-zinc-300 font-semibold flex items-center gap-2"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="flex items-center justify-center gap-6">
          {[
            { icon: FiGithub, href: personal.links.github, label: 'GitHub' },
            { icon: FiLinkedin, href: personal.links.linkedin, label: 'LinkedIn' },
            { icon: FiExternalLink, href: personal.links.portfolio, label: 'Portfolio' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#f97f06' }}
              className="text-zinc-500 hover:text-brand-400 transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating stats */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-4"
      >
        {[
          { value: '6+', label: 'Projects Built' },
          { value: '18+', label: 'REST APIs' },
          { value: '5mo', label: 'Internship' },
        ].map(({ value, label }) => (
          <div key={label} className="glass rounded-xl p-4 text-center glow-sm">
            <div className="text-2xl font-black gradient-text">{value}</div>
            <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
