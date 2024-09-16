
import useNowPlayingMovies from '../hooks/nowPlayingMovies'
import Header from './Header'
const Browse = () => {

  useNowPlayingMovies()
  return (

    <div>
      <Header/>
    </div>
  )
}

export default Browse