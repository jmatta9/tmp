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
      </div>
    </div>
  )
}

export default SideBar


//<SideBarLink text="Lists" Icon={ClipboardListIcon} />
//<SideBarLink text="Notifications" Icon={BellIcon} />