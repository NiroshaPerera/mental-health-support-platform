import React from 'react';
import './FeaturedContent.css'; // Import the CSS file

const FeaturedContent = () => (
  <div className="featured-content">
    <h2>Featured Content</h2>
    <div className="content-blocks">
      <div className="content-block">
        <h3>Understanding Anxiety</h3>
        <p>Learn about the symptoms, causes, and treatments for anxiety.</p>
      </div>
      <div className="content-block">
        <h3>Mindfulness Techniques</h3>
        <p>Discover effective mindfulness techniques to manage stress.</p>
      </div>
      <div className="content-block">
        <h3>Finding a Therapist</h3>
        <p>Tips on how to find the right mental health professional for you.</p>
      </div>
    </div>
  </div>
);

export default FeaturedContent;
