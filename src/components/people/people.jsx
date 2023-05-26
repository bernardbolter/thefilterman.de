import { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../../helpers/useWindowSize'

import MapSignal from '../../svg/mapSignal'

import styles from './people.module.scss'

const People = () => {
    const signalRef = useRef(null)
    const size = useWindowSize()
    const [signalX, setSignalX] = useState(0)
    const [signalY, setSignalY] = useState(0)
  
    useEffect(() => {
      window.addEventListener('pointermove', handleMapMove)
    
      return () => window.removeEventListener('pointermove', handleMapMove)
    })
  
    const handleMapMove = pos => {
      let mapX = pos.clientX / (size.width / 2)
      let mapY = pos.clientY / (size.height / 2)

      setSignalX(mapX * 200)
      setSignalY(mapY * 200)
    }
    return (
        <div className={styles.container}>
            <div 
                className={styles.theSignal}
                ref={signalRef}
                style={{
                    transform: `translate(${signalX}%, ${signalY}%)`
                }}    
            >
                <MapSignal />  
                <div className={styles.signalShadow} /> 
            </div>
            <img
                className={styles.map}
                src="/grey_map.png"
                alt="map of Berlin"
            />
        </div>
    )
}

export default People