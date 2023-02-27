import Link from 'next/link'

import Instagram from '../../svg/instagram'
import Snapchat from '../../svg/snapchat'
import TikTok from '../../svg/tik-tok'

import styles from './socials.module.scss'

const Socials = () => {
  return (
    <div className={styles.container}>
      <Link href="">
        <Instagram />
      </Link>
      <Link href="">
        <Snapchat />
      </Link>
      <Link href="">
        <TikTok />
      </Link>
    </div>
  )
}

export default Socials