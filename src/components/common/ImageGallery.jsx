import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ImageGallery({ images }) {
  const [active, setActive] = useState(null)
  const move = (direction) => setActive((current) => (current + direction + images.length) % images.length)
  useEffect(() => {
    if (active === null) return
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative h-64 overflow-hidden rounded-sm bg-forest text-left shadow-card sm:h-72"
            aria-label={`Open photo: ${image.caption}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="image-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-0 p-5 font-heading text-xl text-white">{image.caption}</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>{active !== null && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-black/95 p-4" role="dialog" aria-modal="true" aria-label={images[active].caption}><button onClick={() => setActive(null)} className="absolute right-5 top-5 text-white" aria-label="Close gallery"><X /></button><button onClick={() => move(-1)} className="absolute left-4 text-white md:left-8" aria-label="Previous image"><ChevronLeft size={36} /></button><motion.img key={active} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} src={images[active].src} alt={images[active].alt} className="max-h-[82vh] max-w-[88vw] object-contain" /><button onClick={() => move(1)} className="absolute right-4 text-white md:right-8" aria-label="Next image"><ChevronRight size={36} /></button><p className="absolute bottom-5 text-center text-sm text-white/80">{images[active].caption}</p></motion.div>}</AnimatePresence>
    </>
  )
}
