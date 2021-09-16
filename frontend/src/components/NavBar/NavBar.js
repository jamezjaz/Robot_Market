import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavStyles from './NavStyles.module.css';
import logo from '../../assets/robot.jpg';
import cart from '../../assets/cart.png';

const NavBar = () => {
  const counter = useSelector(state => state.robot.addedItems);
  return (
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
          <Link to="/cart">
            <li>
              <div className={NavStyles.counter}>{counter.length}</div>
              <img src={cart} className="w-75 pt-2" alt={cart} />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
