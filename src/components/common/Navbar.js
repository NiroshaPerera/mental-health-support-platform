import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/content">Content</Link></li>
      <li><Link to="/assessment">Assessment</Link></li>
      <li><Link to="/forum">Forum</Link></li>
      <li><Link to="/directory">Directory</Link></li>
      <li><Link to="/journal">Journal</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
);

export default Navbar;
