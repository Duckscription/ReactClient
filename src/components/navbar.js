import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="logo_wrapper flex flex-center">
        <img src={require('../img/logo.svg').default} alt="mySvgImage" />
        <Link to="/" className="app_name">
          DuckScription
        </Link>
      </div>
      <div className="links">
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
