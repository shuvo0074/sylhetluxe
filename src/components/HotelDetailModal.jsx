import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { formatBDT } from '../utils/format'

/** @param {{ hotel: import('../data/hotels.js').Hotel | null; onClose: () => void }} props */
export function HotelDetailModal({ hotel, onClose }) {
  useEffect(() => {
    if (!hotel) return
    const esc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', esc)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = prev
    }
  }, [hotel, onClose])

  const node =
    typeof document !== 'undefined' ? document.body : null

  if (!node) return null

  return createPortal(
    <AnimatePresence mode="wait">
      {hotel != null && (
        <>
          <motion.button
            key="backdrop"
            type="button"
            aria-label="Close details"
            className="fixed inset-0 z-[200] bg-[#05070b]/82 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          {/* Flex centering avoids mis-position when any ancestor uses transform (Framer layout). */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="hotel-detail-title"
              className="pointer-events-auto max-h-[min(90vh,720px)] w-full max-w-[min(92vw,480px)] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0f141c]/95 to-[#070a10]/98 shadow-luxe backdrop-blur-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-44 shrink-0 sm:h-52">
                <img
                  src={hotel.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-[#070a10]/40 to-transparent" />
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-lg text-white/90 backdrop-blur-md transition hover:bg-white/10"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block rounded-full border border-white/15 bg-black/35 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/85 backdrop-blur-md">
                    {hotel.type}
                  </span>
                  <h2
                    id="hotel-detail-title"
                    className="mt-2 font-display text-2xl leading-tight text-white sm:text-[1.65rem]"
                  >
                    {hotel.name}
                  </h2>
                  <p className="mt-1 text-xs text-white/65">{hotel.location}</p>
                </div>
              </div>

              <div className="max-h-[calc(min(90vh,720px)-11rem)] overflow-y-auto px-5 pb-6 pt-4 sm:px-6">
                <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-1 text-sm font-medium text-amber-100">
                    <span aria-hidden>★</span>
                    {hotel.rating.toFixed(1)}
                  </div>
                  <span className="text-xs text-white/45">
                    Up to {hotel.guestCapacity} guests ·{' '}
                    {hotel.hasFamilyRooms
                      ? 'Family rooms available'
                      : 'Best for couples'}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/78">
                  {hotel.detailBlurb}
                </p>

                <p className="mt-3 border-l-2 border-luxe-gold/40 pl-3 text-xs italic leading-relaxed text-white/50">
                  Quick take: {hotel.description}
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/38">
                    Highlights
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {hotel.amenities.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] text-white/70"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/38">
                      Indicative from
                    </p>
                    <p className="font-display text-2xl text-white">
                      {formatBDT(hotel.price)}{' '}
                      <span className="text-sm font-sans font-normal text-white/45">
                        / night
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] text-white/35">
                      ++ taxes · confirm live rate on Booking or brand site
                    </p>
                  </div>
                  <motion.button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:border-luxe-gold/45 hover:text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    node,
  )
}
