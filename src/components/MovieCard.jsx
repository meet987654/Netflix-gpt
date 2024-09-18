import React from 'react';
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="bg-black  ">
      <img
        src={POSTER_URL + posterPath}
        alt="moviesposter"
        className="aspect-video h-64 object-cover "
      />
    </div>
  );
};

export default MovieCard;
