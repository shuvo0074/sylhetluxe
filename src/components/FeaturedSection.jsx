import { motion } from 'framer-motion'
import { formatBDT } from '../utils/format'
import { getFeaturedHotels } from '../data/hotels.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function FeaturedSection() {
  const featured = getFeaturedHotels()

  return (
    <section
      id="featured"
      className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16"
    >
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-gold/90">
            Handpicked estates
          </p>
          <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">
            Featured Sylhet stays
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/58">
            Residences that define the region — immersive tea vistas, restorative
            spa journeys, and service tuned to intuition.
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-12%' }}
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {featured.map((h) => (
          <motion.article
            key={h.id}
            variants={item}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] shadow-card backdrop-blur-xl"
          >
            <div className="relative h-56 overflow-hidden md:h-64">
              <img
                src={h.image}
                alt=""
                className="h-full w-full object-cover transition duration-[1.1s] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-[#070a10]/35 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md">
                {h.type}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-white md:text-2xl">
                    {h.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/65">{h.location}</p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-sm text-amber-200 backdrop-blur-md">
                  <span aria-hidden>★</span>
                  {h.rating.toFixed(1)}
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-sm leading-relaxed text-white/68 line-clamp-3">
                {h.description}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  From{' '}
                  <span className="text-lg font-semibold tracking-normal text-white">
                    {formatBDT(h.price)}
                  </span>
                  <span className="text-white/45"> / night</span>
                </p>
                <motion.a
                  href="#browse"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/85 transition hover:border-luxe-gold/50 hover:text-white"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Reserve
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
