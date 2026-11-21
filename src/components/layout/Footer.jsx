import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../../data/company'

export default function Footer() {
  return (
    <footer className="bg-[#103b2a] text-white">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 text-xl font-bold text-gold">A</div><div><div className="font-heading text-lg font-bold">AASTHA DAIRY</div><div className="text-[9px] uppercase tracking-[0.16em] text-white/60">& MILK PROCESSING</div></div></div>
          <p className="max-w-xs text-sm leading-7 text-white/70">Pure dairy products and responsible processing, with a commitment to freshness and quality.</p>
        </div>
        <div><h3 className="mb-5 text-base">Quick Links</h3><div className="grid gap-3 text-sm text-white/70">{[['About Us','/about'],['Our Products','/products'],['Processing & Quality','/processing-quality'],['Infrastructure','/infrastructure']].map(([label,to]) => <Link key={to} to={to} className="hover:text-gold">{label}</Link>)}</div></div>
        <div><h3 className="mb-5 text-base">Products</h3><div className="grid gap-3 text-sm text-white/70"><Link to="/products">Fresh Milk</Link><Link to="/products">Paneer & Curd</Link><Link to="/products">Ghee & Butter</Link><Link to="/contact">Wholesale Enquiries</Link></div></div>
        <div><h3 className="mb-5 text-base">Contact</h3><div className="grid gap-4 text-sm text-white/70"><span className="flex gap-3"><MapPin size={18} className="shrink-0 text-gold" />{company.address}</span><a href={`tel:${company.phone}`} className="flex gap-3"><Phone size={18} className="text-gold" />{company.phone}</a><a href={`mailto:${company.email}`} className="flex gap-3"><Mail size={18} className="text-gold" />{company.email}</a></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} AASTHA DAIRY & MILK PROCESSING</span><span>Pure Milk · Trusted Quality · Healthy Living</span></div></div>
    </footer>
  )
}
