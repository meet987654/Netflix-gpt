import { useEffect } from "react";
import { API_OPTS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

//Fetch DAta form API_OPTs and update the store 
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
const getNowPLayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTS)
    const json=await data.json()
     dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(()=>{
    getNowPLayingMovies();
  },[])
}

export default useNowPlayingMovies;