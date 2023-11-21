import { useTranslation } from 'next-i18next'
import React from 'react'

import { faClock, faFolder, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Counter = () => {
  const { t } = useTranslation()
  return (
    <div className='bg-gradient'>
      <section className='py-20 md:container md:mx-auto'>
        <h2 id='counter' className='sr-only'>
          {t('counter.title')}
        </h2>

        {/* <div className='grid grid-cols-3 justify-center items-center text-center text-white'>
          <div className='col px-6'>
            <h4 className='whitespace-nowrap text-6xl font-semibold'>
              <FontAwesomeIcon icon={faFolder} />
              <span
                className='ml-4'
                data-min='0'
                data-max='123'
                data-delay='5'
                data-increment='10'
                data-slno='1'>
                {t('counter.project_number')}
              </span>
            </h4>
            <h6 className='text-2xl'>{t('counter.project')}</h6>
          </div>
          <div className='col pa-6 py-sm-0'>
            <h4 className='whitespace-nowrap text-6xl font-semibold'>
              <FontAwesomeIcon icon={faClock} />
              <span
                className='ml-4'
                data-min='0'
                data-max='4567'
                data-delay='10'
                data-increment='100'
                data-slno='2'>
                {t('counter.hour_number')}
              </span>
            </h4>
            <h6 className='text-2xl'>{t('counter.hour')}</h6>
          </div>
          <div className='col px-6 py-sm-0'>
            <h4 className='whitespace-nowrap text-6xl font-semibold'>
              <FontAwesomeIcon icon={faHeart} />
              <span
                className='ml-4'
                data-min='0'
                data-max='89'
                data-delay='1'
                data-increment='10'
                data-slno='3'>
                {t('counter.clients_number')}
              </span>
            </h4>
            <h6 className='text-2xl'>{t('counter.clients')}</h6>
          </div>
        </div> */}
      </section>
    </div>
  )
}

export default Counter
