import React from 'react'

function Spineer() {
  return (
    <div className='flex flex-col justify-center items-center space-y-2'>
      <div className='spinner'></div>
      <p className='text-bgDark text-lg font-semibold' >Loading...</p>
    </div>
  )
}

export default Spineer