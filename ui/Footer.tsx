import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import logo from '@/public/images/ProfileLogo.svg'
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const { t } = useTranslation()

  const [revealed, setRevealed] = useState<boolean>(false)

  return (
    <section className='bg-gradient text-bordeaux' id='footer'>
      <footer className='py-20 md:container md:mx-auto'>
        <div className='p-6 grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 justify-between items-center gap-4'>
          <div className='flex justify-center flex-col items-center md:col-span-2'>
            <div
              style={{
                backgroundColor: '#086375',
                mask: `url(${logo.src}) no-repeat center / contain`,
                WebkitMask: `url(${logo.src}) no-repeat center / contain`,
                height: '120px',
                width: '120px',
                margin: '0 auto'
              }}
            />
            <h3 className='text-4xl my-4'>{t('me.name')}</h3>
            <h4 className='text-2xl'>{t('hero.profession')}</h4>
          </div>
          <div className='divide-y flex flex-col gap-4'>
            <div className='p-4'>
              <h5 className='text-xl'>{t('footer.contact')}</h5>
              <div className='flex justify-between'>
                <p
                  className={clsx({
                    'blur-sm pr-4': !revealed
                  })}>
                  {revealed ? t('footer.phone') : t('footer.no_spoon')}
                </p>
                {!revealed && (
                  <FontAwesomeIcon icon={faEye} onClick={(): void => setRevealed(true)} />
                )}
              </div>
            </div>
            <div className='p-4 pb-0'>
              <h5 className='text-xl'>{t('footer.hello')}</h5>
              <div className='flex justify-between'>
                <p
                  className={clsx({
                    'blur-sm pr-4': !revealed
                  })}>
                  {revealed ? t('footer.mail') : t('footer.no_spoon')}
                </p>
                {!revealed && (
                  <FontAwesomeIcon icon={faEye} onClick={(): void => setRevealed(true)} />
                )}
              </div>
            </div>
          </div>
          <div className='flex gap-4 flex-col items-center md:items-end'>
            <div>
              <p>Find out more</p>
            </div>
            <div className='flex gap-4'>
              <a
                href='https://www.facebook.com/iammohammednayeem/'
                target='_blank'
                rel='noreferrer'>
                <FontAwesomeIcon icon={faFacebookF} size='2x' title='Facebook' />
              </a>
              <a href='https://twitter.com/fmaker123' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faXTwitter} size='2x' title='Twitter' />
              </a>
              <a
                href='https://www.instagram.com/itsmohammednayeem/'
                target='_blank'
                rel='noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='2x' title='Instagram' />
              </a>
              <a href='https://www.linkedin.com/in/inayeem/' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' title='Linkedin' />
              </a>
              <a href='https://github.com/itsMohammedNayeem/' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} size='2x' title='Github' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
