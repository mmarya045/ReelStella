import { useMovies } from './hooks/useMovies'
import logo from './assets/reelstella_logo.png'
import Movies from './Movies'
import { usePopular } from './hooks/usePopular'
import { useNowPlaying } from './hooks/useNowPlaying'
import { useTopRated } from './hooks/useTopRated'
import { useUpcoming } from './hooks/useUpcomming'
import { useState } from 'react'

const App = () => {
  const movies = useMovies()
  const popular = usePopular()
  const now_playing = useNowPlaying()
  const top_rated = useTopRated()
  const upcoming = useUpcoming()
  const [InHover, setInHover] = useState(true);

  return (
    <div className=''>
      <div className='flex justify-center bg-black h-screen items-center mb-72'>
        <img className='w-[331px] h-[86px]' src={logo} />
      </div>
      {now_playing.length !== 0 && <Movies movies={now_playing} title="Now Playing" />}
      {popular.length !== 0 && <Movies movies={popular} title="Popular" />}
      {top_rated.length !== 0 && <Movies movies={top_rated} title="Top Rated" />}
      {upcoming.length !== 0 && <Movies movies={upcoming} title="Upcoming" />}
      {movies.length !== 0 && <Movies movies={movies} title="Movies" />}

      <footer className='flex grid-cols-2 bg-black mt-40'>
        <nav className='flex space-x-10 ml-10 my-8'>
          <div className=' ml-20 space-y-4 text-white'>
            <h3 className='font-bold text-2xl'>Les Bases</h3>
            <ul className='space-y-2'>
              <li className='hover:underline'>A Propos de ReelStella</li>
              <li className='hover:underline'>Nous Contacter</li>
              <li className='hover:underline'>Centre d'aide</li>
            </ul>
          </div>
          <div className='text-white space-y-4'>
            <h3 className='font-bold text-2xl'>Mentions Légales</h3>
            <ul className='space-y-2'>
              <li className='hover:underline'>Conditions d'utilisation</li>
              <li className='hover:underline'>Politique de confidentialité</li>
            </ul>
          </div>
          <div className='text-white font-bold text-sm'>ReelStella</div>
        </nav>
      </footer>
    </div>
  )
}

export default App
