import React from 'react';

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 font-bold cursor-pointer'>MOVIES</h1>
      <div>
        <button className='text-white pr-5'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar