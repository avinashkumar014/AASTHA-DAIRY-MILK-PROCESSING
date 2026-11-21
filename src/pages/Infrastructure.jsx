import PageHeader from '../components/sections/PageHeader'
import ImageGallery from '../components/common/ImageGallery'
import ScrollReveal from '../components/animations/ScrollReveal'
import CTASection from '../components/sections/CTASection'
import SEO from '../components/common/SEO'
import { images } from '../data/images'

export default function Infrastructure() {
  const gallery = images.farmPhotos
  return (
    <>
      <SEO title="Dairy Farm & Facilities | AASTHA DAIRY & MILK PROCESSING" description="View photographs of the dairy farm and facilities shared by AASTHA DAIRY & MILK PROCESSING." />
      <PageHeader eyebrow="Our Dairy Farm" title="A closer look at our farm and facilities" image={images.farmPhotos[3].src} />
      <section className="section-pad"><div className="container-shell grid items-center gap-12 lg:grid-cols-2"><ScrollReveal><p className="eyebrow">Our Place</p><h2 className="text-4xl text-forest md:text-6xl">A glimpse of life at the farm</h2><p className="mt-6 leading-8 text-ink/65">These photographs, shared by AASTHA DAIRY & MILK PROCESSING, offer a closer look at the farm, its cattle and the surrounding facilities. Each image can be opened to view in detail.</p></ScrollReveal><ScrollReveal className="h-[400px] overflow-hidden rounded-sm shadow-soft"><img src={images.farmPhotos[4].src} alt={images.farmPhotos[4].alt} loading="lazy" className="image-cover" /></ScrollReveal></div></section>
      <section className="section-pad bg-sage"><div className="container-shell"><ScrollReveal className="mb-10"><p className="eyebrow">Photo Gallery</p><h2 className="text-4xl text-forest md:text-6xl">Moments from our dairy farm</h2><p className="mt-4 max-w-2xl leading-7 text-ink/65">Scroll to explore the photos. Select any image to open the animated full-screen gallery.</p></ScrollReveal><ImageGallery images={gallery} /></div></section>
      <CTASection title="Planning a product supply requirement?" text="Connect with AASTHA DAIRY & MILK PROCESSING to discuss your business needs." />
    </>
  )
}
