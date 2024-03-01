import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ Title, Year, Type, Poster, imdbID }) {

    const navigator = useNavigate()

    const handleMovieClick = () => {
        navigator(`/movie/${imdbID}`)
    }

    return (
        <div onClick={handleMovieClick} className='movie-wrapper'>
            <div className="movie-image">
                <img src={Poster} alt="" />
            </div>
            <div className='movie-title'>
                <span>{Title}</span>
            </div>
            <div className='movie-year'>
                <span>Released In: {Year}</span>
            </div>
            <div className='movie-type'>
                <span>Type: {Type}</span>
            </div>
        </div>
    )
}

export default MovieCard;