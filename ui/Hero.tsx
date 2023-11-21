'use client'

import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import { useTheme } from '@/context/ThemeContext'
import logo from '@/public/images/ProfileLogo.svg'
import banner from '@/public/images/banner.jpg'
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MobileNavigation, Navigation } from './Navigation'
import Settings from './Settings'

const Hero = ({ ...pageProps }) => {
  const { t } = useTranslation()

  const [darkMode] = useTheme()
  const [settings, setSettings] = useState<boolean>(false)
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  const ref = useRef<HTMLInputElement>(null)

  useEffect((): (() => void) => {
    function handleClickOutside(event: { target: any }): void {
      if (ref.current && !ref.current.contains(event.target)) {
        setSettings(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref])

  return (
    <section className='md:container md:mx-auto'>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
        <nav className='pl-8 py-8 hidden md:block'>
          <div
            style={{
              backgroundColor: darkMode ? '#ffffff' : '#000000',
              mask: `url(${logo.src}) no-repeat center / contain`,
              WebkitMask: `url(${logo.src}) no-repeat center / contain`,
              height: '80px',
              width: '80px'
            }}
          />
          <Navigation />
        </nav>
        <main className='col-span-3'>
          <div
            className='relative p-10 lg:py-20 lg:px-32'
            style={{
              background: `url(${banner?.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className='relative px-10 py-5 backdrop-blur-[2px]'>
              <div ref={ref}>
                <div className='relative flex justify-between md:justify-end'>
                  <MobileNavigation
                    isNavOpen={isNavOpen}
                    setIsNavOpen={setIsNavOpen}
                    setSettings={setSettings}
                  />

                  <Image
                    alt='Mohammed Nayeem Logo'
                    src={logo}
                    width={60}
                    height={60}
                    className='md:hidden'
                  />

                  <Settings
                    settings={settings}
                    setSettings={setSettings}
                    setIsNavOpen={setIsNavOpen}
                    {...pageProps}
                  />
                </div>
              </div>

              <div className='relative z-10 w-full text-white dark:text-black top-0 left-0 pt-5'>
                <h4 className='text-xl italic xl:text-2xl mb-2'>{t('hero.hello')}</h4>
                <h2 className='text-2xl xl:text-6xl mb-4'>
                  {t('hero.iam')}
                  <br />
                  {t('hero.profession')}
                </h2>
                <h5 className='xl:text-xl mb-4 lg:pr-52'>{t('hero.lead')}</h5>
              </div>

              <div className='relative z-10 w-full whitespace-nowrap text-center sm:text-left text-white dark:text-black'>
                <a
                  href='https://www.facebook.com/iammohammednayeem/'
                  target='_blank'
                  rel='noreferrer'>
                  <FontAwesomeIcon icon={faFacebookF} size='2x' className='mr-3' title='Facebook' />
                </a>
                <a href='https://twitter.com/fmaker123' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faXTwitter} size='2x' className='mr-3' title='Twitter' />
                </a>
                <a
                  href='https://www.instagram.com/itsmohammednayeem/'
                  target='_blank'
                  rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='2x'
                    className='mr-3'
                    title='Instagram'
                  />
                </a>
                <a href='https://www.linkedin.com/in/inayeem/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} size='2x' className='mr-3' title='Linkedin' />
                </a>
                <a href='https://github.com/itsMohammedNayeem/' target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faGithub} size='2x' title='Github' />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Hero
