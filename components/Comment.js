import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'


function Comment() {
  const [comment, setComment] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  function handleChange(e) {
    setComment(e.target.value);
  }
  function handleClick(e) {
    if(e.target.id === 'x') {
      setSelectedFile(null);
    }

  }
  return (
    <div className={`border-b border-[#72edfe] p-3 flex space-x-3`}>
      <img
        src=""//{session.user.image}
        alt=""
        className="h-11 w-11 cursor-pointer"
        //onClick={signOut}
      />
      <div className="w-full divide-y divide-[#72edfe]">
        <div>
          <textarea
            value={comment}
            id="comment"
            rows="2"
            placeholder="Comment..."
            className="bg-transparent outline-none text-white text-lg tracking-wide placeholder-[#39ff14] w-full min-h-[50px]"
            onChange={handleChange}
          />
          {selectedFile && (
            <div className="relative">
              <div id='x' className="absolute w-8 h-8 hover:bg-[#39ff14] bg-opacity-75 flex items-center justify-center top-1 left-1 cursor-pointer" onClick={handleClick}>
              <HiX className="text-white h-5"/>
                <img
                  src={selectedFile}
                  alt=""
                  className="rounded-2xl max-h-80 object-contain"
                  />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Comment


//from top div overflow-y-scroll scrollbar-hide