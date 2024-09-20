import React from 'react'
import { bgImage } from '../utils/constants'
const GPTSearchBar = () => {
  return (
    <div className=' font-jakarta'>
        <div className='absolute -z-10 filter brightness-50'>
        <img
          src={bgImage}
          alt='bg-image'
        />
      </div>
        <form className='pt-[13%] flex mx-10 items-center'>
        
            <input 
              type='text' 
              className='placeholder:text-gray-700 opacity-80 bg-opacity-15 w-[70%] mr-2  ml-[10rem] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-500'
              placeholder='Confused about what to watch, Need some suggestions?'
            />
            <button 
              className='px-6 py-3  bg-black text-gray-100 rounded-md shadow-md focus:outline-none hover:border-1px solid red-500 focus:ring-2 focus:ring-red-500'>
              Search
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar
