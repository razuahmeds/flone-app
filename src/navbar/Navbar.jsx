import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <Link className="link-btn" to={"/"}>
        <h1>Flone.</h1>
      </Link>
      <div className="text-container">
        <Link className="link-btn" to={"/"}>
          Home
        </Link>
        <Link className="link-btn" to={"/card-info"}>
          Shop
        </Link>
        <Link className="link-btn" to={"/card-info"}>
          Collection
        </Link>
        <Link className="link-btn" to={"/card-info"}>
          Pages
        </Link>
        <Link className="link-btn" to={"/card-info"}>
          Blog
        </Link>
        <Link className="link-btn" to={"/card-info"}>
          Contact Us
        </Link>
      </div>
      <Link to={"/login"}>
        <button className="navbar-btn">Login</button>
      </Link>
    </div>
  );
}

export default Navbar;
