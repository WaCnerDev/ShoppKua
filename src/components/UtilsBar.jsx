import React from "react";
import CloverShoppKua from "../assets/CloverShoppKua.png";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const UtilsBar = () => {
  const { shoppingList } = useContext(ShoppingCartContext);
  return (
    <div className="d-flex justify-content-between align-items-center py-2 px-4 border-bottom bg-light">
      <Link
        to="/"
        className="d-flex align-items-center gap-1 navbar-brand fs-4"
      >
        <img
          src={CloverShoppKua}
          alt="Logo"
          className="ShoppKua logo"
          style={{ width: "24px", height: "auto" }}
        />
        ShoppKua
      </Link>
      <div className="d-flex align-items-center  w-25 position-relative">
        <SearchIcon className="position-absolute ms-3" />
        <input
          className="form-control ps-5 rounded-pill"
          type="search"
          placeholder="Search Products..."
          aria-label="Search"
        />
      </div>
      <div className="d-flex align-items-center gap-3">
        <Link to="/wishlist" className="nav-link active">
          <button className="btn btn-outline-primary rounded-pill px-4">
            Wishlist
          </button>
        </Link>
        <Link to="/login" className="nav-link active">
          <button className="btn btn-outline-success rounded-pill px-4">
            Login
          </button>
        </Link>
        <Link to="/register" className="nav-link active">
          <button className="btn btn-success rounded-pill px-4">
            Register
          </button>
        </Link>
        <Link to="/shopCart" className="nav-link active">
          <Badge badgeContent={shoppingList.length} color="success">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </div>
  );
};
