import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './ArticleDetail.css'

const ArticleDetail = (props) => {

    const clickedArticle = props.articles.find(article => article.title === props.clicked)

    if (clickedArticle) {
        return (
            <section>
                <p>{clickedArticle.title}</p>
                <a href={clickedArticle.url} target="_blank">Read the article here</a>
                <img src={clickedArticle.multimedia[0].url} />
                <p>{clickedArticle.multimedia[0].caption}</p>
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