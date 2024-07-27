import React from 'react';
import FeaturedContent from './FeaturedContent';
import './HomePage.css';

const HomePage = () => (
  <div className="home-page">
    <h1>Welcome to Mind Matters</h1>
    <p>Your one-stop solution for mental health awareness and support.</p>
    <img
      src="https://img.freepik.com/free-vector/mental-health-flat-concept-with-people-dealing-with-psychological-problems-vector-illustration_1284-80677.jpg?t=st=1722081423~exp=1722085023~hmac=2cc63d135e996fe75e88d4783aeb540fa07bb692813d18edcdc73612f810bdfc&w=996"
      alt="Mental health support"
      className="home-page-image"
    />
    <FeaturedContent />
  </div>
);

export default HomePage;
