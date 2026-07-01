import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: Text */}
        <div>
          <motion.p variants={fadeUp} className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-4">
            About Me
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Turning ideas into<br />
            <span className="gradient-text">real products</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-400 text-lg leading-relaxed mb-6">
            {personal.bio}
          </motion.p>
          <motion.p variants={fadeUp} className="text-zinc-500 leading-relaxed mb-8">
            During my internship at Scope Tech Software Solutions, I worked in an agile team building production REST APIs and responsive UIs. I care deeply about clean code, performance, and user experience.
          </motion.p>

          {/* Contact info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            {[
              { icon: FiMapPin, text: personal.location },
              { icon: FiMail, text: personal.email, href: `mailto:${personal.email}` },
              { icon: FiPhone, text: personal.phone, href: `tel:${personal.phone}` },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} className="flex items-center gap-3 text-zinc-400">
                <Icon size={16} className="text-brand-400 shrink-0" />
                {href
                  ? <a href={href} className="hover:text-brand-400 transition-colors">{text}</a>
                  : <span>{text}</span>
                }
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Card stack */}
        <motion.div variants={fadeUp} className="relative flex items-center justify-center h-80">
          {/* Background card */}
          <div className="absolute w-64 h-72 rounded-2xl glass rotate-6 top-4 left-4" />
          <div className="absolute w-64 h-72 rounded-2xl glass -rotate-3 top-2 left-2" />

          {/* Main card */}
          <div className="relative w-64 h-72 rounded-2xl glass border border-brand-500/20 p-6 flex flex-col justify-between glow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-black text-xl mb-4">
                S
              </div>
              <h3 className="font-bold text-white text-lg mb-1">{personal.name}</h3>
              <p className="text-brand-400 text-sm font-mono">{personal.title}</p>
            </div>

            <div className="space-y-2">
              {['React.js', 'Spring Boot', 'MySQL', 'REST API'].map(tag => (
                <span
                  key={tag}
                  className="inline-block mr-2 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-400 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for hire
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
