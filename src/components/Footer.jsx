import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-600 text-sm">
          <span className="font-mono">surya.dev</span>
          <span>·</span>
          <span>Built with React + Vite + Tailwind</span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: FiGithub, href: personal.links.github },
            { icon: FiLinkedin, href: personal.links.linkedin },
            { icon: FiMail, href: `mailto:${personal.email}` },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-brand-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-zinc-700 text-xs flex items-center gap-1">
          Made with <FiHeart size={12} className="text-brand-500" /> by Surya S
        </p>
      </div>
    </footer>
  )
}
