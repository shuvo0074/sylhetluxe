import { motion } from 'framer-motion'

const nav = [
  { label: 'Browse', href: '#browse' },
  { label: 'Featured', href: '#featured' },
  { label: 'Search', href: '#search' },
  { label: 'Stories', href: '#home' },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-white/10 bg-[#05070b]/80 py-16 backdrop-blur-2xl"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div id="about" className="space-y-4">
          <p className="font-display text-2xl text-white">
            Sylhet <span className="text-luxe-gold">Luxe</span>
          </p>
          <p className="text-sm leading-relaxed text-white/55">
            A cinematic booking experience dedicated to Sylhet’s hotels and
            resorts — crafted for demos, pitches, and launch-ready marketing
            sites.
          </p>
          <div className="flex gap-3 text-white/60">
            {['in', 'fb', 'ig'].map((s) => (
              <motion.a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs uppercase"
                whileHover={{ scale: 1.08, borderColor: 'rgba(201,169,98,0.45)' }}
              >
                {s}
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Explore
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>Concierge studio · Gulshan, Dhaka</li>
            <li>
              <a href="mailto:hello@sylhetluxestays.demo" className="hover:text-white">
                hello@sylhetluxestays.demo
              </a>
            </li>
            <li>
              <a href="tel:+8801710000000" className="hover:text-white">
                +880 1710‑000‑000
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Newsletter
          </h4>
          <p className="mt-3 text-sm text-white/58">
            Field trips, seasonal rates, and new resort debuts across Sylhet.
          </p>
          <div className="mt-5 flex gap-2">
            <input
              type="email"
              placeholder="you@studio.com"
              className="w-full rounded-xl border border-white/12 bg-black/30 px-3 py-2.5 text-sm text-white outline-none ring-luxe-gold/30 placeholder:text-white/35 focus:ring-2"
            />
            <motion.button
              type="button"
              className="shrink-0 rounded-xl bg-gradient-to-r from-luxe-gold to-amber-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-luxe-ink"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join
            </motion.button>
          </div>
        </div>
      </div>

      <p className="mt-14 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Sylhet Luxe Stays · Client demo presentation
      </p>
    </footer>
  )
}
