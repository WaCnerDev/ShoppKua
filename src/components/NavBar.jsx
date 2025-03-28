import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-light shadow-sm">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100 gap-4">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Clothes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Accessories
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Electronics
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Footwear
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Deport
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Oferts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
