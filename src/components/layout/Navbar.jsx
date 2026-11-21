import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Our Products', '/products'],
  ['Processing & Quality', '/processing-quality'],
  ['Infrastructure', '/infrastructure'],
  ['Contact Us', '/contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-lg' : 'bg-gradient-to-b from-black/45 to-transparent'}`}>
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <div className={`grid h-11 w-11 place-items-center rounded-full border ${scrolled ? 'border-forest/20 bg-sage text-forest' : 'border-white/50 bg-white/10 text-white'} font-heading text-xl font-bold`}>A</div>
          <div className="leading-tight">
            <div className={`font-heading text-base font-bold leading-tight ${scrolled ? 'text-forest' : 'text-white'}`}>AASTHA DAIRY</div>
            <div className={`text-[8px] font-bold uppercase tracking-[0.18em] ${scrolled ? 'text-leaf' : 'text-white/80'}`}>& MILK PROCESSING</div>
          </div>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `relative py-2 text-[13px] font-bold transition ${scrolled ? 'text-ink' : 'text-white'} ${isActive ? 'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold' : 'hover:text-gold'}`}>{label}</NavLink>
          ))}
          <Link to="/contact" className="rounded-full bg-gold px-5 py-3 text-xs font-bold text-ink transition hover:bg-white">Enquiry</Link>
        </div>
        <button className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${scrolled ? 'bg-sage text-forest' : 'bg-white/15 text-white'}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-forest/10 bg-white lg:hidden">
            <div className="container-shell flex flex-col py-5">
              {links.map(([label, to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className="border-b border-forest/10 py-3.5 text-sm font-bold text-ink">{label}</NavLink>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
