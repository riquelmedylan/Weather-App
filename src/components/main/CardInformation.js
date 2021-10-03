import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { CardInformationPersonity } from "./CardInformationPersonity";

export const CardInformation = () => {
    let { pathname } = useLocation();
    const name = pathname.slice(9);

    return (
        <main className="main">
            <section className="container__cards-weather">
                <CardInformationPersonity location={name} />
            </section>
        </main>
    );
};
