"use client"

import { useEffect, useRef } from "react"

export function MarqueeAnnouncement() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let position = 0
    const speed = 1
    const width = marquee.offsetWidth
    const parentWidth = marquee.parentElement?.offsetWidth || window.innerWidth

    const animate = () => {
      position -= speed
      if (position <= -width) {
        position = parentWidth
      }
      if (marquee) {
        marquee.style.transform = `translateX(${position}px)`
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="bg-[#004d00] text-white py-2 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div ref={marqueeRef} className="whitespace-nowrap">
            <span className="inline-flex items-center">
              ➤ 10th Edition of SAMMAAN 2025 is now uploaded. To download please click here
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
