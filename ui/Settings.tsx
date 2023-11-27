import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

import Bahasa from '@/public/images/Bahasa.svg'
import English from '@/public/images/English.svg'
import French from '@/public/images/French.svg'
import German from '@/public/images/German.svg'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from '../context/ThemeContext'
import { StaticI18nLink } from './StaticI18nLink'

type Props = {
  settings: boolean
  setSettings: (settings: boolean) => void
  setIsNavOpen: (isNavOpen: boolean) => void
}

const Settings = ({ settings, setSettings, setIsNavOpen }: Props) => {
  const { t } = useTranslation()

  const [darkMode, setDarkMode] = useTheme()
  return (
    <button
      className='rounded-lg whitespace-nowrap p-3 text-sm font-medium md:w-[80px] bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white'
      onClick={() => setDarkMode(!darkMode)}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      <span className='mx-2 hidden md:inline-block'>
        {darkMode ? t('mode.light') : t('mode.dark')}
      </span>
    </button>

    // <>
    //   <button
    //     type='button'
    //     className='text-white dark:text-slate-500 z-10'
    //     onClick={() => {
    //       setSettings(!settings)
    //       setIsNavOpen(false)
    //     }}>
    //     <FontAwesomeIcon icon={faGear} size='lg' />
    //   </button>
    //   <div
    //     className={clsx(
    //       'absolute bg-zinc-800 text-white p-4 z-50 mt-2 w-full sm:w-auto top-full right-0',
    //       {
    //         block: settings,
    //         hidden: !settings
    //       }
    //     )}>
    //     <ul className='divide-y divide-gold'>
    //       <li className='pb-4 flex justify-between gap-4'>
    //         <span className='font-semibold capitalize'>{t('mode.title')}</span>
    //         <button
    //           className='rounded-lg whitespace-nowrap ml-2 px-3 py-1 text-sm font-medium bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white'
    //           onClick={() => setDarkMode(!darkMode)}>
    //           <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    //           <span className='ml-2 hidden md:inline-block'>
    //             {darkMode ? t('mode.light') : t('mode.dark')}
    //           </span>
    //         </button>
    //       </li>
    //       <li className='pt-4 flex justify-between gap-4'>
    //         <span className='font-semibold capitalize'>{t('language.title')}</span>
    //         <ul>
    //           <li>
    //             <StaticI18nLink href='/' locale='en'>
    //               <button className='flex mb-1'>
    //                 <Image alt={t('language.en')} src={English} width={30} height={20} />
    //                 <span className='ml-2 hidden md:block'>{t('language.en')}</span>
    //               </button>
    //             </StaticI18nLink>
    //           </li>
    //           <li>
    //             <StaticI18nLink href='/' locale='de'>
    //               <button className='flex mb-1'>
    //                 <Image alt={t('language.de')} src={German} width={30} height={20} />
    //                 <span className='ml-2 hidden md:block'>{t('language.de')}</span>
    //               </button>
    //             </StaticI18nLink>
    //           </li>
    //           <li>
    //             <StaticI18nLink href='/' locale='fr'>
    //               <button className='flex mb-1'>
    //                 <Image alt={t('language.fr')} src={French} width={30} height={20} />
    //                 <span className='ml-2 hidden md:block'>{t('language.fr')}</span>
    //               </button>
    //             </StaticI18nLink>
    //           </li>
    //           <li>
    //             <StaticI18nLink href='/' locale='id'>
    //               <button className='flex mb-1'>
    //                 <Image alt={t('language.id')} src={Bahasa} width={30} height={20} />
    //                 <span className='ml-2 hidden md:block'>{t('language.id')}</span>
    //               </button>
    //             </StaticI18nLink>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </div>
    // </>
  )
}

export default Settings
