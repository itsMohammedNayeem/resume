import { GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import About from '@/ui/About'
import Counter from '@/ui/Counter'
import Footer from '@/ui/Footer'
import Hero from '@/ui/Hero'
import Layout from '@/ui/Layout'
import Portfolio from '@/ui/Portfolio'
import Work from '@/ui/Work'

import { getI18nPaths, i18nConfig } from '../../getI18nPaths'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Counter />
      <Portfolio />
      <Footer />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: false,
  paths: getI18nPaths()
})

export const getStaticProps = async ({ params: { locale = 'en' } }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nConfig))
    }
  }
}
