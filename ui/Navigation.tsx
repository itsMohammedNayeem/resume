import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'

import { StaticI18nLink } from './StaticI18nLink'

const Navigation = () => {
  const { t } = useTranslation()
  return (
    <div id='side_nav'>
      <ul className='menu dark:text-white'>
        <li className='p-2 link relative'>
          <StaticI18nLink className='text waves-effect' href='/'>
            {t('nav.home')}
          </StaticI18nLink>
        </li>
        <li className='p-2 link relative'>
          <StaticI18nLink className='text waves-effect' href='/#about'>
            {t('nav.about')}
          </StaticI18nLink>
        </li>
        <li className='p-2 link relative'>
          <StaticI18nLink className='text waves-effect' href='/#work'>
            {t('nav.work')}
          </StaticI18nLink>
        </li>
        <li className='p-2 link relative'>
          <StaticI18nLink className='text waves-effect' href='/#portfolio'>
            {t('nav.portfolio')}
          </StaticI18nLink>
        </li>
        <li className='p-2 link relative'>
          <StaticI18nLink className='text waves-effect' href='/#footer'>
            {t('nav.contact')}
          </StaticI18nLink>
        </li>
      </ul>
    </div>
  )
}

type Props = {
  setSettings: (settings: boolean) => void
  isNavOpen: boolean
  setIsNavOpen: (isNavOpen: boolean) => void
}

const MobileNavigation = ({ isNavOpen, setIsNavOpen, setSettings }: Props) => {
  const { t } = useTranslation()
  return (
    <>
      <button
        onClick={() => {
          setIsNavOpen(!isNavOpen)
          setSettings(false)
        }}
        data-collapse-toggle='navbar-default'
        type='button'
        className='inline-flex items-center relative md:hidden rounded-lg text-white focus:outline-none dark:text-black'
        aria-controls='navbar-default'
        aria-expanded='false'>
        <span className='sr-only'>{t('nav.menu')}</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'></path>
        </svg>
      </button>
      <div
        className={clsx('absolute bg-zinc-800 text-white p-4 z-20 mt-2 w-full top-full left-0', {
          hidden: !isNavOpen
        })}>
        <Navigation />
      </div>
    </>
  )
}

export { Navigation, MobileNavigation }
