export default function PageHeader({ eyebrow, title, image }) {
  return (
    <header className="relative flex min-h-[470px] items-end overflow-hidden bg-forest pb-16 pt-32 text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09271b]/95 via-[#09271b]/70 to-[#09271b]/20" />
      <div className="container-shell relative"><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p><h1 className="max-w-4xl text-5xl leading-tight md:text-7xl">{title}</h1></div>
    </header>
  )
}
