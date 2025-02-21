import React from "react";
import "./NavbarComp.css";
import { Link } from "react-router-dom";

const NavbarComp = ({ page }) => {
  return (
    <div className="container containerNavbar fixed-top" style={{ backgroundColor: "#000000" }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000000" }}>
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col">
              <Link to={`/`} className="navbar-brand text-white fw-bold">
                RUDI HADI
              </Link>
            </div>
            <div className="col-auto ms-auto">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={`/`} className="nav-link fw-bold mx-2" style={{ color: page === "home" ? "#836fff" : "#ffffff" }}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`/about`} className="nav-link fw-bold mx-2" style={{ color: page === "about" ? "#836fff" : "#ffffff" }}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`/projects`} className="nav-link fw-bold mx-2" style={{ color: page === "projects" ? "#836fff" : "#ffffff" }}>
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`/contact`} className="nav-link fw-bold mx-2" style={{ color: page === "contact" ? "#836fff" : "#ffffff" }}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
