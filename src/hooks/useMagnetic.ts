'use client'

import { useRef, useCallback } from 'react'
import { gsap } from 'gsap'

export function useMagnetic(strength = 0.22) {
  const ref = useRef<HTMLElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.35, ease: 'power2.out' })
  }, [strength])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
