import { useMemo, useState } from 'react'
import { LUXURY_MIN_PRICE_BDT } from '../data/hotels.js'

const defaultState = () => ({
  sort: 'price-asc',
  guestFilter: null,
  typeFilter: 'all',
  ratingFilter: null,
  tierFilter: null,
})

/**
 * @param {import('../data/hotels.js').Hotel[]} hotels
 */
export function useHotelFilters(hotels) {
  const [filters, setFilters] = useState(defaultState)

  const setSort = (sort) =>
    setFilters((f) => ({ ...f, sort }))
  const setGuestFilter = (guestFilter) =>
    setFilters((f) => ({ ...f, guestFilter }))
  const setTypeFilter = (typeFilter) =>
    setFilters((f) => ({ ...f, typeFilter }))
  const setRatingFilter = (ratingFilter) =>
    setFilters((f) => ({ ...f, ratingFilter }))
  const setTierFilter = (tierFilter) =>
    setFilters((f) => ({ ...f, tierFilter }))

  const filtered = useMemo(() => {
    let list = [...hotels]

    if (filters.guestFilter === 1)
      list = list.filter((h) => h.guestCapacity >= 1)
    else if (filters.guestFilter === 2)
      list = list.filter((h) => h.guestCapacity >= 2)
    else if (filters.guestFilter === 4)
      list = list.filter((h) => h.guestCapacity >= 4)
    else if (filters.guestFilter === 'family')
      list = list.filter((h) => h.hasFamilyRooms)

    if (filters.typeFilter === 'resort')
      list = list.filter((h) => h.type === 'Resort')
    else if (filters.typeFilter === 'hotel')
      list = list.filter((h) => h.type === 'Hotel')

    if (filters.ratingFilter === '4')
      list = list.filter((h) => h.rating >= 4)
    else if (filters.ratingFilter === '45')
      list = list.filter((h) => h.rating >= 4.5)
    else if (filters.ratingFilter === '48')
      list = list.filter((h) => h.rating >= 4.8)

    if (filters.tierFilter === 'luxury')
      list = list.filter((h) => h.price >= LUXURY_MIN_PRICE_BDT)
    else if (filters.tierFilter === 'budget')
      list = list.filter((h) => h.price < LUXURY_MIN_PRICE_BDT)

    const sortMode = filters.sort
    list.sort((a, b) =>
      sortMode === 'price-desc' ? b.price - a.price : a.price - b.price,
    )

    return list
  }, [hotels, filters])

  const resetFilters = () => setFilters(defaultState())

  return {
    filters,
    setSort,
    setGuestFilter,
    setTypeFilter,
    setRatingFilter,
    setTierFilter,
    filtered,
    resetFilters,
  }
}
