import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './ArticleDetail.css'

const ArticleDetail = (props) => {

    const clickedArticle = props.articles.find(article => article.title === props.clicked)

    if (clickedArticle) {
        return (
            <section className="article-detail-container">
                <img src={clickedArticle.multimedia[0].url} className="detail-image"/>
                <div className="info-container">
                    <p>{clickedArticle.title}</p>
                    <a href={clickedArticle.url} target="_blank" className="all-links">Read the article here</a>
                    <p>{clickedArticle.multimedia[0].caption}</p>
                </div>
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