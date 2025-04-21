import siteMetadata from '@/data/siteMetadata'
import React from 'react'

type CommentsSectionProps = {
  tweetId?: string
  path: string
  instagramUrl?: string
}

const CommentsSection = ({ tweetId, path, instagramUrl }: CommentsSectionProps) => {
  return (
    <div
      id="commentsSection"
      tabIndex={-1}
      className="flex justify-center pt-10 pb-10 text-base font-semibold text-gray-700 dark:text-gray-300"
    >
      {tweetId || instagramUrl ? (
        <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-xl bg-white/70 px-2 py-4 shadow-lg sm:px-4 dark:bg-gray-900/80">
          {/* Comment on X */}
          {tweetId && (
            <a
              href={`https://x.com/i/web/status/${tweetId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:text-primary-400 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-lg underline shadow-md dark:bg-gray-800"
            >
              Join the Conversation on
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                width="24"
                height="24"
                className="inline-block align-text-bottom"
                aria-label="X (Twitter) logo"
              >
                <path
                  d="M93.6 20H113L73.3 67.5L120 120H83.1L54.1 87.5L21.1 120H1.1L43.1 69.4L0 20.1H37.6L63.2 49.3L93.6 20ZM87.2 109.1H97.1L32.9 30.3H22.1L87.2 109.1Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
          {tweetId && instagramUrl && (
            <span className="flex items-center text-lg font-bold">or</span>
          )}
          {/* Comment on Instagram */}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-pink-50 px-4 py-2 text-lg text-pink-500 underline shadow-md hover:text-pink-600 dark:bg-gray-900 dark:hover:text-pink-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block align-text-bottom"
                aria-label="Instagram logo"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25a5.25 5.25 0 0 1 5.25-5.25Zm0 1.5a3.75 3.75 0 1 0 3.75 3.75a3.75 3.75 0 0 0-3.75-3.75Zm5.5 1a1 1 0 1 1-1 1a1 1 0 0 1 1-1Z" />
              </svg>
            </a>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default CommentsSection
