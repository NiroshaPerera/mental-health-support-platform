import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { register } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call register with the credentials and history
    register({ username: credentials.username }, history);
  };

  return (
    <div className="registration-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
