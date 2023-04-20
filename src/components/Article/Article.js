import React from "react";
import './Article.css'
import { Link } from "react-router-dom";

const Article = ({data}) => {
    // console.log('data', data.multimedia[0])
    return (
        <div className="article-card">
            <Link to={`/${data.title}`}>
                <h2>{data.title}</h2>
                {data.multimedia ? <img src={data.multimedia[0].url} /> : null}
                
                <h3>{data.byline}</h3>
            </Link>
        </div>
    )
}

export default Article