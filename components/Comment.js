import React, { useState, useRef, useEffect } from 'react'
import { HiX, HiOutlinePhotograph, HiOutlineEmojiHappy } from 'react-icons/hi'
import { FaRegComment, FaRegCalendarCheck, FaShareSquare } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

function Comment({ setShowComment }) {
  const [comment, setComment] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const filePickerRef = useRef(null)

  function handleChange(e) {
    setComment(e.target.value)
  }

  function handleClick(e) {
    if(e.target.id === 'x') {
      setSelectedFile(null);
    }
  }

  function emojiClick(e, emojiObject) {
    setComment(comment + emojiObject.emoji)
  };

  function addImage() {

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
          <textarea
            value={comment}
            id="comment"
            rows="2"
            placeholder="Comment..."
            className="bg-transparent outline-none text-white text-lg tracking-wide placeholder-[#72edfe] w-full min-h-[50px] overflow-visible"
            onChange={handleChange}
          />
          {selectedFile && (
            <div className="relative">
              <div id='x' className="absolute w-8 h-8 hover:bg-[#39ff14] bg-opacity-100 flex items-center justify-center top-1 left-1 cursor-pointer" onClick={handleClick}>
              <HiX className="text-white h-5"/>
                <img
                  src={selectedFile}
                  alt=""
                  className="rounded-2xl max-h-80 object-contain"
                  />
              </div>
            </div>
          )}

        <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center space-x-3 w-full">
              <div className="icon">
                <FaRegComment className="text-xl" onClick={()=>setShowComment(false)}/>
              </div>

              <div className="icon">
                <FaRegCalendarCheck className="text-xl" />
              </div>
              <div className="icon">
                <FaShareSquare className="text-xl" />
              </div>
              <div id="addImage" className="icon" onClick={() => filePickerRef.current.click()}>
                <HiOutlinePhotograph className="text-2xl" />
                <input hidden type="file" onChange={addImage} ref={filePickerRef} />
              </div>
              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <HiOutlineEmojiHappy className="text-2xl" />
              </div>
                {showEmojis && (
                  <Picker
                  onEmojiClick={emojiClick}
                    disableSkinTonePicker={true}
                    searchPlaceholder={'Search...'}
                    pickerStyle={{
                      position: "absolute",
                      marginTop: "380px",
                      marginLeft: -56,
                      maxWidth: "320px",
                      borderRadius: "0px",
                    }}
                  />
                  )}
                  <div className="flex w-full justify-end">
                  <button
                    className="inline border w-36 h-10 border-[#ec058e] text-white px-4 py-1.5 font-bold disabled:opacity-50 disabled:cursor-default hoverAnimation"
                    disabled={!comment.trim() && !selectedFile}
                  >Full Send</button>
                  </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Comment