import { useStorePopularMovies} from '../store/store'
import { useEffect } from 'react'

const GetPopularMovieList = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ''
        }
    };
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const jsonFormat = await res.json();
    return jsonFormat;
}

export const usePopular = () => {
    const { popular,  setPopular } = useStorePopularMovies()

    useEffect(() => {
        GetPopularMovieList().then((jsonFormat) => {
            const films = jsonFormat;
            console.log(films)
            setPopular(films.results)
        })
    }, [])

    return popular;
}