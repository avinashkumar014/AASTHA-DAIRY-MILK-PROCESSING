import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../../data/images'

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-forest text-white md:min-h-[820px]">
      <motion.div className="absolute inset-0" initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4 }}>
        <img src={images.hero} alt="Fresh dairy milk being poured" className="image-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09271b]/90 via-[#09271b]/55 to-[#09271b]/15" />
      </motion.div>
      <div className="container-shell relative flex min-h-[760px] items-center pb-16 pt-28 md:min-h-[820px]">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} className="max-w-3xl">
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold">Freshness · Purity · Trust</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }} className="text-5xl leading-[1.05] sm:text-6xl lg:text-[78px]">Pure Dairy Excellence, <span className="italic text-gold">Crafted with Care.</span></motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">Discover the commitment to quality, freshness and care behind AASTHA DAIRY & MILK PROCESSING.</motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-9 flex flex-wrap gap-4"><Link to="/products" className="btn-primary">Explore Our Products <ArrowRight size={17} /></Link><Link to="/contact" className="btn-outline">Contact Us</Link></motion.div>
        </motion.div>
      </div>
      <a href="#introduction" aria-label="Scroll to introduction" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/70 md:block"><ChevronDown className="animate-bounce" /></a>
    </section>
  )
}
