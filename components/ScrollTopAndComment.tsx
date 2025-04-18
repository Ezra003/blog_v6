'use client'

import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }
  const handleScrollToComment = () => {
    const commentsSection = document.getElementById('commentsSection')
    if (commentsSection) {
      const yOffset = -150 // Adjust this value for more/less space above
      const y = commentsSection.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })

      // Focus for accessibility
      if (typeof commentsSection.focus === 'function') {
        commentsSection.focus({ preventScroll: true })
      }
      // Highlight effect
      commentsSection.classList.add('ring-4', 'ring-primary-500')
      setTimeout(() => {
        commentsSection.classList.remove('ring-4', 'ring-primary-500')
      }, 1500)
    } else {
      // fallback: scroll to bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }
  const handleScrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletterSection')
    if (newsletterSection) {
      const yOffset = -150 // Same offset as comments
      const y = newsletterSection.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      newsletterSection.classList.add('ring-4', 'ring-primary-500')
      setTimeout(() => {
        newsletterSection.classList.remove('ring-4', 'ring-primary-500')
      }, 1500)
    }
  }
  return (
    <div
      className={`fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      {siteMetadata.comments?.provider && (
        <button
          aria-label="Scroll To Comment"
          onClick={handleScrollToComment}
          className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        aria-label="Scroll To Subscribe"
        onClick={handleScrollToNewsletter}
        className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-600 rounded-full p-2 text-white shadow-lg transition-all dark:text-white"
      >
        {/* Envelope icon for newsletter */}
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.638l8.25 5.775 8.25-5.775V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm16.5 1.987-7.657 5.357a1.5 1.5 0 0 1-1.686 0L3.75 8.737v8.513c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.737z" />
        </svg>
      </button>
    </div>
  )
}

export default ScrollTopAndComment
