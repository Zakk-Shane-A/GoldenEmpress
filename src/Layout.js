import React, { useState } from 'react';
import Header from './Header';
import HeadContact from './HeadContact';

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Header isNavOpen={isNavOpen} toggleMenu={toggleMenu} />
      <HeadContact isNavOpen={isNavOpen} />
    </div>
  );
};

export default Layout;
