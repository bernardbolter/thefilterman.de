import { useState, useEffect, useRef } from "react"

import Phone from '../../svg/phone'
import styles from './hero.module.scss'

const Hero = () => {
    const maskRef = useRef()
    const [showPhone, setShowPhone] = useState(false)

    useEffect(() => {
        window.addEventListener('pointermove', handleCursorMove)

        return () => window.removeEventListener('pointermove', handleCursorMove)
    })

    const handleCursorMove = pos => {
        // console.log(pos)
        let x = pos.clientX / window.innerWidth * 100
        let y = pos.clientY / window.innerHeight * 100

        maskRef.current.style.setProperty('--mouse-x', x + '%')
        maskRef.current.style.setProperty('--mouse-y', y + '%')
    }

    return (
        <section className={styles.container}>
            {showPhone && (
                <div className={styles.phone}>
                    {/* <Phone /> */}
                </div>
            )}
            <div 
                // className={showPhone ? `${styles.colorful} ${styles.mask}` : `${styles.colorful}`}
                className={showPhone ? `${styles.colorful} ${styles.mask}` : `${styles.colorful}`}
                ref={maskRef}
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
                <div 
                    className={styles.showPhoneButton}
                    onClick={() => setShowPhone(!showPhone)}
                >
                    <h4>see more...</h4>
                </div>
            </div>
        </section>
    )
}

export default Hero