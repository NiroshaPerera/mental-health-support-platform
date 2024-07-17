import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const AppContainer = ({ children }) => {
  const location = useLocation();
  const showNavbar = !['/', '/login', '/register'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppContainer;
