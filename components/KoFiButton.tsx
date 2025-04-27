import React from 'react'

interface KoFiButtonProps {
  href?: string
  label?: string
  emoji?: string
  className?: string
  title?: string
  variant?: 'default' | 'navbar'
  hideLabelOnMobile?: boolean
  mobileIconOnly?: boolean
}

const KoFiButton = ({
  href = 'https://ko-fi.com/mindandmuster',
  label = 'Buy me a Döner',
  emoji = '🥙',
  className = '',
  title = 'Buy Me a Döner on Ko-Fi',
  variant = 'default',
  hideLabelOnMobile = false,
  mobileIconOnly = false,
}: KoFiButtonProps) => {
  // Navbar variant: smaller, flat, less padding, no shadow
  const navbarClasses =
    'h-9 px-3 py-1 text-xs font-semibold rounded border border-pink-400 bg-white/70 text-pink-600 hover:bg-pink-50 hover:border-pink-500 transition-colors duration-150 focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:outline-none dark:bg-gray-950/80 dark:text-pink-300 dark:border-pink-500 dark:hover:bg-pink-950/10'
  const defaultClasses =
    'inline-flex items-center rounded bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-pink-600 hover:via-orange-500 hover:to-yellow-400 focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:outline-none dark:from-pink-600 dark:via-orange-500 dark:to-yellow-400'
  const mobileIconClasses =
    'flex sm:hidden items-center justify-center rounded-full bg-transparent hover:bg-primary-600 active:bg-primary-700 text-pink-500 hover:text-white w-11 h-11 focus:ring-2 focus:ring-primary-300 focus:outline-none transition-colors duration-150'

  return (
    <>
      {/* Mobile Icon Button Only */}
      {mobileIconOnly && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${mobileIconClasses} ${className}`}
          title={title}
          aria-label={title}
        >
          <span role="img" aria-label="doner" className="text-2xl transition-colors duration-150">
            {emoji}
          </span>
        </a>
      )}
      {/* Normal/Responsive Button */}
      {!mobileIconOnly && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${variant === 'navbar' ? navbarClasses : defaultClasses} ${className}`}
          title={title}
          style={
            variant === 'navbar'
              ? { color: '#c026d3', minHeight: '2.25rem', alignItems: 'center' }
              : { color: '#fff', WebkitTextStroke: '0.3px rgba(0,0,0,0.10)' }
          }
        >
          <span role="img" aria-label="doner" className="mr-1">
            {emoji}
          </span>
          <span
            className={`ml-1 ${hideLabelOnMobile ? 'hidden sm:inline' : ''}`}
            style={{ color: 'inherit', fontWeight: 600 }}
          >
            {label}
          </span>
        </a>
      )}
    </>
  )
}

export default KoFiButton
