import Head from 'next/head'

import Hero from '../components/hero/hero'
import Pitch from '../components/pitch/pitch'
import Projects from '../components/projects/projects'
import About from '../components/about/about'
import Contact from '../components/contact/contact.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Filterman</title>
        <meta name="description" content="The Filter Man can." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Pitch />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
