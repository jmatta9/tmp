import React from 'react'
import Image from 'next/image'

function TopBar() {
  return (
    <div className="hidden sm:flex flex-row items-start xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex bg-[#FFFF33] items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Mountain_Icon.svg" width={30} height={30} />
      </div>
      <div className="color ">
        Mountain Plan  
      </div>
    </div>
  )
}

export default TopBar