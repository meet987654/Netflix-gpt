import { useEffect } from "react";
import { API_OPTS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice"; // Adjust the path

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        dispatch(addTopRatedMovies(json.results));
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    getTopRatedMovies();
  }, [dispatch]); // No warning now
};

export default useTopRatedMovies;
