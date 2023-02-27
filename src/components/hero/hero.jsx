import { useState, useEffect, useRef } from "react"

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
        // console.log(pos)
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
            {/* <img 
                src="/brandenburger-tor-1899-og_xl.jpg"
                className={showPhone ? `${styles.plain} ${styles.mask}` : `${styles.plain}`} 
                ref={maskRef}
            />
            <img src="/brandenburger-tor-1899_xl.jpg"
                className={styles.colorful}
            />
            <img src="/phone-mask_l.png" /> */}
            <div 
                className={showPhone ? `${styles.colorful} ${styles.mask}` : `${styles.colorful}`}
                ref={maskRef}
                style={{
                    zIndex: showPhone ? 102 : 100
                }}
            >
                <h1 className={styles.the}>THE</h1>
                <h1 className={styles.fil}>FIL</h1>
                <h1 className={styles.ter}>TER</h1>
                <h1 className={styles.man}>MAN</h1>
            </div>
            <div 
                className={styles.plain}
            >
                <h1 className={styles.the}>THE</h1>
                <h1 className={styles.fil}>FIL</h1>
                <h1 className={styles.ter}>TER</h1>
                <h1 className={styles.man}>MAN</h1>

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