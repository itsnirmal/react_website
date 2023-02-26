import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

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
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`navbar-toggle-icon ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
