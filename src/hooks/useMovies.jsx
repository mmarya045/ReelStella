import { useStoreMovies } from '../store/store'
import { useEffect } from 'react'


const GetGenreMoviesList = async (genre) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ''
        }
    };

    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    const jsonFormat = await res.json();
    return jsonFormat;
}

export const useMovies = () => {
    const { movies,  setMovies } = useStoreMovies()

    // Fetch movies list
    useEffect(() => {
        GetGenreMoviesList("horror").then((jsonFormat) => {
            const films = jsonFormat;
            console.log(films)
            setMovies(films.results)
        })
    }, [])

    return movies;
}