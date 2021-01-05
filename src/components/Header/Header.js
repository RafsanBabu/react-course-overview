import React from 'react';
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
              <a className="navbar-brand" href="#">
              <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" className="d-inline-block"></img>
              Bootstrap
              </a>
              <form className="d-flex"> 
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              </div>
            </nav>
        </div>
    );
};

export default Header;