import { useCallback, useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function useCountUp({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const countRef = useRef(0)
  const frameRef = useRef<number | undefined>(undefined)

  const animate = useCallback(() => {
    if (hasAnimated) return

    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(startValue + (end - startValue) * easeProgress)

      countRef.current = current
      setCount(current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
        setHasAnimated(true)
      }
    }

    frameRef.current = requestAnimationFrame(updateCount)
  }, [hasAnimated, duration, end])

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return {
    value: `${prefix}${count}${suffix}`,
    animate,
    hasAnimated,
  }
}
