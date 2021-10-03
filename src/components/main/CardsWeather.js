import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useApiCard } from "../../hooks/useApiCard";

export const CardsWeather = ({ classWeather, location }) => {
    const {
        name = "I can not find it",
        country = "I can not find it",
        temperature = "-0",
        icon = "Icon",
        text = "I can not find it",
    } = useApiCard(location);

    return (
        <>
            <Link to={`/country/${name}`}>
                <div className={`card__weather ${classWeather}`}>
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

CardsWeather.propTypes = {
    classWeather: PropTypes.string,
    location: PropTypes.string.isRequired,
};
