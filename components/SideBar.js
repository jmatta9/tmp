import React from 'react'
import Image from 'next/image'
import { FaMountain, FaSkiing, FaCloudMeatball, FaFire } from 'react-icons/fa'
import { MdOutlineExplore } from 'react-icons/md'
import { BsFillBinocularsFill } from 'react-icons/bs'
import SideBarLink from './SideBarLink'

function SideBar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-center xl:w-[400px] p-2 fixed h-full">
      <div className="flex bg-[#FFFF33] items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-20">
        <Image src="https://cdn-icons-png.flaticon.com/512/281/281517.png" width={36} height={36} />
      </div>
      <div className="text-xl font-bold xl:flex items-center justify-center xl:ml-20 text-[#FFFF33] p-2">
        <span className="hidden xl:flex">The Mountain Plan</span>
        <span className="xl:hidden">TPM</span>
      </div>
      <div className="xl:ml-20 xl:items-center xl:justify-center">
        <SideBarLink text="Base Camp" Icon={FaMountain} active />
        <SideBarLink text="Scope Terrain" Icon={BsFillBinocularsFill} />
        <SideBarLink text="Smoke Signal" Icon={FaCloudMeatball} />
        <SideBarLink text="Stoked On" Icon={FaFire} />
        <SideBarLink text="Mtn Cred" Icon={FaSkiing} />
        <button className="hidden border border-[#ec058e] sm:flex sm:w-14 mt-4 items-center justify-center  text-white xl:w-60 h-[58px] text-lg font-bold hover:bg-[#72edfe] hover:border-[#ec058e] hover:text-[#ec058e]">
          <span className="sm:hidden xl:inline">New Adventure!</span>
          <span className="sm:inline xl:hidden">NA!</span>
        </button>
      </div>
      <div className="text-white flex p-2 xl:items-center xl:ml-20 xl:justify-start mt-auto hoverAnimation"
        //onClick={signOut}
        >
        <img
          //src={session.user.image}
          src='https://lh3.googleusercontent.com/ogw/ADea4I7rslVwqHV5lC9Pf82Wb-efP61DheAUz0Ic2E7eIw=s32-c-mo'
          className="w-10 xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Jason Matta{//session.user.name
          }</h4>
          <p>JasonMatta{//session.user.tag
          }</p>
        </div>
        <MdOutlineExplore className="h-8 w-8 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}

export default SideBar
