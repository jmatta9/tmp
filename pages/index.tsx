import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  const [newAdventure, setNewAdventure] = useState(false)
  return (
    <div className="">
      <Head>
        <title>TMP</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1020/1020566.png" />
      </Head>
      <main className="bg-[#051014] min-h-screen flex max-w-[1500px] mx-auto">
        <SideBar newAdventure={newAdventure} setNewAdventure={setNewAdventure} />
        <Feed newAdventure={newAdventure} setNewAdventure={setNewAdventure} />
        {/* <widgets /> */}
        {/* <model /> */}
      </main>
    </div>
  )
}

export default Home
