import { useRouter } from 'next/router'
import React from 'react'

function SideBarLink({ Icon, text, active }) {
  const router = useRouter();
  return (
    <div
    className={`text-white flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
      active && "font-bold text-[#FFFF33]"
    }`}
    onClick={() => active && router.push("/")}
  >
    <Icon className="h-8" />
    <span className="hidden xl:inline">{text}</span>
  </div>
  )
}

export default SideBarLink