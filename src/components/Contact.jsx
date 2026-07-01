import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const socials = [
    { icon: FiGithub, label: 'GitHub', href: personal.links.github, handle: '@ssurya07' },
    { icon: FiLinkedin, label: 'LinkedIn', href: personal.links.linkedin, handle: 'Surya S' },
    { icon: FiMail, label: 'Email', href: `mailto:${personal.email}`, handle: personal.email },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's work together
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            I'm open to full-time roles, freelance projects, and collaborations. Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Hari' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'hari@example.com' },
            ].map(field => (
              <div key={field.name}>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                  className="w-full glass rounded-xl px-4 py-3 text-zinc-300 text-sm placeholder-zinc-600 border border-white/10 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition-all duration-200"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full glass rounded-xl px-4 py-3 text-zinc-300 text-sm placeholder-zinc-600 border border-white/10 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/30 transition-all duration-200 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-all duration-300 glow-sm flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <FiCheck size={16} />
                  Opening your mail client...
                </>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Whether you have a project in mind, want to discuss an opportunity, or just want to connect — I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{label}</p>
                      <p className="text-sm text-zinc-300 group-hover:text-brand-400 transition-colors">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5 border border-brand-500/10 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Currently Available
              </div>
              <p className="text-xs text-zinc-600">Open to full-time & freelance opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
