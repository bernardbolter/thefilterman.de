import { useEffect, useRef } from 'react'
import * as Scroll from 'react-scroll'
import styles from './what.module.scss'

import Cali from '../../svg/cali'
import Berlin from '../../svg/berlin'
import FilterSignal from '../../svg/filterSignal'
import EmailCall from '../../svg/emailCall'

const What = ({ 
  whatOne,
  whatTwo,
  whatThree,
  whatFour,
  whatFive,
  whatSix
}) => {
  var scroller = Scroll.scroller;

  return (
    <div 
      className={styles.container}
    >
      <div className={styles.maxWidth}>
        <h1>{whatOne}</h1>
        <div className={styles.firstRow}>
          <Cali />
          <h2>{whatTwo}</h2>
        </div>
        <div className={styles.secondRow}>
          <h3>{whatThree}</h3>
          <Berlin />
        </div>
        <div className={styles.thirdRow}>
          <h4>{whatFour}</h4>
        </div>
        <div className={styles.fourthRow}>
          <div 
            className={styles.emailCall}
            onClick={() => scroller.scrollTo('contact', {
              duration: 1500,
              smooth: true,
            })}  
          >
            <EmailCall />
          </div>
          <FilterSignal />
          <h5>{whatFive}</h5>
          <h6>{whatSix}</h6>
        </div>
      </div>
    </div>
  )
}

export default What