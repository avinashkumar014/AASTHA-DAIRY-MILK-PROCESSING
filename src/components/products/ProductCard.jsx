import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProductCard({ product, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-[2px] bg-white shadow-card">
      <button onClick={() => onOpen?.(product)} className="block h-72 w-full overflow-hidden" aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" className="image-cover transition duration-700 group-hover:scale-[1.06]" />
      </button>
      <div className="p-6"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-leaf">{product.category}</p><h3 className="text-2xl text-forest">{product.name}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-ink/65">{product.description}</p><Link to="/contact" className="mt-5 flex items-center gap-2 text-sm font-bold text-forest">Enquire <ArrowUpRight size={16} /></Link></div>
    </article>
  )
}
