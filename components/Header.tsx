'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from './Image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const headerClass =
    'flex items-center space-x-2 leading-5 sm:space-x-4 fixed left-1/2 top-6 z-50 w-[95vw] max-w-4xl -translate-x-1/2 justify-between rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-3 shadow-xl shadow-black/5 backdrop-blur-lg transition-all dark:border-gray-800/70 dark:bg-gray-950/80'

  return (
    <header className={headerClass} role="navigation" aria-label="Main Navigation">
      <Link
        href="/"
        aria-label={siteMetadata.headerTitle}
        className="focus-visible:ring-primary-500 rounded-full focus:outline-none focus-visible:ring-2"
      >
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image
              src={siteMetadata.siteLogo}
              alt="Site Logo"
              width={48}
              height={48}
              className="rounded-full shadow"
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <nav className="flex items-center space-x-2 leading-5 sm:space-x-4">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-2 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-lg px-3 py-1.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 ${
                  pathname === link.href
                    ? 'dark:bg-primary-400 text-white shadow dark:text-gray-900'
                    : 'hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header
