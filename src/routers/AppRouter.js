import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { NavAndFooter } from "./NavAndFooter";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <NavAndFooter />
                </Switch>
            </div>
        </Router>
    );
}
