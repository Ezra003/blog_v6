'use client'
import { useEffect, useRef } from 'react'

// Use a more specific type for window
interface TwitterWindow extends Window {
  twttr?: { widgets: { load: () => void } }
}

export default function RawTwitterEmbed({ tweetId }: { tweetId: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const win = window as TwitterWindow
    if (!win.twttr) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      win.twttr.widgets.load()
    }
  }, [tweetId])
  return (
    <div ref={ref} className="flex justify-center">
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/x/status/${tweetId}`}>View tweet on Twitter</a>
      </blockquote>
    </div>
  )
}
