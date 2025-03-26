import React, { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export const NavBar = () => {
  const { shoppingList } = useContext(ShoppingCartContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          ShoppKua
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active">
                Products
              </NavLink>
            </li>
          </ul>
          <Badge badgeContent={shoppingList.length} color="secondary">
            <NavLink to="/shopCart" className="nav-link active">
              <ShoppingCartIcon />
            </NavLink>
          </Badge>
        </div>
      </div>
    </nav>
  );
};
