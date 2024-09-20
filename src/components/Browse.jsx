
import { useSelector } from "react-redux"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useNowPlayingMovies from "./../hooks/useNowPlayingMovies"
import GPTSearch from "./GPTSearch"
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch)
  return (
       
    <div>
      <Header/>
      {
        showGPTSearch ?
        <GPTSearch/>
        :<>
        <MainContainer/>
      <SecondaryContainer/>
      </>
      }
      
      
    </div>
  )
}

export default Browse