import type { NextPage } from 'next'
import Head from 'next/head'
import TopBar from '../components/TopBar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>TTMMP</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/5/5a/" />
      </Head>
      <main className="bg-[#051014] min-h-screen flex max-w-[1500px] mx-auto">
        <TopBar />
        {/* <mainFeed /> */}
        {/* <widgets /> */}
        {/* <model /> */}
      </main>
    </div>
  )
}

export default Home
