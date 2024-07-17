import { useStoreUpComingMovies } from '../store/store'
import { useEffect } from 'react'

const GetUpComingMovieList = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ''
        }
    };
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const jsonFormat = await res.json();
    return jsonFormat;
}

export const useUpcoming = () => {
    const { upcoming,  setUpComing } = useStoreUpComingMovies()

    // Fetch movies list
    useEffect(() => {
        GetUpComingMovieList().then((jsonFormat) => {
            const films = jsonFormat;
            console.log(films)
            setUpComing(films.results)
        })
    }, [])

    return upcoming;
}