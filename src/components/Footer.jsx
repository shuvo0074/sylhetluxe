import { motion } from 'framer-motion'

const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/share/18SCyv1Gwm/'
/** Meta / Facebook primary brand blue */
const FACEBOOK_BLUE = '#1877F2'

function FacebookIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

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
            {[
              ['in', '#', false],
              ['fb', FACEBOOK_PAGE_URL, true],
              ['ig', '#', false],
            ].map(([s, href, isFb]) => (
              <motion.a
                key={s}
                href={href}
                aria-label={
                  isFb ? 'Facebook — Sreemangal Tour Guide' : s
                }
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs uppercase"
                style={isFb ? { color: FACEBOOK_BLUE } : undefined}
                whileHover={{ scale: 1.08, borderColor: 'rgba(201,169,98,0.45)' }}
              >
                {isFb ? (
                  <FacebookIcon className="h-[18px] w-[18px]" />
                ) : (
                  s
                )}
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
            <li className="leading-relaxed">
              Dhanmandi 27, Satmasjid Road,
              <br />
              Dhaka 1209
            </li>
            <li>
              <a
                href="mailto:bangladeshtravelguide@gmail.com"
                className="hover:text-white"
              >
                bangladeshtravelguide@gmail.com
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <a href="tel:+8809697741326" className="hover:text-white">
                09697741326
              </a>
              <a href="tel:+8809697773228" className="hover:text-white">
                09697773228
              </a>
            </li>
            <li>
              <a
                href="https://www.bangladeshtravelguide.info"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.bangladeshtravelguide.info
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            News
          </h4>
          <p className="mt-3 text-sm text-white/58">
            For Better Discount & Experience.
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
          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
            <a
              href={FACEBOOK_PAGE_URL}
              className="transition hover:opacity-90"
              style={{ color: FACEBOOK_BLUE }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sreemangal Tour Guide on Facebook"
            >
              <FacebookIcon className="h-8 w-8" />
            </a>
            <span className="text-sm text-white/58">
              Sreemangal Tour Guide
            </span>
          </div>
        </div>
      </div>

      <p className="mt-14 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Sylhet Luxe Stays · Client demo presentation
      </p>
    </footer>
  )
}
