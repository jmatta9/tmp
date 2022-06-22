import React from 'react'

function Comment() {
  return (
    <div className={`border-b border-[#39ff14] p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${
      loading && "opacity-60"
    }`}>
      <img
        src=""//{session.user.image}
        alt=""
        className="h-11 w-11 cursor-pointer"
        //onClick={signOut}
      />
      </div>
  )
}

export default Comment