'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CounterProps {
  value: number
  duration?: number
  delay?: number
  suffix?: string
  decimals?: number
}

export default function Counter({ 
  value, 
  duration = 2, 
  delay = 0, 
  suffix = '', 
  decimals = 0 
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value)
      }, delay * 1000)
    }
  }, [isInView, value, motionValue, delay])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(latest) + suffix
      }
    })
    return () => unsubscribe()
  }, [springValue, suffix, decimals])

  return (
    <span 
      ref={ref} 
      className="inline-block tabular-nums"
    >
      0{suffix}
    </span>
  )
}
