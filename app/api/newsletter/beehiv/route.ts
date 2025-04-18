import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID

    // TEMP LOGGING FOR DEBUGGING
    console.log('BEEHIIV_API_KEY:', apiKey)
    console.log('BEEHIIV_PUBLICATION_ID:', publicationId)

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email }),
      }
    )

    if (!res.ok) {
      const error = await res.json()
      return NextResponse.json(error, { status: res.status })
    }

    return NextResponse.json({ message: 'Subscription successful!' })
  } catch (error) {
    console.error('Error in Beehiiv API route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
