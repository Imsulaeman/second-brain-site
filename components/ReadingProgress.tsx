'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress({ accentColor = '#5b8dd9' }: { accentColor?: string }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const element = document.documentElement
      const total = element.scrollHeight - element.clientHeight
      setPct(total > 0 ? (element.scrollTop / total) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-palace-border">
      <div className="h-full transition-[width] duration-75" style={{ width: `${pct}%`, backgroundColor: accentColor }} />
    </div>
  )
}
