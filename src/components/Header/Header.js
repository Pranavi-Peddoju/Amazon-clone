import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../Firebase";

function Header() {
  const [{ cart, user }] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        ></img>
      </Link>
      <div className="header_delivery">
        <LocationOnOutlinedIcon className="header_locationIcon"></LocationOnOutlinedIcon>
        <div className="header_location">
          <span className="header_delivery1">Delivery to</span>
          <span className="header_delivery2">India</span>
        </div>
      </div>
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search for a Product"
        />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_option1">
              Hello, {user ? user.email : "Guest"}{" "}
            </span>
            <span className="header_option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={(user && "/orders") || "/login"}>
          <div className="header_option">
            <span className="header_option1">Returns</span>
            <span className="header_option2">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>

        <Link to={(user && "/checkout") || "/login"}>
          <div className="header_cart">
            <ShoppingCartIcon className="header_cartIcon"></ShoppingCartIcon>
            <span>{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
