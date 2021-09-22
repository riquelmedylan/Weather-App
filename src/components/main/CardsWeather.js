import React from "react";
import { Link } from "react-router-dom";
import { useApiCard } from "../../hooks/useApiCard";

export const CardsWeather = ({ location }) => {
    const { name, country, temperature, icon, text } = useApiCard(location);

    return (
        <>
            <Link to={`/country/${name}`}>
                <div className="card__weather">
                    <h2 className="weather__text-info-title">{country}</h2>
                    <img alt={text} src={icon} />
                    <h2 className="weather__text-info-middle">{name}</h2>
                    <p className="weather__text-info">Clime: {text}</p>
                    <p className="weather__text-info">Temp: {temperature}°</p>
                </div>
            </Link>
        </>
    );
};
