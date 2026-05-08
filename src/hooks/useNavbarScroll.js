import { useEffect, useState } from 'react'

export function useNavbarScroll(threshold = 40) {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    function onScroll() {
      setSolid(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return solid
}
