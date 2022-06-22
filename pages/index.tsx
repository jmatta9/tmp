import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>TMP</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1020/1020566.png" />
      </Head>
      <main className="bg-[#051014] min-h-screen flex max-w-[1500px] mx-auto">
        <SideBar />
        {/* <mainFeed /> */}
        {/* <widgets /> */}
        {/* <model /> */}
      </main>
    </div>
  )
}

export default Home
