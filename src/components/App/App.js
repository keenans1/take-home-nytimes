import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import { Route } from 'react-router-dom';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const  App = () => {

  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=A2CM4WWPQB2nTtRBnsAojUmnyWQ3jHJY')
      .then(response => response.json())
      .then(data => setArticles(data.results))
  }, [])

  useEffect(() => {
  }, [filteredArticles])

  return (
    <main className="App">
      <Header filter={setFilteredArticles} articles={articles}/>
      {filteredArticles.length === 0 ? <Route exact path='/' render={() => <ArticleList articles={articles}/>}/> :
      <Route exact path='/' render={() => <ArticleList articles={filteredArticles}/>}/>}
      <Route path='/:article' render={({match}) => <ArticleDetail articles={articles} clicked={match.params.article}/>}/>
    </main>
  )
}

export default App