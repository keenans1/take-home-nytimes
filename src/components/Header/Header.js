import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h2>NY Times: Cars Edition</h2>
            </Link>
            <div>
                <label htmlFor="search">Search: </label>
                <input type="search" id="search" name="search"/>
            </div>
        </header>
    )
}

export default Header