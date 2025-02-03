import { NavLink, Link, useNavigate } from "react-router-dom";
import React from "react";
import menu from "../assets/nav/menu.svg";
import close from "../assets/nav/close.svg";
import "../css/Nav.css";

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Logo</NavLink>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <img className="icons" src={menu} />
      </label>
      <label htmlFor="sidebar-active" id="overlay"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <img className="icons" src={close} />
        </label>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="packages">Packages</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};
