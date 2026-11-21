import { BadgeCheck, Beaker, Droplets, PackageCheck, ShieldCheck, Truck } from 'lucide-react'
import PageHeader from '../components/sections/PageHeader'
import ScrollReveal from '../components/animations/ScrollReveal'
import CTASection from '../components/sections/CTASection'
import SEO from '../components/common/SEO'
import { images } from '../data/images'

const steps = [
  ['Milk Collection & Handling', Droplets, 'Careful coordination and handling practices help protect milk freshness from collection onward.'],
  ['Milk Processing', ShieldCheck, 'Processing operations are planned to support consistent, hygienic dairy production.'],
  ['Quality Testing', Beaker, 'Quality checks help verify key characteristics and support dependable product standards.'],
  ['Hygiene & Sanitation', SparklesIcon, 'Clean work areas and hygienic practices are integral to responsible dairy operations.'],
  ['Packaging', PackageCheck, 'Products are prepared with attention to protection, identification and presentation.'],
  ['Storage & Distribution', Truck, 'Proper storage and organised distribution help preserve product quality through delivery.'],
]
function SparklesIcon(props){ return <BadgeCheck {...props} /> }

export default function ProcessingQuality() {
  return (
    <>
      <SEO title="Processing & Quality | AASTHA DAIRY & MILK PROCESSING" description="Learn about AASTHA DAIRY & MILK PROCESSING's quality-focused processing, handling and hygiene approach." />
      <PageHeader eyebrow="Processing & Quality" title="Committed to Quality at Every Step" image={images.processing} />
      <section className="section-pad"><div className="container-shell grid items-center gap-12 lg:grid-cols-2"><ScrollReveal><p className="eyebrow">Our Approach</p><h2 className="text-4xl text-forest md:text-6xl">A quality mindset throughout</h2><p className="mt-6 leading-8 text-ink/65">Every stage of the dairy journey deserves thoughtful handling. AASTHA DAIRY & MILK PROCESSING prioritises cleanliness, care and responsible processing to support customer confidence.</p></ScrollReveal><ScrollReveal className="h-[480px] overflow-hidden"><img src={images.processing} alt="Quality-focused dairy processing facility" loading="lazy" className="image-cover" /></ScrollReveal></div></section>
      <section className="section-pad bg-sage"><div className="container-shell"><ScrollReveal className="mb-12 text-center"><p className="eyebrow">Step by Step</p><h2 className="text-4xl text-forest md:text-6xl">Our processing journey</h2></ScrollReveal><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{steps.map(([title,Icon,description],index) => <ScrollReveal key={title} delay={index*0.05}><article className="h-full bg-white p-7 shadow-card"><div className="mb-7 flex items-center justify-between"><Icon className="text-leaf" size={34} /><span className="font-heading text-4xl text-gold/70">0{index+1}</span></div><h3 className="text-2xl text-forest">{title}</h3><p className="mt-4 text-sm leading-7 text-ink/65">{description}</p></article></ScrollReveal>)}</div></div></section>
      <section className="section-pad"><div className="container-shell grid gap-10 lg:grid-cols-2"><ScrollReveal className="h-[460px]"><img src={images.laboratory} alt="Dairy quality laboratory environment" loading="lazy" className="image-cover" /></ScrollReveal><ScrollReveal className="flex flex-col justify-center"><p className="eyebrow">Quality Commitment</p><h2 className="text-4xl text-forest md:text-5xl">Attention to every detail</h2><p className="mt-5 leading-8 text-ink/65">We believe trust is earned through consistent discipline: clean facilities, careful handling, organised processes and a commitment to customer needs.</p><div className="mt-7 grid grid-cols-2 gap-4">{['Clean handling','Careful checks','Organised storage','Reliable supply'].map((item)=><div key={item} className="border-l-2 border-gold pl-4 text-sm font-bold text-forest">{item}</div>)}</div></ScrollReveal></div></section>
      <CTASection />
    </>
  )
}
