import React from "react";
import './Article.css'
import { Link } from "react-router-dom";

const Article = ({data}) => {
    return (
        // <div className="article-card">
            <Link to={`/${data.title}`} className="article-card all-links">
                <h2>{data.title}</h2>
                {data.multimedia ? <img src={data.multimedia[0].url} className="article-image"/> : null}
                <h3>{data.byline}</h3>
            </Link>
        // </div>
    )
}

export default Article


// return (
//     <Link to={`/category/${category}`} data-cy={`${category}`} className='cat-card-link' onClick={() => handleClick()}>
//         <p className='category-text'>{`${category}`}</p>
//     </Link>
//   )