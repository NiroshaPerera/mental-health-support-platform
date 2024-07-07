import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContentLibrary = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const fetchedArticles = response.data.slice(0, 10).map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.body.substring(0, 100)
        }));
        setArticles(fetchedArticles);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div>
      <h1>Content Library</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h3><Link to={`/content/${article.id}`}>{article.title}</Link></h3>
            <p>{article.excerpt}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentLibrary;
