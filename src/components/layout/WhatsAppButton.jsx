import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { company } from '../../data/company'

export default function WhatsAppButton() {
  return (
    <motion.a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello ${company.name}, I would like to make an enquiry.`)}`} target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg" animate={{ y: [0,-5,0] }} transition={{ duration: 2.5, repeat: Infinity }}>
      <MessageCircle size={25} />
    </motion.a>
  )
}
