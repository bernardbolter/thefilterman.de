import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inconsolata, Jost, Caveat } from '@next/font/google'

const inconsolata = Inconsolata({subsets: ['latin'], variable: '--font-inconsolata'})
const jost = Jost({subsets: ['latin'], variable: '--font-jost'})
const caveat = Caveat({ subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inconsolata-font: ${inconsolata.style.fontFamily};
          --jost-font: ${jost.style.fontFamily};
          --caveat-font: ${caveat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
