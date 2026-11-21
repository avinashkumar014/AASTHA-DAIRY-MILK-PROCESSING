import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({ title = "Let's Connect and Grow Together", text = 'Speak with our team about products, supply or partnerships.' }) {
  return (
    <section className="bg-gold"><div className="container-shell flex flex-col items-start justify-between gap-7 py-14 md:flex-row md:items-center"><div><h2 className="text-3xl text-forest md:text-5xl">{title}</h2>{text && <p className="mt-3 max-w-2xl text-sm text-forest/75 md:text-base">{text}</p>}</div><Link to="/contact" className="btn-green shrink-0">Contact Us <ArrowRight size={17} /></Link></div></section>
  )
}
