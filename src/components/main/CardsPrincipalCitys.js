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
        autoplay: {
            delay: 3000,
        },
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
            <Swiper {...params} onSwiper={(swiper) => console.log(swiper)}>
                {countries.map((country) => (
                    <SwiperSlide key={country}>
                        <CardsWeather key={country} location={country} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
