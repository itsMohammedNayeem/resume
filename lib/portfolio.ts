export type PageProps = {
  params?: any
  children?: React.ReactNode
}
export type Portfolio = {
  title: string
  image: string
  url: string
  tech?: Array<string>
  clsx?: string
}

export const getPortfolio = (): Portfolio[] => [
  {
    title: 'Zattoo 2008',
    image: 'zattoo.png',
    url: 'zattoo.ch',
    tech: ['php', 'js', 'rrd']
  },
  {
    image: 'jungfrau.png',
    title: 'Jungfraubahnen Online-Shop',
    url: 'shop.jungfrau.ch',
    tech: ['magento', 'php', 'js', 'mysql']
  },
  {
    image: 'raiffeisen.png',
    title: 'Raiffeisen MemberPlus',
    url: 'memberplus.raiffeisen.ch',
    tech: ['magento', 'php', 'js', 'mysql']
  },
  {
    image: 'nzz.png',
    title: 'NZZ',
    url: 'webpaper.nzz.ch',
    tech: ['yui']
  },
  {
    image: 'schild.png',
    title: 'SCHILD',
    url: 'schild.ch',
    tech: ['magento', 'php', 'js', 'mysql']
  },
  {
    image: 'zkb.png',
    title: 'Zürcher Kantonalbank',
    url: 'zkb.ch',
    tech: ['css', 'html']
  },
  {
    image: 'fanpictor.webp',
    title: 'Fanpictor',
    url: 'fanpictor.com',
    clsx: 'wide',
    tech: ['ember']
  },
  {
    image: 'salt.png',
    title: 'Orange - SALT',
    url: 'salt.ch',
    clsx: 'long',
    tech: ['python', 'css', 'html', 'js']
  },
  {
    image: 'balihai.png',
    title: 'Preqin Group',
    url: 'balihaicruises.com',
    tech: ['wordpress', 'css', 'html', 'js']
  },
  {
    image: 'pciproxy.jpg',
    title: 'PCI Proxy',
    url: 'pci-proxy.com',
    tech: ['node', 'react']
  }
]
