import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Stay in the Loop!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>Your pass to the latest blogs, tech drops, and exclusive insider stories.</p>
        <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
            <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your Email ID' required />
            <button type='submit' className='md:px-12 px-8 h-full text-white bg-gradient-to-r from-[#E54450] to-[#5C000A] hover:scale-105 transition-all cursor-pointer rounded-md rounded-l-none'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter