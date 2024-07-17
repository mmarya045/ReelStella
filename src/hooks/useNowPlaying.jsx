import { useStorePlayingMovies } from '../store/store'
import { useEffect } from 'react'

const GetPlayingMovieList = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ''
        }
    };
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const jsonFormat = await res.json();
    return jsonFormat;
}

export const useNowPlaying = () => {
    const { playing,  setPlaying } = useStorePlayingMovies()

    // Fetch movies list
    useEffect(() => {
        GetPlayingMovieList().then((jsonFormat) => {
            const films = jsonFormat;
            console.log(films)
            setPlaying(films.results)
        })
    }, [])

    return playing;
}