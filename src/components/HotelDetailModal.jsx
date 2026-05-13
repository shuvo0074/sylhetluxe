import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { formatBDT } from '../utils/format'

/**
 * @typedef {{ title: string; src: string }} GallerySlide
 */

/** @param {{ slides: GallerySlide[]; hotelId: string }} props */
function HotelHeroCarousel({ slides, hotelId }) {
  const list = useMemo(
    () => (slides?.length ? slides : [{ title: '', src: '' }]),
    [slides],
  )
  const len = list.length
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [zoomLocked, setZoomLocked] = useState(false)
  /** Wait for decode before auto-advance so slides do not skip while still loading */
  const [slideReady, setSlideReady] = useState(false)
  const imgRef = useRef(/** @type {HTMLImageElement | null} */ (null))
  const preloadedSrcs = useRef(/** @type {Set<string>} */ (new Set()))

  const AUTO_ADVANCE_MS = 3000

  useEffect(() => {
    setIndex(0)
    setZoomLocked(false)
    setHovered(false)
    preloadedSrcs.current = new Set()
  }, [hotelId])

  const current = list[index] ?? list[0]
  const zoom = hovered || zoomLocked

  /** After first paint, prefetch all gallery URLs so later slides hit cache (browser dedupes the active src). */
  useEffect(() => {
    if (len < 2) return undefined
    const id = window.setTimeout(() => {
      for (const slide of list) {
        const src = slide?.src
        if (typeof src !== 'string' || preloadedSrcs.current.has(src)) continue
        preloadedSrcs.current.add(src)
        const im = new Image()
        im.src = src
      }
    }, 120)
    return () => window.clearTimeout(id)
  }, [hotelId, len, list])

  useLayoutEffect(() => {
    const el = imgRef.current
    if (el?.complete && el.naturalWidth > 0) {
      setSlideReady(true)
    } else {
      setSlideReady(false)
    }
  }, [hotelId, index, current.src])

  useEffect(() => {
    if (len < 2 || !slideReady) return undefined
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % len)
    }, AUTO_ADVANCE_MS)
    return () => window.clearTimeout(id)
  }, [len, slideReady, index, hotelId])

  const go = useCallback(
    (delta) => {
      setSlideReady(false)
      setIndex((i) => (i + delta + len) % len)
    },
    [len],
  )

  return (
    <div className="relative z-0 h-full w-full bg-[#070a10]">
      <div
        className={`relative h-full w-full overflow-hidden ${zoomLocked ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation()
          setZoomLocked((z) => !z)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setZoomLocked((z) => !z)
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={zoomLocked ? 'Zoomed in — click to reset' : 'Click or hover to zoom photo'}
      >
        <motion.img
          ref={imgRef}
          key={`${hotelId}-${index}-${current.src}`}
          src={current.src}
          alt={current.title || 'Hotel photo'}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable={false}
          onLoad={() => setSlideReady(true)}
          onError={() => setSlideReady(true)}
          initial={{ opacity: 0.88 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className={`relative z-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${zoom ? 'scale-[1.08]' : 'scale-100'}`}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[25%] z-[1] bg-gradient-to-t from-[#070a10]/80 via-[#070a10]/35 to-transparent"
          aria-hidden
        />
      </div>

      {len > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            className="absolute left-2 top-1/2 z-[11] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white/90 backdrop-blur-md transition hover:bg-white/15"
          >
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            className="absolute right-2 top-1/2 z-[11] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white/90 backdrop-blur-md transition hover:bg-white/15"
          >
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
      {(current.title?.trim() || len > 1) && (
        <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-[11] flex flex-col items-center gap-1.5 px-3 sm:bottom-5">
          {current.title?.trim() ? (
            <p
              className="line-clamp-2 max-w-full text-center text-[11px] font-medium leading-snug text-white/90 [text-shadow:0_0_12px_rgba(0,0,0,0.75),0_1px_2px_rgba(0,0,0,0.85)] sm:max-w-[min(100%,22rem)] sm:text-xs"
              aria-live="polite"
            >
              {current.title}
            </p>
          ) : null}
          {len > 1 ? (
            <div className="flex justify-center gap-1.5" aria-hidden>
              {list.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/35'}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

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

  const node = typeof document !== 'undefined' ? document.body : null

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
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="hotel-detail-title"
              className="pointer-events-auto flex max-h-[min(90vh,720px)] min-h-0 w-full max-w-[min(92vw,480px)] flex-col overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0f141c]/95 to-[#070a10]/98 shadow-luxe backdrop-blur-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="shrink-0" key={hotel.id}>
                <div className="relative h-52 sm:h-56">
                  <HotelHeroCarousel hotelId={hotel.id} slides={hotel.gallery} />
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-lg text-white/90 backdrop-blur-md transition hover:bg-white/10"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <div className="border-t border-white/10 px-5 pb-1 pt-4 sm:px-6">
                  <h2
                    id="hotel-detail-title"
                    className="font-display text-2xl leading-tight text-white sm:text-[1.65rem]"
                  >
                    {hotel.name}
                  </h2>
                  <p className="mt-1.5 text-sm leading-snug text-white/55">{hotel.location}</p>
                  <span className="mt-2 inline-block rounded-full border border-white/12 bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/75">
                    {hotel.type}
                  </span>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6 pt-4 sm:px-6">
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
