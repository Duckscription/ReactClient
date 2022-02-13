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
      <div className="links">
        <Link to="/why">Why DuckScription</Link>
        <Link to="/subscriptions">Features</Link>
        <Link to="/signIn" className="sign_up">
          Sign up
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
