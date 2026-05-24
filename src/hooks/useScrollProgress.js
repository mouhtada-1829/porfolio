import { useRef, useState, useLayoutEffect } from 'react'

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const tick = () => {
      const rect = el.getBoundingClientRect()
      const wh = window.innerHeight
      const total = wh + rect.height
      const rawProgress = total > 0 ? Math.max(0, Math.min(1, (wh - rect.top) / total)) : 0
      const eased = 1 - Math.pow(1 - rawProgress, 4)
      setProgress(eased)
      el.style.setProperty('--s-progress', eased)
    }

    tick()

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => { ticking = false; tick() })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return [ref, progress]
}
