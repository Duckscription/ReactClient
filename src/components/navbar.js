import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">Subscription</Link>
      </li>
      <li>
        <Link to="/Home">home</Link>
      </li>
    </div>
  );
};
export default Navbar;
