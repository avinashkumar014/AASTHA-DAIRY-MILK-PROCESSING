import { Award, Heart, Leaf, ShieldCheck, Target } from 'lucide-react'
import PageHeader from '../components/sections/PageHeader'
import ScrollReveal from '../components/animations/ScrollReveal'
import CTASection from '../components/sections/CTASection'
import SEO from '../components/common/SEO'
import { images } from '../data/images'

export default function About() {
  return (
    <>
      <SEO title="About Us | AASTHA DAIRY & MILK PROCESSING" description="Discover AASTHA DAIRY & MILK PROCESSING's commitment to quality, care and dependable dairy supply." />
      <PageHeader eyebrow="About AASTHA DAIRY & MILK PROCESSING" title="Building Trust Through Quality and Commitment" image={images.about} />
      <section className="section-pad"><div className="container-shell grid items-center gap-12 lg:grid-cols-2"><ScrollReveal className="h-[540px] overflow-hidden"><img src={images.about} alt="Dairy business and natural environment" loading="lazy" className="image-cover" /></ScrollReveal><ScrollReveal><p className="eyebrow">Our Business Story</p><h2 className="text-4xl text-forest md:text-6xl">A commitment rooted in care</h2><p className="mt-6 leading-8 text-ink/65">AASTHA DAIRY & MILK PROCESSING brings together a passion for dairy, careful operations and the desire to serve customers with dependable products. Our approach is grounded in everyday reliability and respect for the communities we serve.</p><p className="mt-4 leading-8 text-ink/65">We focus on maintaining clear standards, building strong relationships and creating a dependable experience for households, retailers and business partners.</p></ScrollReveal></div></section>
      <section className="bg-sage py-20"><div className="container-shell grid gap-6 md:grid-cols-2"><ScrollReveal><article className="h-full bg-white p-9"><Target className="mb-7 text-leaf" size={36} /><p className="eyebrow">Our Mission</p><h2 className="text-3xl text-forest">Deliver fresh, quality dairy with care</h2><p className="mt-4 leading-7 text-ink/65">To provide dependable dairy products through responsible handling, consistent quality and customer-focused service.</p></article></ScrollReveal><ScrollReveal delay={0.1}><article className="h-full bg-forest p-9 text-white"><Leaf className="mb-7 text-gold" size={36} /><p className="eyebrow text-gold">Our Vision</p><h2 className="text-3xl">Be a trusted name in dairy</h2><p className="mt-4 leading-7 text-white/70">To grow as a reliable dairy brand recognised for integrity, freshness and meaningful long-term partnerships.</p></article></ScrollReveal></div></section>
      <section className="section-pad"><div className="container-shell"><ScrollReveal className="mb-12 text-center"><p className="eyebrow">Core Values</p><h2 className="text-4xl text-forest md:text-6xl">The principles behind our work</h2></ScrollReveal><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[
        [ShieldCheck,'Quality','We prioritise care and consistency at every stage.'],
        [Heart,'Commitment','We serve our customers with responsibility and respect.'],
        [Leaf,'Freshness','We value dairy freshness and thoughtful handling.'],
        [Award,'Reliability','We aim to be a dependable partner in every relationship.'],
      ].map(([Icon,title,text],index)=><ScrollReveal key={title} delay={index*0.05}><div className="h-full border border-forest/10 p-7"><Icon className="mb-7 text-leaf" /><h3 className="text-2xl text-forest">{title}</h3><p className="mt-3 text-sm leading-7 text-ink/65">{text}</p></div></ScrollReveal>)}</div></div></section>
      <section className="bg-forest py-20 text-white"><div className="container-shell grid gap-10 lg:grid-cols-2"><ScrollReveal><p className="eyebrow text-gold">Our Commitment</p><h2 className="text-4xl md:text-6xl">Quality you can feel confident about</h2></ScrollReveal><ScrollReveal><p className="leading-8 text-white/70">We are committed to attentive service, careful handling and continuous improvement. Every customer interaction is an opportunity to demonstrate trust, transparency and professional commitment.</p></ScrollReveal></div></section>
      <CTASection />
    </>
  )
}
