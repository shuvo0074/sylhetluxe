import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const mobileToggleIconBtn =
  'absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-black/35 text-white/90 backdrop-blur-md transition hover:border-luxe-gold/45 hover:bg-white/10 hover:text-white'

function ChevronDownIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronUpIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const collapsedPill =
  'inline-flex max-w-full items-center rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider'

/** Chips shown in the mobile collapsed FilterBar — every active constraint. */
function activeFilterCollapseChips(filters) {
  const chips = []

  if (filters.sort === 'price-asc') {
    chips.push({
      key: 'sort-asc',
      text: 'Price ↑ · Low → high',
      className: `${collapsedPill} border-luxe-gold/55 bg-white/10 text-white`,
    })
  } else if (filters.sort === 'price-desc') {
    chips.push({
      key: 'sort-desc',
      text: 'Price ↓ · High → low',
      className: `${collapsedPill} border-luxe-gold/55 bg-white/10 text-white`,
    })
  }

  if (filters.guestFilter != null) {
    const g = filters.guestFilter
    const guestText =
      g === 'family'
        ? 'Family rooms'
        : `${g} ${g === 1 ? 'Person' : 'Persons'}`
    chips.push({
      key: 'guest',
      text: `Guests · ${guestText}`,
      className: `${collapsedPill} border-emerald-400/50 bg-emerald-500/10 text-emerald-100`,
    })
  }

  if (filters.typeFilter === 'hotel') {
    chips.push({
      key: 'type-hotel',
      text: 'Property · Hotel',
      className: `${collapsedPill} border-white/35 bg-white/10 text-white`,
    })
  } else if (filters.typeFilter === 'resort') {
    chips.push({
      key: 'type-resort',
      text: 'Property · Resort',
      className: `${collapsedPill} border-white/35 bg-white/10 text-white`,
    })
  }

  if (filters.ratingFilter === '4') {
    chips.push({
      key: 'rating-4',
      text: 'Rating · 4★+',
      className: `${collapsedPill} border-amber-300/50 bg-amber-400/10 text-amber-100`,
    })
  } else if (filters.ratingFilter === '45') {
    chips.push({
      key: 'rating-45',
      text: 'Rating · 4.5★+',
      className: `${collapsedPill} border-amber-300/50 bg-amber-400/10 text-amber-100`,
    })
  } else if (filters.ratingFilter === '48') {
    chips.push({
      key: 'rating-48',
      text: 'Rating · 4.8★+',
      className: `${collapsedPill} border-amber-300/50 bg-amber-400/10 text-amber-100`,
    })
  }

  if (filters.tierFilter === 'luxury') {
    chips.push({
      key: 'tier-lux',
      text: 'Tier · Luxury',
      className: `${collapsedPill} border-luxe-gold/55 bg-luxe-gold/10 text-luxe-gold`,
    })
  } else if (filters.tierFilter === 'budget') {
    chips.push({
      key: 'tier-budget',
      text: 'Tier · Value',
      className: `${collapsedPill} border-luxe-gold/55 bg-luxe-gold/10 text-luxe-gold`,
    })
  }

  return chips
}

function FilterPanelBody({
  chip,
  filters,
  setSort,
  setGuestFilter,
  setTypeFilter,
  setRatingFilter,
  setTierFilter,
  resetFilters,
}) {
  return (
    <>
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
          <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:mr-2 lg:inline lg:w-auto">
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
          <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:mr-2 lg:inline lg:w-auto">
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
          <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:mr-2 lg:inline lg:w-auto">
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
          <span className="w-full text-[10px] uppercase tracking-widest text-white/35 lg:mr-2 lg:inline lg:w-auto">
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
    </>
  )
}

export function FilterBar({
  filters,
  setSort,
  setGuestFilter,
  setTypeFilter,
  setRatingFilter,
  setTierFilter,
  resetFilters,
}) {
  // Mobile only: false = collapsed (shrunk) — default on first load and when entering <md.
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onCross = () => {
      if (!mq.matches) setExpanded(false)
    }
    mq.addEventListener('change', onCross)
    return () => mq.removeEventListener('change', onCross)
  }, [])

  const chip =
    'rounded-full border px-3 py-2 text-[11px] font-medium uppercase tracking-widest transition md:px-4 md:text-xs'

  const mobileCard =
    'rounded-3xl border border-white/12 bg-[#070a10]/55 shadow-card backdrop-blur-2xl'

  const handlers = {
    filters,
    setSort,
    setGuestFilter,
    setTypeFilter,
    setRatingFilter,
    setTierFilter,
    resetFilters,
  }

  const collapseChips = activeFilterCollapseChips(filters)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6 }}
      className="sticky top-[92px] z-40 mx-auto max-w-7xl px-4 md:px-8"
    >
      {/* Mobile: collapsed */}
      {!expanded ? (
        <div className={`${mobileCard} relative p-4 md:hidden`}>
          <motion.button
            type="button"
            className={mobileToggleIconBtn}
            aria-label="Expand filters"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(true)}
          >
            <ChevronDownIcon />
          </motion.button>
          <div className="min-w-0 pr-10">
            {collapseChips.length === 0 ? (
              <>
                <p className="text-sm font-medium text-white">
                  Filters & sorting
                </p>
                <p className="mt-1 text-xs text-white/50">
                  No filters selected · open the panel to refine
                </p>
              </>
            ) : (
              <>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                  Active filters
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {collapseChips.map((c) => (
                    <span key={c.key} className={c.className}>
                      {c.text}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        /* Mobile: expanded */
        <div className={`${mobileCard} relative p-4 md:hidden`}>
          <motion.button
            type="button"
            className={mobileToggleIconBtn}
            aria-label="Collapse filters"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(false)}
          >
            <ChevronUpIcon />
          </motion.button>
          <div className="pr-10">
            <FilterPanelBody chip={chip} {...handlers} />
          </div>
        </div>
      )}

      {/* Desktop */}
      <div className={`${mobileCard} hidden p-4 md:block md:p-6`}>
        <FilterPanelBody chip={chip} {...handlers} />
      </div>
    </motion.div>
  )
}
