import React from 'react'

const Error = ({status, title, message}) => {
  return (
     <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-red-600">{status +" - " + title}</h1>
      <p className="mt-4">{message}</p>
    </div>
  )
}

export default Error;
