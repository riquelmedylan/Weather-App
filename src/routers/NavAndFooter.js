import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Navbar } from "../components/header/Navbar";
import { CardInformation } from "../components/main/CardInformation";
import { Home } from "../components/main/Home";

export const NavAndFooter = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/country/:countryId" component={CardInformation} />
                <Route path="/" exact component={Home} />
            </Switch>
        </>
    );
};
