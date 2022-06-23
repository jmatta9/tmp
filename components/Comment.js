import React, { useState, useRef } from 'react'
import { HiX, HiOutlinePhotograph, HiOutlineEmojiHappy } from 'react-icons/hi'
import { FaRegComment } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

function Comment({ setShowComment }) {
  const [comment, setComment] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showEmojis, setShowEmojis] = useState(false)
  const filePickerRef = useRef(null)

  function sendComment() {
    if (loading) return
    setLoading(true)


  }

  function handleChange(e) {
    setComment(e.target.value)
  }

  function emojiClick(e, emojiObject) {
    setComment(comment + emojiObject.emoji)
  };

  function addImage(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
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
        <div className={`${comment && "space-y-2.5"}`}>
          <textarea
            value={comment}
            id="comment"
            rows="2"
            placeholder="Comment..."
            className="bg-transparent outline-none text-white text-lg tracking-wide placeholder-[#72edfe] w-full min-h-[50px] overflow-visible"
            onChange={handleChange}
          />
          {selectedFile && (
            <div className="flex items-center justify-center w-full">
            <div className="relative">
              <div id='x' className="absolute text-white hover:text-[#ec058e] w-8 h-8 bg-opacity-100 flex items-center justify-center top-1 left-1 cursor-pointer" onClick={()=>setSelectedFile(null)}>
              <HiX className="h-5"/>
              </div>
              <img
                src={selectedFile}
                alt=""
                className="max-h-80 object-contain"
              />
            </div>
            </div>
          )}

        <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center space-x-3 w-full">
              <div className="icon">
                <FaRegComment className="text-xl" onClick={()=>setShowComment(false)}/>
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
                    className="inline border w-36 h-10 border-[#ec058e] text-white px-4 py-1.5 font-bold disabled:opacity-50 disabled:cursor-default hoverAnimation hover:bg-[#72edfe]"
                    disabled={!comment.trim() && !selectedFile}
                  >Full Send</button>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comment