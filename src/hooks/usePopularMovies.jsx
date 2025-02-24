import { useEffect } from "react";
import { API_OPTS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice"; // Adjust the path

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        dispatch(addPopularMovies(json.results));
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    getPopularMovies();
  }, [dispatch]); // No warning now
};

export default usePopularMovies;
