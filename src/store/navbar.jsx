import React from 'react'

const navbar = () => {
  return (
    <div className=''>
        <h1 className='text-red-600 flex justify-center'>ReelState</h1>
        <div>
            <button>Sign In</button>
            <button className='bg-red-600'>Sign Up</button>
        </div>
    </div>
  )
}

export default navbar