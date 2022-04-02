import { useEffect, useState } from "react";

import { Movie, MovieDbResponse } from "../interfaces/movieInterface";
import movieDB from "../api/movieDB";

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDbResponse>("/now_playing");
        const popularPromise = movieDB.get<MovieDbResponse>("/popular");
        const topRatedPromise = movieDB.get<MovieDbResponse>("/top_rated");
        const upcomingPromise = movieDB.get<MovieDbResponse>("/upcoming");

        const resps = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    }
}
