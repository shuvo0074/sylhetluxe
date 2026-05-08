import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const collage = [
  {
    src: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Rolling green tea terraces',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Misty hills at sunrise',
    className: '',
  },
  {
    src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Tropical luxury pool',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    alt: 'Serene lake and forest',
    className: 'md:col-span-2',
  },
]

export function CoverSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -48])

  return (
    <section
      id="home"
      ref={ref}
      className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-28 md:px-8 md:pb-16 md:pt-32"
    >
      <motion.div style={{ y }} className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-luxe backdrop-blur-sm lg:col-span-7">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/35 to-transparent" />
          <div className="grid grid-cols-2 grid-rows-2 gap-2 p-3 md:gap-3 md:p-4">
            {collage.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full min-h-[140px] w-full object-cover transition duration-700 hover:scale-105 md:min-h-[180px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-card backdrop-blur-xl lg:col-span-5 lg:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-luxe-gold/90">
            Sylhet · Bangladesh
          </p>
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Experience the Beauty of Sylhet
          </h1>
          <p className="mt-5 max-w-md text-balance text-base font-light leading-relaxed text-white/75 md:text-lg">
            Luxury resorts, tea gardens, and unforgettable stays — curated for
            travellers who expect poetry in every horizon.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#browse"
              className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-luxe-ink shadow-luxe"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Hotels
            </motion.a>
            <motion.a
              href="#featured"
              className="inline-flex rounded-full border border-white/25 bg-transparent px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-luxe-gold/50 hover:text-white"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover Resorts
            </motion.a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center sm:grid-cols-3">
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-white/45">
                Region
              </dt>
              <dd className="mt-1 font-display text-lg text-white">Tea Country</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-white/45">
                Vibe
              </dt>
              <dd className="mt-1 font-display text-lg text-white">Serene</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-white/45">
                Season
              </dt>
              <dd className="mt-1 font-display text-lg text-white">Monsoon Magic</dd>
            </div>
          </dl>
        </div>
      </motion.div>
    </section>
  )
}
