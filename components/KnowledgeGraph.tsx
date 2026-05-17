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

    svg.selectAll('*').remove()
    const g = svg.append('g')

    svg.call(
      d3.zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.3, 3])
        .on('zoom', (event) => g.attr('transform', event.transform)),
    )

    const simNodes = nodes.map((node) => ({ ...node }))
    const simEdges = edges.map((edge) => ({ ...edge }))

    const simulation = d3.forceSimulation(simNodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(simEdges).id((datum: any) => datum.id).distance(84))
      .force('charge', d3.forceManyBody().strength(-145))
      .force('center', d3.forceCenter(width / 2, height / 2))
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

    simulation.on('tick', () => {
      link
        .attr('x1', (datum: any) => datum.source.x)
        .attr('y1', (datum: any) => datum.source.y)
        .attr('x2', (datum: any) => datum.target.x)
        .attr('y2', (datum: any) => datum.target.y)
      node.attr('cx', (datum: any) => datum.x).attr('cy', (datum: any) => datum.y)
    })

    return () => {
      simulation.stop()
    }
  }, [edges, nodes, router])

  return <svg ref={svgRef} className="h-full w-full" role="img" aria-label="Interactive graph of note links" />
}
