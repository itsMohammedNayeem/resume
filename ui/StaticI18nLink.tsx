import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

type Props = {
  locale?: string
  href?: string
  asPath?: string
  className?: string
  children: ReactElement
}

export const StaticI18nLink = (props: Props) => {
  const { i18n } = useTranslation()
  const router = useRouter()

  // @ts-ignore
  const locale = props.locale || i18n.language || ''

  if (!locale) {
    const href = props.href || router.asPath
    return <Link {...props} href={href}></Link>
  } else {
    const href = props.href
      ? `/${locale}${props.href}`
      : router.pathname.replace('[locale]', locale)
    return <Link {...props} href={href} locale={undefined}></Link>
  }
}
