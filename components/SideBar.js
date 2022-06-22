import React from 'react'
import Image from 'next/image'
import { MapIcon } from "@heroicons/react/solid"
import {
  //HashtagIcon,
  //BellIcon,
  SearchIcon,
  InboxIcon,
  BookmarkIcon,
  //ClipboardListIcon,
  UserIcon,
  //DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline"
import SideBarLink from './SideBarLink'

function SideBar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-center xl:w-[360px] p-2 fixed h-full">
      <div className="flex bg-[#FFFF33] items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-20">
        <Image src="https://cdn-icons-png.flaticon.com/512/281/281517.png" width={30} height={30} />
      </div>
      <div className="space-x-2.5 mt-4 mb-2.5 xl:ml-20">
        <SideBarLink text="The Mountain Plan" Icon={MapIcon} active />
        <SideBarLink text="Explore" Icon={SearchIcon} />
        <SideBarLink text="Messages" Icon={InboxIcon} />
        <SideBarLink text="Favorites" Icon={BookmarkIcon} />
        <SideBarLink text="Profile" Icon={UserIcon} />
        <SideBarLink text="More" Icon={DotsHorizontalIcon} />
        <button className="hidden xl:flex items-center justify-center space-x-3 border-2 border-white text-[#FFFF33] w-60 h-[58px] text-lg font-bold hover:bg-[#72edfe] hover:border-[#ec058e] hover:text-[#ec058e]">
          New Adventure
        </button>
      </div>
      <div className="text-white flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-auto"
        //onClick={signOut}
        >
        <img
          //src={session.user.image}
          src='https://lh3.googleusercontent.com/ogw/ADea4I7rslVwqHV5lC9Pf82Wb-efP61DheAUz0Ic2E7eIw=s32-c-mo'
          className="h-10 w-10 xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Jason Matta{//session.user.name
          }</h4>
          <p className="text-white">@JasonMatta{//session.user.tag
          }</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}

export default SideBar


//<SideBarLink text="Lists" Icon={ClipboardListIcon} />
//<SideBarLink text="Notifications" Icon={BellIcon} />