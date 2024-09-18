import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[15%] w-screen pl-10 pb-64 absolute bg-gradient-to-r from-black font-jakarta'>
      <div className='flex items-center'>
        <h1 className='pt-20 px-10 text-white font-bold text-5xl'>{title}</h1>
        <div className='flex mt-20 ml-5'>
          <button className='mx-2 bg-opacity-80 text-xl font-semibold bg-white hover:bg-opacity-70 px-5 py-2 rounded-2xl'>
            ▶ Play
          </button>
          <button className='mx-2 text-xl font-semibold px-5 py-2 text-white rounded-2xl bg-white bg-opacity-20'>
            More Info
          </button>
        </div>
      </div>
      <p className='px-10 py-10 mr-60 pr-[30%] font-semibold text-gray-400 text-[1.2rem]'>{overview}</p>
    </div>
  );
};

export default VideoTitle;
