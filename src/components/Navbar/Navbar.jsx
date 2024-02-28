import { useRef } from 'react';
import './Navbar.css'

function Navbar() {

    const resultListRef = useRef(null)
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
                />
                <div id="result-list" ref={resultListRef}>
                    <div>result 1</div>
                    <div>result 2</div>
                    <div>result 3</div>
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}

export default Navbar;