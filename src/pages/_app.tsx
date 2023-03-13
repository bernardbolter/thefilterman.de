import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inconsolata, Jost } from '@next/font/google'

const inconsolata = Inconsolata({subsets: ['latin'], variable: '--font-inconsolata'})
const jost = Jost({subsets: ['latin'], variable: '--font-jost'})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inconsolata-font: ${inconsolata.style.fontFamily};
          --jost-font: ${jost.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
