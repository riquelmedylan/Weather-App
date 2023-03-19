import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useApiCard } from "../../hooks/useApiCard";

export const CardsWeather = ({ classWeather, location }) => {
  const data = useApiCard(location);

  return (
    data && (
      <>
        <Link to={`/country/${data.name}`}>
          <div className={`card__weather ${classWeather}`}>
            <h2 className="weather__text-info-title">{data.country}</h2>
            <img alt={data.text} src={data.icon} />
            <h2 className="weather__text-info-middle">{data.name}</h2>
            <p className="weather__text-info">Clime: {data.text}</p>
            <p className="weather__text-info">Temp: {data.temperature}°</p>
          </div>
        </Link>
      </>
    )
  );
};

CardsWeather.propTypes = {
  classWeather: PropTypes.string,
  location: PropTypes.string.isRequired,
};
