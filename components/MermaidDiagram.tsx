'use client'

import { useEffect, useId, useRef, useState } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mermaid?: any
  }
}

const MERMAID_CDN = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js'

let scriptLoaded = false
const callbacks: (() => void)[] = []

function wrapLabel(label: string, maxLineLength = 18) {
  if (label.includes('<br')) return label

  const words = label.split(/\s+/)
  const lines: string[] = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxLineLength && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }
  }

  if (current) lines.push(current)
  return lines.join('<br/>')
}

function prepareMermaidCode(source: string) {
  return source
    .replace(/\{("[^"]{19,}")\}/g, (_match, quoted: string) => {
      return `{"${wrapLabel(quoted.slice(1, -1), 16)}"}`
    })
    .replace(/\[("[^"]{31,}")\]/g, (_match, quoted: string) => {
      return `["${wrapLabel(quoted.slice(1, -1))}"]`
    })
}

function repairMermaidLabels(svgEl: SVGSVGElement) {
  const foreignObjects = Array.from(svgEl.querySelectorAll('foreignObject'))

  for (const foreignObject of foreignObjects) {
    const label = foreignObject.firstElementChild as HTMLElement | null
    if (!label) continue

    label.style.whiteSpace = 'normal'
    label.style.overflow = 'visible'
    label.style.lineHeight = '1.35'
    label.style.textAlign = 'center'

    const currentHeight = parseFloat(foreignObject.getAttribute('height') || '0')
    const currentWidth = parseFloat(foreignObject.getAttribute('width') || '0')
    const neededHeight = Math.ceil(label.scrollHeight + 12)
    const neededWidth = Math.ceil(Math.max(label.scrollWidth, currentWidth) + 12)

    if (neededHeight > currentHeight) {
      const y = parseFloat(foreignObject.getAttribute('y') || '0')
      const delta = neededHeight - currentHeight
      foreignObject.setAttribute('y', String(y - delta / 2))
      foreignObject.setAttribute('height', String(neededHeight))
    }

    if (neededWidth > currentWidth) {
      const x = parseFloat(foreignObject.getAttribute('x') || '0')
      const delta = neededWidth - currentWidth
      foreignObject.setAttribute('x', String(x - delta / 2))
      foreignObject.setAttribute('width', String(neededWidth))
    }
  }
}

function loadMermaid(cb: () => void) {
  if (scriptLoaded) { cb(); return }
  callbacks.push(cb)
  if (document.querySelector(`script[src="${MERMAID_CDN}"]`)) return
  const script = document.createElement('script')
  script.src = MERMAID_CDN
  script.crossOrigin = 'anonymous'
  script.onload = () => {
    scriptLoaded = true
    callbacks.forEach((fn) => fn())
    callbacks.length = 0
  }
  document.head.appendChild(script)
}

export default function MermaidDiagram({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawId = useId()
  const id = `mermaid-${rawId.replace(/:/g, '')}`
  const [expanded, setExpanded] = useState(false)
  const [svgContent, setSvgContent] = useState('')

  useEffect(() => {
    let cancelled = false

    async function render() {
      if (!ref.current) return

      await new Promise<void>((resolve) => loadMermaid(resolve))
      if (cancelled || !ref.current) return

      const mermaid = window.mermaid
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        flowchart: { htmlLabels: true },
        themeVariables: {
          darkMode: true,
          background: '#1a2035',
          primaryColor: '#1a2035',
          primaryTextColor: '#dde3f0',
          primaryBorderColor: '#2a3550',
          lineColor: '#5b8dd9',
          secondaryColor: '#0f1525',
          tertiaryColor: '#1a2035',
          edgeLabelBackground: '#1a2035',
          titleColor: '#dde3f0',
          nodeTextColor: '#dde3f0',
          fontFamily: 'Geist, system-ui, sans-serif',
          fontSize: '15px',
        },
      })

      try {
        const { svg } = await mermaid.render(id, prepareMermaidCode(code.trim()))
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg
          const svgEl = ref.current.querySelector('svg')
          if (svgEl) {
            repairMermaidLabels(svgEl)
            svgEl.removeAttribute('width')
            svgEl.removeAttribute('height')
            svgEl.style.display = 'block'
            svgEl.style.margin = '0 auto'
            svgEl.style.overflow = 'visible'

            const viewBox = svgEl.getAttribute('viewBox')
            if (viewBox && ref.current) {
              const parts = viewBox.trim().split(/\s+/)
              const vbW = parseFloat(parts[2])
              const vbH = parseFloat(parts[3])
              if (vbW > 0 && vbH > 0) {
                const containerW = ref.current.clientWidth - 48
                const maxH = window.innerHeight * 0.72
                const scale = Math.min(containerW / vbW, maxH / vbH, 1)
                svgEl.setAttribute('width', String(Math.round(vbW * scale)))
                svgEl.setAttribute('height', String(Math.round(vbH * scale)))
              }
            }
          }
          setSvgContent(ref.current.innerHTML)
        }
      } catch {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = `<pre class="text-xs text-palace-muted overflow-x-auto">${code}</pre>`
          setSvgContent('')
        }
      }
    }

    render()
    return () => { cancelled = true }
  }, [code, id])

  return (
    <>
      <div className="relative my-8 overflow-auto rounded-lg border border-palace-border bg-palace-surface/60 p-6">
        {svgContent && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="absolute top-3 right-3 z-10 rounded border border-palace-border bg-palace-surface px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-palace-muted hover:border-palace-gold/60 hover:text-palace-text transition-colors duration-200"
          >
            Expand {'\u2922'}
          </button>
        )}
        <div className="flex w-full justify-center" ref={ref}>
          <div className="h-24 w-24 animate-pulse rounded-lg bg-palace-border/30" />
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[9998] flex cursor-zoom-out items-start justify-center overflow-auto bg-palace-bg/95 p-8"
          onClick={() => setExpanded(false)}
        >
          <div className="pointer-events-none" dangerouslySetInnerHTML={{ __html: svgContent }} />
        </div>
      )}
    </>
  )
}
