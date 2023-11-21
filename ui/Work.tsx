import { useTranslation } from 'next-i18next'
import Script from 'next/script'
import React, { useEffect } from 'react'

const Work = () => {
  const { t } = useTranslation()

  useEffect(() => {
    // @ts-ignore
    if (window && window.WOW) {
      // @ts-ignore
      var wow = new window.WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true // reset animation on end (default is true)
      })
      wow.init()
      console.log('wowinit')
    }
  }, [])

  return (
    <section className='md:container md:mx-auto'>
      <Script src='https://wowjs.uk/dist/wow.min.js' />
      <h2 id='work' className='sr-only'>
        {t('work.title')}
      </h2>
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className='relative min-h-[450px] hidden lg:block'>
          <h3 className='rotate-[270deg] whitespace-nowrap absolute text-gradient tracking-wide text-4xl font-bold uppercase top-[40%] right-[-45%]'>
            {t('me.name')}
          </h3>
        </div>
        <div className='col-span-3 dark:text-white'>
          <div className='grid gap-4 md:grid-cols-2 p-3 md:p-0'>
            <div className='history'>
              <h5 className='text-2xl text-violet font-semibold'>{t('work.title')}</h5>
              <ul>
                <li>
                  <div
                    className='wow fadeInLeftShort'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'fadeInLeftShort'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.datatrans.title')}</h3>
                      <p>{t('work.datatrans.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.datatrans.time')}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='wow fadeInLeftShort'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'fadeInLeftShort'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.balihai.title')}</h3>
                      <p>{t('work.balihai.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.balihai.time')}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='wow fadeInLeftShort'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'fadeInLeftShort'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.blackriver.title')}</h3>
                      <p>{t('work.blackriver.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.blackriver.time')}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='wow fadeInLeftShort'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'fadeInLeftShort'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.ttt.title')}</h3>
                      <p>{t('work.ttt.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.ttt.time')}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='wow slideInLeft'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'slideInLeft'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.divio.title')}</h3>
                      <p>{t('work.divio.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.divio.time')}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='wow slideInLeft'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'slideInLeft'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.liip.title')}</h3>
                      <p>{t('work.liip.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.liip.time')}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='wow slideInLeft'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'slideInLeft'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.zattoo.title')}</h3>
                      <p>{t('work.zattoo.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.zattoo.time')}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className='wow fadeInLeftShort'
                    data-wow-offset='100'
                    data-wow-duration='0.5s'
                    style={{
                      visibility: 'visible',
                      animationDuration: '0.5s',
                      animationName: 'fadeInLeftShort'
                    }}>
                    <div>
                      <h3 className='font-semibold text-lg'>{t('work.ksh.title')}</h3>
                      <p>{t('work.ksh.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.ksh.time')}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='progress-wrap'>
              <h5 className='text-2xl text-violet font-semibold'>{t('skills.title')}</h5>
              <ul id='progress'>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('skills.html')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '100%' }}>
                      <p className='sr-only'>100%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('skills.javascript')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '80%' }}>
                      <p className='sr-only'>80%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('skills.marketing')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '70%' }}>
                      <p className='sr-only'>70%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('skills.agile')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '75%' }}>
                      <p className='sr-only'>75%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('skills.photoshop')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '60%' }}>
                      <p className='sr-only'>60%</p>
                    </div>
                  </div>
                </li>
              </ul>
              <h5 className='text-2xl text-violet font-semibold mt-16'>{t('language.title')}</h5>
              <ul id='progress'>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('language.de')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '100%' }}>
                      <p className='sr-only'>100%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('language.en')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '90%' }}>
                      <p className='sr-only'>90%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('language.id')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '60%' }}>
                      <p className='sr-only'>60%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>{t('language.fr')}</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '40%' }}>
                      <p className='sr-only'>40%</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
