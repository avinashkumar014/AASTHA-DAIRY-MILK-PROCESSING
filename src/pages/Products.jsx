import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import PageHeader from '../components/sections/PageHeader'
import ProductCard from '../components/products/ProductCard'
import CTASection from '../components/sections/CTASection'
import SEO from '../components/common/SEO'
import ScrollReveal from '../components/animations/ScrollReveal'
import { products } from '../data/products'
import { images } from '../data/images'

export default function Products() {
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState(null)
  const categories = ['All','Milk','Paneer','Curd','Ghee','Butter','Other']
  const filtered = category === 'All' ? products : products.filter((product) => product.category === category)

  return (
    <>
      <SEO title="Dairy Products | AASTHA DAIRY & MILK PROCESSING" description="Explore the dairy product range from AASTHA DAIRY & MILK PROCESSING." />
      <PageHeader eyebrow="Our Dairy Range" title="Our Dairy Products" image={images.products.milk} />
      <section className="section-pad"><div className="container-shell"><ScrollReveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Explore the Catalogue</p><h2 className="text-4xl text-forest md:text-6xl">Freshness for every need</h2></div></ScrollReveal><div className="mb-9 flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${category === item ? 'bg-forest text-white' : 'border border-forest/15 bg-white text-forest hover:border-leaf'}`}>{item}</button>)}</div><motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><AnimatePresence mode="popLayout">{filtered.map((product) => <motion.div layout key={product.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}><ProductCard product={product} onOpen={setActive} /></motion.div>)}</AnimatePresence></motion.div></div></section>
      <AnimatePresence>{active && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true"><motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="relative grid max-h-[90vh] w-full max-w-4xl overflow-auto bg-white md:grid-cols-2"><button onClick={() => setActive(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-forest shadow" aria-label="Close product details"><X size={19} /></button><img src={active.image} alt={active.name} className="h-72 w-full object-cover md:h-full" /><div className="p-7 md:p-10"><p className="eyebrow">{active.category}</p><h2 className="text-4xl text-forest">{active.name}</h2><p className="mt-5 leading-7 text-ink/65">{active.description}</p><p className="mt-6 border-t border-forest/10 pt-5 text-sm font-bold text-forest">Packaging: <span className="font-normal text-ink/60">{active.packaging}</span></p><a href="/contact" className="btn-green mt-7">Make an Enquiry</a></div></motion.div></motion.div>}</AnimatePresence>
      <CTASection />
    </>
  )
}
