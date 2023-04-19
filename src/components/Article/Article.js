import React from "react";
import './Article.css'

const Article = ({data}) => {
    return (
        <div className="article-card">
            <h2>{data.title}</h2>
            {/* <a href={data.url} target="_blank">Read the article here</a> */}
            <h3>{data.byline}</h3>
        </div>
    )
}

export default Article