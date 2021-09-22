import React from "react";
import { useApiCard } from "../../hooks/useApiCard";

export const CardInformationPersonity = ({ location }) => {
    const {
        name,
        country,
        temperature,
        icon,
        text,
        humidity,
        temperatureF,
        cloud,
        windDirection,
        gustKph,
    } = useApiCard(location);

    return (
        <div className="card__weather">
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
