import React from "react";

import {Link} from "react-router-dom"

// Navbar Component from bootstrap 
function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link               // here we use Link with to attribute to link page with react router, Instead of a with href , a with href load our page with new files
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://www.google.com/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="https://www.google.com/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.google.com/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.google.com/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="https://www.google.com/" className="nav-link disabled">
                  Disabled
                </a>
              </li>
            </ul>

            
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}


            {/* here we use javascript in class , so we use curly brackets and backticks to use variable in string  */}
            <div class={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>  
              <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;    
