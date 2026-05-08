import { motion } from 'framer-motion'

export function FilterBar({
  filters,
  setSort,
  setGuestFilter,
  setTypeFilter,
  setRatingFilter,
  setTierFilter,
  resetFilters,
}) {
  const chip =
    'rounded-full border px-3 py-2 text-[11px] font-medium uppercase tracking-widest transition md:px-4 md:text-xs'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6 }}
      className="sticky top-[72px] z-40 mx-auto max-w-7xl px-4 md:px-8"
    >
      <div className="rounded-3xl border border-white/12 bg-[#070a10]/55 p-4 shadow-card backdrop-blur-2xl md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-luxe-gold/85">
              Curate results
            </p>
            <h3 className="font-display text-2xl text-white">Filters & sorting</h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[10px] uppercase tracking-widest text-white/35">
              Sort
            </span>
            <button
              type="button"
              onClick={() => setSort('price-asc')}
              className={`${chip} ${
                filters.sort === 'price-asc'
                  ? 'border-luxe-gold/60 bg-white/10 text-white'
                  : 'border-white/12 bg-transparent text-white/55 hover:border-white/25 hover:text-white/85'
              }`}
            >
              Price ↑
            </button>
            <button
              type="button"
              onClick={() => setSort('price-desc')}
              className={`${chip} ${
                filters.sort === 'price-desc'
                  ? 'border-luxe-gold/60 bg-white/10 text-white'
                  : 'border-white/12 bg-transparent text-white/55 hover:border-white/25 hover:text-white/85'
              }`}
            >
              Price ↓
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:w-auto lg:mr-2">
              Guests
            </span>
            {[1, 2, 4].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() =>
                  setGuestFilter(filters.guestFilter === g ? null : g)
                }
                className={`${chip} ${
                  filters.guestFilter === g
                    ? 'border-emerald-400/50 bg-emerald-500/10 text-emerald-100'
                    : 'border-white/12 text-white/55 hover:border-white/25 hover:text-white/85'
                }`}
              >
                {g} {g === 1 ? 'Person' : 'Persons'}
              </button>
            ))}
            <button
              type="button"
              onClick={() =>
                setGuestFilter(
                  filters.guestFilter === 'family' ? null : 'family',
                )
              }
              className={`${chip} ${
                filters.guestFilter === 'family'
                  ? 'border-emerald-400/50 bg-emerald-500/10 text-emerald-100'
                  : 'border-white/12 text-white/55 hover:border-white/25 hover:text-white/85'
              }`}
            >
              Family Rooms
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:w-auto lg:mr-2">
              Property
            </span>
            {[
              ['all', 'All'],
              ['hotel', 'Hotel'],
              ['resort', 'Resort'],
            ].map(([val, lab]) => (
              <button
                key={val}
                type="button"
                onClick={() => setTypeFilter(val)}
                className={`${chip} ${
                  filters.typeFilter === val
                    ? 'border-white/35 bg-white/10 text-white'
                    : 'border-white/12 text-white/55 hover:border-white/25 hover:text-white/85'
                }`}
              >
                {lab}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:w-auto lg:mr-2">
              Rating
            </span>
            {[
              ['4', '4★+'],
              ['45', '4.5★+'],
              ['48', '4.8★+'],
            ].map(([val, lab]) => (
              <button
                key={val}
                type="button"
                onClick={() =>
                  setRatingFilter(filters.ratingFilter === val ? null : val)
                }
                className={`${chip} ${
                  filters.ratingFilter === val
                    ? 'border-amber-300/50 bg-amber-400/10 text-amber-100'
                    : 'border-white/12 text-white/55 hover:border-white/25 hover:text-white/85'
                }`}
              >
                {lab}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:w-auto lg:mr-2">
              Tier
            </span>
            {[
              ['luxury', 'Luxury'],
              ['budget', 'Value'],
            ].map(([val, lab]) => (
              <button
                key={val}
                type="button"
                onClick={() =>
                  setTierFilter(filters.tierFilter === val ? null : val)
                }
                className={`${chip} ${
                  filters.tierFilter === val
                    ? 'border-luxe-gold/55 bg-luxe-gold/10 text-luxe-gold'
                    : 'border-white/12 text-white/55 hover:border-white/25 hover:text-white/85'
                }`}
              >
                {lab}
              </button>
            ))}
            <button
              type="button"
              onClick={resetFilters}
              className={`${chip} border-white/20 text-white/70 hover:bg-white/5`}
            >
              Reset all
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
