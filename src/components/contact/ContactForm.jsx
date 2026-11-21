import { useState } from 'react'
import { company } from '../../data/company'

const initial = { name: '', email: '', phone: '', type: 'General Enquiry', subject: '', message: '' }
export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})

  const update = (event) => setValues({ ...values, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (!/^[0-9+\s-]{7,15}$/.test(values.phone)) next.phone = 'Please enter a valid phone number.'
    if (!values.subject.trim()) next.subject = 'Please enter a subject.'
    if (!values.message.trim()) next.message = 'Please enter your message.'
    setErrors(next)
    if (Object.keys(next).length === 0) {
      const body = `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nEnquiry: ${values.type}\n\n${values.message}`
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    }
  }

  const field = (name, label, type = 'text', placeholder = '') => (
    <label className="block text-sm font-bold text-ink">{label}<input name={name} type={type} value={values[name]} onChange={update} placeholder={placeholder} className="mt-2 w-full rounded-sm border border-forest/15 bg-white px-4 py-3.5 font-normal outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/10" />{errors[name] && <span className="mt-1 block text-xs font-normal text-red-600">{errors[name]}</span>}</label>
  )

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 rounded-sm bg-white p-6 shadow-card md:p-8">
      <div className="grid gap-5 md:grid-cols-2">{field('name','Full Name','text','Your name')}{field('email','Email Address','email','you@example.com')}</div>
      <div className="grid gap-5 md:grid-cols-2">{field('phone','Phone Number','tel','+91 00000 00000')}<label className="block text-sm font-bold text-ink">Enquiry Type<select name="type" value={values.type} onChange={update} className="mt-2 w-full rounded-sm border border-forest/15 bg-white px-4 py-3.5 font-normal outline-none focus:border-leaf">{['General Enquiry','Product Enquiry','Wholesale Enquiry','Distributor Partnership','Business Partnership','Other'].map((item) => <option key={item}>{item}</option>)}</select></label></div>
      {field('subject','Subject','text','How can we help?')}
      <label className="block text-sm font-bold text-ink">Message<textarea name="message" value={values.message} onChange={update} rows="5" placeholder="Tell us about your requirement" className="mt-2 w-full resize-y rounded-sm border border-forest/15 bg-white px-4 py-3.5 font-normal outline-none focus:border-leaf" />{errors.message && <span className="mt-1 block text-xs font-normal text-red-600">{errors.message}</span>}</label>
      <button type="submit" className="btn-green w-full md:w-fit">Send Enquiry</button>
      <p className="text-xs leading-5 text-ink/55">Submitting opens your email application. No information is stored on this website.</p>
    </form>
  )
}
