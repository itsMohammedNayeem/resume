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
          <h3 className='rotate-[270deg] whitespace-nowrap absolute text-gradient tracking-wide text-4xl font-bold uppercase top-[40%] right-[-30%]'>
            {t('me.name')}
          </h3>
        </div>
        <div className='col-span-3 dark:text-white'>
          <div className='grid gap-4 md:grid-cols-2 p-6 pt-0 md:p-0'>
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
                      <h3 className='font-semibold text-lg'>{t('work.planet.title')}</h3>
                      <p>{t('work.planet.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.planet.time')}</p>
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
                      <h3 className='font-semibold text-lg'>{t('work.preqin.title')}</h3>
                      <p>{t('work.preqin.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.preqin.time')}</p>
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
                      <h3 className='font-semibold text-lg'>{t('work.wipro.title')}</h3>
                      <p>{t('work.wipro.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.wipro.time')}</p>
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
                      <h3 className='font-semibold text-lg'>{t('work.itc.title')}</h3>
                      <p>{t('work.itc.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.itc.time')}</p>
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
                      <h3 className='font-semibold text-lg'>{t('work.time.title')}</h3>
                      <p>{t('work.time.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.time.time')}</p>
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
                      <h3 className='font-semibold text-lg'>{t('work.hcl.title')}</h3>
                      <p>{t('work.hcl.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.hcl.time')}</p>
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
                      <h3 className='font-semibold text-lg'>{t('work.mindtree.title')}</h3>
                      <p>{t('work.mindtree.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.mindtree.time')}</p>
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
                      <h3 className='font-semibold text-lg'>{t('work.infy.title')}</h3>
                      <p>{t('work.infy.company')}</p>
                      <p className='text-bordeaux dark:text-gold'>{t('work.infy.time')}</p>
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
                      style={{ width: '85%' }}>
                      <p className='sr-only'>85%</p>
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
                    <h5 className='font-semibold text-lg'>{t('skills.state')}</h5>
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
                    <h5 className='font-semibold text-lg'>{t('skills.api')}</h5>
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
                {/* <li>
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
                </li> */}
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
                    <h5 className='font-semibold text-lg'>Kannada</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '100%' }}>
                      <p className='sr-only'>90%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='text-icon'>
                    <i className='ion-wand'></i>
                    <h5 className='font-semibold text-lg'>Hindi</h5>
                  </div>
                  <div className='relative'>
                    <div className='rounded-md bg-gold opacity-40 w-full h-full absolute'></div>
                    <div
                      className='bg-gradient rounded-md h-5 transition-[width]'
                      style={{ width: '100%' }}>
                      <p className='sr-only'>90%</p>
                    </div>
                  </div>
                </li>
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
