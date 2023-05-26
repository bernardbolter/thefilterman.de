import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { NextSeo } from 'next-seo'

import Nav from '../components/Nav/Nav'
import Hero from '../components/hero/hero'
import What from '../components/what/what'
import Filters from '../components/filters/filters'
import People from '../components/people/people'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'

import t from '../data/en/common.json'
import filterText from '../data/en/filters.json'

export default function Home() {
    const [siteLoaded, setSiteLoaded] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
        const onPageLoad = () => {
          console.log('page loaded');
          setSiteLoaded(true)
        };
    
        if (document.readyState === 'complete') {
          onPageLoad();
        } else {
          window.addEventListener('load', onPageLoad, false);
          return () => window.removeEventListener('load', onPageLoad);
        }
      }, []);

    return (
        <>
        <NextSeo
            title={t.title}
            description={t.description}
            keywords={t.keywords}
        />
            {siteLoaded ? (
                <main>
                    <Nav 
                        page={router.pathname}
                    />
                    <Hero 
                        seeMore={t.seeMore}
                        learnMore={t.learnMore}
                    />
                    <What
                        whatOne={t.whatOne}
                        whatTwo={t.whatTwo}
                        whatThree={t.whatThree}
                        whatFour={t.whatFour}
                        whatFive={t.whatFive}
                        whatSix={t.whatSix}
                        whatSeven={t.whatSeven}
                    />
                    <Filters 
                        filterTranslations={filterText} 
                        filtersTitle={t.filtersTitle}
                    />
                    <People />
                    <Contact 
                        tellFilter={t.tellFilter}
                    />
                    <Footer />
                </main>
            ) : (
                <div className="loading-container">
                    <h2>The Filter Man</h2>
                    <h2>is loading.....</h2>
                </div>
            )}
        </>
    )
}