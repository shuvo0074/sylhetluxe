import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Hotels', href: '#browse' },
  { label: 'Resorts', href: '#featured' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const solid = useNavbarScroll(48)
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-[100] transition-colors duration-500 ${
        solid || open
          ? 'border-b border-white/10 bg-[#070a10]/72 shadow-card backdrop-blur-2xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:gap-6 md:px-8">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-[0.08em] text-white sm:text-xl md:text-2xl"
        >
          Sylhet <span className="text-luxe-gold">Luxe</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/75 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.a
            href="#search"
            className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-md md:inline-block"
            whileHover={{ scale: 1.02, borderColor: 'rgba(201,169,98,0.45)' }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.a>
          <motion.a
            href="#search"
            className="hidden rounded-full bg-gradient-to-r from-luxe-gold to-amber-200 px-4 py-2 text-sm font-semibold text-luxe-ink shadow-luxe sm:inline-block sm:px-5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book
          </motion.a>

          <button
            type="button"
            className="relative z-[110] flex h-11 w-11 flex-col items-center justify-center rounded-xl border border-white/15 bg-white/5 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-5 rounded bg-white transition ${
                open ? 'translate-y-1 rotate-45' : ''
              }`}
            />
            <span
              className={`my-1 block h-0.5 w-5 rounded bg-white transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-white transition ${
                open ? '-translate-y-1 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-[#070a10]/92 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 text-sm font-medium text-white/80">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-xl px-3 py-3 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <a
                  href="#search"
                  className="flex-1 rounded-full border border-white/15 py-3 text-center text-sm text-white"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </a>
                <a
                  href="#search"
                  className="flex-1 rounded-full bg-gradient-to-r from-luxe-gold to-amber-200 py-3 text-center text-sm font-semibold text-luxe-ink"
                  onClick={() => setOpen(false)}
                >
                  Book
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
