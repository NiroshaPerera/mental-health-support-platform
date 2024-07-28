import React from 'react';
import { Link } from 'react-router-dom';
import './ForumOverview.css'; 

const ForumOverview = () => {
  const forums = [
    { id: 1, title: 'General Discussion', description: 'Talk about anything related to mental health.' },
    { id: 2, title: 'Anxiety Support', description: 'Share your experiences and get support for anxiety.' },
    { id: 3, title: 'Depression Support', description: 'Discuss and support each other with depression.' }
  ];

  return (
    <div className="forum-overview-container">
      <h1>Support Forums</h1>
      <ul>
        {forums.map(forum => (
          <li key={forum.id}>
            <h3><Link to={`/forum/${forum.id}`}>{forum.title}</Link></h3>
            <p>{forum.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumOverview;
