import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative glass rounded-2xl border overflow-hidden transition-all duration-500 ${
        project.featured
          ? 'md:col-span-2 border-brand-500/20'
          : 'border-white/5'
      } ${hovered ? 'border-brand-500/40 glow-sm' : ''}`}
    >
      {/* Top accent line */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className={`p-6 md:p-8 ${project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}`}>
        {/* Left content */}
        <div>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black mb-3"
                style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
              >
                <span style={{ color: project.color }}>0{project.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 mt-0.5">{project.subtitle}</p>
            </div>

            {/* Links */}
            <div className="flex gap-2 shrink-0 ml-4">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg text-zinc-400 hover:text-brand-400 hover:border-brand-500/40 transition-all"
                  aria-label="Live Demo"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg text-zinc-400 hover:text-brand-400 hover:border-brand-500/40 transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub size={16} />
                </a>
              )}
              {project.links?.frontend && (
                <a
                  href={project.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg text-zinc-400 hover:text-brand-400 hover:border-brand-500/40 transition-all"
                  aria-label="Frontend Repo"
                >
                  <FiGithub size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-500 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right content for featured */}
        {project.featured && (
          <div className="mt-6 md:mt-0 flex flex-col justify-center">
            <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-4">
              Key Highlights
            </p>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-zinc-400"
                >
                  <FiArrowRight size={14} className="text-brand-400 shrink-0" />
                  {h}
                </motion.li>
              ))}
            </ul>

            {project.links?.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-8 text-brand-400 text-sm font-medium hover:text-brand-300 transition-colors"
              >
                View Live Project <FiExternalLink size={14} />
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Things I've built
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            A selection of projects ranging from full-stack e-commerce platforms to real-time booking systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ssurya07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <FiGithub size={16} />
            See more on GitHub
            <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
