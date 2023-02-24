import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Azeret_Mono } from '@next/font/google'

const azeretMono = Azeret_Mono({
  weight: ['400', '900'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={azeretMono.className}>
      <Component {...pageProps} />
    </main>
  )
}
