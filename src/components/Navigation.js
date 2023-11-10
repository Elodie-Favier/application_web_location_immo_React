import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__ul">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underline" : "none" };
          }}
        >
          <li className="navigation__li">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underline" : "none" };
          }}
        >
          <li className="navigation__li">A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
