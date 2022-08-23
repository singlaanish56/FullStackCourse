import React from 'react'

const Error = ({ error , setError}) => {
    if (error === null) {
      return null
    }
    else{
        setTimeout(()=>{
            setError('')
        }, 8000)
    }
    return (
      <div className={error===''?null:'error'}>
        {error}
      </div>
    )
  }

export default Error