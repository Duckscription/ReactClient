import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <nav className="flex">
      <div class="logo_wrapper flex flex-center">
        <img src={logo} alt="mySvgImage" />
        <Link to="/" className="app_name">
          DuckScription
        </Link>
      </div>
      <div class="links">
        <Link to="/why">Why DuckScription</Link>
        <Link to="/features">Features</Link>
        <Link to="/signup" className="sign_up">
          Sign up
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
