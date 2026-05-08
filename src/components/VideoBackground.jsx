import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import videoSrc from '../assets/videos/sylhet-background.mp4'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop'

export function VideoBackground() {
  const videoRef = useRef(null)
  const [failed, setFailed] = useState(false)
  /** Start muted so autoplay succeeds; user turns sound on with the floating control. */
  const [audioOn, setAudioOn] = useState(false)

  const toggleSound = useCallback(() => {
    const el = videoRef.current
    if (!el || failed) return

    const turningOn = !audioOn

    if (turningOn) {
      el.volume = 1
      el.muted = false
      try {
        el.removeAttribute('muted')
      } catch {
        /* no-op */
      }
      void el.play().catch(() => {
        el.muted = true
        el.setAttribute('muted', '')
        setAudioOn(false)
      })
      setAudioOn(true)
    } else {
      el.muted = true
      el.setAttribute('muted', '')
      setAudioOn(false)
    }
  }, [audioOn, failed])

  const handleLoaded = useCallback((e) => {
    e.currentTarget.volume = 1
  }, [])

  return (
    <>
      {/* Background only: stays under `main` (z-10). No UI here — clicks would be eaten by content. */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 scale-105">
          {!failed ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              playsInline
              muted={!audioOn}
              preload="auto"
              onError={() => setFailed(true)}
              onLoadedData={handleLoaded}
            />
          ) : (
            <img
              src={FALLBACK_IMAGE}
              alt="Sylhet tea gardens"
              className="h-full w-full object-cover"
              loading="eager"
            />
          )}
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05070b]/88 via-[#070a10]/72 to-[#05070b]/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.12),_transparent_55%)]"
          aria-hidden
        />
      </div>

      {/* Above page content so the control is actually clickable (main/footer are z-10). */}
      <div
        className="pointer-events-none fixed inset-0 z-[110]"
        aria-live="polite"
      >
        <div className="pointer-events-auto absolute bottom-8 left-4 md:bottom-12 md:left-10">
          <motion.button
            type="button"
            onClick={toggleSound}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 shadow-luxe backdrop-blur-xl transition hover:border-luxe-gold/50 hover:text-white md:text-[11px]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-pressed={audioOn}
            title={
              audioOn
                ? 'Mute background ambience'
                : 'Unmute — tap once (your browser requires a gesture for audio)'
            }
          >
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${audioOn ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' : 'bg-white/40'}`}
            />
            {audioOn ? 'Sound on' : 'Tap for sound'}
          </motion.button>
        </div>

        <AnimatePresence>
          {failed && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto absolute left-1/2 top-24 max-w-sm -translate-x-1/2 rounded-lg border border-amber-500/30 bg-black/50 px-4 py-2 text-center text-xs text-amber-100/90 backdrop-blur-md"
            >
              Video unavailable — showing a lush Sylhet vista instead.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
