import Register from '@/Components/Dashboard/Register/Register'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const register = () => {
  return <>
  <Register/>
  </>
}

export default register


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
      },
    }
  }
  
