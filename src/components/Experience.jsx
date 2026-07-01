import { motion } from 'framer-motion'
import { FiBriefcase, FiBook, FiAward } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { experience, education, certifications } from '../data/portfolio'

function TimelineItem({ children, index, inView, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Line & dot */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0 z-10">
          <Icon size={18} />
        </div>
        <div className="w-px flex-1 mt-2 timeline-line opacity-40" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1 pt-1.5">
        {children}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-4">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Experience & Education
          </h2>
        </motion.div>

        {/* Experience */}
        <div className="mb-4">
          <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">Work Experience</p>
          {experience.map((exp, i) => (
            <TimelineItem key={i} index={i} inView={inView} icon={FiBriefcase}>
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-brand-500/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                    <p className="text-brand-400 text-sm font-medium">{exp.company}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{exp.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((d, j) => (
                    <li key={j} className="text-sm text-zinc-400 flex items-start gap-2">
                      <span className="text-brand-400 mt-1.5 shrink-0">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-500 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TimelineItem>
          ))}
        </div>

        {/* Education */}
        <div className="mb-4">
          <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">Education</p>
          {education.map((edu, i) => (
            <TimelineItem key={i} index={i + experience.length} inView={inView} icon={FiBook}>
              <div className="glass rounded-2xl p-6 border border-white/5 hover:border-brand-500/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-zinc-400 text-sm mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono shrink-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            </TimelineItem>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">Certifications</p>
          {certifications.map((cert, i) => (
            <TimelineItem key={i} index={i + experience.length + education.length} inView={inView} icon={FiAward}>
              <div className="glass rounded-2xl p-5 border border-white/5 hover:border-brand-500/20 transition-all duration-300 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">{cert.name}</h3>
                  <p className="text-zinc-400 text-sm mt-0.5">{cert.issuer}</p>
                </div>
                <span className="text-xs text-zinc-500 font-mono">{cert.year}</span>
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  )
}
