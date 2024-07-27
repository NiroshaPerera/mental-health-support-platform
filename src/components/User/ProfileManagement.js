
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './ProfileManagement.css';

const ProfileManagement = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [email, setEmail] = useState(user ? user.email : '');
  const [name, setName] = useState(user ? user.name : '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updateUser({ email, name, password });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  
  return (
    <div className="profile-management">
      <h2>Profile Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileManagement;
