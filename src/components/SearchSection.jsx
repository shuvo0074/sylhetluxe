import { motion } from 'framer-motion'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

function Stat({ end, suffix, label, decimals = 0 }) {
  const { ref, value } = useAnimatedCounter(end, { duration: 2200 })
  const display =
    decimals > 0 ? (value / 10).toFixed(1) : value.toLocaleString('en-BD')

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl text-white md:text-4xl">
        {display}
        {decimals > 0 && (
          <span className="ml-1 text-amber-300/90" aria-hidden>
            ★
          </span>
        )}
        {suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
    </div>
  )
}

export function SearchSection() {
  return (
    <section
      id="search"
      className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10 mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-6 shadow-luxe backdrop-blur-2xl md:p-10"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-gold/90">
              Plan your escape
            </p>
            <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">
              Find your Sylhet sanctuary
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Curated luxury partners across metropolitan Sylhet and the greater
              division — nightly rates shown are illustrative; confirm live prices
              on Booking.com / brand portals.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:items-end">
          <label className="lg:col-span-1">
            <span className="mb-2 block text-[10px] uppercase tracking-widest text-white/45">
              Destination
            </span>
            <div className="rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-white shadow-inner backdrop-blur-md">
              Sylhet
            </div>
          </label>
          <label className="lg:col-span-1">
            <span className="mb-2 block text-[10px] uppercase tracking-widest text-white/45">
              Check-in
            </span>
            <input
              type="date"
              className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-sm text-white outline-none ring-luxe-gold/40 backdrop-blur-md focus:ring-2"
            />
          </label>
          <label className="lg:col-span-1">
            <span className="mb-2 block text-[10px] uppercase tracking-widest text-white/45">
              Check-out
            </span>
            <input
              type="date"
              className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-sm text-white outline-none ring-luxe-gold/40 backdrop-blur-md focus:ring-2"
            />
          </label>
          <label className="lg:col-span-1">
            <span className="mb-2 block text-[10px] uppercase tracking-widest text-white/45">
              Guests
            </span>
            <select className="w-full appearance-none rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-sm text-white outline-none ring-luxe-gold/40 backdrop-blur-md focus:ring-2">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </label>
          <label className="lg:col-span-1">
            <span className="mb-2 block text-[10px] uppercase tracking-widest text-white/45">
              Rooms
            </span>
            <select className="w-full appearance-none rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-sm text-white outline-none ring-luxe-gold/40 backdrop-blur-md focus:ring-2">
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>Family suite</option>
              <option>Villa / Chalet</option>
            </select>
          </label>
          <div className="lg:col-span-1">
            <motion.button
              type="button"
              className="w-full rounded-2xl bg-gradient-to-r from-luxe-gold to-amber-200 py-3.5 text-sm font-bold uppercase tracking-widest text-luxe-ink shadow-luxe"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Search
            </motion.button>
          </div>
        </div>

        <div
          id="stats-trigger"
          className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4"
        >
          <Stat end={12} suffix="+" label="Partner stays" />
          <Stat end={11} suffix="+" label="Resort escapes" />
          <Stat end={1} suffix="" label="City flagship" />
          <Stat end={47} suffix="" label="Avg. guest rating" decimals={1} />
        </div>
      </motion.div>
    </section>
  )
}
