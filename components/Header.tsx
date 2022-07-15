import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

export const Header = () => {
  const router = useRouter()

  return (
    <header className="py-5 md:py-10 z-40 bg-transparent">
      <div className="flex items-center justify-between max-w-5xl mx-auto ">
        <div>
          <Link href="/" aria-label="Dale Larroder Blog">
            <a className="flex items-center justify-between" aria-label="Home">
              <div className="font-merriweather hidden text-3xl font-extrabold sm:block">
                {siteMetadata.headerTitle}
              </div>
            </a>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5 space-x-3">
          <div className="hidden sm:flex space-x-5">
            {headerNavLinks.map(({ title, href }) => {
              const active = href === router.pathname
              return (
                <Link key={title} href={href}>
                  <a
                    className={classNames('horizontal-underline text-base', {
                      'horizontal-underline-active': active,
                    })}
                    aria-label={title}
                  >
                    <span className="font-bold tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </a>
                </Link>
              )
            })}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
