import React from "react";
import './Article.css'
import { Link } from "react-router-dom";

const Article = ({data}) => {
    return (
        <div className="article-card">
            <Link to={`/${data.title}`}>
                <h2>{data.title}</h2>
                <h3>{data.byline}</h3>
            </Link>
        </div>
    )
}

export default Article