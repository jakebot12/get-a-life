import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
    
      <li className="nav-item">
        <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard"
          className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/browse"
          className={window.location.pathname === "/browse" ? "nav-link active" : "nav-link"}
        >
          Browse
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >
         Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
        >
         Signup
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
