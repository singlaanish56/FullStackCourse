import React from 'react'

const Notification = ({ message , setMessage}) => {
    if (message === null) {
      return null
    }
    else{
        setTimeout(()=>{
            setMessage('')
        }, 8000)
    }
    return (
      <div className={message===''?null:'notif'}>
        {message}
      </div>
    )
  }

export default Notification