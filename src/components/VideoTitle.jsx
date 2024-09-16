import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (<div  className='pt-[23%] w-screen pl-10 aspect-video  absolute bg-gradient-to-r from-black font-jakarta' >
    <h1 className='pt-20 px-10 text-white  font-bold text-5xl '>{title}</h1>
    <p className='px-10 py-10 mr-60 pr-[30%] font-semibold text-gray-400 text-[1.2rem] '>{overview}</p>
    <div className='flex mx-5'>
      <button className='mx-5 bg-opacity-80 text-xl font-semibold bg-white hover:bg-opacity-70 px-7 rounded-3xl py-3'>▶  Play</button>
      <button className='text-xl font-semibold px-5 text-white rounded-3xl py-2'>More Info</button>
    </div>
 
    </div>
  )
}

export default VideoTitle