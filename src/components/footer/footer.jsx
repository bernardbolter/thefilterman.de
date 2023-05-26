import Link from 'next/link'

import SuperMask from '@/svg/super-mask'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.maskContainer}>
          <SuperMask />
          <div className={styles.maskBack} />
          </div>     
        <h1>THE FILTER MAN</h1>
      </div>
      <div className={styles.contact}>
        <h5>CONTACT</h5>
        <h3>savetheday@thefilterman.de</h3>
      </div>
      <div className={styles.impress}>
        <Link href={"/impressum"}>impressum</Link>
        <Link href={"/datenschutz"}>datenschutz</Link>
      </div>
    </div>
  )
}

export default Footer