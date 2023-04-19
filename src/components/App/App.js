import React, { useEffect } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';

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
      <ArticleList articles={articles}/>
    </main>
  );
}

export default App