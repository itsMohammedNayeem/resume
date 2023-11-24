import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useState } from 'react'

import profile from '@/public/images/profile.png'
import tailwindCssLogo from '@/public/images/tailwindcss.svg'
import { faCss3, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const { t } = useTranslation()
  const [surprise, setSurprise] = useState<Boolean>(false)
  const [isBanana, setIsBanana] = useState<Boolean>(false)
  const [isGray, setIsGray] = useState<Boolean>(false)
  const [isSmiley, setIsSmiley] = useState<Boolean>(false)

  // eslint-disable-next-line i18next/no-literal-string
  const smiley = <>&#x1F34C;</>

  const clickHandler = () => {
    setSurprise(true)
    setTimeout(() => {
      setSurprise(false)
    }, 3000)
  }

  const emojiList = [
    <>&#x1F34D;</>,
    <>&#x1F34E;</>,
    <>&#x1F34F;</>,
    <>&#x1F350;</>,
    <>&#x1F351;</>,
    <>&#x1F352;</>,
    <>&#x1F353;</>,
    <>&#x1F354;</>,
    <>&#x1F355;</>,
    <>&#x1F356;</>
  ]
  const surpriseAnimalEmoji = () => {
    const randomEmoji = Math.floor(Math.random() * emojiList.length)
    return emojiList[randomEmoji]
  }

  return (
    <section
      className={clsx('md:container md:mx-auto', {
        grayscale: isGray
      })}>
      <h2 id='about' className='sr-only'>
        {t('about.title')}
      </h2>
      <div className='grid md:grid-cols-4 gap-x-4'>
        <div className='md:col-start-2 md:col-span-3'>
          <div className='grid grid-cols-5 md:grid-cols-7 gap-x-2 pt-10 lg:justify-around'>
            <div className='text-center mb-4 flex flex-col'>
              <figure className='h-[70px] p-2 md:mb-4'>
                <FontAwesomeIcon icon={faReact} size='4x' className='text-gold' title='React' />
              </figure>
              <button className='hidden md:block text-xl font-semibold' onClick={clickHandler}>
                {surprise ? (
                  surpriseAnimalEmoji()
                ) : (
                  <h5 className='text-gold hidden md:block text-xl font-semibold'>
                    {t('about.reward1.p')}
                  </h5>
                )}
              </button>
            </div>
            <div
              className='text-center mb-4'
              onMouseEnter={() => setIsBanana(true)}
              onMouseLeave={() => setIsBanana(false)}>
              <figure className='h-[70px] p-2 md:mb-4'>
                <FontAwesomeIcon
                  icon={faSquareJs}
                  size='4x'
                  className='text-gold'
                  title='Javascript'
                />
              </figure>
              <p className='text-gold hidden md:block'>{t('about.reward2.p')}</p>
              <h5 className='text-gold hidden md:block text-xl font-semibold'>
                {isBanana ? t('about.reward2.h5') : t('about.reward2.question')}
              </h5>
            </div>
            <div
              className='text-center mb-4'
              onMouseEnter={() => setIsSmiley(true)}
              onMouseLeave={() => setIsSmiley(false)}>
              <figure className='h-[70px] p-2 md:mb-4'>
                <FontAwesomeIcon icon={faHtml5} size='4x' className='text-gold' title='Html' />
              </figure>
              <p className='text-gold hidden md:block'>{t('about.reward3.p')}</p>
              <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>
                {isSmiley ? smiley : t('about.reward3.h5')}
              </h5>
            </div>
            <div
              className='text-center mb-4'
              onMouseEnter={() => setIsGray(true)}
              onMouseLeave={() => setIsGray(false)}>
              <figure className='h-[70px] p-2 md:mb-4'>
                <FontAwesomeIcon icon={faCss3} size='4x' className='text-gold' title='React' />
              </figure>
              <p className='text-gold hidden md:block'>{t('about.reward4.p')}</p>
              <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>
                {t('about.reward4.h5')}
              </h5>
            </div>
            <div
              className='text-center mb-4 flex flex-col items-center'
              onMouseEnter={() => setIsGray(true)}
              onMouseLeave={() => setIsGray(false)}>
              <figure className='h-[70px] p-2 md:mb-4'>
                <div
                  className='bg-gold h-[52px] w-[52px] rounded-full'
                  style={{
                    mask: `url(${tailwindCssLogo.src}) no-repeat center / contain`,
                    WebkitMask: `url(${tailwindCssLogo.src}) no-repeat center / contain`
                  }}
                />
              </figure>
              <p className='text-gold hidden md:block'>{t('about.reward5.p')}</p>
              <h5 className='text-gold hidden md:block text-xl uppercase font-semibold'>
                {t('about.reward5.h5')}
              </h5>
            </div>
            <div className='col-span-5 row-span-3 md:col-span-1 mb-10 md:mb-4 md:-mt-[100px] z-20'>
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
          <div className='line hidden lg:block lg:mt-[6px]'></div>
        </div>
      </div>
    </section>
  )
}

export default About
