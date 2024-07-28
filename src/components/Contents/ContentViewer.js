import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ContentViewer.css'; 

const ContentViewer = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        const fetchedArticle = {
          id: response.data.id,
          title: response.data.title,
          content: response.data.body
        };
        setArticle(fetchedArticle);
      })
      .catch(error => {
        console.error('Error fetching article:', error);
      });
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="content-viewer">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ContentViewer;
