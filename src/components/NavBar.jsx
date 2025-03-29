import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-light shadow-sm">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100 gap-4">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Clothes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Accessories
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Footwear
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Electronics
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Oferts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            New Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
