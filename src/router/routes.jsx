import React from "react";
import {Route, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import Rank from "../pages/Rank";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/rank" component={Rank} />
        </BrowserRouter>
    );
}

export default Routes;