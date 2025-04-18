'use client'

import { useState } from 'react'

export default function NewsletterBeehivForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)
    try {
      const res = await fetch('/api/newsletter/beehiv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage('Subscribed successfully!')
        setEmail('')
      } else {
        setMessage(data.error || 'Subscription failed.')
      }
    } catch (err) {
      setMessage('An error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto mt-8 max-w-md rounded-xl bg-white/90 p-6 shadow-lg dark:bg-gray-900/80">
      <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to our Newsletter
      </h2>
      <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
        Get the latest posts, updates, and exclusive content delivered straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-md px-4 py-2 font-semibold text-white shadow-md transition-colors disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
        {message && (
          <p
            className={`text-center text-sm ${message.includes('success') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
