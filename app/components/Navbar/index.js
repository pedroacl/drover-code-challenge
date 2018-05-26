import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-light fixed-top text-black bg-white border-bottom box-shadow">
    <Link className="navbar-brand" to="">Drover</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="">Browse Cars</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="">How it works</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="">Become a fleet partner</Link>
        </li>
      </ul>
      <Link className="nav-link" to="">Login</Link>
      <Link className="btn btn-success my-2 my-sm-0" to="">Sign up today</Link>
    </div>
  </nav>
);

export default Navbar;
