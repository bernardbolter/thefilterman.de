import * as Scroll from 'react-scroll'
import Link from 'next/link'

import { useWindowSize } from '@/helpers/useWindowSize'
import { motion, useScroll, useTransform } from 'framer-motion'

import SuperMask from '@/svg/super-mask'
import Instagram from '@/svg/instagram'
import Snapchat from '@/svg/snapchat'
import TikTok from '@/svg/tik-tok'
import GB from '@/svg/gb'
import DE from '@/svg/de'

import styles from './nav.module.scss'

const Nav = ({ page }) => {
    console.log(page)
    const { scrollY } = useScroll()
    const size = useWindowSize()
    var scroll = Scroll.animateScroll

    const opacity = useTransform(scrollY, [size.height * .7, size.height - 80], [0,1])

    return (
        <div 
            className={styles.container}
        >
            <div 
                className={styles.logo}
                onClick={() => { 
                    scroll.scrollTo(0)
                }}
            >
                <SuperMask />
            </div>
            <motion.div 
                className={styles.title}
                style={{ opacity: opacity }}
            >
                <h1>THE FILTER MAN</h1>
            </motion.div>
            <div className={styles.socials}>
                <a href="https://instagram.com">
                    <Instagram />
                </a>
                <a href="">
                    <Snapchat />
                </a>
                <a href="">
                    <TikTok />
                </a>
            </div>
            <div className={styles.language}>
                {page === '/' ? (
                    <Link href='/de'>
                        <DE />
                    </Link>
                ): (
                    <Link href='/'>
                        <GB />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Nav