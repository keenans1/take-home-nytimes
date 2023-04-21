import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './ArticleDetail.css'

const ArticleDetail = (props) => {

    const clickedArticle = props.articles.find(article => article.title === props.clicked)

    if (clickedArticle) {
        return (
            <section className="article-detail-container">
                <div className="info-container">
                    <h2>{clickedArticle.title}</h2>
                    <a href={clickedArticle.url} target="_blank" className="all-links">Read the article here</a>
                    <h3>{clickedArticle.multimedia[0].caption}</h3>
                </div>
                <img src={clickedArticle.multimedia[0].url} className="detail-image"/>
            </section>
        )
    } else {
        return (
            <div>
                <p>This article is unavailable.</p>
            </div>
        )
    }

}

export default ArticleDetail