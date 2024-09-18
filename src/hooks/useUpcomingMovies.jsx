import { useEffect } from "react";
import { API_OPTS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice"; // Adjust the path

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    getUpcomingMovies();
  }, [dispatch]); // No warning now
};

export default useUpcomingMovies