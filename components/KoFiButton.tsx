import React from 'react'

interface KoFiButtonProps {
  href?: string
  label?: string
  emoji?: string
  className?: string
  title?: string
}

const KoFiButton = ({
  href = 'https://ko-fi.com/mindandmuster',
  label = 'Buy me a Döner',
  emoji = '🥙',
  className = '',
  title = 'Buy Me a Döner on Ko-Fi',
}: KoFiButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center rounded bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-pink-600 hover:via-orange-500 hover:to-yellow-400 focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:outline-none dark:from-pink-600 dark:via-orange-500 dark:to-yellow-400 ${className}`}
    title={title}
    style={{ color: '#fff', WebkitTextStroke: '0.3px rgba(0,0,0,0.10)' }}
  >
    <span role="img" aria-label="doner" className="">
      {emoji}
    </span>
    <span className="ml-2" style={{ color: 'inherit' }}>
      {label}
    </span>
  </a>
)

export default KoFiButton
