import SuperMask from '@/svg/super-mask'
import Socials from '../socials/socials'

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
        <h3>gotfilter@thefilterman.de</h3>
        <h4>impressum</h4>
        <h4>datenschutz</h4>
      </div>
      <div className={styles.links}>
        <Socials component='footer'/>
      </div>
    </div>
  )
}

export default Footer