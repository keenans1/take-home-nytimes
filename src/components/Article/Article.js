import React from "react";

const Article = ({data}) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <a href={data.url} target="_blank">Read the article here</a>
            <h3>{data.byline}</h3>
        </div>
    )
}

export default Article