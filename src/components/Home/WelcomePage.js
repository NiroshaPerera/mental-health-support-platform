import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div>
      <h2>Welcome to Our Mental Health Support Platform</h2>
      <p>Explore resources, join discussions, and track your journey towards better mental health.</p>
      <div>
        <Link to="/login">Login</Link>
        <span> or </span>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
