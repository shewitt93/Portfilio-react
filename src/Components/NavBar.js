import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Skills">Skills</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </nav>
  );
};

export default NavBar;
