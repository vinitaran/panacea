import Head from 'next/head'
import Image from 'next/image'
import EmailButton from '../components/EmailButton'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="mainBody"> 
      <Head>
        <title>PANACEA 2021</title>
        <meta name="description" content="Asia Asexuality Conference 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Panacea</h1>
      
      <EmailButton />
      <Logo />
      
    </div>
  )
}
