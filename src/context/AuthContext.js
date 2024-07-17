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

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
