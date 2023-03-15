import Head from 'next/head'

import Hero from '../components/hero/hero'
import What from '../components/what/what'
import Filters from '../components/filters/filters'
import People from '../components/people/people'
import Awards from '../components/awards/awards'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Filter Man</title>
        <meta name="description" content="The Filter Man Can." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <What />
        <Filters />
        <People />
        <Awards />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
