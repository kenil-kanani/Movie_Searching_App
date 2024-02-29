import { useRef, useState } from 'react';
import './Navbar.css'
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';

function Navbar() {

    const resultListRef = useRef(null)
    const [searchTerm, setSearchTerm] = useState('')
    const { movieList } = useMovieList(searchTerm)

    return (
        <div className="navbar-wrapper">
            <div id='logo-name'>Movie Base</div>
            <div className="search-bar">
                <input
                    id='movie-search-input'
                    type="text"
                    placeholder='What movie you are thinking about...'
                    onFocus={() => {
                        resultListRef.current.style.display = 'block'
                    }}
                    onBlur={() => {
                        resultListRef.current.style.display = 'none'
                    }}
                    onChange={useDebounce((e) => {
                        setSearchTerm(e.target.value)
                    })}
                />
                <div id="result-list" ref={resultListRef}>
                    {
                        movieList.length === 0 &&
                        <div className="result-item">
                            No movie found
                        </div>
                    }
                    {
                        movieList.length > 0 &&
                        movieList.map((movie) => {
                            return (
                                <div key={movie.imdbID} className="result-item">
                                    {movie.Title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}

export default Navbar;