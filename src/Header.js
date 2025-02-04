import './css/Header.css';
import logo from './pictures/main_logo.png';


function Header() {
  return (
    <div className='header'>
      <div className='header_wrapper'>
        <div className='header_container'>
          <div className='main_logo'>

           <a href='#'> <img src={logo} alt="main logo" /> </a>
          </div>
          <div className='navbar'>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
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
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector(".header");
  
  window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
          // Scroll Down - Hide with animation
          header.style.transition = "0.5s ease-in";
          header.style.marginTop = "40px";
      } else {
        header.style.transition = "0.5s ease-out";
          header.style.marginTop = "70px";
      }
      
      lastScrollTop = scrollTop;
  });
});

export default Header;
