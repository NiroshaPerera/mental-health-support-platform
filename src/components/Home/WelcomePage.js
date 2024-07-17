import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => (
  <div className="welcome-page">
    <h1>Welcome to the MindMatters<br>Mental Health Support Platform</br></h1>
    <p>Please register or log in to continue.</p>
    <div className="welcome-image">
      <img src="https://img.freepik.com/premium-photo/mental-health-concept-art-illustration-flat-style_941097-39309.jpg?w=740" alt="Welcome Image" />
    </div>
    <div className="welcome-buttons">
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  </div>
);

export default WelcomePage;
