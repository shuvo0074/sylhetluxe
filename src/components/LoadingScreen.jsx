import { AnimatePresence, motion } from 'framer-motion'

/** @param {{ show: boolean }} props */
export function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#05070b]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="h-14 w-14 rounded-full border-2 border-luxe-gold/30 border-t-luxe-gold"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <motion.p
            className="mt-8 font-display text-2xl tracking-[0.35em] text-white/90"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            SYLHET
          </motion.p>
          <p className="mt-2 text-xs uppercase tracking-[0.5em] text-white/40">
            Curating your vista
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
