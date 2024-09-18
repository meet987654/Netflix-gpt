import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className=' text-white '>
      <h1 className="text-3xl font-bold pt-10 px-10">{title}</h1>
      <div className="flex justify-start overflow-x-scroll scrollbar-hidden gap-8 m-7">
        {movies.map((movie, index) => (
          <div key={index} className="min-w-[200px]"> {/* Adjust min-width as needed */}
            <MovieCard posterPath={movie?.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
