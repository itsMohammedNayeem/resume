import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import React, { useEffect } from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import localFont from '@next/font/local'

import { useTheme } from '../context/ThemeContext'

// not yet supported with turbo
const myFont = localFont({ src: '../public/fonts/Hind Siliguri Light.ttf' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()
  const [darkMode] = useTheme()
  config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>
      <div className={clsx('overflow-y-scroll dark:bg-zinc-900', myFont.className)}>{children}</div>
    </>
  )
}
