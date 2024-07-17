import { create } from 'zustand'

export const useStoreMovies = create((set) => {
    return {
        movies: [],
        setMovies: (newMovies) => {
            set(() => ({ movies: newMovies }))
        }
    }
})

export const useStorePlayingMovies = create((set) => {
    return {
        playing: [],
        setPlaying: (MostPlayedMovies) => {
            set(() => ({ playing: MostPlayedMovies }))
        }
    }
})

export const useStoreTopRatedMovies = create((set) => {
    return {
        top: [],
        setTopRated: (TopMovies) => {
            set(() => ({ top: TopMovies }))
        }
    }
})

export const useStoreUpComingMovies = create((set) => {
    return {
        upcoming: [],
        setUpComing: (UpcomingMovies) => {
            set(() => ({ upcoming: UpcomingMovies }))
        }
    }
})

export const useStorePopularMovies = create((set) => {
    return {
        popular: [],
        setPopular: (newPopularMovies) => {
            set(() => ({ popular: newPopularMovies }))
        }
    }
})