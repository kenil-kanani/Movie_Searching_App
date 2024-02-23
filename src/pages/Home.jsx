import { useEffect, useState } from "react";
import axios from "axios";
import { searchMovie } from "../apis/omdb";

// Components import
import MovieCard from "../components/MovieCard/MovieCard";

// Styles import
import './Home.css';

function Home() {

    const [movieList, setMovieList] = useState([])


    async function downloadDefaultMovies(...args) {
        const urls = args.map((movieName) => searchMovie(movieName))
        // const response = await axios.get(searchMovie(movieName))
        const response = await axios.all(urls.map(url => axios.get(url)))
        const movies = response.map(res => res.data.Search)
        setMovieList([].concat(...movies))
        // console.log(response.data)
        // setMovieList(response.data)
    }

    useEffect(() => {
        downloadDefaultMovies('harry', 'batman')
    }, [])

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