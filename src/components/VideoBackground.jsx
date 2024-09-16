import React, { useEffect } from 'react';
import { API_OPTS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

// Move the function outside the component
const getMoviesVideos = async (movieId, dispatch) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTS);
  const json = await response.json();

  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] : json.results[0];

  // Dispatch the trailer to Redux
  dispatch(addTrailerVideo(trailer));
};

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies.trailer); // Get trailer from Redux

  useEffect(() => {
    getMoviesVideos(movieId, dispatch); // Pass movieId and dispatch
  }, [movieId, dispatch]); // Add dispatch as a dependency

  return (
    <div className='w-full '>
      {trailer ? (
      <iframe
      className="w-full h-screen object-cover"
      src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playsinline=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    
    
     
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
