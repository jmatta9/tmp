import React, { useState } from 'react'
import Comment from './Comment'
import { FaRegCommentDots, FaRegCalendarCheck, FaShareSquare, FaFire } from 'react-icons/fa'

function Adventure() {
  const [showComment, setShowComment] = useState(false)
  return (
    <div>
      {!showComment && (
        <div className={`border-b border-[#72edfe] p-3 flex space-x-3`}>
        <div className="w-full divide-y divide-[#72edfe]">
          <div className="w-full" />
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center space-x-3">
              <div className="icon">
                <FaRegCommentDots className="text-xl" onClick={()=>setShowComment(true)} />
              </div>
              <div className="icon">
                <FaFire className="text-xl" />
              </div>
              <div className="icon">
                <FaRegCalendarCheck className="text-xl" />
              </div>
              <div className="icon">
                <FaShareSquare className="text-xl" />
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
      {showComment && (
        <Comment setShowComment={setShowComment}/>
      )}
    </div>
  )
}

export default Adventure