import React from "react";
import Article from "../Article/Article";
import './ArticleList.css'

const ArticleList = ({articles}) => {

    const allArticles = articles.map(article => {
        return (
            <Article key={article.title} data={article}/>
        )
    })

    return (
        <section className="article-container">{allArticles}</section>
    )
}

export default ArticleList