import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import { type Portfolio as PortfolioType, getPortfolio } from '@/lib/portfolio'
import {
  faCss3,
  faEmber,
  faHtml5,
  faJs,
  faMagento,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faSymfony,
  faWordpress,
  faYahoo
} from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconObjectType = {
  [key: string]: IconDefinition
}

const techIcons: IconObjectType = {
  php: faPhp,
  js: faJs,
  node: faNodeJs,
  ember: faEmber,
  mysql: faDatabase,
  rrd: faDatabase,
  magento: faMagento,
  symfony: faSymfony,
  yui: faYahoo,
  python: faPython,
  wordpress: faWordpress,
  react: faReact,
  css: faCss3,
  html: faHtml5
}

const Portfolio = () => {
  const { t } = useTranslation()

  const portfolio: PortfolioType[] = getPortfolio()

  return (
    <section className='py-20 md:container md:mx-auto'>
      <h2 id='portfolio' className='sr-only'>
        {t('portfolio.title')}
      </h2>
      <div className='title-main'>
        <h4>
          {t('portfolio.subtitle1')}
          <strong className='ml-2'>{t('portfolio.subtitle2')}</strong>
        </h4>
      </div>
      <div>
        {/* <div className='filter'>
          <button className='btn bg-gradient waves-effect selected' data-filter='all'>
            All
          </button>
          <button className='btn bg-gradient waves-effect' data-filter='cat1'>
            Category 1
          </button>
        </div> */}
        {portfolio && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map((item: PortfolioType, i) => (
              <div
                key={i}
                className={clsx('relative min-h-[240px]', item.clsx, {
                  'lg:row-span-2': item?.clsx === 'long',
                  'lg:col-span-2': item?.clsx === 'wide'
                })}
                style={{ transitionDuration: `${i * 0.125}s` }}>
                <div className='flex img-thumb m-0 h-full w-full'>
                  <div
                    className='inline-block h-full w-full'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: `url(../images/${item.image})`
                    }}
                  />
                  <div className='absolute detail transition duration-150 ease-out hover:ease-in h-full w-full bottom-0 opacity-0 flex flex-col justify-center p-4'>
                    <h3 className='relative text-xl mb-4 text-bordeaux'>{item.title}</h3>
                    {item.tech && (
                      <div className='text-violet relative'>
                        {item.tech.map((tech: string) => (
                          <div className='group inline-block relative mr-2' key={`${i}-${tech}`}>
                            <FontAwesomeIcon
                              data-tooltip-target={`${i}-${tech}`}
                              icon={techIcons[tech as keyof IconObjectType]}
                              size='2x'
                              title={tech}
                            />
                            <span
                              className='z-10 group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 bottom-full
                          -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto whitespace-nowrap'>
                              {t(`portfolio.tech.${tech}`)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noreferrer'
                      className='text-bordeaux relative text-lg'>
                      {item.url}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
