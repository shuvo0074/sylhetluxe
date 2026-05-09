import { Navbar } from '../components/Navbar'
import { SearchSection } from '../components/SearchSection'
import { FeaturedSection } from '../components/FeaturedSection'
import { FilterBar } from '../components/FilterBar'
import { HotelGrid } from '../components/HotelGrid'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { hotels } from '../data/hotels.js'
import { useHotelFilters } from '../hooks/useHotelFilters'

export function HomePage() {
  const {
    filters,
    setSort,
    setGuestFilter,
    setTypeFilter,
    setRatingFilter,
    setTierFilter,
    filtered,
    resetFilters,
  } = useHotelFilters(hotels)

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <SearchSection />
        <FeaturedSection />
        <FilterBar
          filters={filters}
          setSort={setSort}
          setGuestFilter={setGuestFilter}
          setTypeFilter={setTypeFilter}
          setRatingFilter={setRatingFilter}
          setTierFilter={setTierFilter}
          resetFilters={resetFilters}
        />
        <HotelGrid hotels={filtered} />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
