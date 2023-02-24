import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inconsolata, Montserrat } from '@next/font/google'

const inconsolata = Inconsolata({
  subsets: ['latin']
})
const montserrat = Montserrat({
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inconsolata.className} ${montserrat.className}`}>
      <style jsx global>{`
        :root {
          --inconsolata-font: ${inconsolata.style.fontFamily};
          --montserat-font: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  )
}
