
import useNowPlayingMovies from '../hooks/nowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {

  useNowPlayingMovies()
  return (
       
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse