import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { Spin as Hamburger} from 'hamburger-react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          itsnirmal
        </Link>
         <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className='navbar-list'>
            <li className='navbar-item'>
              <Link to='/' className='navbar-link' onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/projects' className='navbar-link' onClick={toggleMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <Hamburger onToggle={toggleMenu}  rounded />
      </div>
    </nav>
  );
};

export default NavigationBar;
