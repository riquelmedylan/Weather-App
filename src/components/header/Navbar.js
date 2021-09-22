import React from "react";
export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <i className="fas fa-cloud-sun-rain img__clime"></i>
                <a href="/" className="title__text">
                    WeatherApp
                </a>
            </div>
        </header>
    );
};
