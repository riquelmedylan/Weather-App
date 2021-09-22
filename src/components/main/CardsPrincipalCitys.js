import React from 'react';
import { CardsWeather } from './CardsWeather';

export const CardsPrincipalCitys = () => {

    const countries = ['Tokyo','London','Buenos Aires'];


    return (
        <section className="container__cards-weather">
            {
                countries.map( (country) => (
                    <CardsWeather key={country} location={country} />
                    )
                )
            }
        </section>
    )
}
