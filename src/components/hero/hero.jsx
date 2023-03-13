import { useState, useEffect, useRef } from 'react'

import Logo from '../logo/logo'
import Socials from '../socials/socials'

import styles from './hero.module.scss'

const Hero = () => {
    const maskRef = useRef()
    const [showPhone, setShowPhone] = useState(false)
    const [phoneX, setPhoneX] = useState(0)
    const [phoneY, setPhoneY] = useState(0)

    useEffect(() => {
        window.addEventListener('pointermove', handleCursorMove)

        return () => window.removeEventListener('pointermove', handleCursorMove)
    })

    const handleCursorMove = pos => {
        let x = pos.clientX / window.innerWidth * 100
        let y = pos.clientY / window.innerHeight * 100

        let phoneOffsetX
        let phoneOffsetY

        let phoneWidth = 85
        let phoneHeight = 170


        if (pos.clientX > window.innerWidth / 2) {
            let xOffsetMore = ((pos.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2)) * phoneWidth
            phoneOffsetX = xOffsetMore + phoneWidth
        } else {
            let xOffsetLess = (pos.clientX / (window.innerWidth / 2)) * phoneWidth
            phoneOffsetX = xOffsetLess
        }

        if (pos.clientY > window.innerHeight / 2) {
            let yOffsetMore = ((pos.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2) )* phoneHeight
            phoneOffsetY = yOffsetMore + phoneHeight
        } else {
            let yOffsetLess = (pos.clientY / (window.innerHeight / 2)) * phoneHeight
            phoneOffsetY = yOffsetLess
        }

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
                  src="/phone_l.png" 
                  alt="phone case" 
                  style={{ 
                      transform: `translate(${phoneX}px, ${phoneY}px)`,
                      top: "0",
                      left: "0"
                  }}    
                />
              </div>
            )}
            <div 
                className={showPhone ? `${styles.colorful} ${styles.mask} ${styles.name}` : `${styles.colorful} ${styles.name}`}
                ref={maskRef}
                style={{
                    zIndex: showPhone ? 102 : 100
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
            <div 
                className={styles.showPhoneButton}
                onClick={() => setShowPhone(!showPhone)}
            >
                <h4>see more...</h4>
            </div>
        </section>
    )
}

export default Hero