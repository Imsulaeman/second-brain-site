'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const DOOR_DURATION = 2.0

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function update() {
      setIsMobile(window.innerWidth < 640)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return isMobile
}

function CarvedPanel({ className }: { className: string }) {
  return (
    <div className={`absolute border border-[#eeeade]/18 ${className}`}>
      <div className="absolute inset-2 border border-[#eeeade]/[0.08]" />
      <div className="absolute inset-4 border border-[#eeeade]/[0.05]" />
    </div>
  )
}

function DoorPanel({
  side,
  opening,
  isMobile,
  onKnock,
  onComplete,
}: {
  side: 'left' | 'right'
  opening: boolean
  isMobile: boolean
  onKnock: () => void
  onComplete?: () => void
}) {
  const isLeft = side === 'left'
  const openRotation = isMobile ? (isLeft ? -80 : 80) : isLeft ? -92 : 92

  return (
    <div className="relative flex-1">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #07091a 0%, #0b0e20 60%, #090c1c 100%)',
          transformOrigin: isLeft ? 'left center' : 'right center',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: opening ? [0, isLeft ? 2.5 : -2.5, openRotation] : 0 }}
        transition={opening ? {
          duration: DOOR_DURATION,
          times: [0, 0.04, 1],
          ease: [0.65, 0, 0.95, 0.3],
        } : { duration: 0 }}
        onAnimationComplete={opening && !isLeft ? onComplete : undefined}
      >
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background:
              'repeating-linear-gradient(180deg, transparent 0px, rgba(255,255,255,0.012) 1px, transparent 3px)',
          }}
        />

        <div className="absolute inset-3 border border-[#eeeade]/20" />
        <div className="absolute inset-5 border border-[#eeeade]/10" />
        <div className="absolute inset-x-7 top-[42%] h-px bg-[#eeeade]/12" />
        <div className="absolute inset-x-7 bottom-[37%] h-px bg-[#eeeade]/12" />

        <CarvedPanel className="top-8 inset-x-7 h-[32%]" />
        <CarvedPanel className="inset-x-7 top-1/2 h-[20%] -translate-y-1/2" />
        <CarvedPanel className="bottom-8 inset-x-7 h-[26%]" />

        <div
          className={`absolute top-1/2 z-20 -translate-y-1/2 ${isLeft ? 'right-5' : 'left-5'}`}
        >
          <button
            type="button"
            onClick={!opening ? onKnock : undefined}
            className="group relative flex flex-col items-center gap-2.5"
            style={{ cursor: opening ? 'default' : 'pointer' }}
            aria-label="Knock to enter"
          >
            {!opening && (
              <div className="absolute inset-0 rounded-full border border-[#eeeade]/35 animate-ping" />
            )}
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eeeade]/50 bg-[#0b0e20] shadow-[0_0_14px_rgba(238,234,222,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:border-[#eeeade]/80 group-hover:shadow-[0_0_22px_rgba(238,234,222,0.22)] sm:h-11 sm:w-11">
              <div className="h-3.5 w-3.5 rounded-full border border-[#eeeade]/60 bg-[#eeeade]/[0.06] sm:h-4 sm:w-4" />
            </div>
          </button>
        </div>

        <div className="absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.42)]" />
      </motion.div>
    </div>
  )
}

export default function ManorEntrance() {
  const [visible, setVisible] = useState(false)
  const [opening, setOpening] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
    const seen = sessionStorage.getItem('manor-seen')
    const preview = new URLSearchParams(window.location.search).has('door')
    if (!seen || preview) setVisible(true)
  }, [])

  function handleKnock() {
    if (!opening) setOpening(true)
  }

  function handleAnimationComplete() {
    sessionStorage.setItem('manor-seen', '1')
    setTimeout(() => setVisible(false), 260)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="fixed inset-0 z-[9998] bg-[#0f1525] pointer-events-none"
            animate={{ opacity: opening ? [1, 1, 0] : 1 }}
            transition={{ duration: DOOR_DURATION, times: [0, 0.55, 1] }}
          />

          <motion.div
            className="fixed inset-0 z-[9999] flex overflow-hidden bg-[#07091a]"
            style={{
              perspective: isMobile ? '800px' : '1400px',
              perspectiveOrigin: '50% 50%',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#1a1f3a]/60 to-transparent" />

            <motion.div
              className="absolute inset-y-0 left-1/2 z-10 -translate-x-1/2 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to bottom, transparent 8%, rgba(200,210,255,0.4) 40%, rgba(220,225,255,0.7) 50%, rgba(200,210,255,0.4) 60%, transparent 92%)',
              }}
              animate={{
                width: opening ? ['2px', '16px', '80px'] : '2px',
                opacity: opening ? [0.9, 1, 0] : 0.9,
              }}
              transition={{ duration: DOOR_DURATION, times: [0, 0.25, 1] }}
            />

            <DoorPanel side="left" opening={opening} isMobile={isMobile} onKnock={handleKnock} />
            <DoorPanel
              side="right"
              opening={opening}
              isMobile={isMobile}
              onKnock={handleKnock}
              onComplete={handleAnimationComplete}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
