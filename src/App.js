
import { useState } from 'react';
import './css/App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='hamburger_body'>
      <button className='hamburger_menu' onClick={toggleMenu}>
        &#9776;
      </button>
      
      <div className={`mobile_nav ${isOpen ? 'open' : ''}`}>
        <button className='close_menu' onClick={toggleMenu}>&times;</button>
        <ul>
          <li><a href='#'>Home</a></li>
          <li>
            <a href='#' className='dropdown'>Shop</a>
            <ul>
              <li><a href='#'>Electronics</a></li>
              <li><a href='#'>Clothing</a></li>
              <li><a href='#'>Accessories</a></li>
            </ul>
          </li>
          <li>
            <a href='#' className='dropdown'>Pages</a>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>FAQ</a></li>
            </ul>
          </li>
          <li><a href='#'>Buy</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;