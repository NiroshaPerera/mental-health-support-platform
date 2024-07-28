import React, { useState } from 'react'; 
import './PostEditor.css'; // Import the CSS file

const PostEditor = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log('New post content:', content);
    setContent('');
  };

  return (
    <div className="post-editor-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostEditor;
