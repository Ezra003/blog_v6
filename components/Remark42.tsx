"use client"
import { useEffect, useRef } from "react"

interface Remark42Props {
  siteId: string
  pageId: string
  host?: string // e.g. http://localhost:8080 or your production URL
}

export default function Remark42({ siteId, pageId, host = "http://localhost:8080" }: Remark42Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = ""
    const script = document.createElement("script")
    script.src = `${host}/web/embed.js`
    script.setAttribute("data-site-id", siteId)
    script.setAttribute("data-url", window.location.origin + "/blog/" + pageId)
    script.async = true
    ref.current.appendChild(script)
  }, [siteId, pageId, host])

  return <div ref={ref} />
}
