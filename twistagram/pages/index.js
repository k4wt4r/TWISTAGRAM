import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>TwiStagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUp/>
    </div>
  )
}