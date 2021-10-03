import React from "react";
import { CardsWeather } from "./CardsWeather";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

export const CardsPrincipalCitys = () => {
    const countries = [
        "Tokyo",
        "London",
        "Buenos Aires",
        "Washington",
        "Florida",
        "Kabul",
    ];

    const params = {
        loop: true,
        breakpoints: {
            1440: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            650: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    };

    return (
        <section className="container__cards-weather">
            <Swiper {...params}>
                {countries.map((country) => (
                    <SwiperSlide key={country}>
                        <CardsWeather
                            key={country}
                            classWeather={"card__weather-95w"}
                            location={country}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
