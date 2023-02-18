import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Code_Pro } from '@next/font/google'

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '900'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceCodePro.className}>
      <Component {...pageProps} />
    </main>
  )
}
