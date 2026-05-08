import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          className="fixed bottom-24 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/45 text-lg text-white shadow-luxe backdrop-blur-xl md:bottom-10 md:right-10"
          aria-label="Back to top"
          whileHover={{ scale: 1.06, borderColor: 'rgba(201,169,98,0.45)' }}
          whileTap={{ scale: 0.94 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
