import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useState } from 'react'

import profile from '@/public/images/profile.jpg'
import { faCss3, faHtml5, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const { t } = useTranslation()
  const [isBanana, setIsBanana] = useState<Boolean>(false)
  const [isGray, setIsGray] = useState<Boolean>(false)
  const [isSmiley, setIsSmiley] = useState<Boolean>(false)

  // eslint-disable-next-line i18next/no-literal-string
  const smiley = <>&#128512;</>

  return (
    <section
      className={clsx('md:container md:mx-auto', {
        grayscale: isGray
      })}>
      <h2 id='about' className='sr-only'>
        {t('about.title')}
      </h2>
      <div className='grid md:grid-cols-4 gap-4'>
        <div className='md:col-start-2 md:col-span-3'>
          <div className='grid grid-cols-3 md:grid-cols-4 pt-10 lg:justify-around'>
            <div
              className='text-center mb-4'
              onMouseEnter={() => setIsBanana(true)}
              onMouseLeave={() => setIsBanana(false)}>
              <figure className='h-[70px] p-2 md:mb-4'>
                <FontAwesomeIcon icon={faNodeJs} size='4x' className='text-gold' title='React' />
              </figure>
              <p className='text-gold hidden md:block'>{t('about.reward1.p')}</p>
              <h5 className='text-gold hidden md:block text-xl font-semibold'>
                {isBanana ? t('about.reward1.h5') : t('about.reward1.question')}
              </h5>
            </div>
            <div
              className='text-center mb-4'
              onMouseEnter={() => setIsSmiley(true)}
              onMouseLeave={() => setIsSmiley(false)}>
              <figure className='h-[70px] p-2 md:mb-4'>
                <FontAwesomeIcon icon={faHtml5} size='4x' className='text-gold' title='React' />
              </figure>
              <p className='text-gold hidden md:block'>{t('about.reward2.p')}</p>
              <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>
                {isSmiley ? smiley : t('about.reward2.h5')}
              </h5>
            </div>
            <div
              className='text-center mb-4'
              onMouseEnter={() => setIsGray(true)}
              onMouseLeave={() => setIsGray(false)}>
              <figure className='h-[70px] p-2 md:mb-4'>
                <FontAwesomeIcon icon={faCss3} size='4x' className='text-gold' title='React' />
              </figure>
              <p className='text-gold hidden md:block'>{t('about.reward3.p')}</p>
              <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>
                {t('about.reward3.h5')}
              </h5>
            </div>
            <div className='col-span-3 row-span-3 md:col-span-1 mb-10 md:mb-4 md:-mt-[100px] xl:-mt-[200px] z-20'>
              <div className='relative xl:w-64 mx-auto'>
                <figure>
                  <Image
                    alt='Mohammed Nayeem'
                    src={profile}
                    width={256}
                    height={370}
                    className='mx-auto'
                  />
                </figure>
                <span className='frame'></span>
              </div>
            </div>
          </div>
          <div className='line hidden lg:block lg:mt-[2px] xl:mt-0'></div>
        </div>
      </div>
    </section>
  )
}

export default About
