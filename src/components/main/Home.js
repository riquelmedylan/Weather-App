import React, { useEffect, useState } from "react";
import { CardsPrincipalCitys } from "./CardsPrincipalCitys";
import { CardsWeather } from "./CardsWeather";
import { FormCards } from "./FormCards";

export const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {}, [cards]);

    return (
        <main className="main">
            <h2 className="weather__text-info-title">Countries</h2>
            <CardsPrincipalCitys />
            <h2 className="main__text-center">Find your Country</h2>
            <FormCards setCards={setCards} />
            <section className="container__cards-weather">
                {cards.length > 0 &&
                    cards.map((card) => (
                        <CardsWeather
                            key={card}
                            classWeather={"card__solitary"}
                            location={card}
                        />
                    ))}
            </section>
        </main>
    );
};
