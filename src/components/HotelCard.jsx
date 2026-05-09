import { motion } from 'framer-motion'
import { formatBDT } from '../utils/format'

/** @param {{ hotel: import('../data/hotels.js').Hotel; onViewDetails: () => void }} props */
export function HotelCard({ hotel, onViewDetails }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] shadow-card backdrop-blur-xl"
    >
      <div className="relative h-52 overflow-hidden sm:h-56">
        <img
          src={hotel.image}
          alt=""
          className="h-full w-full object-cover transition duration-[1s] ease-out group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-transparent to-transparent opacity-95" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md">
            {hotel.type}
          </span>
          <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-100 backdrop-blur-md">
            ★ {hotel.rating.toFixed(1)}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/70">
          <span>{hotel.location}</span>
          <span>
            Up to {hotel.guestCapacity}{' '}
            {hotel.guestCapacity === 1 ? 'guest' : 'guests'}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-white md:text-[1.35rem]">
          {hotel.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 line-clamp-3">
          {hotel.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {hotel.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/55"
            >
              {a}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40">
              From
            </p>
            <p className="font-display text-2xl text-white">
              {formatBDT(hotel.price)}
              <span className="text-sm font-sans font-normal text-white/45">
                {' '}
                / night
              </span>
            </p>
          </div>
          <motion.button
            type="button"
            className="rounded-full bg-gradient-to-r from-luxe-gold to-amber-200 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-luxe-ink shadow-luxe"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onViewDetails}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
