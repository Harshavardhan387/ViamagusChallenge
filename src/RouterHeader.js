import React from "react";
import { Link } from "react-router-dom";

function RouterHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">Viamagus</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Login Page
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/video" className="nav-link" href="#">
                  Video Page
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/date" className="nav-link" href="#">
                  Date Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default RouterHeader;
