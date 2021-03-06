import React from "react";

function Nav(props) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" type="link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" type="link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" type="link" href="/post">
                Sample Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" type="link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
