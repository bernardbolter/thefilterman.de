import languageDetector from '../../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'

import GB from '@/svg/gb'
import DE from '@/svg/de'

const ChangeLang = ({ locale, ...rest }) => {
    const router = useRouter()

    let href = rest.href || router.asPath
    let pName = router.pathname

    Object.keys(router.query).forEach((k) => {
        console.log(k)
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, locale)
          return
        }
        pName = pName.replace(`[${k}]`, router.query[k])
      })
      if (locale) {
        href = rest.href ? `/${locale}${rest.href}` : pName
      }
  
      return (
        <Link
          href={href}
          onClick={() => {
            console.log(languageDetector.cache())
            languageDetector.cache(locale)
          }}
        >
          <h1>Change</h1>
          {/* {i18n.lng === 'de' ? <GB /> : <DE />} */}
        </Link>
      );

}

export default ChangeLang