import React from 'react';
import { useParams } from 'react-router-dom';
import './ThreadView.css'; 

const posts = {
  1: [
    { id: 1, author: 'User1', content: 'I manage anxiety by practicing mindfulness.' },
    { id: 2, author: 'User2', content: 'Therapy has been very helpful for me.' }
  ],
  2: [
    { id: 3, author: 'User3', content: 'Looking for recommendations for a good therapist.' },
    { id: 4, author: 'User4', content: 'I found mine through a local support group.' }
  ]
};

const ThreadView = () => {
  const { threadId } = useParams();
  const threadPosts = posts[threadId];

  if (!threadPosts) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="thread-view-container">
      <h2>Thread</h2>
      {threadPosts.map(post => (
        <div key={post.id} className="post">
          <h4>{post.author}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreadView;
