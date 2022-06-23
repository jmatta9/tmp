import { FaMountain } from 'react-icons/fa'
import React from 'react'
import Adventure from './Adventure'

function Feed() {
  return (
    <div className="flex-grow  max-w-3xl sm:ml-[72px] xl:ml-[400px]">
      <div className="text-white flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-[#051014] border-b border-[#72edfe]">
        <h2 className="text-lg am:text-xl font-bold">Base Camp</h2>
        <div className="flex items-center justify-center xl:px-0 ml-auto">
          <FaMountain className="h-5 text-2xl"/>
        </div>
      </div>
      <Adventure />
    </div>
  )
}

export default Feed