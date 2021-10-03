import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Navbar } from "../components/header/Navbar";
import { CardInformation } from "../components/main/CardInformation";
import { Home } from "../components/main/Home";

export const NavAndFooter = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path="/country/:countryId"
                    component={CardInformation}
                />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </>
    );
};
