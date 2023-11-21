import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@/context/ThemeContext'
// Import the CSS
import '@/styles/animations.css'
import '@/styles/globals.css'
import '@/styles/profile.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default appWithTranslation(App)
