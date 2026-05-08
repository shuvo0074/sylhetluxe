import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'The tea-garden dawn from our suite was unreal. Service felt like a private members’ club — intuitive, never intrusive.',
    name: 'Amara Rahman',
    role: 'Creative Director · London',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'We hosted our anniversary at a Sylhet hill resort through this flow. Every detail, from airport pickup to turndown, was orchestrated.',
    name: 'James & Lina Ho',
    role: 'Travellers · Singapore',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'As a travel advisor, presentation matters. This layout finally matches the calibre of the properties Sylhet is known for.',
    name: 'Sofia Karim',
    role: 'Luxury Travel Advisor · NYC',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-gold/90">
          Guest stories
        </p>
        <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
          Voices from the valley
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/55">
          Fictional testimonials for your client presentation — swap with real
          reviews when you go live.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-left shadow-card backdrop-blur-xl"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-luxe-gold/10 blur-3xl" />
            <blockquote className="relative text-sm leading-relaxed text-white/78">
              “{t.quote}”
            </blockquote>
            <figcaption className="relative mt-8 flex items-center gap-4">
              <img
                src={t.avatar}
                alt=""
                className="h-12 w-12 rounded-full object-cover ring-2 ring-luxe-gold/30"
                loading="lazy"
              />
              <div>
                <p className="font-medium text-white">{t.name}</p>
                <p className="text-xs text-white/45">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
