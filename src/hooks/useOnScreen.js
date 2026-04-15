import { useEffect, useState } from 'react'

export function useOnScreen(ref, rootMargin = '120px') {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current || isVisible) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible, ref, rootMargin])

  return isVisible
}
