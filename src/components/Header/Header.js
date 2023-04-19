import React from "react";
import './Header.css'

const Header = () => {
    return (
        <header>
            <h2>NY Times: Cars Edition</h2>
            <div>
                <label for="search">Search: </label>
                <input type="search" id="search" name="search"/>
            </div>
        </header>
    )
}

export default Header