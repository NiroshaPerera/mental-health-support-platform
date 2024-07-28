import React from 'react';
import FeaturedContent from './FeaturedContent';
import './HomePage.css';

const HomePage = () => (
  <div className="home-page">
    <h1>Welcome to Mind Matters</h1>
    <p>Your one-stop solution for mental health awareness and support.</p>
   
    <FeaturedContent />
  </div>
);

export default HomePage;
