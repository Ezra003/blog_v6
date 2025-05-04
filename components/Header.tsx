'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from './Image'
import KoFiButton from './KoFiButton'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const headerClass =
    'flex items-center gap-4 leading-5 sm:gap-4 fixed left-1/2 top-6 z-50 w-[95vw] max-w-4xl -translate-x-1/2 justify-between rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-3 shadow-xl shadow-black/5 backdrop-blur-lg transition-all dark:border-gray-800/70 dark:bg-gray-950/80'

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
              className="rounded-full"
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
      <nav className="flex items-center gap-4 leading-5">
        {/* Show nav links only on md+ screens instead of sm+ */}
        <div className="no-scrollbar mr-auto hidden max-w-40 items-center gap-3 overflow-x-auto md:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-lg px-3 py-1.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 ${
                  pathname === link.href
                    ? 'bg-primary-600 dark:bg-primary-400 text-white shadow dark:text-gray-900'
                    : 'hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100'
                }`}
              >
                {link.title}
              </Link>
            ))}
        </div>
        <div className="flex items-center gap-6">
          <SearchButton />
          <ThemeSwitch />
          {/* Mobile: Icon only, Desktop: Full button */}
          <KoFiButton label="Buy me a Döner" variant="navbar" hideLabelOnMobile mobileIconOnly />
          <KoFiButton
            label="Buy me a Döner"
            className="hidden sm:inline-flex"
            variant="navbar"
            hideLabelOnMobile
          />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Header
