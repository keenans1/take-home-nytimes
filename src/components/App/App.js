import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';

const  App = () => {

  const [articles, setArticles] = useState([])

  return (
    <main className="App">
      <Header/>
      <ArticleList articles={articles}/>
    </main>
  );
}

export default App