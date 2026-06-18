'use client'

import * as d3 from 'd3'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import type { GraphEdge, GraphNode } from '@/lib/graph'

const TYPE_COLORS: Record<string, string> = {
  concept: '#5b8dd9',
  source: '#e8c97e',
  entity: '#a78bfa',
  synthesis: '#4ecdc4',
  overview: '#6b7a99',
}

const MIN_ZOOM = 0.08
const MAX_ZOOM = 12
const ZOOM_STEP = 1.4
const FIT_PADDING = 48
const NODE_PADDING = 22
const WARMUP_TICKS = 120

export default function KnowledgeGraph({ nodes, edges }: { nodes: GraphNode[]; edges: GraphEdge[] }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const zoomApiRef = useRef<{ zoomIn: () => void; zoomOut: () => void; fit: () => void } | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)

    const getViewport = () => {
      const rect = svgRef.current?.getBoundingClientRect()
      return {
        width: rect?.width || 960,
        height: rect?.height || 640,
      }
    }

    svg.selectAll('*').remove()
    const g = svg.append('g')
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([MIN_ZOOM, MAX_ZOOM])
      .wheelDelta((event) => -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * 1.6)
      .on('zoom', (event) => g.attr('transform', event.transform))

    svg.call(zoom)

    const simNodes = nodes.map((node) => ({ ...node }))
    const simEdges = edges.map((edge) => ({ ...edge }))
    const nodeIds = new Set(simNodes.map((node) => node.id))

    const simulation = d3.forceSimulation(simNodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(simEdges).id((datum: any) => datum.id).distance(84))
      .force('charge', d3.forceManyBody().strength(-145))
      .force('center', d3.forceCenter(getViewport().width / 2, getViewport().height / 2))
      .force('collision', d3.forceCollide().radius((datum: any) => Math.max(10, Math.min(24, 6 + datum.size * 1.6))))

    const link = g.append('g')
      .selectAll('line')
      .data(simEdges)
      .join('line')
      .attr('stroke', '#2a3550')
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.8)

    const node = g.append('g')
      .selectAll('circle')
      .data(simNodes)
      .join('circle')
      .attr('r', (datum) => Math.max(4, Math.min(15, 4 + datum.size * 1.7)))
      .attr('fill', (datum) => TYPE_COLORS[datum.type] ?? '#6b7a99')
      .attr('stroke', '#0f1525')
      .attr('stroke-width', 1.5)
      .style('cursor', 'pointer')
      .on('click', (_, datum) => router.push(`/note/${datum.id}`))

    const drag = d3.drag<SVGCircleElement, any>()
      .on('start', (event, datum) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        datum.fx = datum.x
        datum.fy = datum.y
      })
      .on('drag', (event, datum) => {
        datum.fx = event.x
        datum.fy = event.y
      })
      .on('end', (event, datum) => {
        if (!event.active) simulation.alphaTarget(0)
        datum.fx = null
        datum.fy = null
      })

    node.call(drag as any)

    node.append('title').text((datum) => datum.label)

    const render = () => {
      link
        .attr('x1', (datum: any) => datum.source.x)
        .attr('y1', (datum: any) => datum.source.y)
        .attr('x2', (datum: any) => datum.target.x)
        .attr('y2', (datum: any) => datum.target.y)
      node.attr('cx', (datum: any) => datum.x).attr('cy', (datum: any) => datum.y)
    }

    const getPrimaryComponentIds = () => {
      const adjacency = new Map<string, Set<string>>()
      for (const id of nodeIds) adjacency.set(id, new Set())

      for (const edge of simEdges) {
        if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) continue
        adjacency.get(edge.source)?.add(edge.target)
        adjacency.get(edge.target)?.add(edge.source)
      }

      const seen = new Set<string>()
      let largestComponent = new Set<string>()

      for (const id of nodeIds) {
        if (seen.has(id)) continue

        const stack = [id]
        const component = new Set<string>()
        seen.add(id)

        while (stack.length) {
          const current = stack.pop()
          if (!current) continue
          component.add(current)

          for (const next of adjacency.get(current) ?? []) {
            if (seen.has(next)) continue
            seen.add(next)
            stack.push(next)
          }
        }

        if (component.size > largestComponent.size) largestComponent = component
      }

      return largestComponent.size ? largestComponent : nodeIds
    }

    const fitToView = (animate = false) => {
      if (!simNodes.length) return

      render()

      const { width, height } = getViewport()
      const primaryComponentIds = getPrimaryComponentIds()
      const fittingNodes = simNodes.filter((datum) => primaryComponentIds.has(datum.id))
      const xs = fittingNodes.map((datum: any) => datum.x).filter((value): value is number => Number.isFinite(value))
      const ys = fittingNodes.map((datum: any) => datum.y).filter((value): value is number => Number.isFinite(value))
      if (!xs.length || !ys.length) return

      const minX = Math.min(...xs) - NODE_PADDING
      const maxX = Math.max(...xs) + NODE_PADDING
      const minY = Math.min(...ys) - NODE_PADDING
      const maxY = Math.max(...ys) + NODE_PADDING
      const bboxWidth = Math.max(maxX - minX, 1)
      const bboxHeight = Math.max(maxY - minY, 1)
      const fitScale = Math.min(
        (width - FIT_PADDING * 2) / bboxWidth,
        (height - FIT_PADDING * 2) / bboxHeight,
      )
      // Fit zooms out to show everything; never zoom in past 1:1.
      const clampedScale = Math.max(MIN_ZOOM, Math.min(fitScale, 1))
      const centerX = (minX + maxX) / 2
      const centerY = (minY + maxY) / 2
      const transform = d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(clampedScale)
        .translate(-centerX, -centerY)

      const target = animate ? svg.transition().duration(220) : svg
      target.call(zoom.transform, transform)
    }

    const zoomBy = (factor: number) => {
      svg.transition().duration(180).call(zoom.scaleBy, factor)
    }

    zoomApiRef.current = {
      zoomIn: () => zoomBy(ZOOM_STEP),
      zoomOut: () => zoomBy(1 / ZOOM_STEP),
      fit: () => {
        simulation.alphaTarget(0)
        simulation.alpha(0)
        fitToView(true)
      },
    }

    simulation.on('tick', () => {
      render()
    })

    let settledFits = 0

    simulation.on('end', () => {
      if (settledFits >= 2) return
      settledFits += 1
      fitToView()
    })

    simulation.stop()
    for (let index = 0; index < WARMUP_TICKS; index += 1) simulation.tick()
    render()

    const scheduleFit = () => {
      requestAnimationFrame(() => {
        fitToView()
        settledFits = Math.max(settledFits, 1)
      })
    }

    scheduleFit()
    simulation.alpha(0.35).restart()

    const resizeObserver = new ResizeObserver(() => {
      if (settledFits < 1) return
      fitToView()
    })
    resizeObserver.observe(svgRef.current)

    return () => {
      resizeObserver.disconnect()
      simulation.stop()
      zoomApiRef.current = null
    }
  }, [edges, nodes, router])

  return (
    <div className="relative h-full w-full">
      <svg ref={svgRef} className="h-full w-full" role="img" aria-label="Interactive graph of note links" />
      <div className="pointer-events-none absolute right-3 top-3 flex flex-col gap-1.5">
        <button
          type="button"
          aria-label="Zoom in"
          className="btn-press pointer-events-auto flex h-9 w-9 items-center justify-center rounded-md border border-palace-border bg-palace-bg/80 font-mono text-lg leading-none text-palace-text backdrop-blur-sm transition-colors hover:border-palace-gold/60"
          onClick={() => zoomApiRef.current?.zoomIn()}
        >
          +
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          className="btn-press pointer-events-auto flex h-9 w-9 items-center justify-center rounded-md border border-palace-border bg-palace-bg/80 font-mono text-lg leading-none text-palace-text backdrop-blur-sm transition-colors hover:border-palace-gold/60"
          onClick={() => zoomApiRef.current?.zoomOut()}
        >
          −
        </button>
        <button
          type="button"
          aria-label="Fit graph to view"
          className="btn-press pointer-events-auto flex h-9 w-9 items-center justify-center rounded-md border border-palace-border bg-palace-bg/80 text-palace-text backdrop-blur-sm transition-colors hover:border-palace-gold/60"
          onClick={() => zoomApiRef.current?.fit()}
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <path
              d="M2 5V2h3M11 2h3v3M14 11v3h-3M5 14H2v-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}