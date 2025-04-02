import React from "react";
import CloverShoppKua from "../assets/CloverShoppKua.png";
import SearchIcon from "@mui/icons-material/Search";
import { ShopCartContext } from "../context/ShopCartContext";
import { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const UtilsBar = () => {
  const { shoppingList } = useContext(ShopCartContext);
  return (
    <div className="d-flex justify-content-around align-items-center border-bottom py-2  bg-light">
      <Link
        to="/"
        className="d-flex align-items-center gap-1 navbar-brand fs-3 text-success"
        style={{ fontFamily: "Courgette" }}
      >
        <img
          src={CloverShoppKua}
          alt="Logo"
          className="ShoppKua logo"
          style={{ width: "28px", height: "auto" }}
        />
        <span className="mt-1">ShoppKua</span>
      </Link>
      <div className="d-flex align-items-center w-25 position-relative ms-md-5">
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
          <button className="btn btn-outline-success d-flex align-items-center rounded-pill px-4">
            <FavoriteIcon className="me-1" />
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
