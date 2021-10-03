import React from "react";
import PropTypes from "prop-types";
import { useApiCard } from "../../hooks/useApiCard";

export const CardInformationPersonity = ({ location }) => {
    const {
        name = "I can not find it",
        country = "I can not find it",
        temperature = "-0",
        icon = "Icon",
        text = "I can not find it",
        humidity = "-100",
        temperatureF = "-0",
        cloud = "-100",
        windDirection = "-0",
        gustKph = "-0",
    } = useApiCard(location);

    return (
        <div className="card__weather card__solitary">
            <h2 className="weather__text-info-title">{country}</h2>
            <img src={icon} alt={text} />
            <h2 className="weather__text-info-middle">{name}</h2>
            <p className="weather__text-info">Temp: {temperature}°C</p>
            <p className="weather__text-info">Temp: {temperatureF}°F</p>
            <p className="weather__text-info">Humidity: {humidity}</p>
            <p className="weather__text-info">Cloud: {cloud}</p>
            <p className="weather__text-info">
                Wind Direction: {windDirection}
            </p>
            <p className="weather__text-info">Gust Kph: {gustKph}</p>
        </div>
    );
};

CardInformationPersonity.propTypes = {
    location: PropTypes.string.isRequired,
};
