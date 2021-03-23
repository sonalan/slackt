import React from 'react'

function Message({ message, userName, userPic,timeStamp, isDeleted}) {
  return (
    <div>
        {message}
    </div>
  )
}

export default Message
