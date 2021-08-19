import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from '../NavBar/NavStyles.module.css';
import logo from '../../assets/robot.jpg';

const NavBar = () => (
  <>
      <nav className={NavStyles.nav}>
        <h2 className="logo">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
          Robot Market
        </h2>
      <ul className={NavStyles.navLinks}>
        <Link className={NavStyles.lists} to="/">
          <li>Home</li>
        </Link>
        <Link className={NavStyles.lists} to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </nav>
  </>
);

export default NavBar;