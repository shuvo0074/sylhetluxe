import { motion } from 'framer-motion'

/** Themes echo public bios; illustrative only—not endorsements of this site. */
const testimonials = [
  {
    quote:
      'Bangladesh’s northeast—tea gardens, hillside cloud, and wetland light—rewards the slow, fact-checked story. I still treat every trip like a newsroom assignment: research first, then let the road rewrite the outline.',
    name: 'Salahuddin Sumon',
    role: 'Travel journalist & documentary creator · Salahuddin Sumon (YouTube)',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sumon_in_front_of_Everest_Base_Camp_in_Tibet_2025_2.jpg/1920px-Sumon_in_front_of_Everest_Base_Camp_in_Tibet_2025_2.jpg',
    avatarAlt: 'Salahuddin Sumon',
    imgClass: 'object-cover object-top',
  },
  {
    quote:
      'From district roads to border towns, the goal is the same: show real places, food, and history so viewers can plan with context. Northeast Bangladesh—Sylhet division especially—still has chapters most playlists haven’t caught up with.',
    name: 'Nadir Nibras',
    role: 'Travel filmmaker · Nadir On The Go (YouTube)',
    avatar: '/testimonials/nadir-nibras-channel.jpg',
    avatarAlt: 'Nadir Nibras · Nadir On The Go channel image',
    imgClass: 'object-cover object-center scale-110',
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
          Two Bangladeshi creators who built large audiences on disciplined
          travel storytelling—why Sylhet still feels like the headline act.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              delay: i * 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
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
                alt={t.avatarAlt}
                referrerPolicy="no-referrer"
                className={`h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-luxe-gold/30 ${t.imgClass ?? ''}`}
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="font-medium text-white">{t.name}</p>
                <p className="text-xs text-white/45">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-relaxed text-white/35">
        Salahuddin Sumon portrait © ItsNilayKumarBiswas,{' '}
        <a
          href="https://commons.wikimedia.org/wiki/File:Sumon_in_front_of_Everest_Base_Camp_in_Tibet_2025_2.jpg"
          className="text-white/45 underline underline-offset-2 hover:text-white/65"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC&nbsp;BY-SA&nbsp;4.0 (Wikimedia Commons)
        </a>
        . Nadir Nibras image from the official <em>Nadir On The Go</em>{' '}
        channel. Quotations summarise public themes—they are not testimonials
        for this demo.
      </p>
    </section>
  )
}
