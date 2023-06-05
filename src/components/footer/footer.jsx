import Socials from '../socials/socials'
import SuperMask from '@/svg/super-mask'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.logoContainer}>
          <SuperMask />
          <div className={styles.logoBackground} />
        </div>
        <h1>The Filter Man</h1>        
      </div>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <h2>gotfilter@thefilterman.de</h2>
        <h2 onClick={() => setShowImpressium(true)}>Immpressium</h2>
        <h2 onClick={() => setShowDaten(true)}>Datenschutz</h2>
      </div>
      <div className={styles.socials}>
        <Socials where="footer"/>
      </div>
    </div>
  )
}

export default Footer