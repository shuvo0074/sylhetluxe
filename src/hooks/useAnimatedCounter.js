import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * @param {number} end
 * @param {{ duration?: number }} [opts]
 */
export function useAnimatedCounter(end, opts = {}) {
  const duration = opts.duration ?? 2000
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })
  const [value, setValue] = useState(0)
  const fired = useRef(false)

  useEffect(() => {
    if (!isInView || fired.current) return
    fired.current = true
    const startTs = performance.now()
    let raf

    function frame(now) {
      const elapsed = now - startTs
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(end * eased))
      if (t < 1) raf = requestAnimationFrame(frame)
      else setValue(end)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [isInView, end, duration])

  return { ref, value }
}
