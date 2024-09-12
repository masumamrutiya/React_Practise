import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/"
                >
                  {" "}
                  Home{" "}
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/contactUS"
                >
                  ContactUS
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/github"
                >
                  Github
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/profile"
                >
                  Profile 
                </NavLink>
              </li>
            </ul>

            <button className="btn btn-outline-success" type="submit">
              login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
