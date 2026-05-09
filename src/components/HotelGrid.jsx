import { AnimatePresence, motion } from 'framer-motion'
import { HotelCard } from './HotelCard'

/** @param {{ hotels: import('../data/hotels.js').Hotel[] }} props */
export function HotelGrid({ hotels }) {
  return (
    <section
      id="browse"
      className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14"
    >
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-luxe-gold/90">
            Curated collection
          </p>
          <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">
            Sylhet hotels & resorts
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/58">
            Homepage inventory is intentionally limited to the twelve flagged
            partners—metropolitan Sylhet plus luxury outbound corridors. Card photos
            mirror official marketing, Booking.com (Rangauti), Trip.com (DuSai),
            Hello Sylhet (Regent Park), and bd-info (Palace)—swap for brand kit when
            supplied.
          </p>
        </div>
        <p className="text-sm text-white/45">
          Showing{' '}
          <span className="font-semibold text-white">{hotels.length}</span>{' '}
          properties
        </p>
      </div>

      <AnimatePresence mode="popLayout">
        {hotels.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] py-16 text-center text-white/55 backdrop-blur-md"
          >
            No properties match these filters. Try relaxing a filter or reset.
          </motion.p>
        ) : (
          <motion.div
            key="grid"
            layout
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {hotels.map((h) => (
              <HotelCard key={h.id} hotel={h} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
