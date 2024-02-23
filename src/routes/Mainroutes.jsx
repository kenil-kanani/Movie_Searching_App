import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Error from '../pages/Error';

function Mainroutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:name" element={<MovieDetails />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Mainroutes;