import { useState, useEffect } from 'react'
import { useWindowSize } from '@/helpers/useWindowSize'

import styles from './filters.module.scss'
import filters from '../../data/filters.json'

import SparkAR from '../../svg/sparkAR'
import Instagram from '../../svg/instagram'

const Filter = ({filter, even} ) => {
  const src = `https://www.thefilterman.de/videos/filterman/${filter.video_slug}/${filter.video_slug}.mp4`
  const posterSrc = `https://www.thefilterman.de/videos/filterman/${filter.video_slug}/${filter.video_slug}.png`
  const qrSrc = `https://www.thefilterman.de/videos/filterman/fm-test_qr.png`
  const size = useWindowSize()

  return (
    <div
      className={styles.filterContainer}
      style={{
        flexDirection: size.width < 800 ? 'column' : even ? 'row' : 'row-reverse'
      }}
    >
      <div className={styles.video}>
        <video 
          src={src} 
          controls 
          poster={posterSrc}
          autoPlay
          loop
          muted
        >
          <p>Sorry, your browser doesn&apos;t support embedded videos</p>
        </video>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{filter.title}</h2>
        <div 
          className={styles.descriptionContainer}
          style={{
            borderBottomLeftRadius: even ? 40 : 10,
            borderBottomRightRadius: even ? 10 : 40,
            borderTopLeftRadius: even ? 0 : 40,
            borderTopRightRadius: even ? 40 : 0
          }}
        >
          <p className={styles.description}>{filter.description}</p>
        </div>
        <div 
          className={styles.filterLinks} 
        >
          <div className={styles.insta}>
            <Instagram />
          </div>
          <div className={styles.spark}>
            <SparkAR />
          </div>
          <div className={styles.qrCode}>
            <img src={qrSrc} alt={`QR code to see ${filter.title}`} />
            <p>Check it out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Filters = ({ 
    filterTranslations,
    filtersTitle  
}) => {
  const [allFilters, setAllFilters] = useState([])

  useEffect(() => {
    setAllFilters([])
    filters.map(f => {
      let newFilterObject = {...f, ...filterTranslations[f.number]}
      setAllFilters(state => [ ...state, newFilterObject ])
    })

  }, [filterTranslations])

  return (
    <div className={styles.container}>
      <h1>{filtersTitle}</h1>
      {allFilters.map((filter, i) => {
          return (
            <Filter filter={filter} key={filter.id} even={i % 2 == 0} />
          )
        }
      )}
    </div>
  )
}

export default Filters