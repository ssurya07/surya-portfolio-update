import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio'

function SkillBar({ name, level, delay = 0, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-zinc-300">{name}</span>
        <span className="text-xs font-mono text-brand-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
        />
      </div>
    </div>
  )
}

function SkillGroup({ title, items, inView, startDelay = 0 }) {
  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <h3 className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-5">{title}</h3>
      {items.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          delay={startDelay + i * 0.08}
          inView={inView}
        />
      ))}
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  }),
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-4">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What I work with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <motion.div
            custom={0} variants={fadeUp}
            initial="hidden" animate={inView ? 'show' : 'hidden'}
          >
            <SkillGroup title="Languages" items={skills.languages} inView={inView} startDelay={0.1} />
          </motion.div>
          <motion.div
            custom={1} variants={fadeUp}
            initial="hidden" animate={inView ? 'show' : 'hidden'}
          >
            <SkillGroup title="Frontend" items={skills.frontend} inView={inView} startDelay={0.2} />
          </motion.div>
          <motion.div
            custom={2} variants={fadeUp}
            initial="hidden" animate={inView ? 'show' : 'hidden'}
            className="md:col-span-2 lg:col-span-1"
          >
            <SkillGroup title="Backend" items={skills.backend} inView={inView} startDelay={0.3} />
          </motion.div>
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-6 border border-white/5"
        >
          <h3 className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-5">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(249,127,6,0.5)', color: '#f97f06' }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-400 font-mono cursor-default transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
