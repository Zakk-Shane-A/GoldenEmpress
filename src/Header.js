import './css/Header.css';
import React, { useState } from 'react';

import logo from './pictures/main_logo.png';
import hamburger_icon from './pictures/small_icon/menu.png';
import MobileNav from './MobileNav';


  const Header = ({ isNavOpen, toggleMenu }) => {
    return (
      <div className='header'>
        <div className='header_wrapper'>
          <div className='header_container'>
            <div className='main_logo'>
              <a href='#'> <img src={logo} alt="main logo" /> </a>
            </div>
            <div className='navbar'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li>
                  <a href="#" className="dropdown">Shop</a>
                  <ul>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="dropdown">Pages</a>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </li>
              
                <li><a href="#">Buy</a></li>
              </ul>
            </div>
            <div className='hamburger_icon' onClick={toggleMenu}>
              <img src={hamburger_icon} alt="hamburger icon" />
            </div>
          </div>
        </div>
        <MobileNav isOpen={isNavOpen} toggleMenu={toggleMenu} />
      </div>
    );
  };

export default Header;
