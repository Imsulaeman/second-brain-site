import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'

const QMD_URL = 'https://mcp.imsulaeman.me/qmd/mcp'

export interface QmdResult {
  docid: string
  file: string   // e.g. "wiki/concepts/kelly-criterion.md"
  title: string
  score: number
}

// "wiki/concepts/kelly-criterion.md" → "concepts/kelly-criterion"
export function fileToNoteId(file: string): string {
  return file.replace(/^wiki\//, '').replace(/\.md$/, '')
}

export async function qmdSearch(query: string, limit = 8): Promise<string[]> {
  const client = new Client({ name: 'second-brain-site', version: '1' }, { capabilities: {} })
  const transport = new StreamableHTTPClientTransport(new URL(QMD_URL))
  await client.connect(transport)
  try {
    const result = await client.callTool({
      name: 'query',
      arguments: {
        searches: [
          { type: 'lex', query },
          { type: 'vec', query },
        ],
        rerank: false,
        limit,
      },
    }) as { structuredContent?: { results?: QmdResult[] } }

    const results = result.structuredContent?.results ?? []
    return results.map((r) => fileToNoteId(r.file))
  } finally {
    await client.close()
  }
}
