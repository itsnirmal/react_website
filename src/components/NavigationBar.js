import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { Spin as Hamburger} from 'hamburger-react';

const NavigationBar = () => {

  
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const toggleMenu = () => {
          setMobileMenuVisible(!mobileMenuVisible);
          if (!mobileMenuVisible) {
            setHamburgerActive(true);
          } else {
            setHamburgerActive(false);
          }
      }
    
    
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          itsnirmal
        </Link>
         <div className="navbar-menu" >
          
        </div>
        <div className={mobileMenuVisible ? "mobile-menu active" : "mobile-menu"} onClick= {toggleMenu}>
        <ul className='navbar-list'>
            <li className='navbar-item'>
              <Link to='/' className='navbar-link'>
                Home
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/projects' className='navbar-link'>
                Projects
              </Link>
            </li>
          </ul>        
      </div>
        <div className='hamburger-icon'>
            <Hamburger onToggle={toggleMenu} toggled={hamburgerActive}/>        
        </div> 
      </div>
    </nav>
  );
};

export default NavigationBar;
