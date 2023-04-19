import React from "react";
import Article from "../Article/Article";

const ArticleList = ({articles}) => {

    const allArticles = articles.map(article => {
        return (
            <Article key={article.title} data={article}/>
        )
    })

    return (
        <div>{allArticles}</div>
    )
}

export default ArticleList