import React from "react";
import Article from "../Article/Article";

const ArticleList = ({articles}) => {

    const allArticles = articles.map(article => {
        return (
            <Article data={article}/>
        )
    })

    return (
        <div>{allArticles}</div>
    )
}

export default ArticleList