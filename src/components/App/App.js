import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import { Route } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const  App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=A2CM4WWPQB2nTtRBnsAojUmnyWQ3jHJY')
      .then(response => response.json())
      .then(data => setArticles(data.results))
  }, [])

  return (
    <main className="App">
      <Header/>
      <Route exact path='/' render={() => <ArticleList articles={articles}/>}/>
      <Route path='/:article' render={({match}) => <ArticleDetail articles={articles} clicked={match.params.article}/>}/>
    </main>
  )
}

export default App