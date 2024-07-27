import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData, history) => {
    setUser(userData);
    history.push('/home');
  };

  const register = (userData, history) => {
    setUser(userData);
    history.push('/home');
  };

  const logout = (history) => {
    setUser(null);
    history.push('/');
  };

  const updateUser = (userData) => {
    // Update user logic here
    setUser(userData); // This line should be modified to reflect actual update logic
    console.log("User updated:", userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
