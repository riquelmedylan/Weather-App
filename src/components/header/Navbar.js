import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <i className="fas fa-cloud-sun-rain img__clime"></i>
        </Link>
        <Link to="/" className="title__text">
          WeatherApp
        </Link>
      </div>
    </header>
  );
};
