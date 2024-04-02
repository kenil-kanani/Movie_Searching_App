import { useContext, useRef, useState } from 'react';
import './Navbar.css'
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';

import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

function Navbar() {

    const resultListRef = useRef(null)
    const [searchTerm, setSearchTerm] = useState('')
    const { movieList } = useMovieList(searchTerm)

    const { theme, setTheme } = useContext(ThemeContext)

    const navigate = useNavigate()

    const handleAutoCompleteClick = (e, movieImdbId) => {
        navigate(`/movie/${movieImdbId}`)
    }

    return (
        <div className="navbar-wrapper">
            <div id='logo-name'><Link to={'/'}>Movie Base</Link></div>
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
                                <div onMouseDown={e => handleAutoCompleteClick(e, movie.imdbID)} key={movie.imdbID} className="result-item">
                                    {movie.Title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='theme-icon'>
                {
                    theme === 'dark' ?
                        <FiSun />
                        :
                        <FaRegMoon />
                }
            </div>
        </div>
    )
}

export default Navbar;