import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => (
  <div className="welcome-page">
    <img src="https://img.freepik.com/free-vector/mental-health-flat-concept-with-people-dealing-with-psychological-problems-vector-illustration_1284-80677.jpg?t=st=1722081423~exp=1722085023~hmac=2cc63d135e996fe75e88d4783aeb540fa07bb692813d18edcdc73612f810bdfc&w=996" alt="Mental health support" className="welcome-image" />
    <h1>Welcome to the Mental Health Support Platform</h1>
    <p>Please register or log in to continue.</p>
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
