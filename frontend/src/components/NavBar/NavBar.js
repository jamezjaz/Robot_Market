import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/robot.jpg';

const NavBar = () => (
  <>
      <nav>
        <h2
          className="logo"
          style={{ color: 'white' }}
        >
        <Link to="/">
            <img src={logo} alt={logo} />
        </Link>
        Robot Market
        </h2>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </nav>
  </>
);

export default NavBar;