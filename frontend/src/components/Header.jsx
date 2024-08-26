import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles/Header.css";
import flame from "../assets/flame.png";

const Header = () => {
  return (
    <header className="container-header w-screen">
      <NavLink to="/">
        <img className="flame" src={flame} alt="" />
      </NavLink>
      <Navigation />
    </header>
  );
};

export default Header;
