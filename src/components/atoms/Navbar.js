// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" style={{ paddingLeft: "40px" }} to="/">Login</Link>
      <div className="collapse navbar-collapse">
      </div>
    </nav>
  );
};

export default Navbar;
