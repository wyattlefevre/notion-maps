export async function queryDatabase(databaseId: string) {
  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_KEY}`,
      'Notion-Version': '2022-06-28',
    },
  })
  if (!res.ok) {
    const errorResponse = await res.json() // Parse the error response JSON if available
    const errorMessage = errorResponse?.message || 'Failed to fetch database data'
    throw new Error(errorMessage)
  }
  return res.json()
}
