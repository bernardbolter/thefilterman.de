import { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../../helpers/useWindowSize'

import Logo from '../logo/logo'
import Socials from '../socials/socials'

import styles from './hero.module.scss'
import filterStyles from '../../data/filterStyles'

const Hero = () => {
    const maskRef = useRef()
    const size = useWindowSize()
    const [showPhone, setShowPhone] = useState(false)
    const [phoneX, setPhoneX] = useState(0)
    const [phoneY, setPhoneY] = useState(0)
    const [phoneWidth, setPhoneWidth] = useState(0)
    const [phoneHeight, setPhoneHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('pointermove', handleCursorMove)

        return () => window.removeEventListener('pointermove', handleCursorMove)
    })

    useEffect(() => {
      if (size.width < 769) {
        setPhoneWidth(187)
        setPhoneHeight(338)
      } else {
        setPhoneWidth(245)
        setPhoneHeight(460)
      }
    }, [size])

    const handleCursorMove = pos => {
        let x = pos.clientX / window.innerWidth * 100
        let y = pos.clientY / window.innerHeight * 100

        let phoneOffsetX = (pos.clientX / size.width) * phoneWidth
        let phoneOffsetY = (pos.clientY / size.height) * phoneHeight

        setPhoneX(pos.clientX - phoneOffsetX)
        setPhoneY(pos.clientY - phoneOffsetY)

        maskRef.current.style.setProperty('--mouse-x', x + '%')
        maskRef.current.style.setProperty('--mouse-y', y + '%')
    }

    return (
        <section className={styles.container}>
          <Logo />
          <Socials />
            {showPhone && (
              <div className={styles.phone}>
                <img 
                  src={size.width < 769 ? "/phone_l.png" : "/phone-mask_xl.png"}
                  alt="phone case" 
                  style={{ 
                      transform: `translate(${phoneX}px, ${phoneY}px)`,
                      top: -5,
                      left: 0
                  }}
                  onClick={() => showPhone ? setShowPhone(false) : null}   
                />
              </div>
            )}
            <div 
                className={showPhone ? `${styles.colorful} ${styles.mask} ${styles.name} ${styles.textStyle}` : `${styles.colorful} ${styles.name} ${styles.textStyle}`}
                ref={maskRef}
                style={{ zIndex: showPhone ? 102 : 100,
                  ...filterStyles[0] 
                }}
            >
              <h1>
                <span className={styles.the}>THE</span>
                <span className={styles.fil}>FIL</span>
                <span className={styles.ter}>TER</span>
                <span className={styles.man}>MAN</span>
              </h1>
            </div>
            <div 
                className={`${styles.plain} ${styles.name}`}
            >
              <h1>
                <span className={styles.the}>THE</span>
                <span className={styles.fil}>FIL</span>
                <span className={styles.ter}>TER</span>
                <span className={styles.man}>MAN</span>
              </h1>
            </div>
            <div className={styles.showPhoneButton} >
                <h4
                  onClick={() => {
                    showPhone
                    ? window.scrollTo({top: size.height, behavior: 'smooth'})
                    : setShowPhone(!showPhone) 
                  }}
                >{showPhone ? 'learn more...' : 'see more...'}</h4>
            </div>
        </section>
    )
}

export default Hero