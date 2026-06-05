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

export default function KnowledgeGraph({ nodes, edges }: { nodes: GraphNode[]; edges: GraphEdge[] }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const rect = svgRef.current.getBoundingClientRect()
    const width = rect.width || 960
    const height = rect.height || 640
    const padding = 28

    svg.selectAll('*').remove()
    const g = svg.append('g')
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => g.attr('transform', event.transform))

    svg.call(zoom)

    const simNodes = nodes.map((node) => ({ ...node }))
    const simEdges = edges.map((edge) => ({ ...edge }))
    const nodeIds = new Set(simNodes.map((node) => node.id))

    const simulation = d3.forceSimulation(simNodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(simEdges).id((datum: any) => datum.id).distance(84).strength(0.48))
      .force('charge', d3.forceManyBody().strength(-135))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.02))
      .force('y', d3.forceY(height / 2).strength(0.02))
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

    const clampNode = (datum: any) => {
      datum.x = Math.max(padding, Math.min(width - padding, datum.x ?? width / 2))
      datum.y = Math.max(padding, Math.min(height - padding, datum.y ?? height / 2))
    }

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

    const fitGraph = () => {
      if (!simNodes.length) return

      const primaryComponentIds = getPrimaryComponentIds()
      const fittingNodes = simNodes.filter((datum) => primaryComponentIds.has(datum.id))
      const xs = fittingNodes.map((datum: any) => datum.x).filter((value): value is number => Number.isFinite(value))
      const ys = fittingNodes.map((datum: any) => datum.y).filter((value): value is number => Number.isFinite(value))
      if (!xs.length || !ys.length) return

      const minX = Math.min(...xs)
      const maxX = Math.max(...xs)
      const minY = Math.min(...ys)
      const maxY = Math.max(...ys)
      const graphWidth = Math.max(maxX - minX, 1)
      const graphHeight = Math.max(maxY - minY, 1)
      const scale = Math.max(0.7, Math.min(1.75, 1.15 / Math.max(graphWidth / width, graphHeight / height)))
      const translateX = width / 2 - ((minX + maxX) / 2) * scale
      const translateY = height / 2 - ((minY + maxY) / 2) * scale

      svg.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale))
    }

    simulation.on('tick', () => {
      simNodes.forEach(clampNode)
      render()
    })

    simulation.stop()
    for (let index = 0; index < 150; index += 1) simulation.tick()
    simNodes.forEach(clampNode)
    render()
    fitGraph()

    return () => {
      simulation.stop()
    }
  }, [edges, nodes, router])

  return <svg ref={svgRef} className="h-full w-full" role="img" aria-label="Interactive graph of note links" />
}
