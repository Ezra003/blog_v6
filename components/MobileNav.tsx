'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef, useCallback } from 'react'
import Link from './Link'
import KoFiButton from './KoFiButton'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)

  // Toggle navigation, memoized for performance
  const onToggleNav = useCallback(() => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }, [])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && navShow) {
        setNavShow(false)
        enableBodyScroll(navRef.current)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearAllBodyScrollLocks()
    }
  }, [navShow])

  return (
    <Fragment>
      {/* Show hamburger icon below md: matches nav links hide/show logic */}
      <button
        aria-label="Open main menu"
        onClick={onToggleNav}
        className="focus-visible:ring-primary-500 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg p-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden dark:focus-visible:ring-offset-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog
          as="div"
          onClose={onToggleNav}
          className="fixed inset-0 z-50 flex items-center justify-center"
          initialFocus={navRef}
          aria-label="Mobile navigation menu"
          aria-modal="true"
          unmount={false}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div
              className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-all"
              aria-hidden="true"
            />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel
              className="fixed top-0 right-0 z-70 flex h-full w-10/12 max-w-xs flex-col bg-white shadow-xl ring-1 ring-black/10 focus:outline-none dark:bg-gray-950 dark:ring-white/10"
              ref={navRef}
              tabIndex={-1}
              aria-label="Mobile navigation panel"
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Menu</span>
                <button
                  className="focus-visible:ring-primary-500 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-full p-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950"
                  aria-label="Close menu"
                  onClick={onToggleNav}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-6 py-6" aria-label="Main menu">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:bg-primary-50 dark:hover:bg-primary-900/40 focus-visible:ring-primary-500 rounded-lg px-4 py-3 text-lg font-semibold text-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-gray-100 dark:focus-visible:ring-offset-gray-950"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ))}
                {/* Buy Me a Döner button */}
                <div className="mt-8 mb-4 flex justify-center">
                  <KoFiButton />
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </Fragment>
  )
}

export default MobileNav
