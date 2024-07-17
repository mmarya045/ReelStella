import { useStoreTopRatedMovies } from '../store/store'
import { useEffect } from 'react'

const GetTopRatedMovieList = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ''
        }
    };
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const jsonFormat = await res.json();
    return jsonFormat;
}

export const useTopRated = () => {
    const { top,  setTopRated } = useStoreTopRatedMovies()

    useEffect(() => {
        GetTopRatedMovieList().then((jsonFormat) => {
            const films = jsonFormat;
            console.log(films)
            setTopRated(films.results)
        })
    }, [])

    return top;
}
