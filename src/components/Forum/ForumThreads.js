import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Placeholder data for threads
const threads = {
  1: [
    { id: 1, title: 'How do you manage anxiety?' },
    { id: 2, title: 'Looking for a good therapist' }
  ],
  2: [
    { id: 3, title: 'Dealing with panic attacks' },
    { id: 4, title: 'Breathing exercises that work' }
  ],
  3: [
    { id: 5, title: 'Feeling hopeless, need advice' },
    { id: 6, title: 'Coping strategies that help' }
  ]
};

const ForumThreads = () => {
  const { id } = useParams();
  const forumThreads = threads[id];

  if (!forumThreads) {
    return <p>No threads found.</p>;
  }

  return (
    <div>
      <h2>Threads</h2>
      <ul>
        {forumThreads.map(thread => (
          <li key={thread.id}>
            <h3><Link to={`/forum/${id}/thread/${thread.id}`}>{thread.title}</Link></h3>
          </li>
        ))}
      </ul>
      <Link to={`/forum/${id}/new-thread`}>Create New Thread</Link>
    </div>
  );
};

export default ForumThreads;
