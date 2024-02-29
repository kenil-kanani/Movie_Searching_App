import { useEffect, useState } from "react";
import axios from "axios";
import { searchMovie } from "../apis/omdb";

// Components import
import MovieCard from "../components/MovieCard/MovieCard";

// Styles import
import './Home.css';
import useMovieList from "../hooks/useMovieList";

function Home() {

    const { movieList } = useMovieList('harry', 'batman')

    return (
        <>
            <div className="movie-card-wrapper">
                {
                    movieList.length > 0 &&
                    movieList.map((movie) => {
                        return (
                            <MovieCard key={movie.imdbID} {...movie} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;