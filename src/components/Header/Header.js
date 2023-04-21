import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = props => {

    const handleChange = e => {

        const lowerCaseSearch = e.target.value.toLowerCase()

        const filtered = props.articles
        .filter(article => {
            const lowerCaseTitle = article.title.toLowerCase()
            if (lowerCaseTitle.includes(lowerCaseSearch)) {
            return article
            }
        })

        props.filter(filtered)
    }

    return (
        <header>
            <Link to='/' className="all-links">
                <h2>NY Times: Cars Edition</h2>
            </Link>
            <form>
                <label htmlFor="search">Search: </label>
                <input type="search" id="search" name="search" autoComplete='off' onChange={e => handleChange(e)}/>
            </form>
        </header>
    )
}

export default Header
