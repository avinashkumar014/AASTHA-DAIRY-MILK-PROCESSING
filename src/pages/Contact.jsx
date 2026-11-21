import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHeader from '../components/sections/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import ScrollReveal from '../components/animations/ScrollReveal'
import SEO from '../components/common/SEO'
import { company } from '../data/company'
import { images } from '../data/images'

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us | AASTHA DAIRY & MILK PROCESSING" description="Contact AASTHA DAIRY & MILK PROCESSING for product, wholesale and distribution enquiries." />
      <PageHeader eyebrow="Get in Touch" title="Let's Start a Conversation" image={images.products.milk} />
      <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]"><ScrollReveal><p className="eyebrow">Contact AASTHA Dairy</p><h2 className="text-4xl text-forest md:text-5xl">We would be pleased to hear from you</h2><p className="mt-5 leading-8 text-ink/65">For product enquiries, wholesale supply or distributor and business partnerships, share your requirements with our team.</p><div className="mt-8 grid gap-5">{[
        [MapPin,'Business Address',company.address],
        [Phone,'Phone',company.phone],
        [Mail,'Email',company.email],
      ].map(([Icon,label,value])=><div key={label} className="flex gap-4 border-b border-forest/10 pb-5"><Icon className="shrink-0 text-leaf" /><div><p className="text-xs font-bold uppercase tracking-wider text-ink/45">{label}</p><p className="mt-1 text-sm font-bold text-forest">{value}</p></div></div>)}</div><a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="mt-7 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white md:w-fit"><MessageCircle size={18} />Chat on WhatsApp</a></ScrollReveal><ScrollReveal delay={0.1}><ContactForm /></ScrollReveal></div></section>
      <section className="pb-20"><div className="container-shell"><div className="h-[400px] overflow-hidden bg-sage"><iframe title="Business location map" src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`} loading="lazy" className="h-full w-full border-0" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
    </>
  )
}
