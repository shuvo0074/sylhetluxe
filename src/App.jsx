import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { VideoBackground } from './components/VideoBackground'
import { LoadingScreen } from './components/LoadingScreen'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1600)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen">
      <VideoBackground />

      <AnimatePresence mode="wait">
        <LoadingScreen show={loading} />
      </AnimatePresence>

      {!loading && <HomePage />}
      <ScrollToTop />
    </div>
  )
}
